(ns clojure-lesson01.core)

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(def x [1 2 3 4 5])
(for [i x]
  (println i))

(dotimes [n 5] (println (inc n)))

(-> 3
    inc
    (+ 4)
    (str ".. is the final result"))

(->> 3
     inc
     (* 4)
     (- 15)
     (str "THe final result is: "))
