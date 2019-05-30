// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20568 = [];
var len__19428__auto___20574 = arguments.length;
var i__19429__auto___20575 = (0);
while(true){
if((i__19429__auto___20575 < len__19428__auto___20574)){
args20568.push((arguments[i__19429__auto___20575]));

var G__20576 = (i__19429__auto___20575 + (1));
i__19429__auto___20575 = G__20576;
continue;
} else {
}
break;
}

var G__20570 = args20568.length;
switch (G__20570) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20568.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20571 = (function (f,blockable,meta20572){
this.f = f;
this.blockable = blockable;
this.meta20572 = meta20572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20573,meta20572__$1){
var self__ = this;
var _20573__$1 = this;
return (new cljs.core.async.t_cljs$core$async20571(self__.f,self__.blockable,meta20572__$1));
});

cljs.core.async.t_cljs$core$async20571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20573){
var self__ = this;
var _20573__$1 = this;
return self__.meta20572;
});

cljs.core.async.t_cljs$core$async20571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20572","meta20572",-80476004,null)], null);
});

cljs.core.async.t_cljs$core$async20571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20571";

cljs.core.async.t_cljs$core$async20571.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20571");
});

cljs.core.async.__GT_t_cljs$core$async20571 = (function cljs$core$async$__GT_t_cljs$core$async20571(f__$1,blockable__$1,meta20572){
return (new cljs.core.async.t_cljs$core$async20571(f__$1,blockable__$1,meta20572));
});

}

return (new cljs.core.async.t_cljs$core$async20571(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20580 = [];
var len__19428__auto___20583 = arguments.length;
var i__19429__auto___20584 = (0);
while(true){
if((i__19429__auto___20584 < len__19428__auto___20583)){
args20580.push((arguments[i__19429__auto___20584]));

var G__20585 = (i__19429__auto___20584 + (1));
i__19429__auto___20584 = G__20585;
continue;
} else {
}
break;
}

var G__20582 = args20580.length;
switch (G__20582) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20580.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20587 = [];
var len__19428__auto___20590 = arguments.length;
var i__19429__auto___20591 = (0);
while(true){
if((i__19429__auto___20591 < len__19428__auto___20590)){
args20587.push((arguments[i__19429__auto___20591]));

var G__20592 = (i__19429__auto___20591 + (1));
i__19429__auto___20591 = G__20592;
continue;
} else {
}
break;
}

var G__20589 = args20587.length;
switch (G__20589) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20587.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20594 = [];
var len__19428__auto___20597 = arguments.length;
var i__19429__auto___20598 = (0);
while(true){
if((i__19429__auto___20598 < len__19428__auto___20597)){
args20594.push((arguments[i__19429__auto___20598]));

var G__20599 = (i__19429__auto___20598 + (1));
i__19429__auto___20598 = G__20599;
continue;
} else {
}
break;
}

var G__20596 = args20594.length;
switch (G__20596) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20594.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20601 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20601);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20601,ret){
return (function (){
return fn1.call(null,val_20601);
});})(val_20601,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20602 = [];
var len__19428__auto___20605 = arguments.length;
var i__19429__auto___20606 = (0);
while(true){
if((i__19429__auto___20606 < len__19428__auto___20605)){
args20602.push((arguments[i__19429__auto___20606]));

var G__20607 = (i__19429__auto___20606 + (1));
i__19429__auto___20606 = G__20607;
continue;
} else {
}
break;
}

var G__20604 = args20602.length;
switch (G__20604) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20602.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19273__auto___20609 = n;
var x_20610 = (0);
while(true){
if((x_20610 < n__19273__auto___20609)){
(a[x_20610] = (0));

var G__20611 = (x_20610 + (1));
x_20610 = G__20611;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20612 = (i + (1));
i = G__20612;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20616 = (function (alt_flag,flag,meta20617){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20617 = meta20617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20618,meta20617__$1){
var self__ = this;
var _20618__$1 = this;
return (new cljs.core.async.t_cljs$core$async20616(self__.alt_flag,self__.flag,meta20617__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20618){
var self__ = this;
var _20618__$1 = this;
return self__.meta20617;
});})(flag))
;

cljs.core.async.t_cljs$core$async20616.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20616.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20617","meta20617",-1620518534,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20616";

cljs.core.async.t_cljs$core$async20616.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20616");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20616 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20616(alt_flag__$1,flag__$1,meta20617){
return (new cljs.core.async.t_cljs$core$async20616(alt_flag__$1,flag__$1,meta20617));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20616(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20622 = (function (alt_handler,flag,cb,meta20623){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20623 = meta20623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20624,meta20623__$1){
var self__ = this;
var _20624__$1 = this;
return (new cljs.core.async.t_cljs$core$async20622(self__.alt_handler,self__.flag,self__.cb,meta20623__$1));
});

cljs.core.async.t_cljs$core$async20622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20624){
var self__ = this;
var _20624__$1 = this;
return self__.meta20623;
});

cljs.core.async.t_cljs$core$async20622.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20623","meta20623",520070541,null)], null);
});

cljs.core.async.t_cljs$core$async20622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20622";

cljs.core.async.t_cljs$core$async20622.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20622");
});

cljs.core.async.__GT_t_cljs$core$async20622 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20622(alt_handler__$1,flag__$1,cb__$1,meta20623){
return (new cljs.core.async.t_cljs$core$async20622(alt_handler__$1,flag__$1,cb__$1,meta20623));
});

}

