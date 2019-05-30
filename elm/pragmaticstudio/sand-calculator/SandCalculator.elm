module SandCalculator exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)


-- Our model holds the text input values for the dimensions

type alias Model =
    { length : String
    , width : String
    , depth : String 
    }


initialModel : Model
initialModel =
    Model "" "" ""


-- We have respective messages to set each dimension value

type Msg 
    = Length String
    | Width String
    | Depth String


-- We use case branches to handle each message and update the 
-- corresponding model field

update : Msg -> Model -> Model
update msg model =
    case msg of
        Length length ->
            { model | length = length }

        Width width ->
            { model | width = width }

        Depth depth ->
            { model | depth = depth }


-- Our view consists of three text inputs (using a helper function) 
-- and the result of the calculation

view : Model -> Html Msg
view model =
    div [ ]
        [ h4 [ ] [ text "How Much Do I Need?" ]
        , inputGroup "Length" "ft" Length
        , inputGroup "Width" "ft" Width
        , inputGroup "Depth" "in" Depth
        , viewResult (calculatePounds model)
        ]


-- To avoid repetition, we use a helper function to generate 
-- a styled input group consisting of the dimension, a text input 
-- producing a message on input, and the units (feet or inches)

inputGroup : String -> String -> (String -> Msg) -> Html Msg
inputGroup dimension units msg =
    div [ class "input-group" ]
        [ span  [ class "input-group-addon leading" ] [ text dimension ]
        , input [ type_ "text", class "form-control", onInput msg ] [ ]
        , span  [ class "input-group-addon trailing" ] [ text units ]
        ]


-- It wouldn't be very useful if we didn't display the 
-- result of the calculation...

viewResult : Int -> Html msg
viewResult pounds =
    let
        result =
            if pounds > 0 then
                "You need " ++ (toString pounds) ++ " pounds!"
            else
                ""
    in
        h4 [ class "pounds" ] [ text result ]


-- Super-secret formula for calculating how many pounds of sand 
-- you need to build a l x w x d sandbox

calculatePounds : Model -> Int
calculatePounds model =
    let
        l =
            (parseFloat model.length)

        w = 
            (parseFloat model.width)

        d = 
            (parseFloat model.depth) / 12
    in
        round (l * w * d * 74)


-- In the case that converting string input values to
-- float values fails, we use a default float value (0.0)

parseFloat : String -> Float
parseFloat string =
    Result.withDefault 0.0 (String.toFloat string)


-- Lastly, we tie everything together into a program!

main : Program Never Model Msg
main =
    Html.beginnerProgram
        { model = initialModel
        , view = view
        , update = update
        }
