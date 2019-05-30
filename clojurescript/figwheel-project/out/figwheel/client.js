// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24909 = cljs.core._EQ_;
var expr__24910 = (function (){var or__18370__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e24913){if((e24913 instanceof Error)){
var e = e24913;
return false;
} else {
throw e24913;

}
}})();
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24909.call(null,"true",expr__24910))){
return true;
} else {
if(cljs.core.truth_(pred__24909.call(null,"false",expr__24910))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24910)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24915){if((e24915 instanceof Error)){
var e = e24915;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24915;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19435__auto__ = [];
var len__19428__auto___24917 = arguments.length;
var i__19429__auto___24918 = (0);
while(true){
if((i__19429__auto___24918 < len__19428__auto___24917)){
args__19435__auto__.push((arguments[i__19429__auto___24918]));

var G__24919 = (i__19429__auto___24918 + (1));
i__19429__auto___24918 = G__24919;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24916){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24916));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24920){
var map__24923 = p__24920;
var map__24923__$1 = ((((!((map__24923 == null)))?((((map__24923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24923):map__24923);
var message = cljs.core.get.call(null,map__24923__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24923__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18370__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18358__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18358__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18358__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20523__auto___25085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___25085,ch){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___25085,ch){
return (function (state_25054){
var state_val_25055 = (state_25054[(1)]);
if((state_val_25055 === (7))){
var inst_25050 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25056_25086 = state_25054__$1;
(statearr_25056_25086[(2)] = inst_25050);

(statearr_25056_25086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (1))){
var state_25054__$1 = state_25054;
var statearr_25057_25087 = state_25054__$1;
(statearr_25057_25087[(2)] = null);

(statearr_25057_25087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (4))){
var inst_25007 = (state_25054[(7)]);
var inst_25007__$1 = (state_25054[(2)]);
var state_25054__$1 = (function (){var statearr_25058 = state_25054;
(statearr_25058[(7)] = inst_25007__$1);

return statearr_25058;
})();
if(cljs.core.truth_(inst_25007__$1)){
var statearr_25059_25088 = state_25054__$1;
(statearr_25059_25088[(1)] = (5));

} else {
var statearr_25060_25089 = state_25054__$1;
(statearr_25060_25089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (15))){
var inst_25014 = (state_25054[(8)]);
var inst_25029 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25014);
var inst_25030 = cljs.core.first.call(null,inst_25029);
var inst_25031 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25030);
var inst_25032 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25031)].join('');
var inst_25033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25032);
var state_25054__$1 = state_25054;
var statearr_25061_25090 = state_25054__$1;
(statearr_25061_25090[(2)] = inst_25033);

(statearr_25061_25090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (13))){
var inst_25038 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25062_25091 = state_25054__$1;
(statearr_25062_25091[(2)] = inst_25038);

(statearr_25062_25091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (6))){
var state_25054__$1 = state_25054;
var statearr_25063_25092 = state_25054__$1;
(statearr_25063_25092[(2)] = null);

(statearr_25063_25092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (17))){
var inst_25036 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25064_25093 = state_25054__$1;
(statearr_25064_25093[(2)] = inst_25036);

(statearr_25064_25093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (3))){
var inst_25052 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25054__$1,inst_25052);
} else {
if((state_val_25055 === (12))){
var inst_25013 = (state_25054[(9)]);
var inst_25027 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25013,opts);
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_25027)){
var statearr_25065_25094 = state_25054__$1;
(statearr_25065_25094[(1)] = (15));

} else {
var statearr_25066_25095 = state_25054__$1;
(statearr_25066_25095[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (2))){
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25054__$1,(4),ch);
} else {
if((state_val_25055 === (11))){
var inst_25014 = (state_25054[(8)]);
var inst_25019 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25020 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25014);
var inst_25021 = cljs.core.async.timeout.call(null,(1000));
var inst_25022 = [inst_25020,inst_25021];
var inst_25023 = (new cljs.core.PersistentVector(null,2,(5),inst_25019,inst_25022,null));
var state_25054__$1 = state_25054;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25054__$1,(14),inst_25023);
} else {
if((state_val_25055 === (9))){
var inst_25014 = (state_25054[(8)]);
var inst_25040 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25041 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25014);
var inst_25042 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25041);
var inst_25043 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25042)].join('');
var inst_25044 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25043);
var state_25054__$1 = (function (){var statearr_25067 = state_25054;
(statearr_25067[(10)] = inst_25040);

return statearr_25067;
})();
var statearr_25068_25096 = state_25054__$1;
(statearr_25068_25096[(2)] = inst_25044);

