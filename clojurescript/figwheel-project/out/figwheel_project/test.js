// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel_project.test');
goog.require('cljs.core');
/**
 * Returns a number one greater than number passed in.
 */
figwheel_project.test.inc2 = (function figwheel_project$test$inc2(var_args){
var args22323 = [];
var len__19428__auto___22326 = arguments.length;
var i__19429__auto___22327 = (0);
while(true){
if((i__19429__auto___22327 < len__19428__auto___22326)){
args22323.push((arguments[i__19429__auto___22327]));

var G__22328 = (i__19429__auto___22327 + (1));
i__19429__auto___22327 = G__22328;
continue;
} else {
}
break;
}

var G__22325 = args22323.length;
switch (G__22325) {
case 1:
return figwheel_project.test.inc2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel_project.test.inc2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22323.length)].join('')));

}
});

figwheel_project.test.inc2.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (x + (1));
});

figwheel_project.test.inc2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((x + y) + (1));
});

figwheel_project.test.inc2.cljs$lang$maxFixedArity = 2;
/**
 * Given any number of numbers, sum them together.
 */
figwheel_project.test.sum = (function figwheel_project$test$sum(var_args){
var args__19435__auto__ = [];
var len__19428__auto___22331 = arguments.length;
var i__19429__auto___22332 = (0);
while(true){
if((i__19429__auto___22332 < len__19428__auto___22331)){
args__19435__auto__.push((arguments[i__19429__auto___22332]));

var G__22333 = (i__19429__auto___22332 + (1));
i__19429__auto___22332 = G__22333;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel_project.test.sum.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel_project.test.sum.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._PLUS_,args);
});

figwheel_project.test.sum.cljs$lang$maxFixedArity = (0);

figwheel_project.test.sum.cljs$lang$applyTo = (function (seq22330){
return figwheel_project.test.sum.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22330));
});

//# sourceMappingURL=test.js.map