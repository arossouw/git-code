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
var seq__24490_24504 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24491_24505 = null;
var count__24492_24506 = (0);
var i__24493_24507 = (0);
while(true){
if((i__24493_24507 < count__24492_24506)){
var f_24508 = cljs.core._nth.call(null,chunk__24491_24505,i__24493_24507);
cljs.core.println.call(null,"  ",f_24508);

var G__24509 = seq__24490_24504;
var G__24510 = chunk__24491_24505;
var G__24511 = count__24492_24506;
var G__24512 = (i__24493_24507 + (1));
seq__24490_24504 = G__24509;
chunk__24491_24505 = G__24510;
count__24492_24506 = G__24511;
i__24493_24507 = G__24512;
continue;
} else {
var temp__4657__auto___24513 = cljs.core.seq.call(null,seq__24490_24504);
if(temp__4657__auto___24513){
var seq__24490_24514__$1 = temp__4657__auto___24513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24490_24514__$1)){
var c__19173__auto___24515 = cljs.core.chunk_first.call(null,seq__24490_24514__$1);
var G__24516 = cljs.core.chunk_rest.call(null,seq__24490_24514__$1);
var G__24517 = c__19173__auto___24515;
var G__24518 = cljs.core.count.call(null,c__19173__auto___24515);
var G__24519 = (0);
seq__24490_24504 = G__24516;
chunk__24491_24505 = G__24517;
count__24492_24506 = G__24518;
i__24493_24507 = G__24519;
continue;
} else {
var f_24520 = cljs.core.first.call(null,seq__24490_24514__$1);
cljs.core.println.call(null,"  ",f_24520);

var G__24521 = cljs.core.next.call(null,seq__24490_24514__$1);
var G__24522 = null;
var G__24523 = (0);
var G__24524 = (0);
seq__24490_24504 = G__24521;
chunk__24491_24505 = G__24522;
count__24492_24506 = G__24523;
i__24493_24507 = G__24524;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24525 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24525);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24525)))?cljs.core.second.call(null,arglists_24525):arglists_24525));
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
var seq__24494 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24495 = null;
var count__24496 = (0);
var i__24497 = (0);
while(true){
if((i__24497 < count__24496)){
var vec__24498 = cljs.core._nth.call(null,chunk__24495,i__24497);
var name = cljs.core.nth.call(null,vec__24498,(0),null);
var map__24499 = cljs.core.nth.call(null,vec__24498,(1),null);
var map__24499__$1 = ((((!((map__24499 == null)))?((((map__24499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24499):map__24499);
var doc = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24526 = seq__24494;
var G__24527 = chunk__24495;
var G__24528 = count__24496;
var G__24529 = (i__24497 + (1));
seq__24494 = G__24526;
chunk__24495 = G__24527;
count__24496 = G__24528;
i__24497 = G__24529;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24494);
if(temp__4657__auto__){
var seq__24494__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24494__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__24494__$1);
var G__24530 = cljs.core.chunk_rest.call(null,seq__24494__$1);
var G__24531 = c__19173__auto__;
var G__24532 = cljs.core.count.call(null,c__19173__auto__);
var G__24533 = (0);
seq__24494 = G__24530;
chunk__24495 = G__24531;
count__24496 = G__24532;
i__24497 = G__24533;
continue;
} else {
var vec__24501 = cljs.core.first.call(null,seq__24494__$1);
var name = cljs.core.nth.call(null,vec__24501,(0),null);
var map__24502 = cljs.core.nth.call(null,vec__24501,(1),null);
var map__24502__$1 = ((((!((map__24502 == null)))?((((map__24502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24502):map__24502);
var doc = cljs.core.get.call(null,map__24502__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24502__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24534 = cljs.core.next.call(null,seq__24494__$1);
var G__24535 = null;
var G__24536 = (0);
var G__24537 = (0);
seq__24494 = G__24534;
chunk__24495 = G__24535;
count__24496 = G__24536;
i__24497 = G__24537;
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