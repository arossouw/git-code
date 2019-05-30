(ns yesql-demo.handler
  (:require [yesql-demo.views :as views]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty] ; add this require
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]])
  (:gen-class)) ; and add this gen-class


(defroutes app-routes ; replace the generated app-routes with this
  (GET "/"
       []
       (views/home-page))

  (route/not-found "Not Found"))

;(def app
;  (wrap-defaults app-routes site-defaults))

(defn -main
  [& [port]]
  (let [port (Integer. (or port
                           (System/getenv "PORT")
                           5000))]
    (jetty/run-jetty #'app {:port  port
                            :join? false})))
