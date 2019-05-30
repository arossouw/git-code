module Main exposing (main)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)
import Time


type alias Model =
    { count : Int }


initialModel : Model
initialModel =
    { count = 5 }


type Msg
    = Tick


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick ->
            if model.count == 0 then
                ( initialModel, Cmd.none )
            else
                ( { model | count = model.count - 1 }, Cmd.none )


view : Model -> Html Msg
view model =
    div [] [ text <| toString model.count ]


main : Program Never Model Msg
main =
    Html.program
        { init = ( initialModel, Cmd.none )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


subscriptions : Model -> Sub Msg
subscriptions _ =
    Time.every Time.second (always Tick)
