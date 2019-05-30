{-
 Author: janiczek
 elm slack channel
-}
module Main exposing (main)

import Html exposing (Html)
import Html.Events
import Time exposing (Time)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }


type Msg
    = Start
    | Tick


type alias Model =
    { isRunning : Bool
    , timeLeft : Int
    }


startingTime : Int
startingTime =
    5


init : ( Model, Cmd Msg )
init =
    ( { isRunning = False
      , timeLeft = 0
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Start ->
            ( { isRunning = True
              , timeLeft = startingTime
              }
            , Cmd.none
            )

        Tick ->
            let
                newTimeLeft =
                    model.timeLeft - 1
            in
            ( { isRunning = model.isRunning && newTimeLeft > 0
              , timeLeft = newTimeLeft
              }
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    Html.div []
        [ Html.button
            [ Html.Events.onClick Start ]
            [ Html.text "Start" ]
        , Html.ul []
            [ Html.li []
                [ Html.text
                    (if model.isRunning then
                        "Running"
                     else
                        "Not running"
                    )
                ]
            , Html.li [] [ Html.text ("Time left: " ++ toString model.timeLeft ++ " seconds") ]
            ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    if model.isRunning then
        Time.every Time.second (\time -> Tick)
    else
        Sub.none
