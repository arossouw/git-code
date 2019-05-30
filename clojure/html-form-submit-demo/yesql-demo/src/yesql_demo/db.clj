(ns yesql-demo.db)

(require '[yesql.core :refer [defqueries]])
;; 156.38.131.114:5432:*:francois:4RzVZ2JmndK

(def db-spec {:classname "org.postgresql.Driver"
              :subprotocol "postgresql"
              :subname "//156.38.131.114:5432/lottostar"
              :user "francois"
              :password "4RzVZ2JmndK"})

(defqueries "sql/game_event.sql"
  {:connection db-spec})

