// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19435__auto__ = [];
var len__19428__auto___24675 = arguments.length;
var i__19429__auto___24676 = (0);
while(true){
if((i__19429__auto___24676 < len__19428__auto___24675)){
args__19435__auto__.push((arguments[i__19429__auto___24676]));

var G__24677 = (i__19429__auto___24676 + (1));
i__19429__auto___24676 = G__24677;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24667_24678 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24668_24679 = null;
var count__24669_24680 = (0);
var i__24670_24681 = (0);
while(true){
if((i__24670_24681 < count__24669_24680)){
var k_24682 = cljs.core._nth.call(null,chunk__24668_24679,i__24670_24681);
e.setAttribute(cljs.core.name.call(null,k_24682),cljs.core.get.call(null,attrs,k_24682));

var G__24683 = seq__24667_24678;
var G__24684 = chunk__24668_24679;
var G__24685 = count__24669_24680;
var G__24686 = (i__24670_24681 + (1));
seq__24667_24678 = G__24683;
chunk__24668_24679 = G__24684;
count__24669_24680 = G__24685;
i__24670_24681 = G__24686;
continue;
} else {
var temp__4657__auto___24687 = cljs.core.seq.call(null,seq__24667_24678);
if(temp__4657__auto___24687){
var seq__24667_24688__$1 = temp__4657__auto___24687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24667_24688__$1)){
var c__19173__auto___24689 = cljs.core.chunk_first.call(null,seq__24667_24688__$1);
var G__24690 = cljs.core.chunk_rest.call(null,seq__24667_24688__$1);
var G__24691 = c__19173__auto___24689;
var G__24692 = cljs.core.count.call(null,c__19173__auto___24689);
var G__24693 = (0);
seq__24667_24678 = G__24690;
chunk__24668_24679 = G__24691;
count__24669_24680 = G__24692;
i__24670_24681 = G__24693;
continue;
} else {
var k_24694 = cljs.core.first.call(null,seq__24667_24688__$1);
e.setAttribute(cljs.core.name.call(null,k_24694),cljs.core.get.call(null,attrs,k_24694));

var G__24695 = cljs.core.next.call(null,seq__24667_24688__$1);
var G__24696 = null;
var G__24697 = (0);
var G__24698 = (0);
seq__24667_24678 = G__24695;
chunk__24668_24679 = G__24696;
count__24669_24680 = G__24697;
i__24670_24681 = G__24698;
continue;
}
} else {
}
}
break;
}

