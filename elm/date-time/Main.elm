module Main exposing (..)

import Html exposing (Html, text)
import Time exposing (Time)
import Date
import Task


type alias Model = Float

type Msg
    = OnTime Time 
    
update : Msg -> Model -> (Model, Cmd msg)
update (OnTime t) model = 
    (t, Cmd.none)
    
view: Model -> Html Msg
view model = 
    model
        |> Date.fromTime 
        |> toString
        |> text
 
 
getTime = 
    Time.now 
        |> Task.perform OnTime 
        
main =
    Html.program
        { init = (0, getTime)
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }
        
