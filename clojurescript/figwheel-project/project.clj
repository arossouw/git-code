(defproject figwheel-project "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]]
  :plugins [[lein-figwheel "0.5.1"]
            [lein-cljsbuild "1.1.0"]]
  :clean-targets [:target-path "out"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {:main "figwheel-project.core"
                         ; :output-to "resources/public/js/main.js"
                         }
              }]}
   :figwheel {})
