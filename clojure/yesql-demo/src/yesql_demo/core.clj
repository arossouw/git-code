(ns yesql-demo.core)
(require '[yesql.core :refer [defqueries]])

(def db-spec {:classname "org.postgresql.Driver"
              :subprotocol "postgresql"
              :subname "//localhost:5432/lottostar"
              :user "arno"
              :password "1l1k3myb33r"})

(defqueries "sql/game_event.sql"
  {:connection db-spec})


(defn hello [name title]
  (str "Hello, " title " " name))
  
(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
