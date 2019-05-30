(ns figwheel-project.test)
(defn inc2
  "Returns a number one greater than number passed in."
  ([x] (inc x))
  ([x y] (inc (+ x y))))

(defn sum
  "Given any number of numbers, sum them together."
  [& args]
  (apply + args))
