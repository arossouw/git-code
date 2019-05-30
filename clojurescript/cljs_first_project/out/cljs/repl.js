// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__220_234 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__221_235 = null;
var count__222_236 = (0);
var i__223_237 = (0);
while(true){
if((i__223_237 < count__222_236)){
var f_238 = cljs.core._nth.call(null,chunk__221_235,i__223_237);
cljs.core.println.call(null,"  ",f_238);

var G__239 = seq__220_234;
var G__240 = chunk__221_235;
var G__241 = count__222_236;
var G__242 = (i__223_237 + (1));
seq__220_234 = G__239;
chunk__221_235 = G__240;
count__222_236 = G__241;
i__223_237 = G__242;
continue;
} else {
var temp__4425__auto___243 = cljs.core.seq.call(null,seq__220_234);
if(temp__4425__auto___243){
var seq__220_244__$1 = temp__4425__auto___243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__220_244__$1)){
var c__3157__auto___245 = cljs.core.chunk_first.call(null,seq__220_244__$1);
var G__246 = cljs.core.chunk_rest.call(null,seq__220_244__$1);
var G__247 = c__3157__auto___245;
var G__248 = cljs.core.count.call(null,c__3157__auto___245);
var G__249 = (0);
seq__220_234 = G__246;
chunk__221_235 = G__247;
count__222_236 = G__248;
i__223_237 = G__249;
continue;
} else {
var f_250 = cljs.core.first.call(null,seq__220_244__$1);
cljs.core.println.call(null,"  ",f_250);

var G__251 = cljs.core.next.call(null,seq__220_244__$1);
var G__252 = null;
var G__253 = (0);
var G__254 = (0);
seq__220_234 = G__251;
chunk__221_235 = G__252;
count__222_236 = G__253;
i__223_237 = G__254;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_255 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2789__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2789__auto__)){
return or__2789__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_255);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_255)))?cljs.core.second.call(null,arglists_255):arglists_255));
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
var seq__224 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__225 = null;
var count__226 = (0);
var i__227 = (0);
while(true){
if((i__227 < count__226)){
var vec__228 = cljs.core._nth.call(null,chunk__225,i__227);
var name = cljs.core.nth.call(null,vec__228,(0),null);
var map__229 = cljs.core.nth.call(null,vec__228,(1),null);
var map__229__$1 = ((((!((map__229 == null)))?((((map__229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__229):map__229);
var doc = cljs.core.get.call(null,map__229__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__229__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__256 = seq__224;
var G__257 = chunk__225;
var G__258 = count__226;
var G__259 = (i__227 + (1));
seq__224 = G__256;
chunk__225 = G__257;
count__226 = G__258;
i__227 = G__259;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__224);
if(temp__4425__auto__){
var seq__224__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__224__$1)){
var c__3157__auto__ = cljs.core.chunk_first.call(null,seq__224__$1);
var G__260 = cljs.core.chunk_rest.call(null,seq__224__$1);
var G__261 = c__3157__auto__;
var G__262 = cljs.core.count.call(null,c__3157__auto__);
var G__263 = (0);
seq__224 = G__260;
chunk__225 = G__261;
count__226 = G__262;
i__227 = G__263;
continue;
} else {
var vec__231 = cljs.core.first.call(null,seq__224__$1);
var name = cljs.core.nth.call(null,vec__231,(0),null);
var map__232 = cljs.core.nth.call(null,vec__231,(1),null);
var map__232__$1 = ((((!((map__232 == null)))?((((map__232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__232):map__232);
var doc = cljs.core.get.call(null,map__232__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__232__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__264 = cljs.core.next.call(null,seq__224__$1);
var G__265 = null;
var G__266 = (0);
var G__267 = (0);
seq__224 = G__264;
chunk__225 = G__265;
count__226 = G__266;
i__227 = G__267;
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