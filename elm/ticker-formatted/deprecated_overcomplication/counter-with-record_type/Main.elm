module Main exposing (main)

import Html exposing (Html, div, span, text)
import Html.Attributes exposing (class, id)
import Time

type alias Model =
    { count: Int }

type alias CountDownTimer =
    {   hour   : Int
      , minute : Int
      , second : Int
      , count  : Int
     }

timeInSeconds : number_format
timeInSeconds = 5

-- tCountDown : Model
tCountDown : CountDownTimer
tCountDown =
     { hour = ( timeInSeconds // 3600),
       minute = ( timeInSeconds % 3600) // 60,
       second = ( timeInSeconds % 60),
       count = timeInSeconds
     }

initialModel : Model
initialModel =
     { count = 500 }

type Msg = Tick


update : Msg -> CountDownTimer -> ( CountDownTimer, Cmd Msg )
update msg model =
    case msg of           
        Tick ->
            if model.count == 0 then
                ( tCountDown, Cmd.none )
            else
                 ( { tCountDown | count  = model.count - 1 ,
                                 hour   = ( (model.count - 1) // 3600) ,
                                 minute = ( (model.count - 1) % 3600) // 60 ,
                                 second = (model.count - 1) % 60 
                   }, Cmd.none ) 

view : CountDownTimer -> Html Msg
view model =
     div [ class "countDown" ]
        [ span [ id "hours" ]
          [ text (toString model.hour) ]
        , span [ id "minutes" ]
          [ text (toString model.minute) ]
        , span [ id "seconds" ]
          [ text (toString model.second) ]
        , text ""
    ]
   

main : Program Never CountDownTimer Msg
main =
    Html.program
        { init = ( tCountDown, Cmd.none )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }

subscriptions : CountDownTimer -> Sub Msg
subscriptions _ =
    Time.every Time.second (always Tick)
