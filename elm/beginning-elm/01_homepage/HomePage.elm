module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


view model =
    div [ class "jumbotron" ]
        [ h1 [] [ text "Welcome to Dunder Mifflin!" ]
        , p []
            [ text "Dunder Mifflin Inc. (stock symbol "
            , strong [] [ text "DM1" ]
            , text ") is a micro-cap regional paper and office supply distributor with an emphasis on servicing small-business clients."
            ]
        ]


main =
    view "homepage-model"
