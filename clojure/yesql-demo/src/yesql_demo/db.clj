(ns yesql-demo.db)

(require '[yesql.core :refer [defqueries]])

(def db-spec {:classname "org.postgresql.Driver"
              :subprotocol "postgresql"
              :subname "//localhost:6433/lottostar_staging"
              :user "arno"
              :password "1l1k1myb33r"})

(defqueries "sql/game_event.sql"
  {:connection db-spec})

