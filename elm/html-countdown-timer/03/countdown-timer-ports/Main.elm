port module Main exposing (..)

import Html exposing (Html, button, div, h1, text)
import Html.Events exposing (..)
import Time exposing (Time, second)


type alias Model =
    { counter : Maybe Int
    , isRunning : Bool
    }


init : Maybe Int -> ( Model, Cmd Msg )
init flags =
    ( Model flags False, Cmd.none )


type Msg
    = TriggerCounter Int
    | CountDown Time
    | PauseResumeCounter


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        TriggerCounter value ->
            ( Model (Just value) True, Cmd.none )

        CountDown _ ->
            case model.counter of
                Nothing ->
                    ( { model | isRunning = False }, Cmd.none )
                    
                Just value ->
                    if value == 1 then
                        ( { model | isRunning = False, counter = Just 0 }, Cmd.none )
                    else
                        ( { model | counter = Just (value - 1) }, Cmd.none )

        PauseResumeCounter ->
            ( { model | isRunning = not model.isRunning }, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    case model.counter of
        Nothing ->
            div [] [ h1 [] [ text "Counter Not Started" ] ]

        Just value ->
            if model.isRunning then
                div [] [ h1 [] [ text ("Time remaining: " ++ toString value) ], button [ onClick PauseResumeCounter ] [ text "Pause Counter" ] ]
            else if value == 0 then
                div [] [ h1 [] [ text "Counter expired! " ] ]
            else
                div []
                    [ h1 [] [ text ("Counter paused! Time remaining: " ++ toString value) ]
                    , button [ onClick PauseResumeCounter ] [ text "Resume Counter" ]
                    ]



-- SUBSCRIPTIONS


port triggerCounter : (Int -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    if model.isRunning then
        Sub.batch [ Time.every second CountDown, triggerCounter TriggerCounter ]
    else
        triggerCounter TriggerCounter

main : Program (Maybe Int) Model Msg
main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