(statearr_25068_25096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (5))){
var inst_25007 = (state_25054[(7)]);
var inst_25009 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25010 = (new cljs.core.PersistentArrayMap(null,2,inst_25009,null));
var inst_25011 = (new cljs.core.PersistentHashSet(null,inst_25010,null));
var inst_25012 = figwheel.client.focus_msgs.call(null,inst_25011,inst_25007);
var inst_25013 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25012);
var inst_25014 = cljs.core.first.call(null,inst_25012);
var inst_25015 = figwheel.client.autoload_QMARK_.call(null);
var state_25054__$1 = (function (){var statearr_25069 = state_25054;
(statearr_25069[(9)] = inst_25013);

(statearr_25069[(8)] = inst_25014);

return statearr_25069;
})();
if(cljs.core.truth_(inst_25015)){
var statearr_25070_25097 = state_25054__$1;
(statearr_25070_25097[(1)] = (8));

} else {
var statearr_25071_25098 = state_25054__$1;
(statearr_25071_25098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (14))){
var inst_25025 = (state_25054[(2)]);
var state_25054__$1 = state_25054;
var statearr_25072_25099 = state_25054__$1;
(statearr_25072_25099[(2)] = inst_25025);

(statearr_25072_25099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (16))){
var state_25054__$1 = state_25054;
var statearr_25073_25100 = state_25054__$1;
(statearr_25073_25100[(2)] = null);

(statearr_25073_25100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (10))){
var inst_25046 = (state_25054[(2)]);
var state_25054__$1 = (function (){var statearr_25074 = state_25054;
(statearr_25074[(11)] = inst_25046);

return statearr_25074;
})();
var statearr_25075_25101 = state_25054__$1;
(statearr_25075_25101[(2)] = null);

(statearr_25075_25101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25055 === (8))){
var inst_25013 = (state_25054[(9)]);
var inst_25017 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25013,opts);
var state_25054__$1 = state_25054;
if(cljs.core.truth_(inst_25017)){
var statearr_25076_25102 = state_25054__$1;
(statearr_25076_25102[(1)] = (11));

} else {
var statearr_25077_25103 = state_25054__$1;
(statearr_25077_25103[(1)] = (12));

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
});})(c__20523__auto___25085,ch))
;
return ((function (switch__20411__auto__,c__20523__auto___25085,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20412__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20412__auto____0 = (function (){
var statearr_25081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25081[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20412__auto__);

(statearr_25081[(1)] = (1));

return statearr_25081;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20412__auto____1 = (function (state_25054){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_25054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e25082){if((e25082 instanceof Object)){
var ex__20415__auto__ = e25082;
var statearr_25083_25104 = state_25054;
(statearr_25083_25104[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25105 = state_25054;
state_25054 = G__25105;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20412__auto__ = function(state_25054){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20412__auto____1.call(this,state_25054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20412__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20412__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___25085,ch))
})();
var state__20525__auto__ = (function (){var statearr_25084 = f__20524__auto__.call(null);
(statearr_25084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___25085);

return statearr_25084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___25085,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25106_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25106_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25113 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25113){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25111 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25112 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25112;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25111;
}}catch (e25110){if((e25110 instanceof Error)){
var e = e25110;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25113], null));
} else {
var e = e25110;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25113))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25114){
var map__25121 = p__25114;
var map__25121__$1 = ((((!((map__25121 == null)))?((((map__25121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25121):map__25121);
var opts = map__25121__$1;
var build_id = cljs.core.get.call(null,map__25121__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25121,map__25121__$1,opts,build_id){
return (function (p__25123){
var vec__25124 = p__25123;
var map__25125 = cljs.core.nth.call(null,vec__25124,(0),null);
var map__25125__$1 = ((((!((map__25125 == null)))?((((map__25125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25125):map__25125);
var msg = map__25125__$1;
var msg_name = cljs.core.get.call(null,map__25125__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25124,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25124,map__25125,map__25125__$1,msg,msg_name,_,map__25121,map__25121__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25124,map__25125,map__25125__$1,msg,msg_name,_,map__25121,map__25121__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25121,map__25121__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25131){
var vec__25132 = p__25131;
var map__25133 = cljs.core.nth.call(null,vec__25132,(0),null);
var map__25133__$1 = ((((!((map__25133 == null)))?((((map__25133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25133):map__25133);
var msg = map__25133__$1;
var msg_name = cljs.core.get.call(null,map__25133__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25132,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25135){
var map__25145 = p__25135;
var map__25145__$1 = ((((!((map__25145 == null)))?((((map__25145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25145):map__25145);
var on_compile_warning = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25145,map__25145__$1,on_compile_warning,on_compile_fail){
return (function (p__25147){
var vec__25148 = p__25147;
var map__25149 = cljs.core.nth.call(null,vec__25148,(0),null);
var map__25149__$1 = ((((!((map__25149 == null)))?((((map__25149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25149):map__25149);
var msg = map__25149__$1;
var msg_name = cljs.core.get.call(null,map__25149__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25148,(1));
var pred__25151 = cljs.core._EQ_;
var expr__25152 = msg_name;
if(cljs.core.truth_(pred__25151.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25152))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25151.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25152))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25145,map__25145__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__,msg_hist,msg_names,msg){
return (function (state_25368){
var state_val_25369 = (state_25368[(1)]);
if((state_val_25369 === (7))){
var inst_25292 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25292)){
var statearr_25370_25416 = state_25368__$1;
(statearr_25370_25416[(1)] = (8));

} else {
var statearr_25371_25417 = state_25368__$1;
(statearr_25371_25417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (20))){
var inst_25362 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25372_25418 = state_25368__$1;
(statearr_25372_25418[(2)] = inst_25362);

(statearr_25372_25418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (27))){
var inst_25358 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25373_25419 = state_25368__$1;
(statearr_25373_25419[(2)] = inst_25358);

(statearr_25373_25419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (1))){
var inst_25285 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25285)){
var statearr_25374_25420 = state_25368__$1;
(statearr_25374_25420[(1)] = (2));

} else {
var statearr_25375_25421 = state_25368__$1;
(statearr_25375_25421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (24))){
var inst_25360 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25376_25422 = state_25368__$1;
(statearr_25376_25422[(2)] = inst_25360);

(statearr_25376_25422[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (4))){
var inst_25366 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25368__$1,inst_25366);
} else {
if((state_val_25369 === (15))){
var inst_25364 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25377_25423 = state_25368__$1;
(statearr_25377_25423[(2)] = inst_25364);

(statearr_25377_25423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (21))){
var inst_25323 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25378_25424 = state_25368__$1;
(statearr_25378_25424[(2)] = inst_25323);

(statearr_25378_25424[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (31))){
var inst_25347 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25347)){
var statearr_25379_25425 = state_25368__$1;
(statearr_25379_25425[(1)] = (34));

} else {
var statearr_25380_25426 = state_25368__$1;
(statearr_25380_25426[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (32))){
var inst_25356 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25381_25427 = state_25368__$1;
(statearr_25381_25427[(2)] = inst_25356);

(statearr_25381_25427[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (33))){
var inst_25345 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25382_25428 = state_25368__$1;
(statearr_25382_25428[(2)] = inst_25345);

(statearr_25382_25428[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (13))){
var inst_25306 = figwheel.client.heads_up.clear.call(null);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(16),inst_25306);
} else {
if((state_val_25369 === (22))){
var inst_25327 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25328 = figwheel.client.heads_up.append_message.call(null,inst_25327);
var state_25368__$1 = state_25368;
var statearr_25383_25429 = state_25368__$1;
(statearr_25383_25429[(2)] = inst_25328);

(statearr_25383_25429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (36))){
var inst_25354 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25384_25430 = state_25368__$1;
(statearr_25384_25430[(2)] = inst_25354);

(statearr_25384_25430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (29))){
var inst_25338 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25385_25431 = state_25368__$1;
(statearr_25385_25431[(2)] = inst_25338);

(statearr_25385_25431[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (6))){
var inst_25287 = (state_25368[(7)]);
var state_25368__$1 = state_25368;
var statearr_25386_25432 = state_25368__$1;
(statearr_25386_25432[(2)] = inst_25287);

(statearr_25386_25432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (28))){
var inst_25334 = (state_25368[(2)]);
var inst_25335 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25336 = figwheel.client.heads_up.display_warning.call(null,inst_25335);
var state_25368__$1 = (function (){var statearr_25387 = state_25368;
(statearr_25387[(8)] = inst_25334);

return statearr_25387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(29),inst_25336);
} else {
if((state_val_25369 === (25))){
var inst_25332 = figwheel.client.heads_up.clear.call(null);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(28),inst_25332);
} else {
if((state_val_25369 === (34))){
var inst_25349 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(37),inst_25349);
} else {
if((state_val_25369 === (17))){
var inst_25314 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25388_25433 = state_25368__$1;
(statearr_25388_25433[(2)] = inst_25314);

(statearr_25388_25433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (3))){
var inst_25304 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25304)){
var statearr_25389_25434 = state_25368__$1;
(statearr_25389_25434[(1)] = (13));

} else {
var statearr_25390_25435 = state_25368__$1;
(statearr_25390_25435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (12))){
var inst_25300 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25391_25436 = state_25368__$1;
(statearr_25391_25436[(2)] = inst_25300);

(statearr_25391_25436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (2))){
var inst_25287 = (state_25368[(7)]);
var inst_25287__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25368__$1 = (function (){var statearr_25392 = state_25368;
(statearr_25392[(7)] = inst_25287__$1);

return statearr_25392;
})();
if(cljs.core.truth_(inst_25287__$1)){
var statearr_25393_25437 = state_25368__$1;
(statearr_25393_25437[(1)] = (5));

} else {
var statearr_25394_25438 = state_25368__$1;
(statearr_25394_25438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (23))){
var inst_25330 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25330)){
var statearr_25395_25439 = state_25368__$1;
(statearr_25395_25439[(1)] = (25));

} else {
var statearr_25396_25440 = state_25368__$1;
(statearr_25396_25440[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (35))){
var state_25368__$1 = state_25368;
var statearr_25397_25441 = state_25368__$1;
(statearr_25397_25441[(2)] = null);

(statearr_25397_25441[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (19))){
var inst_25325 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25325)){
var statearr_25398_25442 = state_25368__$1;
(statearr_25398_25442[(1)] = (22));

} else {
var statearr_25399_25443 = state_25368__$1;
(statearr_25399_25443[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (11))){
var inst_25296 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25400_25444 = state_25368__$1;
(statearr_25400_25444[(2)] = inst_25296);

(statearr_25400_25444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (9))){
var inst_25298 = figwheel.client.heads_up.clear.call(null);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(12),inst_25298);
} else {
if((state_val_25369 === (5))){
var inst_25289 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25368__$1 = state_25368;
var statearr_25401_25445 = state_25368__$1;
(statearr_25401_25445[(2)] = inst_25289);

(statearr_25401_25445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (14))){
var inst_25316 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25316)){
var statearr_25402_25446 = state_25368__$1;
(statearr_25402_25446[(1)] = (18));

} else {
var statearr_25403_25447 = state_25368__$1;
(statearr_25403_25447[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (26))){
var inst_25340 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25368__$1 = state_25368;
if(cljs.core.truth_(inst_25340)){
var statearr_25404_25448 = state_25368__$1;
(statearr_25404_25448[(1)] = (30));

} else {
var statearr_25405_25449 = state_25368__$1;
(statearr_25405_25449[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (16))){
var inst_25308 = (state_25368[(2)]);
var inst_25309 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25310 = figwheel.client.format_messages.call(null,inst_25309);
var inst_25311 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25312 = figwheel.client.heads_up.display_error.call(null,inst_25310,inst_25311);
var state_25368__$1 = (function (){var statearr_25406 = state_25368;
(statearr_25406[(9)] = inst_25308);

return statearr_25406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(17),inst_25312);
} else {
if((state_val_25369 === (30))){
var inst_25342 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25343 = figwheel.client.heads_up.display_warning.call(null,inst_25342);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(33),inst_25343);
} else {
if((state_val_25369 === (10))){
var inst_25302 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25407_25450 = state_25368__$1;
(statearr_25407_25450[(2)] = inst_25302);

(statearr_25407_25450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (18))){
var inst_25318 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25319 = figwheel.client.format_messages.call(null,inst_25318);
var inst_25320 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25321 = figwheel.client.heads_up.display_error.call(null,inst_25319,inst_25320);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(21),inst_25321);
} else {
if((state_val_25369 === (37))){
var inst_25351 = (state_25368[(2)]);
var state_25368__$1 = state_25368;
var statearr_25408_25451 = state_25368__$1;
(statearr_25408_25451[(2)] = inst_25351);

(statearr_25408_25451[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25369 === (8))){
var inst_25294 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25368__$1 = state_25368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25368__$1,(11),inst_25294);
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
});})(c__20523__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20411__auto__,c__20523__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto____0 = (function (){
var statearr_25412 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25412[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto__);

(statearr_25412[(1)] = (1));

return statearr_25412;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto____1 = (function (state_25368){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_25368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e25413){if((e25413 instanceof Object)){
var ex__20415__auto__ = e25413;
var statearr_25414_25452 = state_25368;
(statearr_25414_25452[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25453 = state_25368;
state_25368 = G__25453;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto__ = function(state_25368){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto____1.call(this,state_25368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__,msg_hist,msg_names,msg))
})();
var state__20525__auto__ = (function (){var statearr_25415 = f__20524__auto__.call(null);
(statearr_25415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_25415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__,msg_hist,msg_names,msg))
);

return c__20523__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20523__auto___25516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___25516,ch){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___25516,ch){
return (function (state_25499){
var state_val_25500 = (state_25499[(1)]);
if((state_val_25500 === (1))){
var state_25499__$1 = state_25499;
var statearr_25501_25517 = state_25499__$1;
(statearr_25501_25517[(2)] = null);

(statearr_25501_25517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (2))){
var state_25499__$1 = state_25499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25499__$1,(4),ch);
} else {
if((state_val_25500 === (3))){
var inst_25497 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25499__$1,inst_25497);
} else {
if((state_val_25500 === (4))){
var inst_25487 = (state_25499[(7)]);
var inst_25487__$1 = (state_25499[(2)]);
var state_25499__$1 = (function (){var statearr_25502 = state_25499;
(statearr_25502[(7)] = inst_25487__$1);

return statearr_25502;
})();
if(cljs.core.truth_(inst_25487__$1)){
var statearr_25503_25518 = state_25499__$1;
(statearr_25503_25518[(1)] = (5));

} else {
var statearr_25504_25519 = state_25499__$1;
(statearr_25504_25519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (5))){
var inst_25487 = (state_25499[(7)]);
var inst_25489 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25487);
var state_25499__$1 = state_25499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25499__$1,(8),inst_25489);
} else {
if((state_val_25500 === (6))){
var state_25499__$1 = state_25499;
var statearr_25505_25520 = state_25499__$1;
(statearr_25505_25520[(2)] = null);

(statearr_25505_25520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (7))){
var inst_25495 = (state_25499[(2)]);
var state_25499__$1 = state_25499;
var statearr_25506_25521 = state_25499__$1;
(statearr_25506_25521[(2)] = inst_25495);

(statearr_25506_25521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25500 === (8))){
var inst_25491 = (state_25499[(2)]);
var state_25499__$1 = (function (){var statearr_25507 = state_25499;
(statearr_25507[(8)] = inst_25491);

return statearr_25507;
})();
var statearr_25508_25522 = state_25499__$1;
(statearr_25508_25522[(2)] = null);

(statearr_25508_25522[(1)] = (2));


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
});})(c__20523__auto___25516,ch))
;
return ((function (switch__20411__auto__,c__20523__auto___25516,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20412__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20412__auto____0 = (function (){
var statearr_25512 = [null,null,null,null,null,null,null,null,null];
(statearr_25512[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20412__auto__);

(statearr_25512[(1)] = (1));

return statearr_25512;
});
var figwheel$client$heads_up_plugin_$_state_machine__20412__auto____1 = (function (state_25499){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_25499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e25513){if((e25513 instanceof Object)){
var ex__20415__auto__ = e25513;
var statearr_25514_25523 = state_25499;
(statearr_25514_25523[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25524 = state_25499;
state_25499 = G__25524;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20412__auto__ = function(state_25499){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20412__auto____1.call(this,state_25499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20412__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20412__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___25516,ch))
})();
var state__20525__auto__ = (function (){var statearr_25515 = f__20524__auto__.call(null);
(statearr_25515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___25516);

return statearr_25515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___25516,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__){
return (function (state_25545){
var state_val_25546 = (state_25545[(1)]);
if((state_val_25546 === (1))){
var inst_25540 = cljs.core.async.timeout.call(null,(3000));
var state_25545__$1 = state_25545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25545__$1,(2),inst_25540);
} else {
if((state_val_25546 === (2))){
var inst_25542 = (state_25545[(2)]);
var inst_25543 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25545__$1 = (function (){var statearr_25547 = state_25545;
(statearr_25547[(7)] = inst_25542);

return statearr_25547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25545__$1,inst_25543);
} else {
return null;
}
}
});})(c__20523__auto__))
;
return ((function (switch__20411__auto__,c__20523__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20412__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20412__auto____0 = (function (){
var statearr_25551 = [null,null,null,null,null,null,null,null];
(statearr_25551[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20412__auto__);

(statearr_25551[(1)] = (1));

return statearr_25551;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20412__auto____1 = (function (state_25545){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_25545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e25552){if((e25552 instanceof Object)){
var ex__20415__auto__ = e25552;
var statearr_25553_25555 = state_25545;
(statearr_25553_25555[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25556 = state_25545;
state_25545 = G__25556;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20412__auto__ = function(state_25545){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20412__auto____1.call(this,state_25545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20412__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20412__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__))
})();
var state__20525__auto__ = (function (){var statearr_25554 = f__20524__auto__.call(null);
(statearr_25554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_25554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__))
);

return c__20523__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25557){
var map__25564 = p__25557;
var map__25564__$1 = ((((!((map__25564 == null)))?((((map__25564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25564):map__25564);
var ed = map__25564__$1;
var formatted_exception = cljs.core.get.call(null,map__25564__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25564__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25564__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25566_25570 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25567_25571 = null;
var count__25568_25572 = (0);
var i__25569_25573 = (0);
while(true){
if((i__25569_25573 < count__25568_25572)){
var msg_25574 = cljs.core._nth.call(null,chunk__25567_25571,i__25569_25573);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25574);

var G__25575 = seq__25566_25570;
var G__25576 = chunk__25567_25571;
var G__25577 = count__25568_25572;
var G__25578 = (i__25569_25573 + (1));
seq__25566_25570 = G__25575;
chunk__25567_25571 = G__25576;
count__25568_25572 = G__25577;
i__25569_25573 = G__25578;
continue;
} else {
var temp__4657__auto___25579 = cljs.core.seq.call(null,seq__25566_25570);
if(temp__4657__auto___25579){
var seq__25566_25580__$1 = temp__4657__auto___25579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25566_25580__$1)){
var c__19173__auto___25581 = cljs.core.chunk_first.call(null,seq__25566_25580__$1);
var G__25582 = cljs.core.chunk_rest.call(null,seq__25566_25580__$1);
var G__25583 = c__19173__auto___25581;
var G__25584 = cljs.core.count.call(null,c__19173__auto___25581);
var G__25585 = (0);
seq__25566_25570 = G__25582;
chunk__25567_25571 = G__25583;
count__25568_25572 = G__25584;
i__25569_25573 = G__25585;
continue;
} else {
var msg_25586 = cljs.core.first.call(null,seq__25566_25580__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25586);

var G__25587 = cljs.core.next.call(null,seq__25566_25580__$1);
var G__25588 = null;
var G__25589 = (0);
var G__25590 = (0);
seq__25566_25570 = G__25587;
chunk__25567_25571 = G__25588;
count__25568_25572 = G__25589;
i__25569_25573 = G__25590;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25591){
var map__25594 = p__25591;
var map__25594__$1 = ((((!((map__25594 == null)))?((((map__25594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25594):map__25594);
var w = map__25594__$1;
var message = cljs.core.get.call(null,map__25594__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18358__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18358__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18358__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25602 = cljs.core.seq.call(null,plugins);
var chunk__25603 = null;
var count__25604 = (0);
var i__25605 = (0);
while(true){
if((i__25605 < count__25604)){
var vec__25606 = cljs.core._nth.call(null,chunk__25603,i__25605);
var k = cljs.core.nth.call(null,vec__25606,(0),null);
var plugin = cljs.core.nth.call(null,vec__25606,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25608 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25602,chunk__25603,count__25604,i__25605,pl_25608,vec__25606,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25608.call(null,msg_hist);
});})(seq__25602,chunk__25603,count__25604,i__25605,pl_25608,vec__25606,k,plugin))
);
} else {
}

var G__25609 = seq__25602;
var G__25610 = chunk__25603;
var G__25611 = count__25604;
var G__25612 = (i__25605 + (1));
seq__25602 = G__25609;
chunk__25603 = G__25610;
count__25604 = G__25611;
i__25605 = G__25612;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25602);
if(temp__4657__auto__){
var seq__25602__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25602__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__25602__$1);
var G__25613 = cljs.core.chunk_rest.call(null,seq__25602__$1);
var G__25614 = c__19173__auto__;
var G__25615 = cljs.core.count.call(null,c__19173__auto__);
var G__25616 = (0);
seq__25602 = G__25613;
chunk__25603 = G__25614;
count__25604 = G__25615;
i__25605 = G__25616;
continue;
} else {
var vec__25607 = cljs.core.first.call(null,seq__25602__$1);
var k = cljs.core.nth.call(null,vec__25607,(0),null);
var plugin = cljs.core.nth.call(null,vec__25607,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25617 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25602,chunk__25603,count__25604,i__25605,pl_25617,vec__25607,k,plugin,seq__25602__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25617.call(null,msg_hist);
});})(seq__25602,chunk__25603,count__25604,i__25605,pl_25617,vec__25607,k,plugin,seq__25602__$1,temp__4657__auto__))
);
} else {
}

var G__25618 = cljs.core.next.call(null,seq__25602__$1);
var G__25619 = null;
var G__25620 = (0);
var G__25621 = (0);
seq__25602 = G__25618;
chunk__25603 = G__25619;
count__25604 = G__25620;
i__25605 = G__25621;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25622 = [];
var len__19428__auto___25625 = arguments.length;
var i__19429__auto___25626 = (0);
while(true){
if((i__19429__auto___25626 < len__19428__auto___25625)){
args25622.push((arguments[i__19429__auto___25626]));

var G__25627 = (i__19429__auto___25626 + (1));
i__19429__auto___25626 = G__25627;
continue;
} else {
}
break;
}

var G__25624 = args25622.length;
switch (G__25624) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25622.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19435__auto__ = [];
var len__19428__auto___25633 = arguments.length;
var i__19429__auto___25634 = (0);
while(true){
if((i__19429__auto___25634 < len__19428__auto___25633)){
args__19435__auto__.push((arguments[i__19429__auto___25634]));

var G__25635 = (i__19429__auto___25634 + (1));
i__19429__auto___25634 = G__25635;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25630){
var map__25631 = p__25630;
var map__25631__$1 = ((((!((map__25631 == null)))?((((map__25631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25631):map__25631);
var opts = map__25631__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25629){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25629));
});

//# sourceMappingURL=client.js.map