return (new cljs.core.async.t_cljs$core$async20622(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20625_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20625_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20626_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20626_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18370__auto__ = wport;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20627 = (i + (1));
i = G__20627;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18370__auto__ = ret;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18358__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18358__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___20633 = arguments.length;
var i__19429__auto___20634 = (0);
while(true){
if((i__19429__auto___20634 < len__19428__auto___20633)){
args__19435__auto__.push((arguments[i__19429__auto___20634]));

var G__20635 = (i__19429__auto___20634 + (1));
i__19429__auto___20634 = G__20635;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20630){
var map__20631 = p__20630;
var map__20631__$1 = ((((!((map__20631 == null)))?((((map__20631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20631):map__20631);
var opts = map__20631__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20628){
var G__20629 = cljs.core.first.call(null,seq20628);
var seq20628__$1 = cljs.core.next.call(null,seq20628);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20629,seq20628__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20636 = [];
var len__19428__auto___20686 = arguments.length;
var i__19429__auto___20687 = (0);
while(true){
if((i__19429__auto___20687 < len__19428__auto___20686)){
args20636.push((arguments[i__19429__auto___20687]));

var G__20688 = (i__19429__auto___20687 + (1));
i__19429__auto___20687 = G__20688;
continue;
} else {
}
break;
}

var G__20638 = args20636.length;
switch (G__20638) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20636.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20523__auto___20690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___20690){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___20690){
return (function (state_20662){
var state_val_20663 = (state_20662[(1)]);
if((state_val_20663 === (7))){
var inst_20658 = (state_20662[(2)]);
var state_20662__$1 = state_20662;
var statearr_20664_20691 = state_20662__$1;
(statearr_20664_20691[(2)] = inst_20658);

(statearr_20664_20691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (1))){
var state_20662__$1 = state_20662;
var statearr_20665_20692 = state_20662__$1;
(statearr_20665_20692[(2)] = null);

(statearr_20665_20692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (4))){
var inst_20641 = (state_20662[(7)]);
var inst_20641__$1 = (state_20662[(2)]);
var inst_20642 = (inst_20641__$1 == null);
var state_20662__$1 = (function (){var statearr_20666 = state_20662;
(statearr_20666[(7)] = inst_20641__$1);

return statearr_20666;
})();
if(cljs.core.truth_(inst_20642)){
var statearr_20667_20693 = state_20662__$1;
(statearr_20667_20693[(1)] = (5));

} else {
var statearr_20668_20694 = state_20662__$1;
(statearr_20668_20694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (13))){
var state_20662__$1 = state_20662;
var statearr_20669_20695 = state_20662__$1;
(statearr_20669_20695[(2)] = null);

(statearr_20669_20695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (6))){
var inst_20641 = (state_20662[(7)]);
var state_20662__$1 = state_20662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20662__$1,(11),to,inst_20641);
} else {
if((state_val_20663 === (3))){
var inst_20660 = (state_20662[(2)]);
var state_20662__$1 = state_20662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20662__$1,inst_20660);
} else {
if((state_val_20663 === (12))){
var state_20662__$1 = state_20662;
var statearr_20670_20696 = state_20662__$1;
(statearr_20670_20696[(2)] = null);

(statearr_20670_20696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (2))){
var state_20662__$1 = state_20662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20662__$1,(4),from);
} else {
if((state_val_20663 === (11))){
var inst_20651 = (state_20662[(2)]);
var state_20662__$1 = state_20662;
if(cljs.core.truth_(inst_20651)){
var statearr_20671_20697 = state_20662__$1;
(statearr_20671_20697[(1)] = (12));

} else {
var statearr_20672_20698 = state_20662__$1;
(statearr_20672_20698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (9))){
var state_20662__$1 = state_20662;
var statearr_20673_20699 = state_20662__$1;
(statearr_20673_20699[(2)] = null);

(statearr_20673_20699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (5))){
var state_20662__$1 = state_20662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20674_20700 = state_20662__$1;
(statearr_20674_20700[(1)] = (8));

} else {
var statearr_20675_20701 = state_20662__$1;
(statearr_20675_20701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (14))){
var inst_20656 = (state_20662[(2)]);
var state_20662__$1 = state_20662;
var statearr_20676_20702 = state_20662__$1;
(statearr_20676_20702[(2)] = inst_20656);

(statearr_20676_20702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (10))){
var inst_20648 = (state_20662[(2)]);
var state_20662__$1 = state_20662;
var statearr_20677_20703 = state_20662__$1;
(statearr_20677_20703[(2)] = inst_20648);

(statearr_20677_20703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20663 === (8))){
var inst_20645 = cljs.core.async.close_BANG_.call(null,to);
var state_20662__$1 = state_20662;
var statearr_20678_20704 = state_20662__$1;
(statearr_20678_20704[(2)] = inst_20645);

(statearr_20678_20704[(1)] = (10));


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
});})(c__20523__auto___20690))
;
return ((function (switch__20411__auto__,c__20523__auto___20690){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_20682 = [null,null,null,null,null,null,null,null];
(statearr_20682[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_20682[(1)] = (1));

return statearr_20682;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_20662){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_20662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e20683){if((e20683 instanceof Object)){
var ex__20415__auto__ = e20683;
var statearr_20684_20705 = state_20662;
(statearr_20684_20705[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20706 = state_20662;
state_20662 = G__20706;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_20662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_20662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___20690))
})();
var state__20525__auto__ = (function (){var statearr_20685 = f__20524__auto__.call(null);
(statearr_20685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___20690);

return statearr_20685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___20690))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20890){
var vec__20891 = p__20890;
var v = cljs.core.nth.call(null,vec__20891,(0),null);
var p = cljs.core.nth.call(null,vec__20891,(1),null);
var job = vec__20891;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20523__auto___21073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___21073,res,vec__20891,v,p,job,jobs,results){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___21073,res,vec__20891,v,p,job,jobs,results){
return (function (state_20896){
var state_val_20897 = (state_20896[(1)]);
if((state_val_20897 === (1))){
var state_20896__$1 = state_20896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20896__$1,(2),res,v);
} else {
if((state_val_20897 === (2))){
var inst_20893 = (state_20896[(2)]);
var inst_20894 = cljs.core.async.close_BANG_.call(null,res);
var state_20896__$1 = (function (){var statearr_20898 = state_20896;
(statearr_20898[(7)] = inst_20893);

return statearr_20898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20896__$1,inst_20894);
} else {
return null;
}
}
});})(c__20523__auto___21073,res,vec__20891,v,p,job,jobs,results))
;
return ((function (switch__20411__auto__,c__20523__auto___21073,res,vec__20891,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0 = (function (){
var statearr_20902 = [null,null,null,null,null,null,null,null];
(statearr_20902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__);

(statearr_20902[(1)] = (1));

return statearr_20902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1 = (function (state_20896){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_20896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e20903){if((e20903 instanceof Object)){
var ex__20415__auto__ = e20903;
var statearr_20904_21074 = state_20896;
(statearr_20904_21074[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21075 = state_20896;
state_20896 = G__21075;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = function(state_20896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1.call(this,state_20896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___21073,res,vec__20891,v,p,job,jobs,results))
})();
var state__20525__auto__ = (function (){var statearr_20905 = f__20524__auto__.call(null);
(statearr_20905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___21073);

return statearr_20905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___21073,res,vec__20891,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20906){
var vec__20907 = p__20906;
var v = cljs.core.nth.call(null,vec__20907,(0),null);
var p = cljs.core.nth.call(null,vec__20907,(1),null);
var job = vec__20907;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19273__auto___21076 = n;
var __21077 = (0);
while(true){
if((__21077 < n__19273__auto___21076)){
var G__20908_21078 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20908_21078) {
case "compute":
var c__20523__auto___21080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21077,c__20523__auto___21080,G__20908_21078,n__19273__auto___21076,jobs,results,process,async){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (__21077,c__20523__auto___21080,G__20908_21078,n__19273__auto___21076,jobs,results,process,async){
return (function (state_20921){
var state_val_20922 = (state_20921[(1)]);
if((state_val_20922 === (1))){
var state_20921__$1 = state_20921;
var statearr_20923_21081 = state_20921__$1;
(statearr_20923_21081[(2)] = null);

(statearr_20923_21081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20922 === (2))){
var state_20921__$1 = state_20921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20921__$1,(4),jobs);
} else {
if((state_val_20922 === (3))){
var inst_20919 = (state_20921[(2)]);
var state_20921__$1 = state_20921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20921__$1,inst_20919);
} else {
if((state_val_20922 === (4))){
var inst_20911 = (state_20921[(2)]);
var inst_20912 = process.call(null,inst_20911);
var state_20921__$1 = state_20921;
if(cljs.core.truth_(inst_20912)){
var statearr_20924_21082 = state_20921__$1;
(statearr_20924_21082[(1)] = (5));

} else {
var statearr_20925_21083 = state_20921__$1;
(statearr_20925_21083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20922 === (5))){
var state_20921__$1 = state_20921;
var statearr_20926_21084 = state_20921__$1;
(statearr_20926_21084[(2)] = null);

(statearr_20926_21084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20922 === (6))){
var state_20921__$1 = state_20921;
var statearr_20927_21085 = state_20921__$1;
(statearr_20927_21085[(2)] = null);

(statearr_20927_21085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20922 === (7))){
var inst_20917 = (state_20921[(2)]);
var state_20921__$1 = state_20921;
var statearr_20928_21086 = state_20921__$1;
(statearr_20928_21086[(2)] = inst_20917);

(statearr_20928_21086[(1)] = (3));


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
});})(__21077,c__20523__auto___21080,G__20908_21078,n__19273__auto___21076,jobs,results,process,async))
;
return ((function (__21077,switch__20411__auto__,c__20523__auto___21080,G__20908_21078,n__19273__auto___21076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0 = (function (){
var statearr_20932 = [null,null,null,null,null,null,null];
(statearr_20932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__);

(statearr_20932[(1)] = (1));

return statearr_20932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1 = (function (state_20921){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_20921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e20933){if((e20933 instanceof Object)){
var ex__20415__auto__ = e20933;
var statearr_20934_21087 = state_20921;
(statearr_20934_21087[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21088 = state_20921;
state_20921 = G__21088;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = function(state_20921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1.call(this,state_20921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__;
})()
;})(__21077,switch__20411__auto__,c__20523__auto___21080,G__20908_21078,n__19273__auto___21076,jobs,results,process,async))
})();
var state__20525__auto__ = (function (){var statearr_20935 = f__20524__auto__.call(null);
(statearr_20935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___21080);

return statearr_20935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(__21077,c__20523__auto___21080,G__20908_21078,n__19273__auto___21076,jobs,results,process,async))
);


break;
case "async":
var c__20523__auto___21089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21077,c__20523__auto___21089,G__20908_21078,n__19273__auto___21076,jobs,results,process,async){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (__21077,c__20523__auto___21089,G__20908_21078,n__19273__auto___21076,jobs,results,process,async){
return (function (state_20948){
var state_val_20949 = (state_20948[(1)]);
if((state_val_20949 === (1))){
var state_20948__$1 = state_20948;
var statearr_20950_21090 = state_20948__$1;
(statearr_20950_21090[(2)] = null);

(statearr_20950_21090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (2))){
var state_20948__$1 = state_20948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20948__$1,(4),jobs);
} else {
if((state_val_20949 === (3))){
var inst_20946 = (state_20948[(2)]);
var state_20948__$1 = state_20948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20948__$1,inst_20946);
} else {
if((state_val_20949 === (4))){
var inst_20938 = (state_20948[(2)]);
var inst_20939 = async.call(null,inst_20938);
var state_20948__$1 = state_20948;
if(cljs.core.truth_(inst_20939)){
var statearr_20951_21091 = state_20948__$1;
(statearr_20951_21091[(1)] = (5));

} else {
var statearr_20952_21092 = state_20948__$1;
(statearr_20952_21092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (5))){
var state_20948__$1 = state_20948;
var statearr_20953_21093 = state_20948__$1;
(statearr_20953_21093[(2)] = null);

(statearr_20953_21093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (6))){
var state_20948__$1 = state_20948;
var statearr_20954_21094 = state_20948__$1;
(statearr_20954_21094[(2)] = null);

(statearr_20954_21094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20949 === (7))){
var inst_20944 = (state_20948[(2)]);
var state_20948__$1 = state_20948;
var statearr_20955_21095 = state_20948__$1;
(statearr_20955_21095[(2)] = inst_20944);

(statearr_20955_21095[(1)] = (3));


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
});})(__21077,c__20523__auto___21089,G__20908_21078,n__19273__auto___21076,jobs,results,process,async))
;
return ((function (__21077,switch__20411__auto__,c__20523__auto___21089,G__20908_21078,n__19273__auto___21076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0 = (function (){
var statearr_20959 = [null,null,null,null,null,null,null];
(statearr_20959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__);

(statearr_20959[(1)] = (1));

return statearr_20959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1 = (function (state_20948){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_20948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e20960){if((e20960 instanceof Object)){
var ex__20415__auto__ = e20960;
var statearr_20961_21096 = state_20948;
(statearr_20961_21096[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21097 = state_20948;
state_20948 = G__21097;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = function(state_20948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1.call(this,state_20948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__;
})()
;})(__21077,switch__20411__auto__,c__20523__auto___21089,G__20908_21078,n__19273__auto___21076,jobs,results,process,async))
})();
var state__20525__auto__ = (function (){var statearr_20962 = f__20524__auto__.call(null);
(statearr_20962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___21089);

return statearr_20962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(__21077,c__20523__auto___21089,G__20908_21078,n__19273__auto___21076,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21098 = (__21077 + (1));
__21077 = G__21098;
continue;
} else {
}
break;
}

var c__20523__auto___21099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___21099,jobs,results,process,async){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___21099,jobs,results,process,async){
return (function (state_20984){
var state_val_20985 = (state_20984[(1)]);
if((state_val_20985 === (1))){
var state_20984__$1 = state_20984;
var statearr_20986_21100 = state_20984__$1;
(statearr_20986_21100[(2)] = null);

(statearr_20986_21100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20985 === (2))){
var state_20984__$1 = state_20984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20984__$1,(4),from);
} else {
if((state_val_20985 === (3))){
var inst_20982 = (state_20984[(2)]);
var state_20984__$1 = state_20984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20984__$1,inst_20982);
} else {
if((state_val_20985 === (4))){
var inst_20965 = (state_20984[(7)]);
var inst_20965__$1 = (state_20984[(2)]);
var inst_20966 = (inst_20965__$1 == null);
var state_20984__$1 = (function (){var statearr_20987 = state_20984;
(statearr_20987[(7)] = inst_20965__$1);

return statearr_20987;
})();
if(cljs.core.truth_(inst_20966)){
var statearr_20988_21101 = state_20984__$1;
(statearr_20988_21101[(1)] = (5));

} else {
var statearr_20989_21102 = state_20984__$1;
(statearr_20989_21102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20985 === (5))){
var inst_20968 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20984__$1 = state_20984;
var statearr_20990_21103 = state_20984__$1;
(statearr_20990_21103[(2)] = inst_20968);

(statearr_20990_21103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20985 === (6))){
var inst_20965 = (state_20984[(7)]);
var inst_20970 = (state_20984[(8)]);
var inst_20970__$1 = cljs.core.async.chan.call(null,(1));
var inst_20971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20972 = [inst_20965,inst_20970__$1];
var inst_20973 = (new cljs.core.PersistentVector(null,2,(5),inst_20971,inst_20972,null));
var state_20984__$1 = (function (){var statearr_20991 = state_20984;
(statearr_20991[(8)] = inst_20970__$1);

return statearr_20991;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20984__$1,(8),jobs,inst_20973);
} else {
if((state_val_20985 === (7))){
var inst_20980 = (state_20984[(2)]);
var state_20984__$1 = state_20984;
var statearr_20992_21104 = state_20984__$1;
(statearr_20992_21104[(2)] = inst_20980);

(statearr_20992_21104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20985 === (8))){
var inst_20970 = (state_20984[(8)]);
var inst_20975 = (state_20984[(2)]);
var state_20984__$1 = (function (){var statearr_20993 = state_20984;
(statearr_20993[(9)] = inst_20975);

return statearr_20993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20984__$1,(9),results,inst_20970);
} else {
if((state_val_20985 === (9))){
var inst_20977 = (state_20984[(2)]);
var state_20984__$1 = (function (){var statearr_20994 = state_20984;
(statearr_20994[(10)] = inst_20977);

return statearr_20994;
})();
var statearr_20995_21105 = state_20984__$1;
(statearr_20995_21105[(2)] = null);

(statearr_20995_21105[(1)] = (2));


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
});})(c__20523__auto___21099,jobs,results,process,async))
;
return ((function (switch__20411__auto__,c__20523__auto___21099,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0 = (function (){
var statearr_20999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__);

(statearr_20999[(1)] = (1));

return statearr_20999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1 = (function (state_20984){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_20984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e21000){if((e21000 instanceof Object)){
var ex__20415__auto__ = e21000;
var statearr_21001_21106 = state_20984;
(statearr_21001_21106[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21107 = state_20984;
state_20984 = G__21107;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = function(state_20984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1.call(this,state_20984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___21099,jobs,results,process,async))
})();
var state__20525__auto__ = (function (){var statearr_21002 = f__20524__auto__.call(null);
(statearr_21002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___21099);

return statearr_21002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___21099,jobs,results,process,async))
);


var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__,jobs,results,process,async){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__,jobs,results,process,async){
return (function (state_21040){
var state_val_21041 = (state_21040[(1)]);
if((state_val_21041 === (7))){
var inst_21036 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21042_21108 = state_21040__$1;
(statearr_21042_21108[(2)] = inst_21036);

(statearr_21042_21108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (20))){
var state_21040__$1 = state_21040;
var statearr_21043_21109 = state_21040__$1;
(statearr_21043_21109[(2)] = null);

(statearr_21043_21109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (1))){
var state_21040__$1 = state_21040;
var statearr_21044_21110 = state_21040__$1;
(statearr_21044_21110[(2)] = null);

(statearr_21044_21110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (4))){
var inst_21005 = (state_21040[(7)]);
var inst_21005__$1 = (state_21040[(2)]);
var inst_21006 = (inst_21005__$1 == null);
var state_21040__$1 = (function (){var statearr_21045 = state_21040;
(statearr_21045[(7)] = inst_21005__$1);

return statearr_21045;
})();
if(cljs.core.truth_(inst_21006)){
var statearr_21046_21111 = state_21040__$1;
(statearr_21046_21111[(1)] = (5));

} else {
var statearr_21047_21112 = state_21040__$1;
(statearr_21047_21112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (15))){
var inst_21018 = (state_21040[(8)]);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21040__$1,(18),to,inst_21018);
} else {
if((state_val_21041 === (21))){
var inst_21031 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21048_21113 = state_21040__$1;
(statearr_21048_21113[(2)] = inst_21031);

(statearr_21048_21113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (13))){
var inst_21033 = (state_21040[(2)]);
var state_21040__$1 = (function (){var statearr_21049 = state_21040;
(statearr_21049[(9)] = inst_21033);

return statearr_21049;
})();
var statearr_21050_21114 = state_21040__$1;
(statearr_21050_21114[(2)] = null);

(statearr_21050_21114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (6))){
var inst_21005 = (state_21040[(7)]);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21040__$1,(11),inst_21005);
} else {
if((state_val_21041 === (17))){
var inst_21026 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
if(cljs.core.truth_(inst_21026)){
var statearr_21051_21115 = state_21040__$1;
(statearr_21051_21115[(1)] = (19));

} else {
var statearr_21052_21116 = state_21040__$1;
(statearr_21052_21116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (3))){
var inst_21038 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21040__$1,inst_21038);
} else {
if((state_val_21041 === (12))){
var inst_21015 = (state_21040[(10)]);
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21040__$1,(14),inst_21015);
} else {
if((state_val_21041 === (2))){
var state_21040__$1 = state_21040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21040__$1,(4),results);
} else {
if((state_val_21041 === (19))){
var state_21040__$1 = state_21040;
var statearr_21053_21117 = state_21040__$1;
(statearr_21053_21117[(2)] = null);

(statearr_21053_21117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (11))){
var inst_21015 = (state_21040[(2)]);
var state_21040__$1 = (function (){var statearr_21054 = state_21040;
(statearr_21054[(10)] = inst_21015);

return statearr_21054;
})();
var statearr_21055_21118 = state_21040__$1;
(statearr_21055_21118[(2)] = null);

(statearr_21055_21118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (9))){
var state_21040__$1 = state_21040;
var statearr_21056_21119 = state_21040__$1;
(statearr_21056_21119[(2)] = null);

(statearr_21056_21119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (5))){
var state_21040__$1 = state_21040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21057_21120 = state_21040__$1;
(statearr_21057_21120[(1)] = (8));

} else {
var statearr_21058_21121 = state_21040__$1;
(statearr_21058_21121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (14))){
var inst_21020 = (state_21040[(11)]);
var inst_21018 = (state_21040[(8)]);
var inst_21018__$1 = (state_21040[(2)]);
var inst_21019 = (inst_21018__$1 == null);
var inst_21020__$1 = cljs.core.not.call(null,inst_21019);
var state_21040__$1 = (function (){var statearr_21059 = state_21040;
(statearr_21059[(11)] = inst_21020__$1);

(statearr_21059[(8)] = inst_21018__$1);

return statearr_21059;
})();
if(inst_21020__$1){
var statearr_21060_21122 = state_21040__$1;
(statearr_21060_21122[(1)] = (15));

} else {
var statearr_21061_21123 = state_21040__$1;
(statearr_21061_21123[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (16))){
var inst_21020 = (state_21040[(11)]);
var state_21040__$1 = state_21040;
var statearr_21062_21124 = state_21040__$1;
(statearr_21062_21124[(2)] = inst_21020);

(statearr_21062_21124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (10))){
var inst_21012 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21063_21125 = state_21040__$1;
(statearr_21063_21125[(2)] = inst_21012);

(statearr_21063_21125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (18))){
var inst_21023 = (state_21040[(2)]);
var state_21040__$1 = state_21040;
var statearr_21064_21126 = state_21040__$1;
(statearr_21064_21126[(2)] = inst_21023);

(statearr_21064_21126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21041 === (8))){
var inst_21009 = cljs.core.async.close_BANG_.call(null,to);
var state_21040__$1 = state_21040;
var statearr_21065_21127 = state_21040__$1;
(statearr_21065_21127[(2)] = inst_21009);

(statearr_21065_21127[(1)] = (10));


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
});})(c__20523__auto__,jobs,results,process,async))
;
return ((function (switch__20411__auto__,c__20523__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0 = (function (){
var statearr_21069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__);

(statearr_21069[(1)] = (1));

return statearr_21069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1 = (function (state_21040){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_21040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e21070){if((e21070 instanceof Object)){
var ex__20415__auto__ = e21070;
var statearr_21071_21128 = state_21040;
(statearr_21071_21128[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21129 = state_21040;
state_21040 = G__21129;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__ = function(state_21040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1.call(this,state_21040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20412__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__,jobs,results,process,async))
})();
var state__20525__auto__ = (function (){var statearr_21072 = f__20524__auto__.call(null);
(statearr_21072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_21072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__,jobs,results,process,async))
);

return c__20523__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21130 = [];
var len__19428__auto___21133 = arguments.length;
var i__19429__auto___21134 = (0);
while(true){
if((i__19429__auto___21134 < len__19428__auto___21133)){
args21130.push((arguments[i__19429__auto___21134]));

var G__21135 = (i__19429__auto___21134 + (1));
i__19429__auto___21134 = G__21135;
continue;
} else {
}
break;
}

var G__21132 = args21130.length;
switch (G__21132) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21130.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21137 = [];
var len__19428__auto___21140 = arguments.length;
var i__19429__auto___21141 = (0);
while(true){
if((i__19429__auto___21141 < len__19428__auto___21140)){
args21137.push((arguments[i__19429__auto___21141]));

var G__21142 = (i__19429__auto___21141 + (1));
i__19429__auto___21141 = G__21142;
continue;
} else {
}
break;
}

var G__21139 = args21137.length;
switch (G__21139) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21137.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21144 = [];
var len__19428__auto___21197 = arguments.length;
var i__19429__auto___21198 = (0);
while(true){
if((i__19429__auto___21198 < len__19428__auto___21197)){
args21144.push((arguments[i__19429__auto___21198]));

var G__21199 = (i__19429__auto___21198 + (1));
i__19429__auto___21198 = G__21199;
continue;
} else {
}
break;
}

var G__21146 = args21144.length;
switch (G__21146) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21144.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20523__auto___21201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___21201,tc,fc){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___21201,tc,fc){
return (function (state_21172){
var state_val_21173 = (state_21172[(1)]);
if((state_val_21173 === (7))){
var inst_21168 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21174_21202 = state_21172__$1;
(statearr_21174_21202[(2)] = inst_21168);

(statearr_21174_21202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (1))){
var state_21172__$1 = state_21172;
var statearr_21175_21203 = state_21172__$1;
(statearr_21175_21203[(2)] = null);

(statearr_21175_21203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (4))){
var inst_21149 = (state_21172[(7)]);
var inst_21149__$1 = (state_21172[(2)]);
var inst_21150 = (inst_21149__$1 == null);
var state_21172__$1 = (function (){var statearr_21176 = state_21172;
(statearr_21176[(7)] = inst_21149__$1);

return statearr_21176;
})();
if(cljs.core.truth_(inst_21150)){
var statearr_21177_21204 = state_21172__$1;
(statearr_21177_21204[(1)] = (5));

} else {
var statearr_21178_21205 = state_21172__$1;
(statearr_21178_21205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (13))){
var state_21172__$1 = state_21172;
var statearr_21179_21206 = state_21172__$1;
(statearr_21179_21206[(2)] = null);

(statearr_21179_21206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (6))){
var inst_21149 = (state_21172[(7)]);
var inst_21155 = p.call(null,inst_21149);
var state_21172__$1 = state_21172;
if(cljs.core.truth_(inst_21155)){
var statearr_21180_21207 = state_21172__$1;
(statearr_21180_21207[(1)] = (9));

} else {
var statearr_21181_21208 = state_21172__$1;
(statearr_21181_21208[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (3))){
var inst_21170 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21172__$1,inst_21170);
} else {
if((state_val_21173 === (12))){
var state_21172__$1 = state_21172;
var statearr_21182_21209 = state_21172__$1;
(statearr_21182_21209[(2)] = null);

(statearr_21182_21209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (2))){
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21172__$1,(4),ch);
} else {
if((state_val_21173 === (11))){
var inst_21149 = (state_21172[(7)]);
var inst_21159 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21172__$1,(8),inst_21159,inst_21149);
} else {
if((state_val_21173 === (9))){
var state_21172__$1 = state_21172;
var statearr_21183_21210 = state_21172__$1;
(statearr_21183_21210[(2)] = tc);

(statearr_21183_21210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (5))){
var inst_21152 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21153 = cljs.core.async.close_BANG_.call(null,fc);
var state_21172__$1 = (function (){var statearr_21184 = state_21172;
(statearr_21184[(8)] = inst_21152);

return statearr_21184;
})();
var statearr_21185_21211 = state_21172__$1;
(statearr_21185_21211[(2)] = inst_21153);

(statearr_21185_21211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (14))){
var inst_21166 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
var statearr_21186_21212 = state_21172__$1;
(statearr_21186_21212[(2)] = inst_21166);

(statearr_21186_21212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (10))){
var state_21172__$1 = state_21172;
var statearr_21187_21213 = state_21172__$1;
(statearr_21187_21213[(2)] = fc);

(statearr_21187_21213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21173 === (8))){
var inst_21161 = (state_21172[(2)]);
var state_21172__$1 = state_21172;
if(cljs.core.truth_(inst_21161)){
var statearr_21188_21214 = state_21172__$1;
(statearr_21188_21214[(1)] = (12));

} else {
var statearr_21189_21215 = state_21172__$1;
(statearr_21189_21215[(1)] = (13));

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
});})(c__20523__auto___21201,tc,fc))
;
return ((function (switch__20411__auto__,c__20523__auto___21201,tc,fc){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_21193 = [null,null,null,null,null,null,null,null,null];
(statearr_21193[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_21193[(1)] = (1));

return statearr_21193;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_21172){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_21172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e21194){if((e21194 instanceof Object)){
var ex__20415__auto__ = e21194;
var statearr_21195_21216 = state_21172;
(statearr_21195_21216[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21217 = state_21172;
state_21172 = G__21217;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_21172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_21172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___21201,tc,fc))
})();
var state__20525__auto__ = (function (){var statearr_21196 = f__20524__auto__.call(null);
(statearr_21196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___21201);

return statearr_21196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___21201,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__){
return (function (state_21281){
var state_val_21282 = (state_21281[(1)]);
if((state_val_21282 === (7))){
var inst_21277 = (state_21281[(2)]);
var state_21281__$1 = state_21281;
var statearr_21283_21304 = state_21281__$1;
(statearr_21283_21304[(2)] = inst_21277);

(statearr_21283_21304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21282 === (1))){
var inst_21261 = init;
var state_21281__$1 = (function (){var statearr_21284 = state_21281;
(statearr_21284[(7)] = inst_21261);

return statearr_21284;
})();
var statearr_21285_21305 = state_21281__$1;
(statearr_21285_21305[(2)] = null);

(statearr_21285_21305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21282 === (4))){
var inst_21264 = (state_21281[(8)]);
var inst_21264__$1 = (state_21281[(2)]);
var inst_21265 = (inst_21264__$1 == null);
var state_21281__$1 = (function (){var statearr_21286 = state_21281;
(statearr_21286[(8)] = inst_21264__$1);

return statearr_21286;
})();
if(cljs.core.truth_(inst_21265)){
var statearr_21287_21306 = state_21281__$1;
(statearr_21287_21306[(1)] = (5));

} else {
var statearr_21288_21307 = state_21281__$1;
(statearr_21288_21307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21282 === (6))){
var inst_21268 = (state_21281[(9)]);
var inst_21261 = (state_21281[(7)]);
var inst_21264 = (state_21281[(8)]);
var inst_21268__$1 = f.call(null,inst_21261,inst_21264);
var inst_21269 = cljs.core.reduced_QMARK_.call(null,inst_21268__$1);
var state_21281__$1 = (function (){var statearr_21289 = state_21281;
(statearr_21289[(9)] = inst_21268__$1);

return statearr_21289;
})();
if(inst_21269){
var statearr_21290_21308 = state_21281__$1;
(statearr_21290_21308[(1)] = (8));

} else {
var statearr_21291_21309 = state_21281__$1;
(statearr_21291_21309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21282 === (3))){
var inst_21279 = (state_21281[(2)]);
var state_21281__$1 = state_21281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21281__$1,inst_21279);
} else {
if((state_val_21282 === (2))){
var state_21281__$1 = state_21281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21281__$1,(4),ch);
} else {
if((state_val_21282 === (9))){
var inst_21268 = (state_21281[(9)]);
var inst_21261 = inst_21268;
var state_21281__$1 = (function (){var statearr_21292 = state_21281;
(statearr_21292[(7)] = inst_21261);

return statearr_21292;
})();
var statearr_21293_21310 = state_21281__$1;
(statearr_21293_21310[(2)] = null);

(statearr_21293_21310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21282 === (5))){
var inst_21261 = (state_21281[(7)]);
var state_21281__$1 = state_21281;
var statearr_21294_21311 = state_21281__$1;
(statearr_21294_21311[(2)] = inst_21261);

(statearr_21294_21311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21282 === (10))){
var inst_21275 = (state_21281[(2)]);
var state_21281__$1 = state_21281;
var statearr_21295_21312 = state_21281__$1;
(statearr_21295_21312[(2)] = inst_21275);

(statearr_21295_21312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21282 === (8))){
var inst_21268 = (state_21281[(9)]);
var inst_21271 = cljs.core.deref.call(null,inst_21268);
var state_21281__$1 = state_21281;
var statearr_21296_21313 = state_21281__$1;
(statearr_21296_21313[(2)] = inst_21271);

(statearr_21296_21313[(1)] = (10));


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
});})(c__20523__auto__))
;
return ((function (switch__20411__auto__,c__20523__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20412__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20412__auto____0 = (function (){
var statearr_21300 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21300[(0)] = cljs$core$async$reduce_$_state_machine__20412__auto__);

(statearr_21300[(1)] = (1));

return statearr_21300;
});
var cljs$core$async$reduce_$_state_machine__20412__auto____1 = (function (state_21281){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_21281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e21301){if((e21301 instanceof Object)){
var ex__20415__auto__ = e21301;
var statearr_21302_21314 = state_21281;
(statearr_21302_21314[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21315 = state_21281;
state_21281 = G__21315;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20412__auto__ = function(state_21281){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20412__auto____1.call(this,state_21281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20412__auto____0;
cljs$core$async$reduce_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20412__auto____1;
return cljs$core$async$reduce_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__))
})();
var state__20525__auto__ = (function (){var statearr_21303 = f__20524__auto__.call(null);
(statearr_21303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_21303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__))
);

return c__20523__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21316 = [];
var len__19428__auto___21368 = arguments.length;
var i__19429__auto___21369 = (0);
while(true){
if((i__19429__auto___21369 < len__19428__auto___21368)){
args21316.push((arguments[i__19429__auto___21369]));

var G__21370 = (i__19429__auto___21369 + (1));
i__19429__auto___21369 = G__21370;
continue;
} else {
}
break;
}

var G__21318 = args21316.length;
switch (G__21318) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21316.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__){
return (function (state_21343){
var state_val_21344 = (state_21343[(1)]);
if((state_val_21344 === (7))){
var inst_21325 = (state_21343[(2)]);
var state_21343__$1 = state_21343;
var statearr_21345_21372 = state_21343__$1;
(statearr_21345_21372[(2)] = inst_21325);

(statearr_21345_21372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (1))){
var inst_21319 = cljs.core.seq.call(null,coll);
var inst_21320 = inst_21319;
var state_21343__$1 = (function (){var statearr_21346 = state_21343;
(statearr_21346[(7)] = inst_21320);

return statearr_21346;
})();
var statearr_21347_21373 = state_21343__$1;
(statearr_21347_21373[(2)] = null);

(statearr_21347_21373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (4))){
var inst_21320 = (state_21343[(7)]);
var inst_21323 = cljs.core.first.call(null,inst_21320);
var state_21343__$1 = state_21343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21343__$1,(7),ch,inst_21323);
} else {
if((state_val_21344 === (13))){
var inst_21337 = (state_21343[(2)]);
var state_21343__$1 = state_21343;
var statearr_21348_21374 = state_21343__$1;
(statearr_21348_21374[(2)] = inst_21337);

(statearr_21348_21374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (6))){
var inst_21328 = (state_21343[(2)]);
var state_21343__$1 = state_21343;
if(cljs.core.truth_(inst_21328)){
var statearr_21349_21375 = state_21343__$1;
(statearr_21349_21375[(1)] = (8));

} else {
var statearr_21350_21376 = state_21343__$1;
(statearr_21350_21376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (3))){
var inst_21341 = (state_21343[(2)]);
var state_21343__$1 = state_21343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21343__$1,inst_21341);
} else {
if((state_val_21344 === (12))){
var state_21343__$1 = state_21343;
var statearr_21351_21377 = state_21343__$1;
(statearr_21351_21377[(2)] = null);

(statearr_21351_21377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (2))){
var inst_21320 = (state_21343[(7)]);
var state_21343__$1 = state_21343;
if(cljs.core.truth_(inst_21320)){
var statearr_21352_21378 = state_21343__$1;
(statearr_21352_21378[(1)] = (4));

} else {
var statearr_21353_21379 = state_21343__$1;
(statearr_21353_21379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (11))){
var inst_21334 = cljs.core.async.close_BANG_.call(null,ch);
var state_21343__$1 = state_21343;
var statearr_21354_21380 = state_21343__$1;
(statearr_21354_21380[(2)] = inst_21334);

(statearr_21354_21380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (9))){
var state_21343__$1 = state_21343;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21355_21381 = state_21343__$1;
(statearr_21355_21381[(1)] = (11));

} else {
var statearr_21356_21382 = state_21343__$1;
(statearr_21356_21382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (5))){
var inst_21320 = (state_21343[(7)]);
var state_21343__$1 = state_21343;
var statearr_21357_21383 = state_21343__$1;
(statearr_21357_21383[(2)] = inst_21320);

(statearr_21357_21383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (10))){
var inst_21339 = (state_21343[(2)]);
var state_21343__$1 = state_21343;
var statearr_21358_21384 = state_21343__$1;
(statearr_21358_21384[(2)] = inst_21339);

(statearr_21358_21384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21344 === (8))){
var inst_21320 = (state_21343[(7)]);
var inst_21330 = cljs.core.next.call(null,inst_21320);
var inst_21320__$1 = inst_21330;
var state_21343__$1 = (function (){var statearr_21359 = state_21343;
(statearr_21359[(7)] = inst_21320__$1);

return statearr_21359;
})();
var statearr_21360_21385 = state_21343__$1;
(statearr_21360_21385[(2)] = null);

(statearr_21360_21385[(1)] = (2));


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
});})(c__20523__auto__))
;
return ((function (switch__20411__auto__,c__20523__auto__){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_21364 = [null,null,null,null,null,null,null,null];
(statearr_21364[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_21364[(1)] = (1));

return statearr_21364;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_21343){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_21343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e21365){if((e21365 instanceof Object)){
var ex__20415__auto__ = e21365;
var statearr_21366_21386 = state_21343;
(statearr_21366_21386[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21387 = state_21343;
state_21343 = G__21387;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_21343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_21343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__))
})();
var state__20525__auto__ = (function (){var statearr_21367 = f__20524__auto__.call(null);
(statearr_21367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_21367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__))
);

return c__20523__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19025__auto__ = (((_ == null))?null:_);
var m__19026__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,_);
} else {
var m__19026__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21609 = (function (mult,ch,cs,meta21610){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21610 = meta21610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21611,meta21610__$1){
var self__ = this;
var _21611__$1 = this;
return (new cljs.core.async.t_cljs$core$async21609(self__.mult,self__.ch,self__.cs,meta21610__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21611){
var self__ = this;
var _21611__$1 = this;
return self__.meta21610;
});})(cs))
;

cljs.core.async.t_cljs$core$async21609.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21609.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21609.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21609.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21609.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21609.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21610","meta21610",-1897432584,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21609";

cljs.core.async.t_cljs$core$async21609.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async21609");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21609 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21609(mult__$1,ch__$1,cs__$1,meta21610){
return (new cljs.core.async.t_cljs$core$async21609(mult__$1,ch__$1,cs__$1,meta21610));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21609(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20523__auto___21830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___21830,cs,m,dchan,dctr,done){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___21830,cs,m,dchan,dctr,done){
return (function (state_21742){
var state_val_21743 = (state_21742[(1)]);
if((state_val_21743 === (7))){
var inst_21738 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21744_21831 = state_21742__$1;
(statearr_21744_21831[(2)] = inst_21738);

(statearr_21744_21831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (20))){
var inst_21643 = (state_21742[(7)]);
var inst_21653 = cljs.core.first.call(null,inst_21643);
var inst_21654 = cljs.core.nth.call(null,inst_21653,(0),null);
var inst_21655 = cljs.core.nth.call(null,inst_21653,(1),null);
var state_21742__$1 = (function (){var statearr_21745 = state_21742;
(statearr_21745[(8)] = inst_21654);

return statearr_21745;
})();
if(cljs.core.truth_(inst_21655)){
var statearr_21746_21832 = state_21742__$1;
(statearr_21746_21832[(1)] = (22));

} else {
var statearr_21747_21833 = state_21742__$1;
(statearr_21747_21833[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (27))){
var inst_21683 = (state_21742[(9)]);
var inst_21690 = (state_21742[(10)]);
var inst_21685 = (state_21742[(11)]);
var inst_21614 = (state_21742[(12)]);
var inst_21690__$1 = cljs.core._nth.call(null,inst_21683,inst_21685);
var inst_21691 = cljs.core.async.put_BANG_.call(null,inst_21690__$1,inst_21614,done);
var state_21742__$1 = (function (){var statearr_21748 = state_21742;
(statearr_21748[(10)] = inst_21690__$1);

return statearr_21748;
})();
if(cljs.core.truth_(inst_21691)){
var statearr_21749_21834 = state_21742__$1;
(statearr_21749_21834[(1)] = (30));

} else {
var statearr_21750_21835 = state_21742__$1;
(statearr_21750_21835[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (1))){
var state_21742__$1 = state_21742;
var statearr_21751_21836 = state_21742__$1;
(statearr_21751_21836[(2)] = null);

(statearr_21751_21836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (24))){
var inst_21643 = (state_21742[(7)]);
var inst_21660 = (state_21742[(2)]);
var inst_21661 = cljs.core.next.call(null,inst_21643);
var inst_21623 = inst_21661;
var inst_21624 = null;
var inst_21625 = (0);
var inst_21626 = (0);
var state_21742__$1 = (function (){var statearr_21752 = state_21742;
(statearr_21752[(13)] = inst_21623);

(statearr_21752[(14)] = inst_21625);

(statearr_21752[(15)] = inst_21660);

(statearr_21752[(16)] = inst_21624);

(statearr_21752[(17)] = inst_21626);

return statearr_21752;
})();
var statearr_21753_21837 = state_21742__$1;
(statearr_21753_21837[(2)] = null);

(statearr_21753_21837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (39))){
var state_21742__$1 = state_21742;
var statearr_21757_21838 = state_21742__$1;
(statearr_21757_21838[(2)] = null);

(statearr_21757_21838[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (4))){
var inst_21614 = (state_21742[(12)]);
var inst_21614__$1 = (state_21742[(2)]);
var inst_21615 = (inst_21614__$1 == null);
var state_21742__$1 = (function (){var statearr_21758 = state_21742;
(statearr_21758[(12)] = inst_21614__$1);

return statearr_21758;
})();
if(cljs.core.truth_(inst_21615)){
var statearr_21759_21839 = state_21742__$1;
(statearr_21759_21839[(1)] = (5));

} else {
var statearr_21760_21840 = state_21742__$1;
(statearr_21760_21840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (15))){
var inst_21623 = (state_21742[(13)]);
var inst_21625 = (state_21742[(14)]);
var inst_21624 = (state_21742[(16)]);
var inst_21626 = (state_21742[(17)]);
var inst_21639 = (state_21742[(2)]);
var inst_21640 = (inst_21626 + (1));
var tmp21754 = inst_21623;
var tmp21755 = inst_21625;
var tmp21756 = inst_21624;
var inst_21623__$1 = tmp21754;
var inst_21624__$1 = tmp21756;
var inst_21625__$1 = tmp21755;
var inst_21626__$1 = inst_21640;
var state_21742__$1 = (function (){var statearr_21761 = state_21742;
(statearr_21761[(13)] = inst_21623__$1);

(statearr_21761[(14)] = inst_21625__$1);

(statearr_21761[(18)] = inst_21639);

(statearr_21761[(16)] = inst_21624__$1);

(statearr_21761[(17)] = inst_21626__$1);

return statearr_21761;
})();
var statearr_21762_21841 = state_21742__$1;
(statearr_21762_21841[(2)] = null);

(statearr_21762_21841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (21))){
var inst_21664 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21766_21842 = state_21742__$1;
(statearr_21766_21842[(2)] = inst_21664);

(statearr_21766_21842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (31))){
var inst_21690 = (state_21742[(10)]);
var inst_21694 = done.call(null,null);
var inst_21695 = cljs.core.async.untap_STAR_.call(null,m,inst_21690);
var state_21742__$1 = (function (){var statearr_21767 = state_21742;
(statearr_21767[(19)] = inst_21694);

return statearr_21767;
})();
var statearr_21768_21843 = state_21742__$1;
(statearr_21768_21843[(2)] = inst_21695);

(statearr_21768_21843[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (32))){
var inst_21683 = (state_21742[(9)]);
var inst_21684 = (state_21742[(20)]);
var inst_21685 = (state_21742[(11)]);
var inst_21682 = (state_21742[(21)]);
var inst_21697 = (state_21742[(2)]);
var inst_21698 = (inst_21685 + (1));
var tmp21763 = inst_21683;
var tmp21764 = inst_21684;
var tmp21765 = inst_21682;
var inst_21682__$1 = tmp21765;
var inst_21683__$1 = tmp21763;
var inst_21684__$1 = tmp21764;
var inst_21685__$1 = inst_21698;
var state_21742__$1 = (function (){var statearr_21769 = state_21742;
(statearr_21769[(9)] = inst_21683__$1);

(statearr_21769[(22)] = inst_21697);

(statearr_21769[(20)] = inst_21684__$1);

(statearr_21769[(11)] = inst_21685__$1);

(statearr_21769[(21)] = inst_21682__$1);

return statearr_21769;
})();
var statearr_21770_21844 = state_21742__$1;
(statearr_21770_21844[(2)] = null);

(statearr_21770_21844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (40))){
var inst_21710 = (state_21742[(23)]);
var inst_21714 = done.call(null,null);
var inst_21715 = cljs.core.async.untap_STAR_.call(null,m,inst_21710);
var state_21742__$1 = (function (){var statearr_21771 = state_21742;
(statearr_21771[(24)] = inst_21714);

return statearr_21771;
})();
var statearr_21772_21845 = state_21742__$1;
(statearr_21772_21845[(2)] = inst_21715);

(statearr_21772_21845[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (33))){
var inst_21701 = (state_21742[(25)]);
var inst_21703 = cljs.core.chunked_seq_QMARK_.call(null,inst_21701);
var state_21742__$1 = state_21742;
if(inst_21703){
var statearr_21773_21846 = state_21742__$1;
(statearr_21773_21846[(1)] = (36));

} else {
var statearr_21774_21847 = state_21742__$1;
(statearr_21774_21847[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (13))){
var inst_21633 = (state_21742[(26)]);
var inst_21636 = cljs.core.async.close_BANG_.call(null,inst_21633);
var state_21742__$1 = state_21742;
var statearr_21775_21848 = state_21742__$1;
(statearr_21775_21848[(2)] = inst_21636);

(statearr_21775_21848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (22))){
var inst_21654 = (state_21742[(8)]);
var inst_21657 = cljs.core.async.close_BANG_.call(null,inst_21654);
var state_21742__$1 = state_21742;
var statearr_21776_21849 = state_21742__$1;
(statearr_21776_21849[(2)] = inst_21657);

(statearr_21776_21849[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (36))){
var inst_21701 = (state_21742[(25)]);
var inst_21705 = cljs.core.chunk_first.call(null,inst_21701);
var inst_21706 = cljs.core.chunk_rest.call(null,inst_21701);
var inst_21707 = cljs.core.count.call(null,inst_21705);
var inst_21682 = inst_21706;
var inst_21683 = inst_21705;
var inst_21684 = inst_21707;
var inst_21685 = (0);
var state_21742__$1 = (function (){var statearr_21777 = state_21742;
(statearr_21777[(9)] = inst_21683);

(statearr_21777[(20)] = inst_21684);

(statearr_21777[(11)] = inst_21685);

(statearr_21777[(21)] = inst_21682);

return statearr_21777;
})();
var statearr_21778_21850 = state_21742__$1;
(statearr_21778_21850[(2)] = null);

(statearr_21778_21850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (41))){
var inst_21701 = (state_21742[(25)]);
var inst_21717 = (state_21742[(2)]);
var inst_21718 = cljs.core.next.call(null,inst_21701);
var inst_21682 = inst_21718;
var inst_21683 = null;
var inst_21684 = (0);
var inst_21685 = (0);
var state_21742__$1 = (function (){var statearr_21779 = state_21742;
(statearr_21779[(27)] = inst_21717);

(statearr_21779[(9)] = inst_21683);

(statearr_21779[(20)] = inst_21684);

(statearr_21779[(11)] = inst_21685);

(statearr_21779[(21)] = inst_21682);

return statearr_21779;
})();
var statearr_21780_21851 = state_21742__$1;
(statearr_21780_21851[(2)] = null);

(statearr_21780_21851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (43))){
var state_21742__$1 = state_21742;
var statearr_21781_21852 = state_21742__$1;
(statearr_21781_21852[(2)] = null);

(statearr_21781_21852[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (29))){
var inst_21726 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21782_21853 = state_21742__$1;
(statearr_21782_21853[(2)] = inst_21726);

(statearr_21782_21853[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (44))){
var inst_21735 = (state_21742[(2)]);
var state_21742__$1 = (function (){var statearr_21783 = state_21742;
(statearr_21783[(28)] = inst_21735);

return statearr_21783;
})();
var statearr_21784_21854 = state_21742__$1;
(statearr_21784_21854[(2)] = null);

(statearr_21784_21854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (6))){
var inst_21674 = (state_21742[(29)]);
var inst_21673 = cljs.core.deref.call(null,cs);
var inst_21674__$1 = cljs.core.keys.call(null,inst_21673);
var inst_21675 = cljs.core.count.call(null,inst_21674__$1);
var inst_21676 = cljs.core.reset_BANG_.call(null,dctr,inst_21675);
var inst_21681 = cljs.core.seq.call(null,inst_21674__$1);
var inst_21682 = inst_21681;
var inst_21683 = null;
var inst_21684 = (0);
var inst_21685 = (0);
var state_21742__$1 = (function (){var statearr_21785 = state_21742;
(statearr_21785[(9)] = inst_21683);

(statearr_21785[(30)] = inst_21676);

(statearr_21785[(20)] = inst_21684);

(statearr_21785[(11)] = inst_21685);

(statearr_21785[(29)] = inst_21674__$1);

(statearr_21785[(21)] = inst_21682);

return statearr_21785;
})();
var statearr_21786_21855 = state_21742__$1;
(statearr_21786_21855[(2)] = null);

(statearr_21786_21855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (28))){
var inst_21701 = (state_21742[(25)]);
var inst_21682 = (state_21742[(21)]);
var inst_21701__$1 = cljs.core.seq.call(null,inst_21682);
var state_21742__$1 = (function (){var statearr_21787 = state_21742;
(statearr_21787[(25)] = inst_21701__$1);

return statearr_21787;
})();
if(inst_21701__$1){
var statearr_21788_21856 = state_21742__$1;
(statearr_21788_21856[(1)] = (33));

} else {
var statearr_21789_21857 = state_21742__$1;
(statearr_21789_21857[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (25))){
var inst_21684 = (state_21742[(20)]);
var inst_21685 = (state_21742[(11)]);
var inst_21687 = (inst_21685 < inst_21684);
var inst_21688 = inst_21687;
var state_21742__$1 = state_21742;
if(cljs.core.truth_(inst_21688)){
var statearr_21790_21858 = state_21742__$1;
(statearr_21790_21858[(1)] = (27));

} else {
var statearr_21791_21859 = state_21742__$1;
(statearr_21791_21859[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (34))){
var state_21742__$1 = state_21742;
var statearr_21792_21860 = state_21742__$1;
(statearr_21792_21860[(2)] = null);

(statearr_21792_21860[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (17))){
var state_21742__$1 = state_21742;
var statearr_21793_21861 = state_21742__$1;
(statearr_21793_21861[(2)] = null);

(statearr_21793_21861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (3))){
var inst_21740 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21742__$1,inst_21740);
} else {
if((state_val_21743 === (12))){
var inst_21669 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21794_21862 = state_21742__$1;
(statearr_21794_21862[(2)] = inst_21669);

(statearr_21794_21862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (2))){
var state_21742__$1 = state_21742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21742__$1,(4),ch);
} else {
if((state_val_21743 === (23))){
var state_21742__$1 = state_21742;
var statearr_21795_21863 = state_21742__$1;
(statearr_21795_21863[(2)] = null);

(statearr_21795_21863[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (35))){
var inst_21724 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21796_21864 = state_21742__$1;
(statearr_21796_21864[(2)] = inst_21724);

(statearr_21796_21864[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (19))){
var inst_21643 = (state_21742[(7)]);
var inst_21647 = cljs.core.chunk_first.call(null,inst_21643);
var inst_21648 = cljs.core.chunk_rest.call(null,inst_21643);
var inst_21649 = cljs.core.count.call(null,inst_21647);
var inst_21623 = inst_21648;
var inst_21624 = inst_21647;
var inst_21625 = inst_21649;
var inst_21626 = (0);
var state_21742__$1 = (function (){var statearr_21797 = state_21742;
(statearr_21797[(13)] = inst_21623);

(statearr_21797[(14)] = inst_21625);

(statearr_21797[(16)] = inst_21624);

(statearr_21797[(17)] = inst_21626);

return statearr_21797;
})();
var statearr_21798_21865 = state_21742__$1;
(statearr_21798_21865[(2)] = null);

(statearr_21798_21865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (11))){
var inst_21643 = (state_21742[(7)]);
var inst_21623 = (state_21742[(13)]);
var inst_21643__$1 = cljs.core.seq.call(null,inst_21623);
var state_21742__$1 = (function (){var statearr_21799 = state_21742;
(statearr_21799[(7)] = inst_21643__$1);

return statearr_21799;
})();
if(inst_21643__$1){
var statearr_21800_21866 = state_21742__$1;
(statearr_21800_21866[(1)] = (16));

} else {
var statearr_21801_21867 = state_21742__$1;
(statearr_21801_21867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (9))){
var inst_21671 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21802_21868 = state_21742__$1;
(statearr_21802_21868[(2)] = inst_21671);

(statearr_21802_21868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (5))){
var inst_21621 = cljs.core.deref.call(null,cs);
var inst_21622 = cljs.core.seq.call(null,inst_21621);
var inst_21623 = inst_21622;
var inst_21624 = null;
var inst_21625 = (0);
var inst_21626 = (0);
var state_21742__$1 = (function (){var statearr_21803 = state_21742;
(statearr_21803[(13)] = inst_21623);

(statearr_21803[(14)] = inst_21625);

(statearr_21803[(16)] = inst_21624);

(statearr_21803[(17)] = inst_21626);

return statearr_21803;
})();
var statearr_21804_21869 = state_21742__$1;
(statearr_21804_21869[(2)] = null);

(statearr_21804_21869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (14))){
var state_21742__$1 = state_21742;
var statearr_21805_21870 = state_21742__$1;
(statearr_21805_21870[(2)] = null);

(statearr_21805_21870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (45))){
var inst_21732 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21806_21871 = state_21742__$1;
(statearr_21806_21871[(2)] = inst_21732);

(statearr_21806_21871[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (26))){
var inst_21674 = (state_21742[(29)]);
var inst_21728 = (state_21742[(2)]);
var inst_21729 = cljs.core.seq.call(null,inst_21674);
var state_21742__$1 = (function (){var statearr_21807 = state_21742;
(statearr_21807[(31)] = inst_21728);

return statearr_21807;
})();
if(inst_21729){
var statearr_21808_21872 = state_21742__$1;
(statearr_21808_21872[(1)] = (42));

} else {
var statearr_21809_21873 = state_21742__$1;
(statearr_21809_21873[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (16))){
var inst_21643 = (state_21742[(7)]);
var inst_21645 = cljs.core.chunked_seq_QMARK_.call(null,inst_21643);
var state_21742__$1 = state_21742;
if(inst_21645){
var statearr_21810_21874 = state_21742__$1;
(statearr_21810_21874[(1)] = (19));

} else {
var statearr_21811_21875 = state_21742__$1;
(statearr_21811_21875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (38))){
var inst_21721 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21812_21876 = state_21742__$1;
(statearr_21812_21876[(2)] = inst_21721);

(statearr_21812_21876[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (30))){
var state_21742__$1 = state_21742;
var statearr_21813_21877 = state_21742__$1;
(statearr_21813_21877[(2)] = null);

(statearr_21813_21877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (10))){
var inst_21624 = (state_21742[(16)]);
var inst_21626 = (state_21742[(17)]);
var inst_21632 = cljs.core._nth.call(null,inst_21624,inst_21626);
var inst_21633 = cljs.core.nth.call(null,inst_21632,(0),null);
var inst_21634 = cljs.core.nth.call(null,inst_21632,(1),null);
var state_21742__$1 = (function (){var statearr_21814 = state_21742;
(statearr_21814[(26)] = inst_21633);

return statearr_21814;
})();
if(cljs.core.truth_(inst_21634)){
var statearr_21815_21878 = state_21742__$1;
(statearr_21815_21878[(1)] = (13));

} else {
var statearr_21816_21879 = state_21742__$1;
(statearr_21816_21879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (18))){
var inst_21667 = (state_21742[(2)]);
var state_21742__$1 = state_21742;
var statearr_21817_21880 = state_21742__$1;
(statearr_21817_21880[(2)] = inst_21667);

(statearr_21817_21880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (42))){
var state_21742__$1 = state_21742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21742__$1,(45),dchan);
} else {
if((state_val_21743 === (37))){
var inst_21701 = (state_21742[(25)]);
var inst_21614 = (state_21742[(12)]);
var inst_21710 = (state_21742[(23)]);
var inst_21710__$1 = cljs.core.first.call(null,inst_21701);
var inst_21711 = cljs.core.async.put_BANG_.call(null,inst_21710__$1,inst_21614,done);
var state_21742__$1 = (function (){var statearr_21818 = state_21742;
(statearr_21818[(23)] = inst_21710__$1);

return statearr_21818;
})();
if(cljs.core.truth_(inst_21711)){
var statearr_21819_21881 = state_21742__$1;
(statearr_21819_21881[(1)] = (39));

} else {
var statearr_21820_21882 = state_21742__$1;
(statearr_21820_21882[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21743 === (8))){
var inst_21625 = (state_21742[(14)]);
var inst_21626 = (state_21742[(17)]);
var inst_21628 = (inst_21626 < inst_21625);
var inst_21629 = inst_21628;
var state_21742__$1 = state_21742;
if(cljs.core.truth_(inst_21629)){
var statearr_21821_21883 = state_21742__$1;
(statearr_21821_21883[(1)] = (10));

} else {
var statearr_21822_21884 = state_21742__$1;
(statearr_21822_21884[(1)] = (11));

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
});})(c__20523__auto___21830,cs,m,dchan,dctr,done))
;
return ((function (switch__20411__auto__,c__20523__auto___21830,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20412__auto__ = null;
var cljs$core$async$mult_$_state_machine__20412__auto____0 = (function (){
var statearr_21826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21826[(0)] = cljs$core$async$mult_$_state_machine__20412__auto__);

(statearr_21826[(1)] = (1));

return statearr_21826;
});
var cljs$core$async$mult_$_state_machine__20412__auto____1 = (function (state_21742){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_21742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e21827){if((e21827 instanceof Object)){
var ex__20415__auto__ = e21827;
var statearr_21828_21885 = state_21742;
(statearr_21828_21885[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21886 = state_21742;
state_21742 = G__21886;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20412__auto__ = function(state_21742){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20412__auto____1.call(this,state_21742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20412__auto____0;
cljs$core$async$mult_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20412__auto____1;
return cljs$core$async$mult_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___21830,cs,m,dchan,dctr,done))
})();
var state__20525__auto__ = (function (){var statearr_21829 = f__20524__auto__.call(null);
(statearr_21829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___21830);

return statearr_21829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___21830,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21887 = [];
var len__19428__auto___21890 = arguments.length;
var i__19429__auto___21891 = (0);
while(true){
if((i__19429__auto___21891 < len__19428__auto___21890)){
args21887.push((arguments[i__19429__auto___21891]));

var G__21892 = (i__19429__auto___21891 + (1));
i__19429__auto___21891 = G__21892;
continue;
} else {
}
break;
}

var G__21889 = args21887.length;
switch (G__21889) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21887.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,state_map);
} else {
var m__19026__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,mode);
} else {
var m__19026__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___21904 = arguments.length;
var i__19429__auto___21905 = (0);
while(true){
if((i__19429__auto___21905 < len__19428__auto___21904)){
args__19435__auto__.push((arguments[i__19429__auto___21905]));

var G__21906 = (i__19429__auto___21905 + (1));
i__19429__auto___21905 = G__21906;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21898){
var map__21899 = p__21898;
var map__21899__$1 = ((((!((map__21899 == null)))?((((map__21899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21899):map__21899);
var opts = map__21899__$1;
var statearr_21901_21907 = state;
(statearr_21901_21907[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21899,map__21899__$1,opts){
return (function (val){
var statearr_21902_21908 = state;
(statearr_21902_21908[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21899,map__21899__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21903_21909 = state;
(statearr_21903_21909[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21894){
var G__21895 = cljs.core.first.call(null,seq21894);
var seq21894__$1 = cljs.core.next.call(null,seq21894);
var G__21896 = cljs.core.first.call(null,seq21894__$1);
var seq21894__$2 = cljs.core.next.call(null,seq21894__$1);
var G__21897 = cljs.core.first.call(null,seq21894__$2);
var seq21894__$3 = cljs.core.next.call(null,seq21894__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21895,G__21896,G__21897,seq21894__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22073 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22074){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22074 = meta22074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22075,meta22074__$1){
var self__ = this;
var _22075__$1 = this;
return (new cljs.core.async.t_cljs$core$async22073(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22074__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22075){
var self__ = this;
var _22075__$1 = this;
return self__.meta22074;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22074","meta22074",-996283288,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22073";

cljs.core.async.t_cljs$core$async22073.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22073");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22073 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22073(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22074){
return (new cljs.core.async.t_cljs$core$async22073(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22074));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22073(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20523__auto___22236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___22236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___22236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22173){
var state_val_22174 = (state_22173[(1)]);
if((state_val_22174 === (7))){
var inst_22091 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
var statearr_22175_22237 = state_22173__$1;
(statearr_22175_22237[(2)] = inst_22091);

(statearr_22175_22237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (20))){
var inst_22103 = (state_22173[(7)]);
var state_22173__$1 = state_22173;
var statearr_22176_22238 = state_22173__$1;
(statearr_22176_22238[(2)] = inst_22103);

(statearr_22176_22238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (27))){
var state_22173__$1 = state_22173;
var statearr_22177_22239 = state_22173__$1;
(statearr_22177_22239[(2)] = null);

(statearr_22177_22239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (1))){
var inst_22079 = (state_22173[(8)]);
var inst_22079__$1 = calc_state.call(null);
var inst_22081 = (inst_22079__$1 == null);
var inst_22082 = cljs.core.not.call(null,inst_22081);
var state_22173__$1 = (function (){var statearr_22178 = state_22173;
(statearr_22178[(8)] = inst_22079__$1);

return statearr_22178;
})();
if(inst_22082){
var statearr_22179_22240 = state_22173__$1;
(statearr_22179_22240[(1)] = (2));

} else {
var statearr_22180_22241 = state_22173__$1;
(statearr_22180_22241[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (24))){
var inst_22147 = (state_22173[(9)]);
var inst_22126 = (state_22173[(10)]);
var inst_22133 = (state_22173[(11)]);
var inst_22147__$1 = inst_22126.call(null,inst_22133);
var state_22173__$1 = (function (){var statearr_22181 = state_22173;
(statearr_22181[(9)] = inst_22147__$1);

return statearr_22181;
})();
if(cljs.core.truth_(inst_22147__$1)){
var statearr_22182_22242 = state_22173__$1;
(statearr_22182_22242[(1)] = (29));

} else {
var statearr_22183_22243 = state_22173__$1;
(statearr_22183_22243[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (4))){
var inst_22094 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22094)){
var statearr_22184_22244 = state_22173__$1;
(statearr_22184_22244[(1)] = (8));

} else {
var statearr_22185_22245 = state_22173__$1;
(statearr_22185_22245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (15))){
var inst_22120 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22120)){
var statearr_22186_22246 = state_22173__$1;
(statearr_22186_22246[(1)] = (19));

} else {
var statearr_22187_22247 = state_22173__$1;
(statearr_22187_22247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (21))){
var inst_22125 = (state_22173[(12)]);
var inst_22125__$1 = (state_22173[(2)]);
var inst_22126 = cljs.core.get.call(null,inst_22125__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22127 = cljs.core.get.call(null,inst_22125__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22128 = cljs.core.get.call(null,inst_22125__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22173__$1 = (function (){var statearr_22188 = state_22173;
(statearr_22188[(12)] = inst_22125__$1);

(statearr_22188[(13)] = inst_22127);

(statearr_22188[(10)] = inst_22126);

return statearr_22188;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22173__$1,(22),inst_22128);
} else {
if((state_val_22174 === (31))){
var inst_22155 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22155)){
var statearr_22189_22248 = state_22173__$1;
(statearr_22189_22248[(1)] = (32));

} else {
var statearr_22190_22249 = state_22173__$1;
(statearr_22190_22249[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (32))){
var inst_22132 = (state_22173[(14)]);
var state_22173__$1 = state_22173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22173__$1,(35),out,inst_22132);
} else {
if((state_val_22174 === (33))){
var inst_22125 = (state_22173[(12)]);
var inst_22103 = inst_22125;
var state_22173__$1 = (function (){var statearr_22191 = state_22173;
(statearr_22191[(7)] = inst_22103);

return statearr_22191;
})();
var statearr_22192_22250 = state_22173__$1;
(statearr_22192_22250[(2)] = null);

(statearr_22192_22250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (13))){
var inst_22103 = (state_22173[(7)]);
var inst_22110 = inst_22103.cljs$lang$protocol_mask$partition0$;
var inst_22111 = (inst_22110 & (64));
var inst_22112 = inst_22103.cljs$core$ISeq$;
var inst_22113 = (inst_22111) || (inst_22112);
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22113)){
var statearr_22193_22251 = state_22173__$1;
(statearr_22193_22251[(1)] = (16));

} else {
var statearr_22194_22252 = state_22173__$1;
(statearr_22194_22252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (22))){
var inst_22132 = (state_22173[(14)]);
var inst_22133 = (state_22173[(11)]);
var inst_22131 = (state_22173[(2)]);
var inst_22132__$1 = cljs.core.nth.call(null,inst_22131,(0),null);
var inst_22133__$1 = cljs.core.nth.call(null,inst_22131,(1),null);
var inst_22134 = (inst_22132__$1 == null);
var inst_22135 = cljs.core._EQ_.call(null,inst_22133__$1,change);
var inst_22136 = (inst_22134) || (inst_22135);
var state_22173__$1 = (function (){var statearr_22195 = state_22173;
(statearr_22195[(14)] = inst_22132__$1);

(statearr_22195[(11)] = inst_22133__$1);

return statearr_22195;
})();
if(cljs.core.truth_(inst_22136)){
var statearr_22196_22253 = state_22173__$1;
(statearr_22196_22253[(1)] = (23));

} else {
var statearr_22197_22254 = state_22173__$1;
(statearr_22197_22254[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (36))){
var inst_22125 = (state_22173[(12)]);
var inst_22103 = inst_22125;
var state_22173__$1 = (function (){var statearr_22198 = state_22173;
(statearr_22198[(7)] = inst_22103);

return statearr_22198;
})();
var statearr_22199_22255 = state_22173__$1;
(statearr_22199_22255[(2)] = null);

(statearr_22199_22255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (29))){
var inst_22147 = (state_22173[(9)]);
var state_22173__$1 = state_22173;
var statearr_22200_22256 = state_22173__$1;
(statearr_22200_22256[(2)] = inst_22147);

(statearr_22200_22256[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (6))){
var state_22173__$1 = state_22173;
var statearr_22201_22257 = state_22173__$1;
(statearr_22201_22257[(2)] = false);

(statearr_22201_22257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (28))){
var inst_22143 = (state_22173[(2)]);
var inst_22144 = calc_state.call(null);
var inst_22103 = inst_22144;
var state_22173__$1 = (function (){var statearr_22202 = state_22173;
(statearr_22202[(15)] = inst_22143);

(statearr_22202[(7)] = inst_22103);

return statearr_22202;
})();
var statearr_22203_22258 = state_22173__$1;
(statearr_22203_22258[(2)] = null);

(statearr_22203_22258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (25))){
var inst_22169 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
var statearr_22204_22259 = state_22173__$1;
(statearr_22204_22259[(2)] = inst_22169);

(statearr_22204_22259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (34))){
var inst_22167 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
var statearr_22205_22260 = state_22173__$1;
(statearr_22205_22260[(2)] = inst_22167);

(statearr_22205_22260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (17))){
var state_22173__$1 = state_22173;
var statearr_22206_22261 = state_22173__$1;
(statearr_22206_22261[(2)] = false);

(statearr_22206_22261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (3))){
var state_22173__$1 = state_22173;
var statearr_22207_22262 = state_22173__$1;
(statearr_22207_22262[(2)] = false);

(statearr_22207_22262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (12))){
var inst_22171 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22173__$1,inst_22171);
} else {
if((state_val_22174 === (2))){
var inst_22079 = (state_22173[(8)]);
var inst_22084 = inst_22079.cljs$lang$protocol_mask$partition0$;
var inst_22085 = (inst_22084 & (64));
var inst_22086 = inst_22079.cljs$core$ISeq$;
var inst_22087 = (inst_22085) || (inst_22086);
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22087)){
var statearr_22208_22263 = state_22173__$1;
(statearr_22208_22263[(1)] = (5));

} else {
var statearr_22209_22264 = state_22173__$1;
(statearr_22209_22264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (23))){
var inst_22132 = (state_22173[(14)]);
var inst_22138 = (inst_22132 == null);
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22138)){
var statearr_22210_22265 = state_22173__$1;
(statearr_22210_22265[(1)] = (26));

} else {
var statearr_22211_22266 = state_22173__$1;
(statearr_22211_22266[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (35))){
var inst_22158 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
if(cljs.core.truth_(inst_22158)){
var statearr_22212_22267 = state_22173__$1;
(statearr_22212_22267[(1)] = (36));

} else {
var statearr_22213_22268 = state_22173__$1;
(statearr_22213_22268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (19))){
var inst_22103 = (state_22173[(7)]);
var inst_22122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22103);
var state_22173__$1 = state_22173;
var statearr_22214_22269 = state_22173__$1;
(statearr_22214_22269[(2)] = inst_22122);

(statearr_22214_22269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (11))){
var inst_22103 = (state_22173[(7)]);
var inst_22107 = (inst_22103 == null);
var inst_22108 = cljs.core.not.call(null,inst_22107);
var state_22173__$1 = state_22173;
if(inst_22108){
var statearr_22215_22270 = state_22173__$1;
(statearr_22215_22270[(1)] = (13));

} else {
var statearr_22216_22271 = state_22173__$1;
(statearr_22216_22271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (9))){
var inst_22079 = (state_22173[(8)]);
var state_22173__$1 = state_22173;
var statearr_22217_22272 = state_22173__$1;
(statearr_22217_22272[(2)] = inst_22079);

(statearr_22217_22272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (5))){
var state_22173__$1 = state_22173;
var statearr_22218_22273 = state_22173__$1;
(statearr_22218_22273[(2)] = true);

(statearr_22218_22273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (14))){
var state_22173__$1 = state_22173;
var statearr_22219_22274 = state_22173__$1;
(statearr_22219_22274[(2)] = false);

(statearr_22219_22274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (26))){
var inst_22133 = (state_22173[(11)]);
var inst_22140 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22133);
var state_22173__$1 = state_22173;
var statearr_22220_22275 = state_22173__$1;
(statearr_22220_22275[(2)] = inst_22140);

(statearr_22220_22275[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (16))){
var state_22173__$1 = state_22173;
var statearr_22221_22276 = state_22173__$1;
(statearr_22221_22276[(2)] = true);

(statearr_22221_22276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (38))){
var inst_22163 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
var statearr_22222_22277 = state_22173__$1;
(statearr_22222_22277[(2)] = inst_22163);

(statearr_22222_22277[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (30))){
var inst_22127 = (state_22173[(13)]);
var inst_22126 = (state_22173[(10)]);
var inst_22133 = (state_22173[(11)]);
var inst_22150 = cljs.core.empty_QMARK_.call(null,inst_22126);
var inst_22151 = inst_22127.call(null,inst_22133);
var inst_22152 = cljs.core.not.call(null,inst_22151);
var inst_22153 = (inst_22150) && (inst_22152);
var state_22173__$1 = state_22173;
var statearr_22223_22278 = state_22173__$1;
(statearr_22223_22278[(2)] = inst_22153);

(statearr_22223_22278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (10))){
var inst_22079 = (state_22173[(8)]);
var inst_22099 = (state_22173[(2)]);
var inst_22100 = cljs.core.get.call(null,inst_22099,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22101 = cljs.core.get.call(null,inst_22099,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22102 = cljs.core.get.call(null,inst_22099,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22103 = inst_22079;
var state_22173__$1 = (function (){var statearr_22224 = state_22173;
(statearr_22224[(16)] = inst_22101);

(statearr_22224[(7)] = inst_22103);

(statearr_22224[(17)] = inst_22100);

(statearr_22224[(18)] = inst_22102);

return statearr_22224;
})();
var statearr_22225_22279 = state_22173__$1;
(statearr_22225_22279[(2)] = null);

(statearr_22225_22279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (18))){
var inst_22117 = (state_22173[(2)]);
var state_22173__$1 = state_22173;
var statearr_22226_22280 = state_22173__$1;
(statearr_22226_22280[(2)] = inst_22117);

(statearr_22226_22280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (37))){
var state_22173__$1 = state_22173;
var statearr_22227_22281 = state_22173__$1;
(statearr_22227_22281[(2)] = null);

(statearr_22227_22281[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22174 === (8))){
var inst_22079 = (state_22173[(8)]);
var inst_22096 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22079);
var state_22173__$1 = state_22173;
var statearr_22228_22282 = state_22173__$1;
(statearr_22228_22282[(2)] = inst_22096);

(statearr_22228_22282[(1)] = (10));


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
});})(c__20523__auto___22236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20411__auto__,c__20523__auto___22236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20412__auto__ = null;
var cljs$core$async$mix_$_state_machine__20412__auto____0 = (function (){
var statearr_22232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22232[(0)] = cljs$core$async$mix_$_state_machine__20412__auto__);

(statearr_22232[(1)] = (1));

return statearr_22232;
});
var cljs$core$async$mix_$_state_machine__20412__auto____1 = (function (state_22173){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_22173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e22233){if((e22233 instanceof Object)){
var ex__20415__auto__ = e22233;
var statearr_22234_22283 = state_22173;
(statearr_22234_22283[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22284 = state_22173;
state_22173 = G__22284;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20412__auto__ = function(state_22173){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20412__auto____1.call(this,state_22173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20412__auto____0;
cljs$core$async$mix_$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20412__auto____1;
return cljs$core$async$mix_$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___22236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20525__auto__ = (function (){var statearr_22235 = f__20524__auto__.call(null);
(statearr_22235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___22236);

return statearr_22235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___22236,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22285 = [];
var len__19428__auto___22288 = arguments.length;
var i__19429__auto___22289 = (0);
while(true){
if((i__19429__auto___22289 < len__19428__auto___22288)){
args22285.push((arguments[i__19429__auto___22289]));

var G__22290 = (i__19429__auto___22289 + (1));
i__19429__auto___22289 = G__22290;
continue;
} else {
}
break;
}

var G__22287 = args22285.length;
switch (G__22287) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22285.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22293 = [];
var len__19428__auto___22418 = arguments.length;
var i__19429__auto___22419 = (0);
while(true){
if((i__19429__auto___22419 < len__19428__auto___22418)){
args22293.push((arguments[i__19429__auto___22419]));

var G__22420 = (i__19429__auto___22419 + (1));
i__19429__auto___22419 = G__22420;
continue;
} else {
}
break;
}

var G__22295 = args22293.length;
switch (G__22295) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22293.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18370__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18370__auto__,mults){
return (function (p1__22292_SHARP_){
if(cljs.core.truth_(p1__22292_SHARP_.call(null,topic))){
return p1__22292_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22292_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22296 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22297){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22297 = meta22297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22298,meta22297__$1){
var self__ = this;
var _22298__$1 = this;
return (new cljs.core.async.t_cljs$core$async22296(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22297__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22298){
var self__ = this;
var _22298__$1 = this;
return self__.meta22297;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22296.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22297","meta22297",1482921762,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22296";

cljs.core.async.t_cljs$core$async22296.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22296");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22296 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22297){
return (new cljs.core.async.t_cljs$core$async22296(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22297));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22296(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20523__auto___22422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___22422,mults,ensure_mult,p){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___22422,mults,ensure_mult,p){
return (function (state_22370){
var state_val_22371 = (state_22370[(1)]);
if((state_val_22371 === (7))){
var inst_22366 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
var statearr_22372_22423 = state_22370__$1;
(statearr_22372_22423[(2)] = inst_22366);

(statearr_22372_22423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (20))){
var state_22370__$1 = state_22370;
var statearr_22373_22424 = state_22370__$1;
(statearr_22373_22424[(2)] = null);

(statearr_22373_22424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (1))){
var state_22370__$1 = state_22370;
var statearr_22374_22425 = state_22370__$1;
(statearr_22374_22425[(2)] = null);

(statearr_22374_22425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (24))){
var inst_22349 = (state_22370[(7)]);
var inst_22358 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22349);
var state_22370__$1 = state_22370;
var statearr_22375_22426 = state_22370__$1;
(statearr_22375_22426[(2)] = inst_22358);

(statearr_22375_22426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (4))){
var inst_22301 = (state_22370[(8)]);
var inst_22301__$1 = (state_22370[(2)]);
var inst_22302 = (inst_22301__$1 == null);
var state_22370__$1 = (function (){var statearr_22376 = state_22370;
(statearr_22376[(8)] = inst_22301__$1);

return statearr_22376;
})();
if(cljs.core.truth_(inst_22302)){
var statearr_22377_22427 = state_22370__$1;
(statearr_22377_22427[(1)] = (5));

} else {
var statearr_22378_22428 = state_22370__$1;
(statearr_22378_22428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (15))){
var inst_22343 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
var statearr_22379_22429 = state_22370__$1;
(statearr_22379_22429[(2)] = inst_22343);

(statearr_22379_22429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (21))){
var inst_22363 = (state_22370[(2)]);
var state_22370__$1 = (function (){var statearr_22380 = state_22370;
(statearr_22380[(9)] = inst_22363);

return statearr_22380;
})();
var statearr_22381_22430 = state_22370__$1;
(statearr_22381_22430[(2)] = null);

(statearr_22381_22430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (13))){
var inst_22325 = (state_22370[(10)]);
var inst_22327 = cljs.core.chunked_seq_QMARK_.call(null,inst_22325);
var state_22370__$1 = state_22370;
if(inst_22327){
var statearr_22382_22431 = state_22370__$1;
(statearr_22382_22431[(1)] = (16));

} else {
var statearr_22383_22432 = state_22370__$1;
(statearr_22383_22432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (22))){
var inst_22355 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
if(cljs.core.truth_(inst_22355)){
var statearr_22384_22433 = state_22370__$1;
(statearr_22384_22433[(1)] = (23));

} else {
var statearr_22385_22434 = state_22370__$1;
(statearr_22385_22434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (6))){
var inst_22351 = (state_22370[(11)]);
var inst_22301 = (state_22370[(8)]);
var inst_22349 = (state_22370[(7)]);
var inst_22349__$1 = topic_fn.call(null,inst_22301);
var inst_22350 = cljs.core.deref.call(null,mults);
var inst_22351__$1 = cljs.core.get.call(null,inst_22350,inst_22349__$1);
var state_22370__$1 = (function (){var statearr_22386 = state_22370;
(statearr_22386[(11)] = inst_22351__$1);

(statearr_22386[(7)] = inst_22349__$1);

return statearr_22386;
})();
if(cljs.core.truth_(inst_22351__$1)){
var statearr_22387_22435 = state_22370__$1;
(statearr_22387_22435[(1)] = (19));

} else {
var statearr_22388_22436 = state_22370__$1;
(statearr_22388_22436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (25))){
var inst_22360 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
var statearr_22389_22437 = state_22370__$1;
(statearr_22389_22437[(2)] = inst_22360);

(statearr_22389_22437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (17))){
var inst_22325 = (state_22370[(10)]);
var inst_22334 = cljs.core.first.call(null,inst_22325);
var inst_22335 = cljs.core.async.muxch_STAR_.call(null,inst_22334);
var inst_22336 = cljs.core.async.close_BANG_.call(null,inst_22335);
var inst_22337 = cljs.core.next.call(null,inst_22325);
var inst_22311 = inst_22337;
var inst_22312 = null;
var inst_22313 = (0);
var inst_22314 = (0);
var state_22370__$1 = (function (){var statearr_22390 = state_22370;
(statearr_22390[(12)] = inst_22314);

(statearr_22390[(13)] = inst_22311);

(statearr_22390[(14)] = inst_22312);

(statearr_22390[(15)] = inst_22313);

(statearr_22390[(16)] = inst_22336);

return statearr_22390;
})();
var statearr_22391_22438 = state_22370__$1;
(statearr_22391_22438[(2)] = null);

(statearr_22391_22438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (3))){
var inst_22368 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22370__$1,inst_22368);
} else {
if((state_val_22371 === (12))){
var inst_22345 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
var statearr_22392_22439 = state_22370__$1;
(statearr_22392_22439[(2)] = inst_22345);

(statearr_22392_22439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (2))){
var state_22370__$1 = state_22370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22370__$1,(4),ch);
} else {
if((state_val_22371 === (23))){
var state_22370__$1 = state_22370;
var statearr_22393_22440 = state_22370__$1;
(statearr_22393_22440[(2)] = null);

(statearr_22393_22440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (19))){
var inst_22351 = (state_22370[(11)]);
var inst_22301 = (state_22370[(8)]);
var inst_22353 = cljs.core.async.muxch_STAR_.call(null,inst_22351);
var state_22370__$1 = state_22370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22370__$1,(22),inst_22353,inst_22301);
} else {
if((state_val_22371 === (11))){
var inst_22311 = (state_22370[(13)]);
var inst_22325 = (state_22370[(10)]);
var inst_22325__$1 = cljs.core.seq.call(null,inst_22311);
var state_22370__$1 = (function (){var statearr_22394 = state_22370;
(statearr_22394[(10)] = inst_22325__$1);

return statearr_22394;
})();
if(inst_22325__$1){
var statearr_22395_22441 = state_22370__$1;
(statearr_22395_22441[(1)] = (13));

} else {
var statearr_22396_22442 = state_22370__$1;
(statearr_22396_22442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (9))){
var inst_22347 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
var statearr_22397_22443 = state_22370__$1;
(statearr_22397_22443[(2)] = inst_22347);

(statearr_22397_22443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (5))){
var inst_22308 = cljs.core.deref.call(null,mults);
var inst_22309 = cljs.core.vals.call(null,inst_22308);
var inst_22310 = cljs.core.seq.call(null,inst_22309);
var inst_22311 = inst_22310;
var inst_22312 = null;
var inst_22313 = (0);
var inst_22314 = (0);
var state_22370__$1 = (function (){var statearr_22398 = state_22370;
(statearr_22398[(12)] = inst_22314);

(statearr_22398[(13)] = inst_22311);

(statearr_22398[(14)] = inst_22312);

(statearr_22398[(15)] = inst_22313);

return statearr_22398;
})();
var statearr_22399_22444 = state_22370__$1;
(statearr_22399_22444[(2)] = null);

(statearr_22399_22444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (14))){
var state_22370__$1 = state_22370;
var statearr_22403_22445 = state_22370__$1;
(statearr_22403_22445[(2)] = null);

(statearr_22403_22445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (16))){
var inst_22325 = (state_22370[(10)]);
var inst_22329 = cljs.core.chunk_first.call(null,inst_22325);
var inst_22330 = cljs.core.chunk_rest.call(null,inst_22325);
var inst_22331 = cljs.core.count.call(null,inst_22329);
var inst_22311 = inst_22330;
var inst_22312 = inst_22329;
var inst_22313 = inst_22331;
var inst_22314 = (0);
var state_22370__$1 = (function (){var statearr_22404 = state_22370;
(statearr_22404[(12)] = inst_22314);

(statearr_22404[(13)] = inst_22311);

(statearr_22404[(14)] = inst_22312);

(statearr_22404[(15)] = inst_22313);

return statearr_22404;
})();
var statearr_22405_22446 = state_22370__$1;
(statearr_22405_22446[(2)] = null);

(statearr_22405_22446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (10))){
var inst_22314 = (state_22370[(12)]);
var inst_22311 = (state_22370[(13)]);
var inst_22312 = (state_22370[(14)]);
var inst_22313 = (state_22370[(15)]);
var inst_22319 = cljs.core._nth.call(null,inst_22312,inst_22314);
var inst_22320 = cljs.core.async.muxch_STAR_.call(null,inst_22319);
var inst_22321 = cljs.core.async.close_BANG_.call(null,inst_22320);
var inst_22322 = (inst_22314 + (1));
var tmp22400 = inst_22311;
var tmp22401 = inst_22312;
var tmp22402 = inst_22313;
var inst_22311__$1 = tmp22400;
var inst_22312__$1 = tmp22401;
var inst_22313__$1 = tmp22402;
var inst_22314__$1 = inst_22322;
var state_22370__$1 = (function (){var statearr_22406 = state_22370;
(statearr_22406[(12)] = inst_22314__$1);

(statearr_22406[(13)] = inst_22311__$1);

(statearr_22406[(14)] = inst_22312__$1);

(statearr_22406[(15)] = inst_22313__$1);

(statearr_22406[(17)] = inst_22321);

return statearr_22406;
})();
var statearr_22407_22447 = state_22370__$1;
(statearr_22407_22447[(2)] = null);

(statearr_22407_22447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (18))){
var inst_22340 = (state_22370[(2)]);
var state_22370__$1 = state_22370;
var statearr_22408_22448 = state_22370__$1;
(statearr_22408_22448[(2)] = inst_22340);

(statearr_22408_22448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22371 === (8))){
var inst_22314 = (state_22370[(12)]);
var inst_22313 = (state_22370[(15)]);
var inst_22316 = (inst_22314 < inst_22313);
var inst_22317 = inst_22316;
var state_22370__$1 = state_22370;
if(cljs.core.truth_(inst_22317)){
var statearr_22409_22449 = state_22370__$1;
(statearr_22409_22449[(1)] = (10));

} else {
var statearr_22410_22450 = state_22370__$1;
(statearr_22410_22450[(1)] = (11));

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
});})(c__20523__auto___22422,mults,ensure_mult,p))
;
return ((function (switch__20411__auto__,c__20523__auto___22422,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_22414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22414[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_22414[(1)] = (1));

return statearr_22414;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_22370){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_22370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e22415){if((e22415 instanceof Object)){
var ex__20415__auto__ = e22415;
var statearr_22416_22451 = state_22370;
(statearr_22416_22451[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22452 = state_22370;
state_22370 = G__22452;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_22370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_22370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___22422,mults,ensure_mult,p))
})();
var state__20525__auto__ = (function (){var statearr_22417 = f__20524__auto__.call(null);
(statearr_22417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___22422);

return statearr_22417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___22422,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22453 = [];
var len__19428__auto___22456 = arguments.length;
var i__19429__auto___22457 = (0);
while(true){
if((i__19429__auto___22457 < len__19428__auto___22456)){
args22453.push((arguments[i__19429__auto___22457]));

var G__22458 = (i__19429__auto___22457 + (1));
i__19429__auto___22457 = G__22458;
continue;
} else {
}
break;
}

var G__22455 = args22453.length;
switch (G__22455) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22453.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22460 = [];
var len__19428__auto___22463 = arguments.length;
var i__19429__auto___22464 = (0);
while(true){
if((i__19429__auto___22464 < len__19428__auto___22463)){
args22460.push((arguments[i__19429__auto___22464]));

var G__22465 = (i__19429__auto___22464 + (1));
i__19429__auto___22464 = G__22465;
continue;
} else {
}
break;
}

var G__22462 = args22460.length;
switch (G__22462) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22460.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22467 = [];
var len__19428__auto___22538 = arguments.length;
var i__19429__auto___22539 = (0);
while(true){
if((i__19429__auto___22539 < len__19428__auto___22538)){
args22467.push((arguments[i__19429__auto___22539]));

var G__22540 = (i__19429__auto___22539 + (1));
i__19429__auto___22539 = G__22540;
continue;
} else {
}
break;
}

var G__22469 = args22467.length;
switch (G__22469) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22467.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20523__auto___22542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___22542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___22542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22508){
var state_val_22509 = (state_22508[(1)]);
if((state_val_22509 === (7))){
var state_22508__$1 = state_22508;
var statearr_22510_22543 = state_22508__$1;
(statearr_22510_22543[(2)] = null);

(statearr_22510_22543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (1))){
var state_22508__$1 = state_22508;
var statearr_22511_22544 = state_22508__$1;
(statearr_22511_22544[(2)] = null);

(statearr_22511_22544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (4))){
var inst_22472 = (state_22508[(7)]);
var inst_22474 = (inst_22472 < cnt);
var state_22508__$1 = state_22508;
if(cljs.core.truth_(inst_22474)){
var statearr_22512_22545 = state_22508__$1;
(statearr_22512_22545[(1)] = (6));

} else {
var statearr_22513_22546 = state_22508__$1;
(statearr_22513_22546[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (15))){
var inst_22504 = (state_22508[(2)]);
var state_22508__$1 = state_22508;
var statearr_22514_22547 = state_22508__$1;
(statearr_22514_22547[(2)] = inst_22504);

(statearr_22514_22547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (13))){
var inst_22497 = cljs.core.async.close_BANG_.call(null,out);
var state_22508__$1 = state_22508;
var statearr_22515_22548 = state_22508__$1;
(statearr_22515_22548[(2)] = inst_22497);

(statearr_22515_22548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (6))){
var state_22508__$1 = state_22508;
var statearr_22516_22549 = state_22508__$1;
(statearr_22516_22549[(2)] = null);

(statearr_22516_22549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (3))){
var inst_22506 = (state_22508[(2)]);
var state_22508__$1 = state_22508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22508__$1,inst_22506);
} else {
if((state_val_22509 === (12))){
var inst_22494 = (state_22508[(8)]);
var inst_22494__$1 = (state_22508[(2)]);
var inst_22495 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22494__$1);
var state_22508__$1 = (function (){var statearr_22517 = state_22508;
(statearr_22517[(8)] = inst_22494__$1);

return statearr_22517;
})();
if(cljs.core.truth_(inst_22495)){
var statearr_22518_22550 = state_22508__$1;
(statearr_22518_22550[(1)] = (13));

} else {
var statearr_22519_22551 = state_22508__$1;
(statearr_22519_22551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (2))){
var inst_22471 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22472 = (0);
var state_22508__$1 = (function (){var statearr_22520 = state_22508;
(statearr_22520[(9)] = inst_22471);

(statearr_22520[(7)] = inst_22472);

return statearr_22520;
})();
var statearr_22521_22552 = state_22508__$1;
(statearr_22521_22552[(2)] = null);

(statearr_22521_22552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (11))){
var inst_22472 = (state_22508[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22508,(10),Object,null,(9));
var inst_22481 = chs__$1.call(null,inst_22472);
var inst_22482 = done.call(null,inst_22472);
var inst_22483 = cljs.core.async.take_BANG_.call(null,inst_22481,inst_22482);
var state_22508__$1 = state_22508;
var statearr_22522_22553 = state_22508__$1;
(statearr_22522_22553[(2)] = inst_22483);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (9))){
var inst_22472 = (state_22508[(7)]);
var inst_22485 = (state_22508[(2)]);
var inst_22486 = (inst_22472 + (1));
var inst_22472__$1 = inst_22486;
var state_22508__$1 = (function (){var statearr_22523 = state_22508;
(statearr_22523[(10)] = inst_22485);

(statearr_22523[(7)] = inst_22472__$1);

return statearr_22523;
})();
var statearr_22524_22554 = state_22508__$1;
(statearr_22524_22554[(2)] = null);

(statearr_22524_22554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (5))){
var inst_22492 = (state_22508[(2)]);
var state_22508__$1 = (function (){var statearr_22525 = state_22508;
(statearr_22525[(11)] = inst_22492);

return statearr_22525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22508__$1,(12),dchan);
} else {
if((state_val_22509 === (14))){
var inst_22494 = (state_22508[(8)]);
var inst_22499 = cljs.core.apply.call(null,f,inst_22494);
var state_22508__$1 = state_22508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22508__$1,(16),out,inst_22499);
} else {
if((state_val_22509 === (16))){
var inst_22501 = (state_22508[(2)]);
var state_22508__$1 = (function (){var statearr_22526 = state_22508;
(statearr_22526[(12)] = inst_22501);

return statearr_22526;
})();
var statearr_22527_22555 = state_22508__$1;
(statearr_22527_22555[(2)] = null);

(statearr_22527_22555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (10))){
var inst_22476 = (state_22508[(2)]);
var inst_22477 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22508__$1 = (function (){var statearr_22528 = state_22508;
(statearr_22528[(13)] = inst_22476);

return statearr_22528;
})();
var statearr_22529_22556 = state_22508__$1;
(statearr_22529_22556[(2)] = inst_22477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22509 === (8))){
var inst_22490 = (state_22508[(2)]);
var state_22508__$1 = state_22508;
var statearr_22530_22557 = state_22508__$1;
(statearr_22530_22557[(2)] = inst_22490);

(statearr_22530_22557[(1)] = (5));


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
});})(c__20523__auto___22542,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20411__auto__,c__20523__auto___22542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_22534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22534[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_22534[(1)] = (1));

return statearr_22534;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_22508){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_22508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e22535){if((e22535 instanceof Object)){
var ex__20415__auto__ = e22535;
var statearr_22536_22558 = state_22508;
(statearr_22536_22558[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22559 = state_22508;
state_22508 = G__22559;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_22508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_22508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___22542,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20525__auto__ = (function (){var statearr_22537 = f__20524__auto__.call(null);
(statearr_22537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___22542);

return statearr_22537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___22542,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22561 = [];
var len__19428__auto___22617 = arguments.length;
var i__19429__auto___22618 = (0);
while(true){
if((i__19429__auto___22618 < len__19428__auto___22617)){
args22561.push((arguments[i__19429__auto___22618]));

var G__22619 = (i__19429__auto___22618 + (1));
i__19429__auto___22618 = G__22619;
continue;
} else {
}
break;
}

var G__22563 = args22561.length;
switch (G__22563) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22561.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20523__auto___22621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___22621,out){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___22621,out){
return (function (state_22593){
var state_val_22594 = (state_22593[(1)]);
if((state_val_22594 === (7))){
var inst_22572 = (state_22593[(7)]);
var inst_22573 = (state_22593[(8)]);
var inst_22572__$1 = (state_22593[(2)]);
var inst_22573__$1 = cljs.core.nth.call(null,inst_22572__$1,(0),null);
var inst_22574 = cljs.core.nth.call(null,inst_22572__$1,(1),null);
var inst_22575 = (inst_22573__$1 == null);
var state_22593__$1 = (function (){var statearr_22595 = state_22593;
(statearr_22595[(7)] = inst_22572__$1);

(statearr_22595[(9)] = inst_22574);

(statearr_22595[(8)] = inst_22573__$1);

return statearr_22595;
})();
if(cljs.core.truth_(inst_22575)){
var statearr_22596_22622 = state_22593__$1;
(statearr_22596_22622[(1)] = (8));

} else {
var statearr_22597_22623 = state_22593__$1;
(statearr_22597_22623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (1))){
var inst_22564 = cljs.core.vec.call(null,chs);
var inst_22565 = inst_22564;
var state_22593__$1 = (function (){var statearr_22598 = state_22593;
(statearr_22598[(10)] = inst_22565);

return statearr_22598;
})();
var statearr_22599_22624 = state_22593__$1;
(statearr_22599_22624[(2)] = null);

(statearr_22599_22624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (4))){
var inst_22565 = (state_22593[(10)]);
var state_22593__$1 = state_22593;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22593__$1,(7),inst_22565);
} else {
if((state_val_22594 === (6))){
var inst_22589 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22600_22625 = state_22593__$1;
(statearr_22600_22625[(2)] = inst_22589);

(statearr_22600_22625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (3))){
var inst_22591 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22593__$1,inst_22591);
} else {
if((state_val_22594 === (2))){
var inst_22565 = (state_22593[(10)]);
var inst_22567 = cljs.core.count.call(null,inst_22565);
var inst_22568 = (inst_22567 > (0));
var state_22593__$1 = state_22593;
if(cljs.core.truth_(inst_22568)){
var statearr_22602_22626 = state_22593__$1;
(statearr_22602_22626[(1)] = (4));

} else {
var statearr_22603_22627 = state_22593__$1;
(statearr_22603_22627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (11))){
var inst_22565 = (state_22593[(10)]);
var inst_22582 = (state_22593[(2)]);
var tmp22601 = inst_22565;
var inst_22565__$1 = tmp22601;
var state_22593__$1 = (function (){var statearr_22604 = state_22593;
(statearr_22604[(10)] = inst_22565__$1);

(statearr_22604[(11)] = inst_22582);

return statearr_22604;
})();
var statearr_22605_22628 = state_22593__$1;
(statearr_22605_22628[(2)] = null);

(statearr_22605_22628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (9))){
var inst_22573 = (state_22593[(8)]);
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22593__$1,(11),out,inst_22573);
} else {
if((state_val_22594 === (5))){
var inst_22587 = cljs.core.async.close_BANG_.call(null,out);
var state_22593__$1 = state_22593;
var statearr_22606_22629 = state_22593__$1;
(statearr_22606_22629[(2)] = inst_22587);

(statearr_22606_22629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (10))){
var inst_22585 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22607_22630 = state_22593__$1;
(statearr_22607_22630[(2)] = inst_22585);

(statearr_22607_22630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (8))){
var inst_22565 = (state_22593[(10)]);
var inst_22572 = (state_22593[(7)]);
var inst_22574 = (state_22593[(9)]);
var inst_22573 = (state_22593[(8)]);
var inst_22577 = (function (){var cs = inst_22565;
var vec__22570 = inst_22572;
var v = inst_22573;
var c = inst_22574;
return ((function (cs,vec__22570,v,c,inst_22565,inst_22572,inst_22574,inst_22573,state_val_22594,c__20523__auto___22621,out){
return (function (p1__22560_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22560_SHARP_);
});
;})(cs,vec__22570,v,c,inst_22565,inst_22572,inst_22574,inst_22573,state_val_22594,c__20523__auto___22621,out))
})();
var inst_22578 = cljs.core.filterv.call(null,inst_22577,inst_22565);
var inst_22565__$1 = inst_22578;
var state_22593__$1 = (function (){var statearr_22608 = state_22593;
(statearr_22608[(10)] = inst_22565__$1);

return statearr_22608;
})();
var statearr_22609_22631 = state_22593__$1;
(statearr_22609_22631[(2)] = null);

(statearr_22609_22631[(1)] = (2));


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
});})(c__20523__auto___22621,out))
;
return ((function (switch__20411__auto__,c__20523__auto___22621,out){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_22613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22613[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_22613[(1)] = (1));

return statearr_22613;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_22593){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_22593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e22614){if((e22614 instanceof Object)){
var ex__20415__auto__ = e22614;
var statearr_22615_22632 = state_22593;
(statearr_22615_22632[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22633 = state_22593;
state_22593 = G__22633;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_22593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_22593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___22621,out))
})();
var state__20525__auto__ = (function (){var statearr_22616 = f__20524__auto__.call(null);
(statearr_22616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___22621);

return statearr_22616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___22621,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22634 = [];
var len__19428__auto___22683 = arguments.length;
var i__19429__auto___22684 = (0);
while(true){
if((i__19429__auto___22684 < len__19428__auto___22683)){
args22634.push((arguments[i__19429__auto___22684]));

var G__22685 = (i__19429__auto___22684 + (1));
i__19429__auto___22684 = G__22685;
continue;
} else {
}
break;
}

var G__22636 = args22634.length;
switch (G__22636) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22634.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20523__auto___22687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___22687,out){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___22687,out){
return (function (state_22660){
var state_val_22661 = (state_22660[(1)]);
if((state_val_22661 === (7))){
var inst_22642 = (state_22660[(7)]);
var inst_22642__$1 = (state_22660[(2)]);
var inst_22643 = (inst_22642__$1 == null);
var inst_22644 = cljs.core.not.call(null,inst_22643);
var state_22660__$1 = (function (){var statearr_22662 = state_22660;
(statearr_22662[(7)] = inst_22642__$1);

return statearr_22662;
})();
if(inst_22644){
var statearr_22663_22688 = state_22660__$1;
(statearr_22663_22688[(1)] = (8));

} else {
var statearr_22664_22689 = state_22660__$1;
(statearr_22664_22689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (1))){
var inst_22637 = (0);
var state_22660__$1 = (function (){var statearr_22665 = state_22660;
(statearr_22665[(8)] = inst_22637);

return statearr_22665;
})();
var statearr_22666_22690 = state_22660__$1;
(statearr_22666_22690[(2)] = null);

(statearr_22666_22690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (4))){
var state_22660__$1 = state_22660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22660__$1,(7),ch);
} else {
if((state_val_22661 === (6))){
var inst_22655 = (state_22660[(2)]);
var state_22660__$1 = state_22660;
var statearr_22667_22691 = state_22660__$1;
(statearr_22667_22691[(2)] = inst_22655);

(statearr_22667_22691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (3))){
var inst_22657 = (state_22660[(2)]);
var inst_22658 = cljs.core.async.close_BANG_.call(null,out);
var state_22660__$1 = (function (){var statearr_22668 = state_22660;
(statearr_22668[(9)] = inst_22657);

return statearr_22668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22660__$1,inst_22658);
} else {
if((state_val_22661 === (2))){
var inst_22637 = (state_22660[(8)]);
var inst_22639 = (inst_22637 < n);
var state_22660__$1 = state_22660;
if(cljs.core.truth_(inst_22639)){
var statearr_22669_22692 = state_22660__$1;
(statearr_22669_22692[(1)] = (4));

} else {
var statearr_22670_22693 = state_22660__$1;
(statearr_22670_22693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (11))){
var inst_22637 = (state_22660[(8)]);
var inst_22647 = (state_22660[(2)]);
var inst_22648 = (inst_22637 + (1));
var inst_22637__$1 = inst_22648;
var state_22660__$1 = (function (){var statearr_22671 = state_22660;
(statearr_22671[(10)] = inst_22647);

(statearr_22671[(8)] = inst_22637__$1);

return statearr_22671;
})();
var statearr_22672_22694 = state_22660__$1;
(statearr_22672_22694[(2)] = null);

(statearr_22672_22694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (9))){
var state_22660__$1 = state_22660;
var statearr_22673_22695 = state_22660__$1;
(statearr_22673_22695[(2)] = null);

(statearr_22673_22695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (5))){
var state_22660__$1 = state_22660;
var statearr_22674_22696 = state_22660__$1;
(statearr_22674_22696[(2)] = null);

(statearr_22674_22696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (10))){
var inst_22652 = (state_22660[(2)]);
var state_22660__$1 = state_22660;
var statearr_22675_22697 = state_22660__$1;
(statearr_22675_22697[(2)] = inst_22652);

(statearr_22675_22697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22661 === (8))){
var inst_22642 = (state_22660[(7)]);
var state_22660__$1 = state_22660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22660__$1,(11),out,inst_22642);
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
});})(c__20523__auto___22687,out))
;
return ((function (switch__20411__auto__,c__20523__auto___22687,out){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_22679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22679[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_22679[(1)] = (1));

return statearr_22679;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_22660){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_22660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e22680){if((e22680 instanceof Object)){
var ex__20415__auto__ = e22680;
var statearr_22681_22698 = state_22660;
(statearr_22681_22698[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22699 = state_22660;
state_22660 = G__22699;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_22660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_22660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___22687,out))
})();
var state__20525__auto__ = (function (){var statearr_22682 = f__20524__auto__.call(null);
(statearr_22682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___22687);

return statearr_22682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___22687,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22707 = (function (map_LT_,f,ch,meta22708){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22708 = meta22708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22709,meta22708__$1){
var self__ = this;
var _22709__$1 = this;
return (new cljs.core.async.t_cljs$core$async22707(self__.map_LT_,self__.f,self__.ch,meta22708__$1));
});

cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22709){
var self__ = this;
var _22709__$1 = this;
return self__.meta22708;
});

cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22710 = (function (map_LT_,f,ch,meta22708,_,fn1,meta22711){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22708 = meta22708;
this._ = _;
this.fn1 = fn1;
this.meta22711 = meta22711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22712,meta22711__$1){
var self__ = this;
var _22712__$1 = this;
return (new cljs.core.async.t_cljs$core$async22710(self__.map_LT_,self__.f,self__.ch,self__.meta22708,self__._,self__.fn1,meta22711__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22712){
var self__ = this;
var _22712__$1 = this;
return self__.meta22711;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22700_SHARP_){
return f1.call(null,(((p1__22700_SHARP_ == null))?null:self__.f.call(null,p1__22700_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22710.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22708","meta22708",-1847846778,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22707","cljs.core.async/t_cljs$core$async22707",-421312086,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22711","meta22711",1649528168,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22710.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22710";

cljs.core.async.t_cljs$core$async22710.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22710");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22710 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22710(map_LT___$1,f__$1,ch__$1,meta22708__$1,___$2,fn1__$1,meta22711){
return (new cljs.core.async.t_cljs$core$async22710(map_LT___$1,f__$1,ch__$1,meta22708__$1,___$2,fn1__$1,meta22711));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22710(self__.map_LT_,self__.f,self__.ch,self__.meta22708,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18358__auto__ = ret;
if(cljs.core.truth_(and__18358__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18358__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22708","meta22708",-1847846778,null)], null);
});

cljs.core.async.t_cljs$core$async22707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22707";

cljs.core.async.t_cljs$core$async22707.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22707");
});

cljs.core.async.__GT_t_cljs$core$async22707 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22707(map_LT___$1,f__$1,ch__$1,meta22708){
return (new cljs.core.async.t_cljs$core$async22707(map_LT___$1,f__$1,ch__$1,meta22708));
});

}

return (new cljs.core.async.t_cljs$core$async22707(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22716 = (function (map_GT_,f,ch,meta22717){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22717 = meta22717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22718,meta22717__$1){
var self__ = this;
var _22718__$1 = this;
return (new cljs.core.async.t_cljs$core$async22716(self__.map_GT_,self__.f,self__.ch,meta22717__$1));
});

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22718){
var self__ = this;
var _22718__$1 = this;
return self__.meta22717;
});

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22716.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22717","meta22717",-2088440962,null)], null);
});

cljs.core.async.t_cljs$core$async22716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22716";

cljs.core.async.t_cljs$core$async22716.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22716");
});

cljs.core.async.__GT_t_cljs$core$async22716 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22716(map_GT___$1,f__$1,ch__$1,meta22717){
return (new cljs.core.async.t_cljs$core$async22716(map_GT___$1,f__$1,ch__$1,meta22717));
});

}

return (new cljs.core.async.t_cljs$core$async22716(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22722 = (function (filter_GT_,p,ch,meta22723){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22723 = meta22723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22724,meta22723__$1){
var self__ = this;
var _22724__$1 = this;
return (new cljs.core.async.t_cljs$core$async22722(self__.filter_GT_,self__.p,self__.ch,meta22723__$1));
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22724){
var self__ = this;
var _22724__$1 = this;
return self__.meta22723;
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22723","meta22723",1180465950,null)], null);
});

cljs.core.async.t_cljs$core$async22722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22722";

cljs.core.async.t_cljs$core$async22722.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22722");
});

cljs.core.async.__GT_t_cljs$core$async22722 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22722(filter_GT___$1,p__$1,ch__$1,meta22723){
return (new cljs.core.async.t_cljs$core$async22722(filter_GT___$1,p__$1,ch__$1,meta22723));
});

}

return (new cljs.core.async.t_cljs$core$async22722(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22725 = [];
var len__19428__auto___22769 = arguments.length;
var i__19429__auto___22770 = (0);
while(true){
if((i__19429__auto___22770 < len__19428__auto___22769)){
args22725.push((arguments[i__19429__auto___22770]));

var G__22771 = (i__19429__auto___22770 + (1));
i__19429__auto___22770 = G__22771;
continue;
} else {
}
break;
}

var G__22727 = args22725.length;
switch (G__22727) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22725.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20523__auto___22773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___22773,out){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___22773,out){
return (function (state_22748){
var state_val_22749 = (state_22748[(1)]);
if((state_val_22749 === (7))){
var inst_22744 = (state_22748[(2)]);
var state_22748__$1 = state_22748;
var statearr_22750_22774 = state_22748__$1;
(statearr_22750_22774[(2)] = inst_22744);

(statearr_22750_22774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22749 === (1))){
var state_22748__$1 = state_22748;
var statearr_22751_22775 = state_22748__$1;
(statearr_22751_22775[(2)] = null);

(statearr_22751_22775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22749 === (4))){
var inst_22730 = (state_22748[(7)]);
var inst_22730__$1 = (state_22748[(2)]);
var inst_22731 = (inst_22730__$1 == null);
var state_22748__$1 = (function (){var statearr_22752 = state_22748;
(statearr_22752[(7)] = inst_22730__$1);

return statearr_22752;
})();
if(cljs.core.truth_(inst_22731)){
var statearr_22753_22776 = state_22748__$1;
(statearr_22753_22776[(1)] = (5));

} else {
var statearr_22754_22777 = state_22748__$1;
(statearr_22754_22777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22749 === (6))){
var inst_22730 = (state_22748[(7)]);
var inst_22735 = p.call(null,inst_22730);
var state_22748__$1 = state_22748;
if(cljs.core.truth_(inst_22735)){
var statearr_22755_22778 = state_22748__$1;
(statearr_22755_22778[(1)] = (8));

} else {
var statearr_22756_22779 = state_22748__$1;
(statearr_22756_22779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22749 === (3))){
var inst_22746 = (state_22748[(2)]);
var state_22748__$1 = state_22748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22748__$1,inst_22746);
} else {
if((state_val_22749 === (2))){
var state_22748__$1 = state_22748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22748__$1,(4),ch);
} else {
if((state_val_22749 === (11))){
var inst_22738 = (state_22748[(2)]);
var state_22748__$1 = state_22748;
var statearr_22757_22780 = state_22748__$1;
(statearr_22757_22780[(2)] = inst_22738);

(statearr_22757_22780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22749 === (9))){
var state_22748__$1 = state_22748;
var statearr_22758_22781 = state_22748__$1;
(statearr_22758_22781[(2)] = null);

(statearr_22758_22781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22749 === (5))){
var inst_22733 = cljs.core.async.close_BANG_.call(null,out);
var state_22748__$1 = state_22748;
var statearr_22759_22782 = state_22748__$1;
(statearr_22759_22782[(2)] = inst_22733);

(statearr_22759_22782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22749 === (10))){
var inst_22741 = (state_22748[(2)]);
var state_22748__$1 = (function (){var statearr_22760 = state_22748;
(statearr_22760[(8)] = inst_22741);

return statearr_22760;
})();
var statearr_22761_22783 = state_22748__$1;
(statearr_22761_22783[(2)] = null);

(statearr_22761_22783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22749 === (8))){
var inst_22730 = (state_22748[(7)]);
var state_22748__$1 = state_22748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22748__$1,(11),out,inst_22730);
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
});})(c__20523__auto___22773,out))
;
return ((function (switch__20411__auto__,c__20523__auto___22773,out){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_22765 = [null,null,null,null,null,null,null,null,null];
(statearr_22765[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_22765[(1)] = (1));

return statearr_22765;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_22748){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_22748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e22766){if((e22766 instanceof Object)){
var ex__20415__auto__ = e22766;
var statearr_22767_22784 = state_22748;
(statearr_22767_22784[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22785 = state_22748;
state_22748 = G__22785;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_22748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_22748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___22773,out))
})();
var state__20525__auto__ = (function (){var statearr_22768 = f__20524__auto__.call(null);
(statearr_22768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___22773);

return statearr_22768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___22773,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22786 = [];
var len__19428__auto___22789 = arguments.length;
var i__19429__auto___22790 = (0);
while(true){
if((i__19429__auto___22790 < len__19428__auto___22789)){
args22786.push((arguments[i__19429__auto___22790]));

var G__22791 = (i__19429__auto___22790 + (1));
i__19429__auto___22790 = G__22791;
continue;
} else {
}
break;
}

var G__22788 = args22786.length;
switch (G__22788) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22786.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto__){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto__){
return (function (state_22958){
var state_val_22959 = (state_22958[(1)]);
if((state_val_22959 === (7))){
var inst_22954 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22960_23001 = state_22958__$1;
(statearr_22960_23001[(2)] = inst_22954);

(statearr_22960_23001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (20))){
var inst_22924 = (state_22958[(7)]);
var inst_22935 = (state_22958[(2)]);
var inst_22936 = cljs.core.next.call(null,inst_22924);
var inst_22910 = inst_22936;
var inst_22911 = null;
var inst_22912 = (0);
var inst_22913 = (0);
var state_22958__$1 = (function (){var statearr_22961 = state_22958;
(statearr_22961[(8)] = inst_22912);

(statearr_22961[(9)] = inst_22935);

(statearr_22961[(10)] = inst_22910);

(statearr_22961[(11)] = inst_22913);

(statearr_22961[(12)] = inst_22911);

return statearr_22961;
})();
var statearr_22962_23002 = state_22958__$1;
(statearr_22962_23002[(2)] = null);

(statearr_22962_23002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (1))){
var state_22958__$1 = state_22958;
var statearr_22963_23003 = state_22958__$1;
(statearr_22963_23003[(2)] = null);

(statearr_22963_23003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (4))){
var inst_22899 = (state_22958[(13)]);
var inst_22899__$1 = (state_22958[(2)]);
var inst_22900 = (inst_22899__$1 == null);
var state_22958__$1 = (function (){var statearr_22964 = state_22958;
(statearr_22964[(13)] = inst_22899__$1);

return statearr_22964;
})();
if(cljs.core.truth_(inst_22900)){
var statearr_22965_23004 = state_22958__$1;
(statearr_22965_23004[(1)] = (5));

} else {
var statearr_22966_23005 = state_22958__$1;
(statearr_22966_23005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (15))){
var state_22958__$1 = state_22958;
var statearr_22970_23006 = state_22958__$1;
(statearr_22970_23006[(2)] = null);

(statearr_22970_23006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (21))){
var state_22958__$1 = state_22958;
var statearr_22971_23007 = state_22958__$1;
(statearr_22971_23007[(2)] = null);

(statearr_22971_23007[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (13))){
var inst_22912 = (state_22958[(8)]);
var inst_22910 = (state_22958[(10)]);
var inst_22913 = (state_22958[(11)]);
var inst_22911 = (state_22958[(12)]);
var inst_22920 = (state_22958[(2)]);
var inst_22921 = (inst_22913 + (1));
var tmp22967 = inst_22912;
var tmp22968 = inst_22910;
var tmp22969 = inst_22911;
var inst_22910__$1 = tmp22968;
var inst_22911__$1 = tmp22969;
var inst_22912__$1 = tmp22967;
var inst_22913__$1 = inst_22921;
var state_22958__$1 = (function (){var statearr_22972 = state_22958;
(statearr_22972[(8)] = inst_22912__$1);

(statearr_22972[(10)] = inst_22910__$1);

(statearr_22972[(11)] = inst_22913__$1);

(statearr_22972[(12)] = inst_22911__$1);

(statearr_22972[(14)] = inst_22920);

return statearr_22972;
})();
var statearr_22973_23008 = state_22958__$1;
(statearr_22973_23008[(2)] = null);

(statearr_22973_23008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (22))){
var state_22958__$1 = state_22958;
var statearr_22974_23009 = state_22958__$1;
(statearr_22974_23009[(2)] = null);

(statearr_22974_23009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (6))){
var inst_22899 = (state_22958[(13)]);
var inst_22908 = f.call(null,inst_22899);
var inst_22909 = cljs.core.seq.call(null,inst_22908);
var inst_22910 = inst_22909;
var inst_22911 = null;
var inst_22912 = (0);
var inst_22913 = (0);
var state_22958__$1 = (function (){var statearr_22975 = state_22958;
(statearr_22975[(8)] = inst_22912);

(statearr_22975[(10)] = inst_22910);

(statearr_22975[(11)] = inst_22913);

(statearr_22975[(12)] = inst_22911);

return statearr_22975;
})();
var statearr_22976_23010 = state_22958__$1;
(statearr_22976_23010[(2)] = null);

(statearr_22976_23010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (17))){
var inst_22924 = (state_22958[(7)]);
var inst_22928 = cljs.core.chunk_first.call(null,inst_22924);
var inst_22929 = cljs.core.chunk_rest.call(null,inst_22924);
var inst_22930 = cljs.core.count.call(null,inst_22928);
var inst_22910 = inst_22929;
var inst_22911 = inst_22928;
var inst_22912 = inst_22930;
var inst_22913 = (0);
var state_22958__$1 = (function (){var statearr_22977 = state_22958;
(statearr_22977[(8)] = inst_22912);

(statearr_22977[(10)] = inst_22910);

(statearr_22977[(11)] = inst_22913);

(statearr_22977[(12)] = inst_22911);

return statearr_22977;
})();
var statearr_22978_23011 = state_22958__$1;
(statearr_22978_23011[(2)] = null);

(statearr_22978_23011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (3))){
var inst_22956 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22958__$1,inst_22956);
} else {
if((state_val_22959 === (12))){
var inst_22944 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22979_23012 = state_22958__$1;
(statearr_22979_23012[(2)] = inst_22944);

(statearr_22979_23012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (2))){
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22958__$1,(4),in$);
} else {
if((state_val_22959 === (23))){
var inst_22952 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22980_23013 = state_22958__$1;
(statearr_22980_23013[(2)] = inst_22952);

(statearr_22980_23013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (19))){
var inst_22939 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22981_23014 = state_22958__$1;
(statearr_22981_23014[(2)] = inst_22939);

(statearr_22981_23014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (11))){
var inst_22910 = (state_22958[(10)]);
var inst_22924 = (state_22958[(7)]);
var inst_22924__$1 = cljs.core.seq.call(null,inst_22910);
var state_22958__$1 = (function (){var statearr_22982 = state_22958;
(statearr_22982[(7)] = inst_22924__$1);

return statearr_22982;
})();
if(inst_22924__$1){
var statearr_22983_23015 = state_22958__$1;
(statearr_22983_23015[(1)] = (14));

} else {
var statearr_22984_23016 = state_22958__$1;
(statearr_22984_23016[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (9))){
var inst_22946 = (state_22958[(2)]);
var inst_22947 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22958__$1 = (function (){var statearr_22985 = state_22958;
(statearr_22985[(15)] = inst_22946);

return statearr_22985;
})();
if(cljs.core.truth_(inst_22947)){
var statearr_22986_23017 = state_22958__$1;
(statearr_22986_23017[(1)] = (21));

} else {
var statearr_22987_23018 = state_22958__$1;
(statearr_22987_23018[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (5))){
var inst_22902 = cljs.core.async.close_BANG_.call(null,out);
var state_22958__$1 = state_22958;
var statearr_22988_23019 = state_22958__$1;
(statearr_22988_23019[(2)] = inst_22902);

(statearr_22988_23019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (14))){
var inst_22924 = (state_22958[(7)]);
var inst_22926 = cljs.core.chunked_seq_QMARK_.call(null,inst_22924);
var state_22958__$1 = state_22958;
if(inst_22926){
var statearr_22989_23020 = state_22958__$1;
(statearr_22989_23020[(1)] = (17));

} else {
var statearr_22990_23021 = state_22958__$1;
(statearr_22990_23021[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (16))){
var inst_22942 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22991_23022 = state_22958__$1;
(statearr_22991_23022[(2)] = inst_22942);

(statearr_22991_23022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (10))){
var inst_22913 = (state_22958[(11)]);
var inst_22911 = (state_22958[(12)]);
var inst_22918 = cljs.core._nth.call(null,inst_22911,inst_22913);
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22958__$1,(13),out,inst_22918);
} else {
if((state_val_22959 === (18))){
var inst_22924 = (state_22958[(7)]);
var inst_22933 = cljs.core.first.call(null,inst_22924);
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22958__$1,(20),out,inst_22933);
} else {
if((state_val_22959 === (8))){
var inst_22912 = (state_22958[(8)]);
var inst_22913 = (state_22958[(11)]);
var inst_22915 = (inst_22913 < inst_22912);
var inst_22916 = inst_22915;
var state_22958__$1 = state_22958;
if(cljs.core.truth_(inst_22916)){
var statearr_22992_23023 = state_22958__$1;
(statearr_22992_23023[(1)] = (10));

} else {
var statearr_22993_23024 = state_22958__$1;
(statearr_22993_23024[(1)] = (11));

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
});})(c__20523__auto__))
;
return ((function (switch__20411__auto__,c__20523__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20412__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20412__auto____0 = (function (){
var statearr_22997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22997[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20412__auto__);

(statearr_22997[(1)] = (1));

return statearr_22997;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20412__auto____1 = (function (state_22958){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_22958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e22998){if((e22998 instanceof Object)){
var ex__20415__auto__ = e22998;
var statearr_22999_23025 = state_22958;
(statearr_22999_23025[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23026 = state_22958;
state_22958 = G__23026;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20412__auto__ = function(state_22958){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20412__auto____1.call(this,state_22958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20412__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20412__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto__))
})();
var state__20525__auto__ = (function (){var statearr_23000 = f__20524__auto__.call(null);
(statearr_23000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto__);

return statearr_23000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto__))
);

return c__20523__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23027 = [];
var len__19428__auto___23030 = arguments.length;
var i__19429__auto___23031 = (0);
while(true){
if((i__19429__auto___23031 < len__19428__auto___23030)){
args23027.push((arguments[i__19429__auto___23031]));

var G__23032 = (i__19429__auto___23031 + (1));
i__19429__auto___23031 = G__23032;
continue;
} else {
}
break;
}

var G__23029 = args23027.length;
switch (G__23029) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23027.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23034 = [];
var len__19428__auto___23037 = arguments.length;
var i__19429__auto___23038 = (0);
while(true){
if((i__19429__auto___23038 < len__19428__auto___23037)){
args23034.push((arguments[i__19429__auto___23038]));

var G__23039 = (i__19429__auto___23038 + (1));
i__19429__auto___23038 = G__23039;
continue;
} else {
}
break;
}

var G__23036 = args23034.length;
switch (G__23036) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23034.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23041 = [];
var len__19428__auto___23092 = arguments.length;
var i__19429__auto___23093 = (0);
while(true){
if((i__19429__auto___23093 < len__19428__auto___23092)){
args23041.push((arguments[i__19429__auto___23093]));

var G__23094 = (i__19429__auto___23093 + (1));
i__19429__auto___23093 = G__23094;
continue;
} else {
}
break;
}

var G__23043 = args23041.length;
switch (G__23043) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23041.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20523__auto___23096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___23096,out){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___23096,out){
return (function (state_23067){
var state_val_23068 = (state_23067[(1)]);
if((state_val_23068 === (7))){
var inst_23062 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
var statearr_23069_23097 = state_23067__$1;
(statearr_23069_23097[(2)] = inst_23062);

(statearr_23069_23097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (1))){
var inst_23044 = null;
var state_23067__$1 = (function (){var statearr_23070 = state_23067;
(statearr_23070[(7)] = inst_23044);

return statearr_23070;
})();
var statearr_23071_23098 = state_23067__$1;
(statearr_23071_23098[(2)] = null);

(statearr_23071_23098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (4))){
var inst_23047 = (state_23067[(8)]);
var inst_23047__$1 = (state_23067[(2)]);
var inst_23048 = (inst_23047__$1 == null);
var inst_23049 = cljs.core.not.call(null,inst_23048);
var state_23067__$1 = (function (){var statearr_23072 = state_23067;
(statearr_23072[(8)] = inst_23047__$1);

return statearr_23072;
})();
if(inst_23049){
var statearr_23073_23099 = state_23067__$1;
(statearr_23073_23099[(1)] = (5));

} else {
var statearr_23074_23100 = state_23067__$1;
(statearr_23074_23100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (6))){
var state_23067__$1 = state_23067;
var statearr_23075_23101 = state_23067__$1;
(statearr_23075_23101[(2)] = null);

(statearr_23075_23101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (3))){
var inst_23064 = (state_23067[(2)]);
var inst_23065 = cljs.core.async.close_BANG_.call(null,out);
var state_23067__$1 = (function (){var statearr_23076 = state_23067;
(statearr_23076[(9)] = inst_23064);

return statearr_23076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23067__$1,inst_23065);
} else {
if((state_val_23068 === (2))){
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23067__$1,(4),ch);
} else {
if((state_val_23068 === (11))){
var inst_23047 = (state_23067[(8)]);
var inst_23056 = (state_23067[(2)]);
var inst_23044 = inst_23047;
var state_23067__$1 = (function (){var statearr_23077 = state_23067;
(statearr_23077[(10)] = inst_23056);

(statearr_23077[(7)] = inst_23044);

return statearr_23077;
})();
var statearr_23078_23102 = state_23067__$1;
(statearr_23078_23102[(2)] = null);

(statearr_23078_23102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (9))){
var inst_23047 = (state_23067[(8)]);
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23067__$1,(11),out,inst_23047);
} else {
if((state_val_23068 === (5))){
var inst_23047 = (state_23067[(8)]);
var inst_23044 = (state_23067[(7)]);
var inst_23051 = cljs.core._EQ_.call(null,inst_23047,inst_23044);
var state_23067__$1 = state_23067;
if(inst_23051){
var statearr_23080_23103 = state_23067__$1;
(statearr_23080_23103[(1)] = (8));

} else {
var statearr_23081_23104 = state_23067__$1;
(statearr_23081_23104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (10))){
var inst_23059 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
var statearr_23082_23105 = state_23067__$1;
(statearr_23082_23105[(2)] = inst_23059);

(statearr_23082_23105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (8))){
var inst_23044 = (state_23067[(7)]);
var tmp23079 = inst_23044;
var inst_23044__$1 = tmp23079;
var state_23067__$1 = (function (){var statearr_23083 = state_23067;
(statearr_23083[(7)] = inst_23044__$1);

return statearr_23083;
})();
var statearr_23084_23106 = state_23067__$1;
(statearr_23084_23106[(2)] = null);

(statearr_23084_23106[(1)] = (2));


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
});})(c__20523__auto___23096,out))
;
return ((function (switch__20411__auto__,c__20523__auto___23096,out){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_23088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23088[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_23088[(1)] = (1));

return statearr_23088;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_23067){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_23067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e23089){if((e23089 instanceof Object)){
var ex__20415__auto__ = e23089;
var statearr_23090_23107 = state_23067;
(statearr_23090_23107[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23108 = state_23067;
state_23067 = G__23108;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_23067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_23067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___23096,out))
})();
var state__20525__auto__ = (function (){var statearr_23091 = f__20524__auto__.call(null);
(statearr_23091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___23096);

return statearr_23091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___23096,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23109 = [];
var len__19428__auto___23179 = arguments.length;
var i__19429__auto___23180 = (0);
while(true){
if((i__19429__auto___23180 < len__19428__auto___23179)){
args23109.push((arguments[i__19429__auto___23180]));

var G__23181 = (i__19429__auto___23180 + (1));
i__19429__auto___23180 = G__23181;
continue;
} else {
}
break;
}

var G__23111 = args23109.length;
switch (G__23111) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23109.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20523__auto___23183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___23183,out){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___23183,out){
return (function (state_23149){
var state_val_23150 = (state_23149[(1)]);
if((state_val_23150 === (7))){
var inst_23145 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23151_23184 = state_23149__$1;
(statearr_23151_23184[(2)] = inst_23145);

(statearr_23151_23184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (1))){
var inst_23112 = (new Array(n));
var inst_23113 = inst_23112;
var inst_23114 = (0);
var state_23149__$1 = (function (){var statearr_23152 = state_23149;
(statearr_23152[(7)] = inst_23113);

(statearr_23152[(8)] = inst_23114);

return statearr_23152;
})();
var statearr_23153_23185 = state_23149__$1;
(statearr_23153_23185[(2)] = null);

(statearr_23153_23185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (4))){
var inst_23117 = (state_23149[(9)]);
var inst_23117__$1 = (state_23149[(2)]);
var inst_23118 = (inst_23117__$1 == null);
var inst_23119 = cljs.core.not.call(null,inst_23118);
var state_23149__$1 = (function (){var statearr_23154 = state_23149;
(statearr_23154[(9)] = inst_23117__$1);

return statearr_23154;
})();
if(inst_23119){
var statearr_23155_23186 = state_23149__$1;
(statearr_23155_23186[(1)] = (5));

} else {
var statearr_23156_23187 = state_23149__$1;
(statearr_23156_23187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (15))){
var inst_23139 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23157_23188 = state_23149__$1;
(statearr_23157_23188[(2)] = inst_23139);

(statearr_23157_23188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (13))){
var state_23149__$1 = state_23149;
var statearr_23158_23189 = state_23149__$1;
(statearr_23158_23189[(2)] = null);

(statearr_23158_23189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (6))){
var inst_23114 = (state_23149[(8)]);
var inst_23135 = (inst_23114 > (0));
var state_23149__$1 = state_23149;
if(cljs.core.truth_(inst_23135)){
var statearr_23159_23190 = state_23149__$1;
(statearr_23159_23190[(1)] = (12));

} else {
var statearr_23160_23191 = state_23149__$1;
(statearr_23160_23191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (3))){
var inst_23147 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23149__$1,inst_23147);
} else {
if((state_val_23150 === (12))){
var inst_23113 = (state_23149[(7)]);
var inst_23137 = cljs.core.vec.call(null,inst_23113);
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23149__$1,(15),out,inst_23137);
} else {
if((state_val_23150 === (2))){
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23149__$1,(4),ch);
} else {
if((state_val_23150 === (11))){
var inst_23129 = (state_23149[(2)]);
var inst_23130 = (new Array(n));
var inst_23113 = inst_23130;
var inst_23114 = (0);
var state_23149__$1 = (function (){var statearr_23161 = state_23149;
(statearr_23161[(7)] = inst_23113);

(statearr_23161[(8)] = inst_23114);

(statearr_23161[(10)] = inst_23129);

return statearr_23161;
})();
var statearr_23162_23192 = state_23149__$1;
(statearr_23162_23192[(2)] = null);

(statearr_23162_23192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (9))){
var inst_23113 = (state_23149[(7)]);
var inst_23127 = cljs.core.vec.call(null,inst_23113);
var state_23149__$1 = state_23149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23149__$1,(11),out,inst_23127);
} else {
if((state_val_23150 === (5))){
var inst_23113 = (state_23149[(7)]);
var inst_23114 = (state_23149[(8)]);
var inst_23122 = (state_23149[(11)]);
var inst_23117 = (state_23149[(9)]);
var inst_23121 = (inst_23113[inst_23114] = inst_23117);
var inst_23122__$1 = (inst_23114 + (1));
var inst_23123 = (inst_23122__$1 < n);
var state_23149__$1 = (function (){var statearr_23163 = state_23149;
(statearr_23163[(12)] = inst_23121);

(statearr_23163[(11)] = inst_23122__$1);

return statearr_23163;
})();
if(cljs.core.truth_(inst_23123)){
var statearr_23164_23193 = state_23149__$1;
(statearr_23164_23193[(1)] = (8));

} else {
var statearr_23165_23194 = state_23149__$1;
(statearr_23165_23194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (14))){
var inst_23142 = (state_23149[(2)]);
var inst_23143 = cljs.core.async.close_BANG_.call(null,out);
var state_23149__$1 = (function (){var statearr_23167 = state_23149;
(statearr_23167[(13)] = inst_23142);

return statearr_23167;
})();
var statearr_23168_23195 = state_23149__$1;
(statearr_23168_23195[(2)] = inst_23143);

(statearr_23168_23195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (10))){
var inst_23133 = (state_23149[(2)]);
var state_23149__$1 = state_23149;
var statearr_23169_23196 = state_23149__$1;
(statearr_23169_23196[(2)] = inst_23133);

(statearr_23169_23196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23150 === (8))){
var inst_23113 = (state_23149[(7)]);
var inst_23122 = (state_23149[(11)]);
var tmp23166 = inst_23113;
var inst_23113__$1 = tmp23166;
var inst_23114 = inst_23122;
var state_23149__$1 = (function (){var statearr_23170 = state_23149;
(statearr_23170[(7)] = inst_23113__$1);

(statearr_23170[(8)] = inst_23114);

return statearr_23170;
})();
var statearr_23171_23197 = state_23149__$1;
(statearr_23171_23197[(2)] = null);

(statearr_23171_23197[(1)] = (2));


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
});})(c__20523__auto___23183,out))
;
return ((function (switch__20411__auto__,c__20523__auto___23183,out){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_23175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23175[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_23175[(1)] = (1));

return statearr_23175;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_23149){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_23149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e23176){if((e23176 instanceof Object)){
var ex__20415__auto__ = e23176;
var statearr_23177_23198 = state_23149;
(statearr_23177_23198[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23199 = state_23149;
state_23149 = G__23199;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_23149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_23149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___23183,out))
})();
var state__20525__auto__ = (function (){var statearr_23178 = f__20524__auto__.call(null);
(statearr_23178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___23183);

return statearr_23178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___23183,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23200 = [];
var len__19428__auto___23274 = arguments.length;
var i__19429__auto___23275 = (0);
while(true){
if((i__19429__auto___23275 < len__19428__auto___23274)){
args23200.push((arguments[i__19429__auto___23275]));

var G__23276 = (i__19429__auto___23275 + (1));
i__19429__auto___23275 = G__23276;
continue;
} else {
}
break;
}

var G__23202 = args23200.length;
switch (G__23202) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23200.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20523__auto___23278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20523__auto___23278,out){
return (function (){
var f__20524__auto__ = (function (){var switch__20411__auto__ = ((function (c__20523__auto___23278,out){
return (function (state_23244){
var state_val_23245 = (state_23244[(1)]);
if((state_val_23245 === (7))){
var inst_23240 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
var statearr_23246_23279 = state_23244__$1;
(statearr_23246_23279[(2)] = inst_23240);

(statearr_23246_23279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (1))){
var inst_23203 = [];
var inst_23204 = inst_23203;
var inst_23205 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23244__$1 = (function (){var statearr_23247 = state_23244;
(statearr_23247[(7)] = inst_23204);

(statearr_23247[(8)] = inst_23205);

return statearr_23247;
})();
var statearr_23248_23280 = state_23244__$1;
(statearr_23248_23280[(2)] = null);

(statearr_23248_23280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (4))){
var inst_23208 = (state_23244[(9)]);
var inst_23208__$1 = (state_23244[(2)]);
var inst_23209 = (inst_23208__$1 == null);
var inst_23210 = cljs.core.not.call(null,inst_23209);
var state_23244__$1 = (function (){var statearr_23249 = state_23244;
(statearr_23249[(9)] = inst_23208__$1);

return statearr_23249;
})();
if(inst_23210){
var statearr_23250_23281 = state_23244__$1;
(statearr_23250_23281[(1)] = (5));

} else {
var statearr_23251_23282 = state_23244__$1;
(statearr_23251_23282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (15))){
var inst_23234 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
var statearr_23252_23283 = state_23244__$1;
(statearr_23252_23283[(2)] = inst_23234);

(statearr_23252_23283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (13))){
var state_23244__$1 = state_23244;
var statearr_23253_23284 = state_23244__$1;
(statearr_23253_23284[(2)] = null);

(statearr_23253_23284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (6))){
var inst_23204 = (state_23244[(7)]);
var inst_23229 = inst_23204.length;
var inst_23230 = (inst_23229 > (0));
var state_23244__$1 = state_23244;
if(cljs.core.truth_(inst_23230)){
var statearr_23254_23285 = state_23244__$1;
(statearr_23254_23285[(1)] = (12));

} else {
var statearr_23255_23286 = state_23244__$1;
(statearr_23255_23286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (3))){
var inst_23242 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23244__$1,inst_23242);
} else {
if((state_val_23245 === (12))){
var inst_23204 = (state_23244[(7)]);
var inst_23232 = cljs.core.vec.call(null,inst_23204);
var state_23244__$1 = state_23244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23244__$1,(15),out,inst_23232);
} else {
if((state_val_23245 === (2))){
var state_23244__$1 = state_23244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23244__$1,(4),ch);
} else {
if((state_val_23245 === (11))){
var inst_23208 = (state_23244[(9)]);
var inst_23212 = (state_23244[(10)]);
var inst_23222 = (state_23244[(2)]);
var inst_23223 = [];
var inst_23224 = inst_23223.push(inst_23208);
var inst_23204 = inst_23223;
var inst_23205 = inst_23212;
var state_23244__$1 = (function (){var statearr_23256 = state_23244;
(statearr_23256[(11)] = inst_23224);

(statearr_23256[(12)] = inst_23222);

(statearr_23256[(7)] = inst_23204);

(statearr_23256[(8)] = inst_23205);

return statearr_23256;
})();
var statearr_23257_23287 = state_23244__$1;
(statearr_23257_23287[(2)] = null);

(statearr_23257_23287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (9))){
var inst_23204 = (state_23244[(7)]);
var inst_23220 = cljs.core.vec.call(null,inst_23204);
var state_23244__$1 = state_23244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23244__$1,(11),out,inst_23220);
} else {
if((state_val_23245 === (5))){
var inst_23208 = (state_23244[(9)]);
var inst_23212 = (state_23244[(10)]);
var inst_23205 = (state_23244[(8)]);
var inst_23212__$1 = f.call(null,inst_23208);
var inst_23213 = cljs.core._EQ_.call(null,inst_23212__$1,inst_23205);
var inst_23214 = cljs.core.keyword_identical_QMARK_.call(null,inst_23205,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23215 = (inst_23213) || (inst_23214);
var state_23244__$1 = (function (){var statearr_23258 = state_23244;
(statearr_23258[(10)] = inst_23212__$1);

return statearr_23258;
})();
if(cljs.core.truth_(inst_23215)){
var statearr_23259_23288 = state_23244__$1;
(statearr_23259_23288[(1)] = (8));

} else {
var statearr_23260_23289 = state_23244__$1;
(statearr_23260_23289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (14))){
var inst_23237 = (state_23244[(2)]);
var inst_23238 = cljs.core.async.close_BANG_.call(null,out);
var state_23244__$1 = (function (){var statearr_23262 = state_23244;
(statearr_23262[(13)] = inst_23237);

return statearr_23262;
})();
var statearr_23263_23290 = state_23244__$1;
(statearr_23263_23290[(2)] = inst_23238);

(statearr_23263_23290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (10))){
var inst_23227 = (state_23244[(2)]);
var state_23244__$1 = state_23244;
var statearr_23264_23291 = state_23244__$1;
(statearr_23264_23291[(2)] = inst_23227);

(statearr_23264_23291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23245 === (8))){
var inst_23204 = (state_23244[(7)]);
var inst_23208 = (state_23244[(9)]);
var inst_23212 = (state_23244[(10)]);
var inst_23217 = inst_23204.push(inst_23208);
var tmp23261 = inst_23204;
var inst_23204__$1 = tmp23261;
var inst_23205 = inst_23212;
var state_23244__$1 = (function (){var statearr_23265 = state_23244;
(statearr_23265[(14)] = inst_23217);

(statearr_23265[(7)] = inst_23204__$1);

(statearr_23265[(8)] = inst_23205);

return statearr_23265;
})();
var statearr_23266_23292 = state_23244__$1;
(statearr_23266_23292[(2)] = null);

(statearr_23266_23292[(1)] = (2));


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
});})(c__20523__auto___23278,out))
;
return ((function (switch__20411__auto__,c__20523__auto___23278,out){
return (function() {
var cljs$core$async$state_machine__20412__auto__ = null;
var cljs$core$async$state_machine__20412__auto____0 = (function (){
var statearr_23270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23270[(0)] = cljs$core$async$state_machine__20412__auto__);

(statearr_23270[(1)] = (1));

return statearr_23270;
});
var cljs$core$async$state_machine__20412__auto____1 = (function (state_23244){
while(true){
var ret_value__20413__auto__ = (function (){try{while(true){
var result__20414__auto__ = switch__20411__auto__.call(null,state_23244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20414__auto__;
}
break;
}
}catch (e23271){if((e23271 instanceof Object)){
var ex__20415__auto__ = e23271;
var statearr_23272_23293 = state_23244;
(statearr_23272_23293[(5)] = ex__20415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23294 = state_23244;
state_23244 = G__23294;
continue;
} else {
return ret_value__20413__auto__;
}
break;
}
});
cljs$core$async$state_machine__20412__auto__ = function(state_23244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20412__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20412__auto____1.call(this,state_23244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20412__auto____0;
cljs$core$async$state_machine__20412__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20412__auto____1;
return cljs$core$async$state_machine__20412__auto__;
})()
;})(switch__20411__auto__,c__20523__auto___23278,out))
})();
var state__20525__auto__ = (function (){var statearr_23273 = f__20524__auto__.call(null);
(statearr_23273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20523__auto___23278);

return statearr_23273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20525__auto__);
});})(c__20523__auto___23278,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map