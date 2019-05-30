module Main exposing (main)

import Html exposing (Html, div, text, program)


-- MODEL


type alias Model = List


init : ( List a, Cmd msg )
init =
    ( [], Cmd.none )



-- MESSAGES


type Msg = NoOp



-- VIEW


view : List a -> Html Msg
view model =
    div []
        [ text (String.join ": " (List.map toString model)) ]



-- UPDATE


update :  Msg -> List a -> ( List a, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : List a -> Sub Msg
subscriptions model =
    Sub.none



-- MAIN


main : Program Never (List a) Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
