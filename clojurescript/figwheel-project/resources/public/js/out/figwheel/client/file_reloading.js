// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18370__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18370__auto__){
return or__18370__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18370__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23466_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23466_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23471 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23472 = null;
var count__23473 = (0);
var i__23474 = (0);
while(true){
if((i__23474 < count__23473)){
var n = cljs.core._nth.call(null,chunk__23472,i__23474);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23475 = seq__23471;
var G__23476 = chunk__23472;
var G__23477 = count__23473;
var G__23478 = (i__23474 + (1));
seq__23471 = G__23475;
chunk__23472 = G__23476;
count__23473 = G__23477;
i__23474 = G__23478;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23471);
if(temp__4657__auto__){
var seq__23471__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23471__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__23471__$1);
var G__23479 = cljs.core.chunk_rest.call(null,seq__23471__$1);
var G__23480 = c__19173__auto__;
var G__23481 = cljs.core.count.call(null,c__19173__auto__);
var G__23482 = (0);
seq__23471 = G__23479;
chunk__23472 = G__23480;
count__23473 = G__23481;
i__23474 = G__23482;
continue;
} else {
var n = cljs.core.first.call(null,seq__23471__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23483 = cljs.core.next.call(null,seq__23471__$1);
var G__23484 = null;
var G__23485 = (0);
var G__23486 = (0);
seq__23471 = G__23483;
chunk__23472 = G__23484;
count__23473 = G__23485;
i__23474 = G__23486;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23525_23532 = cljs.core.seq.call(null,deps);
var chunk__23526_23533 = null;
var count__23527_23534 = (0);
var i__23528_23535 = (0);
while(true){
if((i__23528_23535 < count__23527_23534)){
var dep_23536 = cljs.core._nth.call(null,chunk__23526_23533,i__23528_23535);
topo_sort_helper_STAR_.call(null,dep_23536,(depth + (1)),state);

var G__23537 = seq__23525_23532;
var G__23538 = chunk__23526_23533;
var G__23539 = count__23527_23534;
var G__23540 = (i__23528_23535 + (1));
seq__23525_23532 = G__23537;
chunk__23526_23533 = G__23538;
count__23527_23534 = G__23539;
i__23528_23535 = G__23540;
continue;
} else {
var temp__4657__auto___23541 = cljs.core.seq.call(null,seq__23525_23532);
if(temp__4657__auto___23541){
var seq__23525_23542__$1 = temp__4657__auto___23541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23525_23542__$1)){
var c__19173__auto___23543 = cljs.core.chunk_first.call(null,seq__23525_23542__$1);
var G__23544 = cljs.core.chunk_rest.call(null,seq__23525_23542__$1);
var G__23545 = c__19173__auto___23543;
var G__23546 = cljs.core.count.call(null,c__19173__auto___23543);
var G__23547 = (0);
seq__23525_23532 = G__23544;
chunk__23526_23533 = G__23545;
count__23527_23534 = G__23546;
i__23528_23535 = G__23547;
continue;
} else {
var dep_23548 = cljs.core.first.call(null,seq__23525_23542__$1);
topo_sort_helper_STAR_.call(null,dep_23548,(depth + (1)),state);

var G__23549 = cljs.core.next.call(null,seq__23525_23542__$1);
var G__23550 = null;
var G__23551 = (0);
var G__23552 = (0);
seq__23525_23532 = G__23549;
chunk__23526_23533 = G__23550;
count__23527_23534 = G__23551;
i__23528_23535 = G__23552;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23529){
var vec__23531 = p__23529;
var x = cljs.core.nth.call(null,vec__23531,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23531,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23531,x,xs,get_deps__$1){
return (function (p1__23487_SHARP_){
return clojure.set.difference.call(null,p1__23487_SHARP_,x);
});})(vec__23531,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23565 = cljs.core.seq.call(null,provides);
var chunk__23566 = null;
var count__23567 = (0);
var i__23568 = (0);
while(true){
if((i__23568 < count__23567)){
var prov = cljs.core._nth.call(null,chunk__23566,i__23568);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23569_23577 = cljs.core.seq.call(null,requires);
var chunk__23570_23578 = null;
var count__23571_23579 = (0);
var i__23572_23580 = (0);
while(true){
if((i__23572_23580 < count__23571_23579)){
var req_23581 = cljs.core._nth.call(null,chunk__23570_23578,i__23572_23580);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23581,prov);

var G__23582 = seq__23569_23577;
var G__23583 = chunk__23570_23578;
var G__23584 = count__23571_23579;
var G__23585 = (i__23572_23580 + (1));
seq__23569_23577 = G__23582;
chunk__23570_23578 = G__23583;
count__23571_23579 = G__23584;
i__23572_23580 = G__23585;
continue;
} else {
var temp__4657__auto___23586 = cljs.core.seq.call(null,seq__23569_23577);
if(temp__4657__auto___23586){
var seq__23569_23587__$1 = temp__4657__auto___23586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23569_23587__$1)){
var c__19173__auto___23588 = cljs.core.chunk_first.call(null,seq__23569_23587__$1);
var G__23589 = cljs.core.chunk_rest.call(null,seq__23569_23587__$1);
var G__23590 = c__19173__auto___23588;
var G__23591 = cljs.core.count.call(null,c__19173__auto___23588);
var G__23592 = (0);
seq__23569_23577 = G__23589;
chunk__23570_23578 = G__23590;
count__23571_23579 = G__23591;
i__23572_23580 = G__23592;
continue;
} else {
var req_23593 = cljs.core.first.call(null,seq__23569_23587__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23593,prov);

var G__23594 = cljs.core.next.call(null,seq__23569_23587__$1);
var G__23595 = null;
var G__23596 = (0);
var G__23597 = (0);
seq__23569_23577 = G__23594;
chunk__23570_23578 = G__23595;
count__23571_23579 = G__23596;
i__23572_23580 = G__23597;
continue;
}
} else {
}
}
break;
}

var G__23598 = seq__23565;
var G__23599 = chunk__23566;
var G__23600 = count__23567;
var G__23601 = (i__23568 + (1));
seq__23565 = G__23598;
chunk__23566 = G__23599;
count__23567 = G__23600;
i__23568 = G__23601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23565);
if(temp__4657__auto__){
var seq__23565__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23565__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__23565__$1);
var G__23602 = cljs.core.chunk_rest.call(null,seq__23565__$1);
var G__23603 = c__19173__auto__;
var G__23604 = cljs.core.count.call(null,c__19173__auto__);
var G__23605 = (0);
seq__23565 = G__23602;
chunk__23566 = G__23603;
count__23567 = G__23604;
i__23568 = G__23605;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23565__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23573_23606 = cljs.core.seq.call(null,requires);
var chunk__23574_23607 = null;
var count__23575_23608 = (0);
var i__23576_23609 = (0);
while(true){
if((i__23576_23609 < count__23575_23608)){
var req_23610 = cljs.core._nth.call(null,chunk__23574_23607,i__23576_23609);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23610,prov);

var G__23611 = seq__23573_23606;
var G__23612 = chunk__23574_23607;
var G__23613 = count__23575_23608;
var G__23614 = (i__23576_23609 + (1));
seq__23573_23606 = G__23611;
chunk__23574_23607 = G__23612;
count__23575_23608 = G__23613;
i__23576_23609 = G__23614;
continue;
} else {
var temp__4657__auto___23615__$1 = cljs.core.seq.call(null,seq__23573_23606);
if(temp__4657__auto___23615__$1){
var seq__23573_23616__$1 = temp__4657__auto___23615__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23573_23616__$1)){
var c__19173__auto___23617 = cljs.core.chunk_first.call(null,seq__23573_23616__$1);
var G__23618 = cljs.core.chunk_rest.call(null,seq__23573_23616__$1);
var G__23619 = c__19173__auto___23617;
var G__23620 = cljs.core.count.call(null,c__19173__auto___23617);
var G__23621 = (0);
seq__23573_23606 = G__23618;
chunk__23574_23607 = G__23619;
count__23575_23608 = G__23620;
i__23576_23609 = G__23621;
continue;
} else {
var req_23622 = cljs.core.first.call(null,seq__23573_23616__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23622,prov);

var G__23623 = cljs.core.next.call(null,seq__23573_23616__$1);
var G__23624 = null;
var G__23625 = (0);
var G__23626 = (0);
seq__23573_23606 = G__23623;
chunk__23574_23607 = G__23624;
count__23575_23608 = G__23625;
i__23576_23609 = G__23626;
continue;
}
} else {
}
}
break;
}

