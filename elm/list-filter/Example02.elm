{-
  Author: janiczek
  elm slack
-}
module Main exposing (main)

import Html exposing (Html)


records : List Int
records =
    [ 1, 2, 4, 98, 99, 100 ]


filterSmallerThan99 : List Int -> List Int
filterSmallerThan99 list =
    list
        |> List.filter (\a -> a < 99)


main : Html msg
main =
    Html.text (toString (filterSmallerThan99 records))
