(ns yesql-demo.views
  (:require [yesql-demo.db :as db]
            [clojure.string :as str]            
            [hiccup.table :refer :all]
            [hiccup.page :as page]))

(defn gen-page-head
  [title]
  [:head
   [:title (str "Locations: " title)]
   (page/include-css "/css/normalize.css")
   (page/include-css "/css/skeleton.css")
   [:meta {:name "description", :content ""}]
   ;; [:meta {:name "viewport", :content "width=device-width, initial-scale=1"}]
   [:meta {:name "viewport", :content "width=device-width, maximum-scale=1"}]
   ]  
  )

(def header-links
  [:div#header-links
   "[ "
   [:a {:href "/"} "Home"]
   " | "
   [:a {:href "/event"} "Event"]
   " ] "
   ])


(defn home-page-header
  []
  (page/html5
   (gen-page-head "Home")
   header-links
   [:h1 "Home"]
   [:p "basic web app."]))


(defn home-page
  []
  (page/html5
   [:div {:class "container"}
   (gen-page-head "Home")
   header-links
   [:h1 "Home"]
   [:p "basic web app."]
   (db/game_event_first)]))

(defn html-table
  []
 (page/html5 (hiccup.table/to-table1d (list {:age 21 :name "John" :height 180}
                                  {:age 22 :name "Wilfred" :height 182}
                                  {:age 23 :name "Jack" :height 179}
                                  {:age 24 :name "Daniel" :height 165})
                            [:name "Name" :age "Age" :height "Height"] {:table-attrs {:class "my-class"}})))




; C-x r t (string rectangle) - comment block
;(defn event-table
;  []
;  (page/html5 
;  (let [attr-fns {:table-attrs {:class "mytable"}
;                :thead-attrs {:id "mythead"}
;                :tbody-attrs {:id "mytbody"}
;                :data-tr-attrs {:class "trattrs"}
;                :th-attrs (fn [label-key _] {:class (name label-key)})
;                :data-td-attrs (fn [label-key val]
;                                 (case label-key
;                                   :height (if (<= 180 val)
;                                             {:class "above-avg"}
;                                             {:class "below-avg"}) nil))
;                :data-value-transform (fn [label-key val]
;                                        (if (= :name label-key)
;                                          [:a {:href (str "/" val)} val]
;                                          val))}]
;  (hiccup.table/to-table1d
;   '({:age 21 :name "John" :height 179}
;     {:age 22 :name "Wilfred" :height 182})
;   [:name "Name" :age "Age" :height "Height"]
;   attr-fns)))
;
(defn event-table
  []
  (page/html5
   (gen-page-head "Events")
   [:body
     [:div {:class "container"}
        header-links
     [:div {:class "row"}
   (hiccup.table/to-table1d (db/game_event_limit)
                            [:processed_results "processed_results"
                             :created_at "created_at"
                             :draw_datetime "draw_datetime"
                             :progress "progress"]
                            {:table-attrs {:class "u-full-width"}}
                            )]]]))
                           