var G__23627 = cljs.core.next.call(null,seq__23565__$1);
var G__23628 = null;
var G__23629 = (0);
var G__23630 = (0);
seq__23565 = G__23627;
chunk__23566 = G__23628;
count__23567 = G__23629;
i__23568 = G__23630;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23635_23639 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23636_23640 = null;
var count__23637_23641 = (0);
var i__23638_23642 = (0);
while(true){
if((i__23638_23642 < count__23637_23641)){
var ns_23643 = cljs.core._nth.call(null,chunk__23636_23640,i__23638_23642);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23643);

var G__23644 = seq__23635_23639;
var G__23645 = chunk__23636_23640;
var G__23646 = count__23637_23641;
var G__23647 = (i__23638_23642 + (1));
seq__23635_23639 = G__23644;
chunk__23636_23640 = G__23645;
count__23637_23641 = G__23646;
i__23638_23642 = G__23647;
continue;
} else {
var temp__4657__auto___23648 = cljs.core.seq.call(null,seq__23635_23639);
if(temp__4657__auto___23648){
var seq__23635_23649__$1 = temp__4657__auto___23648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23635_23649__$1)){
var c__19173__auto___23650 = cljs.core.chunk_first.call(null,seq__23635_23649__$1);
var G__23651 = cljs.core.chunk_rest.call(null,seq__23635_23649__$1);
var G__23652 = c__19173__auto___23650;
var G__23653 = cljs.core.count.call(null,c__19173__auto___23650);
var G__23654 = (0);
seq__23635_23639 = G__23651;
chunk__23636_23640 = G__23652;
count__23637_23641 = G__23653;
i__23638_23642 = G__23654;
continue;
} else {
var ns_23655 = cljs.core.first.call(null,seq__23635_23649__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23655);

var G__23656 = cljs.core.next.call(null,seq__23635_23649__$1);
var G__23657 = null;
var G__23658 = (0);
var G__23659 = (0);
seq__23635_23639 = G__23656;
chunk__23636_23640 = G__23657;
count__23637_23641 = G__23658;
i__23638_23642 = G__23659;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18370__auto__ = goog.require__;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23660__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23661__i = 0, G__23661__a = new Array(arguments.length -  0);
while (G__23661__i < G__23661__a.length) {G__23661__a[G__23661__i] = arguments[G__23661__i + 0]; ++G__23661__i;}
  args = new cljs.core.IndexedSeq(G__23661__a,0);
} 
return G__23660__delegate.call(this,args);};
G__23660.cljs$lang$maxFixedArity = 0;
G__23660.cljs$lang$applyTo = (function (arglist__23662){
var args = cljs.core.seq(arglist__23662);
return G__23660__delegate(args);
});
G__23660.cljs$core$IFn$_invoke$arity$variadic = G__23660__delegate;
return G__23660;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23664 = cljs.core._EQ_;
var expr__23665 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23664.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23665))){
var path_parts = ((function (pred__23664,expr__23665){
return (function (p1__23663_SHARP_){
return clojure.string.split.call(null,p1__23663_SHARP_,/[\/\\]/);
});})(pred__23664,expr__23665))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23664,expr__23665){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23667){if((e23667 instanceof Error)){
var e = e23667;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23667;

}
}})());
});
;})(path_parts,sep,root,pred__23664,expr__23665))
} else {
if(cljs.core.truth_(pred__23664.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23665))){
return ((function (pred__23664,expr__23665){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23664,expr__23665){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23664,expr__23665))
);

return deferred.addErrback(((function (deferred,pred__23664,expr__23665){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23664,expr__23665))
);
});
;})(pred__23664,expr__23665))
} else {
return ((function (pred__23664,expr__23665){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23664,expr__23665))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23668,callback){
var map__23671 = p__23668;
var map__23671__$1 = ((((!((map__23671 == null)))?((((map__23671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23671):map__23671);
var file_msg = map__23671__$1;
var request_url = cljs.core.get.call(null,map__23671__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23671,map__23671__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23671,map__23671__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__){
return (function (state_23695){
var state_val_23696 = (state_23695[(1)]);
if((state_val_23696 === (7))){
var inst_23691 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
var statearr_23697_23717 = state_23695__$1;
(statearr_23697_23717[(2)] = inst_23691);

(statearr_23697_23717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (1))){
var state_23695__$1 = state_23695;
var statearr_23698_23718 = state_23695__$1;
(statearr_23698_23718[(2)] = null);

(statearr_23698_23718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (4))){
var inst_23675 = (state_23695[(7)]);
var inst_23675__$1 = (state_23695[(2)]);
var state_23695__$1 = (function (){var statearr_23699 = state_23695;
(statearr_23699[(7)] = inst_23675__$1);

return statearr_23699;
})();
if(cljs.core.truth_(inst_23675__$1)){
var statearr_23700_23719 = state_23695__$1;
(statearr_23700_23719[(1)] = (5));

} else {
var statearr_23701_23720 = state_23695__$1;
(statearr_23701_23720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (6))){
var state_23695__$1 = state_23695;
var statearr_23702_23721 = state_23695__$1;
(statearr_23702_23721[(2)] = null);

(statearr_23702_23721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (3))){
var inst_23693 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23695__$1,inst_23693);
} else {
if((state_val_23696 === (2))){
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23695__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23696 === (11))){
var inst_23687 = (state_23695[(2)]);
var state_23695__$1 = (function (){var statearr_23703 = state_23695;
(statearr_23703[(8)] = inst_23687);

return statearr_23703;
})();
var statearr_23704_23722 = state_23695__$1;
(statearr_23704_23722[(2)] = null);

(statearr_23704_23722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (9))){
var inst_23679 = (state_23695[(9)]);
var inst_23681 = (state_23695[(10)]);
var inst_23683 = inst_23681.call(null,inst_23679);
var state_23695__$1 = state_23695;
var statearr_23705_23723 = state_23695__$1;
(statearr_23705_23723[(2)] = inst_23683);

(statearr_23705_23723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (5))){
var inst_23675 = (state_23695[(7)]);
var inst_23677 = figwheel.client.file_reloading.blocking_load.call(null,inst_23675);
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23695__$1,(8),inst_23677);
} else {
if((state_val_23696 === (10))){
var inst_23679 = (state_23695[(9)]);
var inst_23685 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23679);
var state_23695__$1 = state_23695;
var statearr_23706_23724 = state_23695__$1;
(statearr_23706_23724[(2)] = inst_23685);

(statearr_23706_23724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (8))){
var inst_23675 = (state_23695[(7)]);
var inst_23681 = (state_23695[(10)]);
var inst_23679 = (state_23695[(2)]);
var inst_23680 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23681__$1 = cljs.core.get.call(null,inst_23680,inst_23675);
var state_23695__$1 = (function (){var statearr_23707 = state_23695;
(statearr_23707[(9)] = inst_23679);

(statearr_23707[(10)] = inst_23681__$1);

return statearr_23707;
})();
if(cljs.core.truth_(inst_23681__$1)){
var statearr_23708_23725 = state_23695__$1;
(statearr_23708_23725[(1)] = (9));

} else {
var statearr_23709_23726 = state_23695__$1;
(statearr_23709_23726[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20523__auto__))
;
return ((function (switch__20411__auto__,c__20523__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20412__auto__ = null;
var figwheel$client$file_reloading$state_machine__20412__auto____0 = (function (){
var statearr_23713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23713[(0)] = figwheel$client$file_reloading$state_machine__20412__auto__);

(statearr_23713[(1)] = (1));

return statearr_23713;
});
var figwheel$client$file_reloading$state_machine__20412__auto____1 = (function (state_23695){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_23695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e23714){if((e23714 instanceof Object)){
var ex__20415__auto__ = e23714;
var statearr_23715_23727 = state_23695;
(statearr_23715_23727[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23728 = state_23695;
state_23695 = G__23728;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20412__auto__ = function(state_23695){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20412__auto____1.call(this,state_23695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20412__auto____0;
figwheel$client$file_reloading$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20412__auto____1;
return figwheel$client$file_reloading$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__))
})();
var state__20525__auto__ = (function (){var statearr_23716 = f__20524__auto__.call(null);
(statearr_23716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_23716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__))
);

return c__20523__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23729,callback){
var map__23732 = p__23729;
var map__23732__$1 = ((((!((map__23732 == null)))?((((map__23732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23732):map__23732);
var file_msg = map__23732__$1;
var namespace = cljs.core.get.call(null,map__23732__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23732,map__23732__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23732,map__23732__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23734){
var map__23737 = p__23734;
var map__23737__$1 = ((((!((map__23737 == null)))?((((map__23737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23737):map__23737);
var file_msg = map__23737__$1;
var namespace = cljs.core.get.call(null,map__23737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18358__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18358__auto__){
var or__18370__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var or__18370__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto____$1)){
return or__18370__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18358__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23739,callback){
var map__23742 = p__23739;
var map__23742__$1 = ((((!((map__23742 == null)))?((((map__23742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23742):map__23742);
var file_msg = map__23742__$1;
var request_url = cljs.core.get.call(null,map__23742__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20523__auto___23830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___23830,out){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___23830,out){
return (function (state_23812){
var state_val_23813 = (state_23812[(1)]);
if((state_val_23813 === (1))){
var inst_23790 = cljs.core.nth.call(null,files,(0),null);
var inst_23791 = cljs.core.nthnext.call(null,files,(1));
var inst_23792 = files;
var state_23812__$1 = (function (){var statearr_23814 = state_23812;
(statearr_23814[(7)] = inst_23791);

(statearr_23814[(8)] = inst_23790);

(statearr_23814[(9)] = inst_23792);

return statearr_23814;
})();
var statearr_23815_23831 = state_23812__$1;
(statearr_23815_23831[(2)] = null);

(statearr_23815_23831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (2))){
var inst_23795 = (state_23812[(10)]);
var inst_23792 = (state_23812[(9)]);
var inst_23795__$1 = cljs.core.nth.call(null,inst_23792,(0),null);
var inst_23796 = cljs.core.nthnext.call(null,inst_23792,(1));
var inst_23797 = (inst_23795__$1 == null);
var inst_23798 = cljs.core.not.call(null,inst_23797);
var state_23812__$1 = (function (){var statearr_23816 = state_23812;
(statearr_23816[(10)] = inst_23795__$1);

(statearr_23816[(11)] = inst_23796);

return statearr_23816;
})();
if(inst_23798){
var statearr_23817_23832 = state_23812__$1;
(statearr_23817_23832[(1)] = (4));

} else {
var statearr_23818_23833 = state_23812__$1;
(statearr_23818_23833[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (3))){
var inst_23810 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23812__$1,inst_23810);
} else {
if((state_val_23813 === (4))){
var inst_23795 = (state_23812[(10)]);
var inst_23800 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23795);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23812__$1,(7),inst_23800);
} else {
if((state_val_23813 === (5))){
var inst_23806 = cljs.core.async.close_BANG_.call(null,out);
var state_23812__$1 = state_23812;
var statearr_23819_23834 = state_23812__$1;
(statearr_23819_23834[(2)] = inst_23806);

(statearr_23819_23834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (6))){
var inst_23808 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23820_23835 = state_23812__$1;
(statearr_23820_23835[(2)] = inst_23808);

(statearr_23820_23835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (7))){
var inst_23796 = (state_23812[(11)]);
var inst_23802 = (state_23812[(2)]);
var inst_23803 = cljs.core.async.put_BANG_.call(null,out,inst_23802);
var inst_23792 = inst_23796;
var state_23812__$1 = (function (){var statearr_23821 = state_23812;
(statearr_23821[(12)] = inst_23803);

(statearr_23821[(9)] = inst_23792);

return statearr_23821;
})();
var statearr_23822_23836 = state_23812__$1;
(statearr_23822_23836[(2)] = null);

(statearr_23822_23836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20523__auto___23830,out))
;
return ((function (switch__20411__auto__,c__20523__auto___23830,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto____0 = (function (){
var statearr_23826 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23826[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto__);

(statearr_23826[(1)] = (1));

return statearr_23826;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto____1 = (function (state_23812){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_23812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e23827){if((e23827 instanceof Object)){
var ex__20415__auto__ = e23827;
var statearr_23828_23837 = state_23812;
(statearr_23828_23837[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23838 = state_23812;
state_23812 = G__23838;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto__ = function(state_23812){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto____1.call(this,state_23812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___23830,out))
})();
var state__20525__auto__ = (function (){var statearr_23829 = f__20524__auto__.call(null);
(statearr_23829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___23830);

return statearr_23829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___23830,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23839,opts){
var map__23843 = p__23839;
var map__23843__$1 = ((((!((map__23843 == null)))?((((map__23843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23843):map__23843);
var eval_body__$1 = cljs.core.get.call(null,map__23843__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23843__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18358__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18358__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18358__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23845){var e = e23845;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23846_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23846_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23851){
var vec__23852 = p__23851;
var k = cljs.core.nth.call(null,vec__23852,(0),null);
var v = cljs.core.nth.call(null,vec__23852,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23853){
var vec__23854 = p__23853;
var k = cljs.core.nth.call(null,vec__23854,(0),null);
var v = cljs.core.nth.call(null,vec__23854,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23858,p__23859){
var map__24106 = p__23858;
var map__24106__$1 = ((((!((map__24106 == null)))?((((map__24106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24106):map__24106);
var opts = map__24106__$1;
var before_jsload = cljs.core.get.call(null,map__24106__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24106__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24106__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24107 = p__23859;
var map__24107__$1 = ((((!((map__24107 == null)))?((((map__24107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24107):map__24107);
var msg = map__24107__$1;
var files = cljs.core.get.call(null,map__24107__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24107__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24107__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24260){
var state_val_24261 = (state_24260[(1)]);
if((state_val_24261 === (7))){
var inst_24124 = (state_24260[(7)]);
var inst_24121 = (state_24260[(8)]);
var inst_24123 = (state_24260[(9)]);
var inst_24122 = (state_24260[(10)]);
var inst_24129 = cljs.core._nth.call(null,inst_24122,inst_24124);
var inst_24130 = figwheel.client.file_reloading.eval_body.call(null,inst_24129,opts);
var inst_24131 = (inst_24124 + (1));
var tmp24262 = inst_24121;
var tmp24263 = inst_24123;
var tmp24264 = inst_24122;
var inst_24121__$1 = tmp24262;
var inst_24122__$1 = tmp24264;
var inst_24123__$1 = tmp24263;
var inst_24124__$1 = inst_24131;
var state_24260__$1 = (function (){var statearr_24265 = state_24260;
(statearr_24265[(7)] = inst_24124__$1);

(statearr_24265[(8)] = inst_24121__$1);

(statearr_24265[(9)] = inst_24123__$1);

(statearr_24265[(10)] = inst_24122__$1);

(statearr_24265[(11)] = inst_24130);

return statearr_24265;
})();
var statearr_24266_24352 = state_24260__$1;
(statearr_24266_24352[(2)] = null);

(statearr_24266_24352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (20))){
var inst_24164 = (state_24260[(12)]);
var inst_24172 = figwheel.client.file_reloading.sort_files.call(null,inst_24164);
var state_24260__$1 = state_24260;
var statearr_24267_24353 = state_24260__$1;
(statearr_24267_24353[(2)] = inst_24172);

(statearr_24267_24353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (27))){
var state_24260__$1 = state_24260;
var statearr_24268_24354 = state_24260__$1;
(statearr_24268_24354[(2)] = null);

(statearr_24268_24354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (1))){
var inst_24113 = (state_24260[(13)]);
var inst_24110 = before_jsload.call(null,files);
var inst_24111 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24112 = (function (){return ((function (inst_24113,inst_24110,inst_24111,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23855_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23855_SHARP_);
});
;})(inst_24113,inst_24110,inst_24111,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24113__$1 = cljs.core.filter.call(null,inst_24112,files);
var inst_24114 = cljs.core.not_empty.call(null,inst_24113__$1);
var state_24260__$1 = (function (){var statearr_24269 = state_24260;
(statearr_24269[(14)] = inst_24110);

(statearr_24269[(15)] = inst_24111);

(statearr_24269[(13)] = inst_24113__$1);

return statearr_24269;
})();
if(cljs.core.truth_(inst_24114)){
var statearr_24270_24355 = state_24260__$1;
(statearr_24270_24355[(1)] = (2));

} else {
var statearr_24271_24356 = state_24260__$1;
(statearr_24271_24356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (24))){
var state_24260__$1 = state_24260;
var statearr_24272_24357 = state_24260__$1;
(statearr_24272_24357[(2)] = null);

(statearr_24272_24357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (39))){
var inst_24214 = (state_24260[(16)]);
var state_24260__$1 = state_24260;
var statearr_24273_24358 = state_24260__$1;
(statearr_24273_24358[(2)] = inst_24214);

(statearr_24273_24358[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (46))){
var inst_24255 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24274_24359 = state_24260__$1;
(statearr_24274_24359[(2)] = inst_24255);

(statearr_24274_24359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (4))){
var inst_24158 = (state_24260[(2)]);
var inst_24159 = cljs.core.List.EMPTY;
var inst_24160 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24159);
var inst_24161 = (function (){return ((function (inst_24158,inst_24159,inst_24160,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23856_SHARP_){
var and__18358__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23856_SHARP_);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23856_SHARP_));
} else {
return and__18358__auto__;
}
});
;})(inst_24158,inst_24159,inst_24160,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24162 = cljs.core.filter.call(null,inst_24161,files);
var inst_24163 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24164 = cljs.core.concat.call(null,inst_24162,inst_24163);
var state_24260__$1 = (function (){var statearr_24275 = state_24260;
(statearr_24275[(12)] = inst_24164);

(statearr_24275[(17)] = inst_24158);

(statearr_24275[(18)] = inst_24160);

return statearr_24275;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24276_24360 = state_24260__$1;
(statearr_24276_24360[(1)] = (16));

} else {
var statearr_24277_24361 = state_24260__$1;
(statearr_24277_24361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (15))){
var inst_24148 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24278_24362 = state_24260__$1;
(statearr_24278_24362[(2)] = inst_24148);

(statearr_24278_24362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (21))){
var inst_24174 = (state_24260[(19)]);
var inst_24174__$1 = (state_24260[(2)]);
var inst_24175 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24174__$1);
var state_24260__$1 = (function (){var statearr_24279 = state_24260;
(statearr_24279[(19)] = inst_24174__$1);

return statearr_24279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24260__$1,(22),inst_24175);
} else {
if((state_val_24261 === (31))){
var inst_24258 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24260__$1,inst_24258);
} else {
if((state_val_24261 === (32))){
var inst_24214 = (state_24260[(16)]);
var inst_24219 = inst_24214.cljs$lang$protocol_mask$partition0$;
var inst_24220 = (inst_24219 & (64));
var inst_24221 = inst_24214.cljs$core$ISeq$;
var inst_24222 = (inst_24220) || (inst_24221);
var state_24260__$1 = state_24260;
if(cljs.core.truth_(inst_24222)){
var statearr_24280_24363 = state_24260__$1;
(statearr_24280_24363[(1)] = (35));

} else {
var statearr_24281_24364 = state_24260__$1;
(statearr_24281_24364[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (40))){
var inst_24235 = (state_24260[(20)]);
var inst_24234 = (state_24260[(2)]);
var inst_24235__$1 = cljs.core.get.call(null,inst_24234,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24236 = cljs.core.get.call(null,inst_24234,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24237 = cljs.core.not_empty.call(null,inst_24235__$1);
var state_24260__$1 = (function (){var statearr_24282 = state_24260;
(statearr_24282[(20)] = inst_24235__$1);

(statearr_24282[(21)] = inst_24236);

return statearr_24282;
})();
if(cljs.core.truth_(inst_24237)){
var statearr_24283_24365 = state_24260__$1;
(statearr_24283_24365[(1)] = (41));

} else {
var statearr_24284_24366 = state_24260__$1;
(statearr_24284_24366[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (33))){
var state_24260__$1 = state_24260;
var statearr_24285_24367 = state_24260__$1;
(statearr_24285_24367[(2)] = false);

(statearr_24285_24367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (13))){
var inst_24134 = (state_24260[(22)]);
var inst_24138 = cljs.core.chunk_first.call(null,inst_24134);
var inst_24139 = cljs.core.chunk_rest.call(null,inst_24134);
var inst_24140 = cljs.core.count.call(null,inst_24138);
var inst_24121 = inst_24139;
var inst_24122 = inst_24138;
var inst_24123 = inst_24140;
var inst_24124 = (0);
var state_24260__$1 = (function (){var statearr_24286 = state_24260;
(statearr_24286[(7)] = inst_24124);

(statearr_24286[(8)] = inst_24121);

(statearr_24286[(9)] = inst_24123);

(statearr_24286[(10)] = inst_24122);

return statearr_24286;
})();
var statearr_24287_24368 = state_24260__$1;
(statearr_24287_24368[(2)] = null);

(statearr_24287_24368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (22))){
var inst_24177 = (state_24260[(23)]);
var inst_24174 = (state_24260[(19)]);
var inst_24178 = (state_24260[(24)]);
var inst_24182 = (state_24260[(25)]);
var inst_24177__$1 = (state_24260[(2)]);
var inst_24178__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24177__$1);
var inst_24179 = (function (){var all_files = inst_24174;
var res_SINGLEQUOTE_ = inst_24177__$1;
var res = inst_24178__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24177,inst_24174,inst_24178,inst_24182,inst_24177__$1,inst_24178__$1,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23857_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23857_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24177,inst_24174,inst_24178,inst_24182,inst_24177__$1,inst_24178__$1,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24180 = cljs.core.filter.call(null,inst_24179,inst_24177__$1);
var inst_24181 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24182__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24181);
var inst_24183 = cljs.core.not_empty.call(null,inst_24182__$1);
var state_24260__$1 = (function (){var statearr_24288 = state_24260;
(statearr_24288[(23)] = inst_24177__$1);

(statearr_24288[(26)] = inst_24180);

(statearr_24288[(24)] = inst_24178__$1);

(statearr_24288[(25)] = inst_24182__$1);

return statearr_24288;
})();
if(cljs.core.truth_(inst_24183)){
var statearr_24289_24369 = state_24260__$1;
(statearr_24289_24369[(1)] = (23));

} else {
var statearr_24290_24370 = state_24260__$1;
(statearr_24290_24370[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (36))){
var state_24260__$1 = state_24260;
var statearr_24291_24371 = state_24260__$1;
(statearr_24291_24371[(2)] = false);

(statearr_24291_24371[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (41))){
var inst_24235 = (state_24260[(20)]);
var inst_24239 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24240 = cljs.core.map.call(null,inst_24239,inst_24235);
var inst_24241 = cljs.core.pr_str.call(null,inst_24240);
var inst_24242 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24241)].join('');
var inst_24243 = figwheel.client.utils.log.call(null,inst_24242);
var state_24260__$1 = state_24260;
var statearr_24292_24372 = state_24260__$1;
(statearr_24292_24372[(2)] = inst_24243);

(statearr_24292_24372[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (43))){
var inst_24236 = (state_24260[(21)]);
var inst_24246 = (state_24260[(2)]);
var inst_24247 = cljs.core.not_empty.call(null,inst_24236);
var state_24260__$1 = (function (){var statearr_24293 = state_24260;
(statearr_24293[(27)] = inst_24246);

return statearr_24293;
})();
if(cljs.core.truth_(inst_24247)){
var statearr_24294_24373 = state_24260__$1;
(statearr_24294_24373[(1)] = (44));

} else {
var statearr_24295_24374 = state_24260__$1;
(statearr_24295_24374[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (29))){
var inst_24177 = (state_24260[(23)]);
var inst_24174 = (state_24260[(19)]);
var inst_24180 = (state_24260[(26)]);
var inst_24178 = (state_24260[(24)]);
var inst_24182 = (state_24260[(25)]);
var inst_24214 = (state_24260[(16)]);
var inst_24210 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24213 = (function (){var all_files = inst_24174;
var res_SINGLEQUOTE_ = inst_24177;
var res = inst_24178;
var files_not_loaded = inst_24180;
var dependencies_that_loaded = inst_24182;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24177,inst_24174,inst_24180,inst_24178,inst_24182,inst_24214,inst_24210,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24212){
var map__24296 = p__24212;
var map__24296__$1 = ((((!((map__24296 == null)))?((((map__24296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24296):map__24296);
var namespace = cljs.core.get.call(null,map__24296__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24177,inst_24174,inst_24180,inst_24178,inst_24182,inst_24214,inst_24210,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24214__$1 = cljs.core.group_by.call(null,inst_24213,inst_24180);
var inst_24216 = (inst_24214__$1 == null);
var inst_24217 = cljs.core.not.call(null,inst_24216);
var state_24260__$1 = (function (){var statearr_24298 = state_24260;
(statearr_24298[(28)] = inst_24210);

(statearr_24298[(16)] = inst_24214__$1);

return statearr_24298;
})();
if(inst_24217){
var statearr_24299_24375 = state_24260__$1;
(statearr_24299_24375[(1)] = (32));

} else {
var statearr_24300_24376 = state_24260__$1;
(statearr_24300_24376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (44))){
var inst_24236 = (state_24260[(21)]);
var inst_24249 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24236);
var inst_24250 = cljs.core.pr_str.call(null,inst_24249);
var inst_24251 = [cljs.core.str("not required: "),cljs.core.str(inst_24250)].join('');
var inst_24252 = figwheel.client.utils.log.call(null,inst_24251);
var state_24260__$1 = state_24260;
var statearr_24301_24377 = state_24260__$1;
(statearr_24301_24377[(2)] = inst_24252);

(statearr_24301_24377[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (6))){
var inst_24155 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24302_24378 = state_24260__$1;
(statearr_24302_24378[(2)] = inst_24155);

(statearr_24302_24378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (28))){
var inst_24180 = (state_24260[(26)]);
var inst_24207 = (state_24260[(2)]);
var inst_24208 = cljs.core.not_empty.call(null,inst_24180);
var state_24260__$1 = (function (){var statearr_24303 = state_24260;
(statearr_24303[(29)] = inst_24207);

return statearr_24303;
})();
if(cljs.core.truth_(inst_24208)){
var statearr_24304_24379 = state_24260__$1;
(statearr_24304_24379[(1)] = (29));

} else {
var statearr_24305_24380 = state_24260__$1;
(statearr_24305_24380[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (25))){
var inst_24178 = (state_24260[(24)]);
var inst_24194 = (state_24260[(2)]);
var inst_24195 = cljs.core.not_empty.call(null,inst_24178);
var state_24260__$1 = (function (){var statearr_24306 = state_24260;
(statearr_24306[(30)] = inst_24194);

return statearr_24306;
})();
if(cljs.core.truth_(inst_24195)){
var statearr_24307_24381 = state_24260__$1;
(statearr_24307_24381[(1)] = (26));

} else {
var statearr_24308_24382 = state_24260__$1;
(statearr_24308_24382[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (34))){
var inst_24229 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
if(cljs.core.truth_(inst_24229)){
var statearr_24309_24383 = state_24260__$1;
(statearr_24309_24383[(1)] = (38));

} else {
var statearr_24310_24384 = state_24260__$1;
(statearr_24310_24384[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (17))){
var state_24260__$1 = state_24260;
var statearr_24311_24385 = state_24260__$1;
(statearr_24311_24385[(2)] = recompile_dependents);

(statearr_24311_24385[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (3))){
var state_24260__$1 = state_24260;
var statearr_24312_24386 = state_24260__$1;
(statearr_24312_24386[(2)] = null);

(statearr_24312_24386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (12))){
var inst_24151 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24313_24387 = state_24260__$1;
(statearr_24313_24387[(2)] = inst_24151);

(statearr_24313_24387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (2))){
var inst_24113 = (state_24260[(13)]);
var inst_24120 = cljs.core.seq.call(null,inst_24113);
var inst_24121 = inst_24120;
var inst_24122 = null;
var inst_24123 = (0);
var inst_24124 = (0);
var state_24260__$1 = (function (){var statearr_24314 = state_24260;
(statearr_24314[(7)] = inst_24124);

(statearr_24314[(8)] = inst_24121);

(statearr_24314[(9)] = inst_24123);

(statearr_24314[(10)] = inst_24122);

return statearr_24314;
})();
var statearr_24315_24388 = state_24260__$1;
(statearr_24315_24388[(2)] = null);

(statearr_24315_24388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (23))){
var inst_24177 = (state_24260[(23)]);
var inst_24174 = (state_24260[(19)]);
var inst_24180 = (state_24260[(26)]);
var inst_24178 = (state_24260[(24)]);
var inst_24182 = (state_24260[(25)]);
var inst_24185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24187 = (function (){var all_files = inst_24174;
var res_SINGLEQUOTE_ = inst_24177;
var res = inst_24178;
var files_not_loaded = inst_24180;
var dependencies_that_loaded = inst_24182;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24177,inst_24174,inst_24180,inst_24178,inst_24182,inst_24185,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24186){
var map__24316 = p__24186;
var map__24316__$1 = ((((!((map__24316 == null)))?((((map__24316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24316):map__24316);
var request_url = cljs.core.get.call(null,map__24316__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24177,inst_24174,inst_24180,inst_24178,inst_24182,inst_24185,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24188 = cljs.core.reverse.call(null,inst_24182);
var inst_24189 = cljs.core.map.call(null,inst_24187,inst_24188);
var inst_24190 = cljs.core.pr_str.call(null,inst_24189);
var inst_24191 = figwheel.client.utils.log.call(null,inst_24190);
var state_24260__$1 = (function (){var statearr_24318 = state_24260;
(statearr_24318[(31)] = inst_24185);

return statearr_24318;
})();
var statearr_24319_24389 = state_24260__$1;
(statearr_24319_24389[(2)] = inst_24191);

(statearr_24319_24389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (35))){
var state_24260__$1 = state_24260;
var statearr_24320_24390 = state_24260__$1;
(statearr_24320_24390[(2)] = true);

(statearr_24320_24390[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (19))){
var inst_24164 = (state_24260[(12)]);
var inst_24170 = figwheel.client.file_reloading.expand_files.call(null,inst_24164);
var state_24260__$1 = state_24260;
var statearr_24321_24391 = state_24260__$1;
(statearr_24321_24391[(2)] = inst_24170);

(statearr_24321_24391[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (11))){
var state_24260__$1 = state_24260;
var statearr_24322_24392 = state_24260__$1;
(statearr_24322_24392[(2)] = null);

(statearr_24322_24392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (9))){
var inst_24153 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24323_24393 = state_24260__$1;
(statearr_24323_24393[(2)] = inst_24153);

(statearr_24323_24393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (5))){
var inst_24124 = (state_24260[(7)]);
var inst_24123 = (state_24260[(9)]);
var inst_24126 = (inst_24124 < inst_24123);
var inst_24127 = inst_24126;
var state_24260__$1 = state_24260;
if(cljs.core.truth_(inst_24127)){
var statearr_24324_24394 = state_24260__$1;
(statearr_24324_24394[(1)] = (7));

} else {
var statearr_24325_24395 = state_24260__$1;
(statearr_24325_24395[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (14))){
var inst_24134 = (state_24260[(22)]);
var inst_24143 = cljs.core.first.call(null,inst_24134);
var inst_24144 = figwheel.client.file_reloading.eval_body.call(null,inst_24143,opts);
var inst_24145 = cljs.core.next.call(null,inst_24134);
var inst_24121 = inst_24145;
var inst_24122 = null;
var inst_24123 = (0);
var inst_24124 = (0);
var state_24260__$1 = (function (){var statearr_24326 = state_24260;
(statearr_24326[(7)] = inst_24124);

(statearr_24326[(8)] = inst_24121);

(statearr_24326[(32)] = inst_24144);

(statearr_24326[(9)] = inst_24123);

(statearr_24326[(10)] = inst_24122);

return statearr_24326;
})();
var statearr_24327_24396 = state_24260__$1;
(statearr_24327_24396[(2)] = null);

(statearr_24327_24396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (45))){
var state_24260__$1 = state_24260;
var statearr_24328_24397 = state_24260__$1;
(statearr_24328_24397[(2)] = null);

(statearr_24328_24397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (26))){
var inst_24177 = (state_24260[(23)]);
var inst_24174 = (state_24260[(19)]);
var inst_24180 = (state_24260[(26)]);
var inst_24178 = (state_24260[(24)]);
var inst_24182 = (state_24260[(25)]);
var inst_24197 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24199 = (function (){var all_files = inst_24174;
var res_SINGLEQUOTE_ = inst_24177;
var res = inst_24178;
var files_not_loaded = inst_24180;
var dependencies_that_loaded = inst_24182;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24177,inst_24174,inst_24180,inst_24178,inst_24182,inst_24197,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24198){
var map__24329 = p__24198;
var map__24329__$1 = ((((!((map__24329 == null)))?((((map__24329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24329):map__24329);
var namespace = cljs.core.get.call(null,map__24329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24177,inst_24174,inst_24180,inst_24178,inst_24182,inst_24197,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24200 = cljs.core.map.call(null,inst_24199,inst_24178);
var inst_24201 = cljs.core.pr_str.call(null,inst_24200);
var inst_24202 = figwheel.client.utils.log.call(null,inst_24201);
var inst_24203 = (function (){var all_files = inst_24174;
var res_SINGLEQUOTE_ = inst_24177;
var res = inst_24178;
var files_not_loaded = inst_24180;
var dependencies_that_loaded = inst_24182;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24177,inst_24174,inst_24180,inst_24178,inst_24182,inst_24197,inst_24199,inst_24200,inst_24201,inst_24202,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24177,inst_24174,inst_24180,inst_24178,inst_24182,inst_24197,inst_24199,inst_24200,inst_24201,inst_24202,state_val_24261,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24204 = setTimeout(inst_24203,(10));
var state_24260__$1 = (function (){var statearr_24331 = state_24260;
(statearr_24331[(33)] = inst_24202);

(statearr_24331[(34)] = inst_24197);

return statearr_24331;
})();
var statearr_24332_24398 = state_24260__$1;
(statearr_24332_24398[(2)] = inst_24204);

(statearr_24332_24398[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (16))){
var state_24260__$1 = state_24260;
var statearr_24333_24399 = state_24260__$1;
(statearr_24333_24399[(2)] = reload_dependents);

(statearr_24333_24399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (38))){
var inst_24214 = (state_24260[(16)]);
var inst_24231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24214);
var state_24260__$1 = state_24260;
var statearr_24334_24400 = state_24260__$1;
(statearr_24334_24400[(2)] = inst_24231);

(statearr_24334_24400[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (30))){
var state_24260__$1 = state_24260;
var statearr_24335_24401 = state_24260__$1;
(statearr_24335_24401[(2)] = null);

(statearr_24335_24401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (10))){
var inst_24134 = (state_24260[(22)]);
var inst_24136 = cljs.core.chunked_seq_QMARK_.call(null,inst_24134);
var state_24260__$1 = state_24260;
if(inst_24136){
var statearr_24336_24402 = state_24260__$1;
(statearr_24336_24402[(1)] = (13));

} else {
var statearr_24337_24403 = state_24260__$1;
(statearr_24337_24403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (18))){
var inst_24168 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
if(cljs.core.truth_(inst_24168)){
var statearr_24338_24404 = state_24260__$1;
(statearr_24338_24404[(1)] = (19));

} else {
var statearr_24339_24405 = state_24260__$1;
(statearr_24339_24405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (42))){
var state_24260__$1 = state_24260;
var statearr_24340_24406 = state_24260__$1;
(statearr_24340_24406[(2)] = null);

(statearr_24340_24406[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (37))){
var inst_24226 = (state_24260[(2)]);
var state_24260__$1 = state_24260;
var statearr_24341_24407 = state_24260__$1;
(statearr_24341_24407[(2)] = inst_24226);

(statearr_24341_24407[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24261 === (8))){
var inst_24121 = (state_24260[(8)]);
var inst_24134 = (state_24260[(22)]);
var inst_24134__$1 = cljs.core.seq.call(null,inst_24121);
var state_24260__$1 = (function (){var statearr_24342 = state_24260;
(statearr_24342[(22)] = inst_24134__$1);

return statearr_24342;
})();
if(inst_24134__$1){
var statearr_24343_24408 = state_24260__$1;
(statearr_24343_24408[(1)] = (10));

} else {
var statearr_24344_24409 = state_24260__$1;
(statearr_24344_24409[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20411__auto__,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto____0 = (function (){
var statearr_24348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24348[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto__);

(statearr_24348[(1)] = (1));

return statearr_24348;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto____1 = (function (state_24260){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_24260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e24349){if((e24349 instanceof Object)){
var ex__20415__auto__ = e24349;
var statearr_24350_24410 = state_24260;
(statearr_24350_24410[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24411 = state_24260;
state_24260 = G__24411;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto__ = function(state_24260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto____1.call(this,state_24260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20525__auto__ = (function (){var statearr_24351 = f__20524__auto__.call(null);
(statearr_24351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_24351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__,map__24106,map__24106__$1,opts,before_jsload,on_jsload,reload_dependents,map__24107,map__24107__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20523__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24414,link){
var map__24417 = p__24414;
var map__24417__$1 = ((((!((map__24417 == null)))?((((map__24417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24417):map__24417);
var file = cljs.core.get.call(null,map__24417__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24417,map__24417__$1,file){
return (function (p1__24412_SHARP_,p2__24413_SHARP_){
if(cljs.core._EQ_.call(null,p1__24412_SHARP_,p2__24413_SHARP_)){
return p1__24412_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24417,map__24417__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24423){
var map__24424 = p__24423;
var map__24424__$1 = ((((!((map__24424 == null)))?((((map__24424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24424):map__24424);
var match_length = cljs.core.get.call(null,map__24424__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24424__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24419_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24419_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24426 = [];
var len__19428__auto___24429 = arguments.length;
var i__19429__auto___24430 = (0);
while(true){
if((i__19429__auto___24430 < len__19428__auto___24429)){
args24426.push((arguments[i__19429__auto___24430]));

var G__24431 = (i__19429__auto___24430 + (1));
i__19429__auto___24430 = G__24431;
continue;
} else {
}
break;
}

var G__24428 = args24426.length;
switch (G__24428) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24426.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24433_SHARP_,p2__24434_SHARP_){
return cljs.core.assoc.call(null,p1__24433_SHARP_,cljs.core.get.call(null,p2__24434_SHARP_,key),p2__24434_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24435){
var map__24438 = p__24435;
var map__24438__$1 = ((((!((map__24438 == null)))?((((map__24438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24438):map__24438);
var f_data = map__24438__$1;
var file = cljs.core.get.call(null,map__24438__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24440,files_msg){
var map__24447 = p__24440;
var map__24447__$1 = ((((!((map__24447 == null)))?((((map__24447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24447):map__24447);
var opts = map__24447__$1;
var on_cssload = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24449_24453 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24450_24454 = null;
var count__24451_24455 = (0);
var i__24452_24456 = (0);
while(true){
if((i__24452_24456 < count__24451_24455)){
var f_24457 = cljs.core._nth.call(null,chunk__24450_24454,i__24452_24456);
figwheel.client.file_reloading.reload_css_file.call(null,f_24457);

var G__24458 = seq__24449_24453;
var G__24459 = chunk__24450_24454;
var G__24460 = count__24451_24455;
var G__24461 = (i__24452_24456 + (1));
seq__24449_24453 = G__24458;
chunk__24450_24454 = G__24459;
count__24451_24455 = G__24460;
i__24452_24456 = G__24461;
continue;
} else {
var temp__4657__auto___24462 = cljs.core.seq.call(null,seq__24449_24453);
if(temp__4657__auto___24462){
var seq__24449_24463__$1 = temp__4657__auto___24462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24449_24463__$1)){
var c__19173__auto___24464 = cljs.core.chunk_first.call(null,seq__24449_24463__$1);
var G__24465 = cljs.core.chunk_rest.call(null,seq__24449_24463__$1);
var G__24466 = c__19173__auto___24464;
var G__24467 = cljs.core.count.call(null,c__19173__auto___24464);
var G__24468 = (0);
seq__24449_24453 = G__24465;
chunk__24450_24454 = G__24466;
count__24451_24455 = G__24467;
i__24452_24456 = G__24468;
continue;
} else {
var f_24469 = cljs.core.first.call(null,seq__24449_24463__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24469);

var G__24470 = cljs.core.next.call(null,seq__24449_24463__$1);
var G__24471 = null;
var G__24472 = (0);
var G__24473 = (0);
seq__24449_24453 = G__24470;
chunk__24450_24454 = G__24471;
count__24451_24455 = G__24472;
i__24452_24456 = G__24473;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24447,map__24447__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24447,map__24447__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map