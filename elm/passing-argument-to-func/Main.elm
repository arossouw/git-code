module Main exposing (..)

import Html exposing (Html, div, h1, text)



-- MODEL

type alias Model =
    { userId : Int
    }

init : { userId : Int } -> ( Model, Cmd Msg )
init flags =
    -- This is the key piece. You can use the passed in "flags"
    -- record to build the initial state of your Model
    ( Model flags.userId, Cmd.none )

-- UPDATE

type Msg
    = NoOp

update : Msg -> Model -> ( Model, Cmd Msg )
update NoOp model =
    ( model, Cmd.none )

-- VIEW

view : Model -> Html Msg
view model =
    div [] [ h1 [] [ text ("User ID: " ++ toString model.userId) ] ]
    
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = (\_ -> Sub.none)
        }
