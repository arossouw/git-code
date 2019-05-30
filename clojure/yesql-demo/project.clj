(defproject yesql-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
;  :ring {:handler yesql-demo.handler/main}
;  :plugins [[lein-ring "0.12.4"]]
  :jvm-opts ["-Dclojure.compiler.direct-linking=true -Xverify:none"]
  :main yesql-demo.handler
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [hiccup "1.0.5"]
                 [ring/ring-core "1.6.2"]
                 [ring/ring-defaults "0.3.2"]
                 [http-kit "2.2.0"]
;                 [ring/ring-jetty-adapter "1.5.1"] 
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [hiccup-table "0.2.0"]
                 [compojure "1.6.1"]
                 [yesql "0.5.3"]])
