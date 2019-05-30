(ns yesql-demo.db)

(require '[yesql.core :refer [defqueries]])

(def db-spec {:classname "org.postgresql.Driver"
              :subprotocol "postgresql"
              :subname "//129.232.243.226:5432/lottostar_staging"
              :user "readonly"
              :password "readonly"})

(defqueries "sql/game_event.sql"
  {:connection db-spec})

