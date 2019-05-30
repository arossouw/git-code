// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs_first_project.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof cljs_first_project.core.conn !== 'undefined'){
} else {
cljs_first_project.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
alert("Hello world!");

//# sourceMappingURL=core.js.map