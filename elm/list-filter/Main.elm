module Main exposing (main)

import Html exposing (Html)
import List exposing (map, sum, filter)

addOne x = x + 1

records = [1,2,4]

isLess a = a |> filter (\a -> addOne a < 100)


main : Html msg
main =
    Html.text (toString (isLess records))
