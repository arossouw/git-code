(ns yesql-demo.handler
  (:require [yesql-demo.views :as views]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty] ; add this require
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]])
  (:gen-class)) ; and add this gen-class

(use 'ring.middleware.resource
     'ring.middleware.content-type
     'ring.middleware.not-modified
     'ring.middleware.params
     'ring.middleware.multipart-params)


(defroutes app-routes ; replace the generated app-routes with this
  (GET "/"   []  (views/home-page))
  (GET "/search-form.html" req (views/search-form req))
  (POST "/post-submit" req (views/display-result req))
  (GET "/event" [] (views/event-table))

  (route/not-found "Not Found"))


(def app
  (-> app-routes
      (wrap-resource "public")
      (wrap-params)
      (wrap-not-modified)
      (wrap-multipart-params)))

(defn -main
  [& [port]]
  (let [port (Integer. (or port
                           (System/getenv "PORT")
                           5000))]
    (jetty/run-jetty #'app {:port  port
                            :join? false})))
