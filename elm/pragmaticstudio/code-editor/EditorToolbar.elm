-- module declaration must start with 'port' to indicate that ports
-- are allowed in this program.

port module EditorToolbar exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)


-- Our model stores the current theme and keeps track of
-- the number of copies and pastes.

type alias Model =
    { theme : String
    , copyCount : Int 
    , pasteCount : Int
    }


-- The toolbar is initialized with the first theme in the 
-- list and zeroed counts.

initialModel : Model
initialModel =
    { theme = Maybe.withDefault "" (List.head themes)
    , copyCount = 0
    , pasteCount = 0 
    }


-- Users can select one of four themes.

themes =
    [ "Monokai", "Cobalt", "Dawn", "GitHub" ]


-- We have messages to set the theme, increment the copy
-- count, and increment the paste count. 


type Msg 
    = SetTheme String
    | IncrementCopyCount String
    | IncrementPasteCount String


-- When a SetTheme message is received, we extract the theme name
-- and assign it to the model. When an IncrementCopyCount or 
-- IncrementPasteCount message is received, we bump the respective 
-- count in the model. We don't care about the actual copied/pasted
-- text in this example.

update : Msg -> Model -> ( Model, Cmd Msg )
update action model =
    case action of
        SetTheme theme ->
            ( { model | theme = theme }
            , setEditorTheme theme 
            )

        IncrementCopyCount text ->
            ( { model | copyCount = model.copyCount + 1 }
            , Cmd.none
            )

        IncrementPasteCount text ->
            ( { model | pasteCount = model.pasteCount + 1 }
            , Cmd.none
            )


-- The view consists of a theme picker, a hint, and the 
-- copy/paste count statistics.

view : Model -> Html Msg
view model =
    div [ class "row toolbar" ]
        [ viewThemePicker model
        , viewHint model
        , viewStats model
        ]


-- When a theme is picked, a SetTheme message is produced.

viewThemePicker : Model -> Html Msg
viewThemePicker model =
    let
        themeOption theme =
          option [ value theme ] [ text theme ]

        themeOptions =
            List.map themeOption themes
    in
        div [ class "controls col-md-4" ]
            [ select [ onInput SetTheme ] themeOptions ]


-- If the user pastes code twice as often as they copy code,
-- we offer a subtle hint.

viewHint : Model -> Html Msg
viewHint model =
    let
        hint =
            if model.pasteCount > (model.copyCount * 2)
            then "Cargo culting?" 
            else ""
    in
        div [ class "hint col-md-4" ]
            [ span [ class "hint" ] [ text hint ] ]


-- Renders the copy and paste counts statistics.

viewStats : Model -> Html Msg
viewStats model =
    div [ class "stats col-md-4" ]
        [ span [ class "label" ] [ text "Copies:" ]
        , span [ class "value" ] [ text (toString model.copyCount) ]
        , span [ class "label" ] [ text "Pastes:" ]
        , span [ class "value" ] [ text (toString model.pasteCount) ]
        ]


-- We need to listen for incoming port values from JavaScript and 
-- produce an IncrementCopyCount message when code is copied and 
-- an IncrementPasteCount message when code is pasted.

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ copied IncrementCopyCount
        , pasted IncrementPasteCount
        ]


-- Outgoing port for sending the selected theme to JavaScript

port setEditorTheme : String -> Cmd msg

-- Incoming port for listening for copied text from JavaScript

port copied : (String -> msg) -> Sub msg

-- Incoming port for listening for pasted text from JavaScript

port pasted : (String -> msg) -> Sub msg


-- Knit everything together into a program.

main : Program Never Model Msg
main =
    Html.program
        { init = ( initialModel, Cmd.none )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
