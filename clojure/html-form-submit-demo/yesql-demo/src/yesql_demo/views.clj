(ns yesql-demo.views
  (:require [yesql-demo.db :as db]
            [clojure.string :as str]            
            [hiccup.table :refer :all]
            [hiccup.core :refer [html h]]
            [hiccup.form :as f]
            [hiccup.page :as page]))

(defn gen-page-head
  [title]
  [:head
   [:title (str "Demo: " title)]
   (page/include-css "/css/normalize.css")
   (page/include-css "/css/skeleton.css")
   (page/include-css "/css/custom.css")
   (page/include-js "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js")
   (page/include-js "/js/nav-active.js")
   [:link {:rel "stylesheet" :href "//fonts.googleapis.com/css?family=Raleway:400,300,600" :type "text/css"}]
   [:meta {:name "description", :content ""}]
   [:meta {:name "viewport", :content "width=device-width, maximum-scale=1"}]])

(defn search-form
  []
  (html
   (f/form-to [:post "/post-submit"]
     [:div {:class "three columns"}
       (f/text-field :email)]
         [:div {:class "one column"}
           (f/submit-button {:class "btn" :name "submit"} "Search")])))

(def header-links
  [:nav
  [:ul 
   [:li {:class "active"}
      [:a {:href "/"} "Home"] ]
   [:li 
    [:a {:href "/event"} "Event"]]]])

(def header-link-event
  [:nav
  [:ul {:class "nav-list li"} 
   [:li 
      [:a {:href "/"} "Home"] ]
   [:li {:class "active"}
    [:a {:href "/event"} "Event"]]]])


(defn home-page-header
  []
  (page/html5
   (gen-page-head "Home")
   header-links))

(defn home-page
  []
  (page/html5
   (gen-page-head "Home")
     [:div {:class "container"}
    header-links
    [:div {:class "row"}
     (search-form)]]))

(defn event-table
  []
  (page/html5
   (gen-page-head "Events")
   [:body
     [:div {:class "container"}
        header-link-event
      [:div {:class "row"}
            (search-form)
   (hiccup.table/to-table1d (db/game_event_limit)
                            [:processed_results "processed_results"
                             :created_at "created_at"
                             :draw_datetime "draw_datetime"
                             :progress "progress"]
                            {:table-attrs {:class "u-full-width"}})]]]))

(defn no-results
  []
 (page/html5
 [:pre {:class "code-example"}]
  [:code {:class "code-example-body prettyprint"}]
   [:p "No results found"]))

(defn display-result [req]
  (page/html5
   (gen-page-head "Home")
   [:div {:class "container"}
    header-links
    [:div {:class "row"}
     (search-form)
     [:br]
     [:br]
    (let [{:keys [params uri]} req
         param-name (get params "email")
          data (db/user_profile {:email param-name})
          ]

      (if (empty? data)
                [:div {:class "twelve columns"} [:p "No results found"]]
                (hiccup.table/to-table1d data
                       [:email "email"
                        :dob "dob"
                        :last_login "last_login"
                        :first_name "firstname"
                        :last_name "surname"
                        :preferred_number "contact_number"
                        :id_or_passport "identity_no"
                        ]
                      {:table-attrs {:class "u-full-width"}})))]]))
    
