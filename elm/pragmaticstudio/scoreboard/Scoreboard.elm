module Scoreboard exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Json.Decode as Decode exposing (Decoder, field)

-- Install the elm-lang/websocket package to get the WebSocket module

import WebSocket


-- Our model consists of a list of games and maybe an error message.

type alias Model =
    { games : List Game
    , errorMessage : Maybe String
    }


-- A game has a home and away team name and score.

type alias Game =
    { homeTeamName : String
    , homeTeamScore : Int
    , awayTeamName : String
    , awayTeamScore : Int
    }


-- The app starts with an empty list of games.

initialModel : Model
initialModel =
    { games = [ ]
    , errorMessage = Nothing
    }


-- The message to update the scores holds a string (JSON).

type Msg = UpdatedScores String


-- When an UpdatedScores message is received, we decode its JSON
-- value into a list of Game records. Decoding can fail, so the
-- result is a Result type. If it's successful (Ok), then we
-- update the model's list of games with the resulting values. 
-- Otherwise, if it fails (Err), we assign the error message.

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdatedScores json ->
            case Decode.decodeString scoresDecoder json of
                Ok games ->
                    ( { model | games = games }, Cmd.none )

                Err err ->
                    ( { model | errorMessage = Just err }, Cmd.none )


-- Turns a Websocket message value (JSON) into a list of Game record values.

scoresDecoder : Decoder (List Game)
scoresDecoder =
    Decode.map4 Game
        (field "homeTeamName"  Decode.string)
        (field "homeTeamScore" Decode.int)
        (field "awayTeamName"  Decode.string)
        (field "awayTeamScore" Decode.int)
      |> Decode.list


-- The rendered view is simply an HTML list of games.

view : Model -> Html Msg
view model =
    case model.errorMessage of
        Nothing ->
            div [ ] [ viewGames model.games ]

        Just errorMessage ->
            let
                _ = Debug.log "Decoding error:" errorMessage
            in 
                div [ class "error" ] 
                    [ span [ ] [ text "Sorry, scores temporarily unavailable!" ] ]


viewGames : List Game -> Html Msg
viewGames games =
    let
        teamItem name score =
            div [ class "team" ]
                [ span [ class "name" ] [ text name ]
                , span [ class "score" ] [ text (toString score) ]
                ]

        gameItem game =
            li [ class "game" ]
               [ teamItem game.homeTeamName game.homeTeamScore
               , teamItem game.awayTeamName game.awayTeamScore
               ]
    in
        ul [] (List.map gameItem games)


-- We use a subscription to listen for incoming messages on the websocket. 
-- The 'listen' function takes the server URL and a function that turns 
-- the websocket message into a message that we handle in our 'update' 
-- function. So this subscription produces UpdatedScores messages.

subscriptions : Model -> Sub Msg
subscriptions model =
    WebSocket.listen "ws://localhost:8080" UpdatedScores


-- Tie everything together into a program.

main : Program Never Model Msg
main =
    Html.program
        { init = (initialModel, Cmd.none)
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
