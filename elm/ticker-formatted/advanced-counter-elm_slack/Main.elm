module Main exposing (..)

import Html exposing (..)
import Html.Events exposing (..)
import Time exposing (Time, millisecond)


main : Program Never Model Msg
main =
    program
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Time.every (60 * millisecond) Tick
        }


type alias Model =
    { counters : List Time
    , currentTime : Time
    }


init : ( Model, Cmd msg )
init =
    ( Model [] 0, Cmd.none )



-- UPDATE


type Msg
    = Tick Time
    | LoadCountdowns


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick time ->
            ( { model | currentTime = time }, Cmd.none )

        LoadCountdowns ->
            ( { model
                | counters =
                    [ model.currentTime + 10000
                    , model.currentTime + 15000
                    , model.currentTime + 50000
                    , model.currentTime + 150000
                    ]
              }
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    case model.counters of
        [] ->
            div []
                [ h1 [] [ text "No Countdowns Loaded" ]
                , button [ onClick LoadCountdowns ] [ text "Load Countdowns!" ]
                ]

        counters ->
            div []
                [ viewCountersAsUl counters model.currentTime
                , viewCountersAsTable counters model.currentTime
                ]


viewCountersAsUl : List Time -> Time -> Html msg
viewCountersAsUl counters currentTime =
    div []
        [ h1 [] [ text "Counters as UL: " ]
        , ul []
            (List.map
                (\counter ->
                    let
                        seconds =
                            (counter - currentTime) / 1000
                    in
                    if seconds > 0 then
                        li [] [ text <| toString seconds ]

                    else
                        li [] [ text "counter expired" ]
                )
                counters
            )
        ]


viewCountersAsTable : List Time -> Time -> Html msg
viewCountersAsTable counters currentTime =
    let
        toRow idx counter =
            let
                seconds =
                    (counter - currentTime) / 1000

                counterText =
                    if seconds > 0 then
                        toString seconds

                    else
                        "counter expired"
            in
            tr []
                [ td [] [ text <| toString idx ]
                , td [] [ text counterText ]
                ]
    in
    div []
        [ h1 [] [ text "Counters as Table: " ]
        , table []
            [ thead []
                [ tr []
                    [ th [] [ text "No." ]
                    , th [] [ text "Value" ]
                    ]
                ]
            , tbody [] (List.indexedMap toRow counters)
            ]
        ]

