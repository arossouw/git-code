module Main exposing (..)

import Html exposing (Html, div, h1, text)

type alias Flags =
    { id: Int
    , name: String
    }



init : Flags -> (Flags, Cmd Msg )
init flags = 
    let
       {id, name} = flags
     in
        ( Flags id name, Cmd.none )

type Msg
    = NoOp

update : Msg -> Flags -> ( Flags, Cmd Msg )
update NoOp model =
    ( model, Cmd.none )

-- VIEW

view : Flags -> Html Msg
view model =
    div [] [ h1 [] [ text ("Person Name: " ++ toString model.name) ] ]
    
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = (\_ -> Sub.none)
        }
