import Dict exposing (Dict)
import Http exposing (Error)
import Task exposing (Task)


type alias Cache =
    Dict String String


type alias Model =
    { cache : Cache
    , key : String
    , locations : List String
    }


model : Model
model =
    { cache = Dict.empty
    , key = ""
    , locations =
        [ "foo", "bar", "baz" ]
        -- get these via an API call, or load them via flags, etc
    }


type Msg
    = GetItem String
    | GetAllItems (List String)
    | GetItemFromCache String (Result Http.Error String)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetAllItems locations ->
            ( model
            , Cmd.batch
                (List.map
                    (\key ->
                        Task.attempt (GetItemFromCache key) (getItem key model.cache)
                    )
                    locations
                )
            )

        GetItem key ->
            ( model, Task.attempt (GetItemFromCache key) (getItem key model.cache) )

        GetItemFromCache key result ->
            case result of
                Ok data ->
                    ( { model | cache = Dict.insert key data model.cache }, Cmd.none )

                Err err ->
                    -- add error handling here
                    ( model, Cmd.none )


getItem : String -> Cache -> Task Http.Error String
getItem key cache =
    case (Dict.get key cache) of
        Just item ->
            Task.succeed item

        Nothing ->
            Http.getString "https://path-to-api?query=key"
                |> Http.toTask
