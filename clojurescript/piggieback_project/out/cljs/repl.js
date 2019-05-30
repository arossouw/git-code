// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9479_9493 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9480_9494 = null;
var count__9481_9495 = (0);
var i__9482_9496 = (0);
while(true){
if((i__9482_9496 < count__9481_9495)){
var f_9497 = cljs.core._nth.call(null,chunk__9480_9494,i__9482_9496);
cljs.core.println.call(null,"  ",f_9497);

var G__9498 = seq__9479_9493;
var G__9499 = chunk__9480_9494;
var G__9500 = count__9481_9495;
var G__9501 = (i__9482_9496 + (1));
seq__9479_9493 = G__9498;
chunk__9480_9494 = G__9499;
count__9481_9495 = G__9500;
i__9482_9496 = G__9501;
continue;
} else {
var temp__4657__auto___9502 = cljs.core.seq.call(null,seq__9479_9493);
if(temp__4657__auto___9502){
var seq__9479_9503__$1 = temp__4657__auto___9502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9479_9503__$1)){
var c__9124__auto___9504 = cljs.core.chunk_first.call(null,seq__9479_9503__$1);
var G__9505 = cljs.core.chunk_rest.call(null,seq__9479_9503__$1);
var G__9506 = c__9124__auto___9504;
var G__9507 = cljs.core.count.call(null,c__9124__auto___9504);
var G__9508 = (0);
seq__9479_9493 = G__9505;
chunk__9480_9494 = G__9506;
count__9481_9495 = G__9507;
i__9482_9496 = G__9508;
continue;
} else {
var f_9509 = cljs.core.first.call(null,seq__9479_9503__$1);
cljs.core.println.call(null,"  ",f_9509);

var G__9510 = cljs.core.next.call(null,seq__9479_9503__$1);
var G__9511 = null;
var G__9512 = (0);
var G__9513 = (0);
seq__9479_9493 = G__9510;
chunk__9480_9494 = G__9511;
count__9481_9495 = G__9512;
i__9482_9496 = G__9513;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9514 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8321__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8321__auto__)){
return or__8321__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9514);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9514)))?cljs.core.second.call(null,arglists_9514):arglists_9514));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9483 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9484 = null;
var count__9485 = (0);
var i__9486 = (0);
while(true){
if((i__9486 < count__9485)){
var vec__9487 = cljs.core._nth.call(null,chunk__9484,i__9486);
var name = cljs.core.nth.call(null,vec__9487,(0),null);
var map__9488 = cljs.core.nth.call(null,vec__9487,(1),null);
var map__9488__$1 = ((((!((map__9488 == null)))?((((map__9488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9488):map__9488);
var doc = cljs.core.get.call(null,map__9488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9515 = seq__9483;
var G__9516 = chunk__9484;
var G__9517 = count__9485;
var G__9518 = (i__9486 + (1));
seq__9483 = G__9515;
chunk__9484 = G__9516;
count__9485 = G__9517;
i__9486 = G__9518;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9483);
if(temp__4657__auto__){
var seq__9483__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9483__$1)){
var c__9124__auto__ = cljs.core.chunk_first.call(null,seq__9483__$1);
var G__9519 = cljs.core.chunk_rest.call(null,seq__9483__$1);
var G__9520 = c__9124__auto__;
var G__9521 = cljs.core.count.call(null,c__9124__auto__);
var G__9522 = (0);
seq__9483 = G__9519;
chunk__9484 = G__9520;
count__9485 = G__9521;
i__9486 = G__9522;
continue;
} else {
var vec__9490 = cljs.core.first.call(null,seq__9483__$1);
var name = cljs.core.nth.call(null,vec__9490,(0),null);
var map__9491 = cljs.core.nth.call(null,vec__9490,(1),null);
var map__9491__$1 = ((((!((map__9491 == null)))?((((map__9491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9491):map__9491);
var doc = cljs.core.get.call(null,map__9491__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9491__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9523 = cljs.core.next.call(null,seq__9483__$1);
var G__9524 = null;
var G__9525 = (0);
var G__9526 = (0);
seq__9483 = G__9523;
chunk__9484 = G__9524;
count__9485 = G__9525;
i__9486 = G__9526;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map