var seq__24671_24699 = cljs.core.seq.call(null,children);
var chunk__24672_24700 = null;
var count__24673_24701 = (0);
var i__24674_24702 = (0);
while(true){
if((i__24674_24702 < count__24673_24701)){
var ch_24703 = cljs.core._nth.call(null,chunk__24672_24700,i__24674_24702);
e.appendChild(ch_24703);

var G__24704 = seq__24671_24699;
var G__24705 = chunk__24672_24700;
var G__24706 = count__24673_24701;
var G__24707 = (i__24674_24702 + (1));
seq__24671_24699 = G__24704;
chunk__24672_24700 = G__24705;
count__24673_24701 = G__24706;
i__24674_24702 = G__24707;
continue;
} else {
var temp__4657__auto___24708 = cljs.core.seq.call(null,seq__24671_24699);
if(temp__4657__auto___24708){
var seq__24671_24709__$1 = temp__4657__auto___24708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24671_24709__$1)){
var c__19173__auto___24710 = cljs.core.chunk_first.call(null,seq__24671_24709__$1);
var G__24711 = cljs.core.chunk_rest.call(null,seq__24671_24709__$1);
var G__24712 = c__19173__auto___24710;
var G__24713 = cljs.core.count.call(null,c__19173__auto___24710);
var G__24714 = (0);
seq__24671_24699 = G__24711;
chunk__24672_24700 = G__24712;
count__24673_24701 = G__24713;
i__24674_24702 = G__24714;
continue;
} else {
var ch_24715 = cljs.core.first.call(null,seq__24671_24709__$1);
e.appendChild(ch_24715);

var G__24716 = cljs.core.next.call(null,seq__24671_24709__$1);
var G__24717 = null;
var G__24718 = (0);
var G__24719 = (0);
seq__24671_24699 = G__24716;
chunk__24672_24700 = G__24717;
count__24673_24701 = G__24718;
i__24674_24702 = G__24719;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24664){
var G__24665 = cljs.core.first.call(null,seq24664);
var seq24664__$1 = cljs.core.next.call(null,seq24664);
var G__24666 = cljs.core.first.call(null,seq24664__$1);
var seq24664__$2 = cljs.core.next.call(null,seq24664__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24665,G__24666,seq24664__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24720 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24720.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24720.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24720.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24720);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24721,st_map){
var map__24726 = p__24721;
var map__24726__$1 = ((((!((map__24726 == null)))?((((map__24726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24726):map__24726);
var container_el = cljs.core.get.call(null,map__24726__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24726,map__24726__$1,container_el){
return (function (p__24728){
var vec__24729 = p__24728;
var k = cljs.core.nth.call(null,vec__24729,(0),null);
var v = cljs.core.nth.call(null,vec__24729,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24726,map__24726__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24730,dom_str){
var map__24733 = p__24730;
var map__24733__$1 = ((((!((map__24733 == null)))?((((map__24733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24733):map__24733);
var c = map__24733__$1;
var content_area_el = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24735){
var map__24738 = p__24735;
var map__24738__$1 = ((((!((map__24738 == null)))?((((map__24738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24738):map__24738);
var content_area_el = cljs.core.get.call(null,map__24738__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__){
return (function (state_24781){
var state_val_24782 = (state_24781[(1)]);
if((state_val_24782 === (1))){
var inst_24766 = (state_24781[(7)]);
var inst_24766__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24767 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24768 = ["10px","10px","100%","68px","1.0"];
var inst_24769 = cljs.core.PersistentHashMap.fromArrays(inst_24767,inst_24768);
var inst_24770 = cljs.core.merge.call(null,inst_24769,style);
var inst_24771 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24766__$1,inst_24770);
var inst_24772 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24766__$1,msg);
var inst_24773 = cljs.core.async.timeout.call(null,(300));
var state_24781__$1 = (function (){var statearr_24783 = state_24781;
(statearr_24783[(7)] = inst_24766__$1);

(statearr_24783[(8)] = inst_24771);

(statearr_24783[(9)] = inst_24772);

return statearr_24783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24781__$1,(2),inst_24773);
} else {
if((state_val_24782 === (2))){
var inst_24766 = (state_24781[(7)]);
var inst_24775 = (state_24781[(2)]);
var inst_24776 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24777 = ["auto"];
var inst_24778 = cljs.core.PersistentHashMap.fromArrays(inst_24776,inst_24777);
var inst_24779 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24766,inst_24778);
var state_24781__$1 = (function (){var statearr_24784 = state_24781;
(statearr_24784[(10)] = inst_24775);

return statearr_24784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24781__$1,inst_24779);
} else {
return null;
}
}
});})(c__20523__auto__))
;
return ((function (switch__20411__auto__,c__20523__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto____0 = (function (){
var statearr_24788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24788[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto__);

(statearr_24788[(1)] = (1));

return statearr_24788;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto____1 = (function (state_24781){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_24781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e24789){if((e24789 instanceof Object)){
var ex__20415__auto__ = e24789;
var statearr_24790_24792 = state_24781;
(statearr_24790_24792[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24793 = state_24781;
state_24781 = G__24793;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto__ = function(state_24781){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto____1.call(this,state_24781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__))
})();
var state__20525__auto__ = (function (){var statearr_24791 = f__20524__auto__.call(null);
(statearr_24791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_24791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__))
);

return c__20523__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__24795 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__24795,(0),null);
var ln = cljs.core.nth.call(null,vec__24795,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24798 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24798,(0),null);
var file_line = cljs.core.nth.call(null,vec__24798,(1),null);
var file_column = cljs.core.nth.call(null,vec__24798,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24798,file_name,file_line,file_column){
return (function (p1__24796_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24796_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24798,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18370__auto__ = file_line;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var and__18358__auto__ = cause;
if(cljs.core.truth_(and__18358__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18358__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24801 = figwheel.client.heads_up.ensure_container.call(null);
var map__24801__$1 = ((((!((map__24801 == null)))?((((map__24801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24801):map__24801);
var content_area_el = cljs.core.get.call(null,map__24801__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__){
return (function (state_24849){
var state_val_24850 = (state_24849[(1)]);
if((state_val_24850 === (1))){
var inst_24832 = (state_24849[(7)]);
var inst_24832__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24833 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24834 = ["0.0"];
var inst_24835 = cljs.core.PersistentHashMap.fromArrays(inst_24833,inst_24834);
var inst_24836 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24832__$1,inst_24835);
var inst_24837 = cljs.core.async.timeout.call(null,(300));
var state_24849__$1 = (function (){var statearr_24851 = state_24849;
(statearr_24851[(8)] = inst_24836);

(statearr_24851[(7)] = inst_24832__$1);

return statearr_24851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24849__$1,(2),inst_24837);
} else {
if((state_val_24850 === (2))){
var inst_24832 = (state_24849[(7)]);
var inst_24839 = (state_24849[(2)]);
var inst_24840 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24841 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24842 = cljs.core.PersistentHashMap.fromArrays(inst_24840,inst_24841);
var inst_24843 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24832,inst_24842);
var inst_24844 = cljs.core.async.timeout.call(null,(200));
var state_24849__$1 = (function (){var statearr_24852 = state_24849;
(statearr_24852[(9)] = inst_24839);

(statearr_24852[(10)] = inst_24843);

return statearr_24852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24849__$1,(3),inst_24844);
} else {
if((state_val_24850 === (3))){
var inst_24832 = (state_24849[(7)]);
var inst_24846 = (state_24849[(2)]);
var inst_24847 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24832,"");
var state_24849__$1 = (function (){var statearr_24853 = state_24849;
(statearr_24853[(11)] = inst_24846);

return statearr_24853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24849__$1,inst_24847);
} else {
return null;
}
}
}
});})(c__20523__auto__))
;
return ((function (switch__20411__auto__,c__20523__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20412__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20412__auto____0 = (function (){
var statearr_24857 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24857[(0)] = figwheel$client$heads_up$clear_$_state_machine__20412__auto__);

(statearr_24857[(1)] = (1));

return statearr_24857;
});
var figwheel$client$heads_up$clear_$_state_machine__20412__auto____1 = (function (state_24849){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_24849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e24858){if((e24858 instanceof Object)){
var ex__20415__auto__ = e24858;
var statearr_24859_24861 = state_24849;
(statearr_24859_24861[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24862 = state_24849;
state_24849 = G__24862;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20412__auto__ = function(state_24849){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20412__auto____1.call(this,state_24849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20412__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20412__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__))
})();
var state__20525__auto__ = (function (){var statearr_24860 = f__20524__auto__.call(null);
(statearr_24860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_24860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__))
);

return c__20523__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__){
return (function (state_24894){
var state_val_24895 = (state_24894[(1)]);
if((state_val_24895 === (1))){
var inst_24884 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24894__$1 = state_24894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24894__$1,(2),inst_24884);
} else {
if((state_val_24895 === (2))){
var inst_24886 = (state_24894[(2)]);
var inst_24887 = cljs.core.async.timeout.call(null,(400));
var state_24894__$1 = (function (){var statearr_24896 = state_24894;
(statearr_24896[(7)] = inst_24886);

return statearr_24896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24894__$1,(3),inst_24887);
} else {
if((state_val_24895 === (3))){
var inst_24889 = (state_24894[(2)]);
var inst_24890 = figwheel.client.heads_up.clear.call(null);
var state_24894__$1 = (function (){var statearr_24897 = state_24894;
(statearr_24897[(8)] = inst_24889);

return statearr_24897;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24894__$1,(4),inst_24890);
} else {
if((state_val_24895 === (4))){
var inst_24892 = (state_24894[(2)]);
var state_24894__$1 = state_24894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24894__$1,inst_24892);
} else {
return null;
}
}
}
}
});})(c__20523__auto__))
;
return ((function (switch__20411__auto__,c__20523__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto____0 = (function (){
var statearr_24901 = [null,null,null,null,null,null,null,null,null];
(statearr_24901[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto__);

(statearr_24901[(1)] = (1));

return statearr_24901;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto____1 = (function (state_24894){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_24894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e24902){if((e24902 instanceof Object)){
var ex__20415__auto__ = e24902;
var statearr_24903_24905 = state_24894;
(statearr_24903_24905[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24906 = state_24894;
state_24894 = G__24906;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto__ = function(state_24894){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto____1.call(this,state_24894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__))
})();
var state__20525__auto__ = (function (){var statearr_24904 = f__20524__auto__.call(null);
(statearr_24904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_24904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__))
);

return c__20523__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map