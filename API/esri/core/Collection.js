// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./ArrayPool ./Evented ./lang ./maybe ./ObjectPool ./ObservableChangesType ./scheduling ./accessorSupport/decorators/property ./accessorSupport/ensureType ./accessorSupport/decorators/shared ./accessorSupport/decorators/subclass ./accessorSupport/tracking ./accessorSupport/tracking/SimpleObservable".split(" "),function(C,B,z,M,N,G,O,h,P,H,I,Q,J,f,R){function D(g){return g?g instanceof A?g.toArray():g.length?Array.prototype.slice.apply(g):
[]:[]}function E(g){if(g&&g.length)return g[0]}function K(g,t,q,d){t&&t.forEach((a,b,c)=>{g.push(a);K(g,q.call(d,a,b,c),q,d)})}var v;let S=function(){function g(){this.target=null;this.defaultPrevented=this.cancellable=!1;this.type=this.item=void 0}var t=g.prototype;t.preventDefault=function(){this.cancellable&&(this.defaultPrevented=!0)};t.reset=function(q){this.defaultPrevented=!1;this.item=q};return g}();const u=new O(S,void 0,g=>{g.item=null;g.target=null;g.defaultPrevented=!1;g.cancellable=!1}),
T=()=>{},w=new Set,x=new Set,y=new Set,F=new Map;let U=0,A=v=function(g,t){function q(a){a=g.call(this,a)||this;a._chgListeners=[];a._notifications=null;a._timer=null;a._observable=new R.SimpleObservable;a.length=0;a._items=[];Object.defineProperty(C._assertThisInitialized(a),"uid",{value:U++});return a}C._inheritsLoose(q,g);q.isCollection=function(a){return null!=a&&a instanceof v};var d=q.prototype;d.normalizeCtorArgs=function(a){return a?Array.isArray(a)||a instanceof v?{items:a}:a:{}};d.destroy=
function(){this.removeAll()};d[t]=function*(){yield*this.items};d.hasEventListener=function(a){return"change"===a?0<this._chgListeners.length:this._emitter.hasEventListener(a)};d.on=function(a,b){if("change"===a){const c=this._chgListeners,k={removed:!1,callback:b};c.push(k);this._notifications&&this._notifications.push({listeners:c.slice(),items:this._items.slice(),changes:[]});return{remove(){this.remove=T;k.removed=!0;c.splice(c.indexOf(k),1)}}}return this._emitter.on(a,b)};d.once=function(a,b){const c=
this.on(a,b);return{remove(){c.remove()}}};d.add=function(a,b){f.trackAccess(this._observable);if(this._emitBeforeChanges(h.ObservableChangesType.ADD))return this;b=this.getNextIndex(null!=b?b:null);this._splice(b,0,[a]);this._emitAfterChanges(h.ObservableChangesType.ADD);return this};d.addMany=function(a,b=this._items.length){f.trackAccess(this._observable);if(!a||!a.length||this._emitBeforeChanges(h.ObservableChangesType.ADD))return this;b=this.getNextIndex(b);this._splice(b,0,D(a));this._emitAfterChanges(h.ObservableChangesType.ADD);
return this};d.at=function(a){f.trackAccess(this._observable);a=Math.trunc(a)||0;0>a&&(a+=this.length);if(!(0>a||a>=this.length))return this._items[a]};d.removeAll=function(){f.trackAccess(this._observable);if(!this.length||this._emitBeforeChanges(h.ObservableChangesType.REMOVE))return[];const a=this._splice(0,this.length)||[];this._emitAfterChanges(h.ObservableChangesType.REMOVE);return a};d.clone=function(){f.trackAccess(this._observable);return this._createNewInstance({items:this._items.map(N.clone)})};
d.concat=function(...a){f.trackAccess(this._observable);a=a.map(D);return this._createNewInstance({items:this._items.concat(...a)})};d.drain=function(a,b){f.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(h.ObservableChangesType.REMOVE)){var c=G.assumeNonNull(this._splice(0,this.length)),k=c.length;for(let p=0;p<k;p++)a.call(b,c[p],p,c);this._emitAfterChanges(h.ObservableChangesType.REMOVE)}};d.every=function(a,b){f.trackAccess(this._observable);return this._items.every(a,b)};
d.filter=function(a,b){f.trackAccess(this._observable);let c;c=2===arguments.length?this._items.filter(a,b):this._items.filter(a);return this._createNewInstance({items:c})};d.find=function(a,b){f.trackAccess(this._observable);return this._items.find(a,b)};d.findIndex=function(a,b){f.trackAccess(this._observable);return this._items.findIndex(a,b)};d.flatten=function(a,b){f.trackAccess(this._observable);const c=[];K(c,this,a,b);return new v(c)};d.forEach=function(a,b){f.trackAccess(this._observable);
return this._items.forEach(a,b)};d.getItemAt=function(a){f.trackAccess(this._observable);return this._items[a]};d.getNextIndex=function(a){f.trackAccess(this._observable);const b=this.length;a=null==a?b:a;0>a?a=0:a>b&&(a=b);return a};d.includes=function(a,b=0){f.trackAccess(this._observable);return this._items.includes(a,b)};d.indexOf=function(a,b=0){f.trackAccess(this._observable);return this._items.indexOf(a,b)};d.join=function(a=","){f.trackAccess(this._observable);return this._items.join(a)};
d.lastIndexOf=function(a,b=this.length-1){f.trackAccess(this._observable);return this._items.lastIndexOf(a,b)};d.map=function(a,b){f.trackAccess(this._observable);a=this._items.map(a,b);return new v({items:a})};d.reorder=function(a,b=this.length-1){f.trackAccess(this._observable);const c=this.indexOf(a);if(-1!==c){0>b?b=0:b>=this.length&&(b=this.length-1);if(c!==b){if(this._emitBeforeChanges(h.ObservableChangesType.MOVE))return a;this._splice(c,1);this._splice(b,0,[a]);this._emitAfterChanges(h.ObservableChangesType.MOVE)}return a}};
d.pop=function(){f.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(h.ObservableChangesType.REMOVE)){var a=E(this._splice(this.length-1,1));this._emitAfterChanges(h.ObservableChangesType.REMOVE);return a}};d.push=function(...a){f.trackAccess(this._observable);if(this._emitBeforeChanges(h.ObservableChangesType.ADD))return this.length;this._splice(this.length,0,a);this._emitAfterChanges(h.ObservableChangesType.ADD);return this.length};d.reduce=function(a,b){f.trackAccess(this._observable);
const c=this._items;return 2===arguments.length?c.reduce(a,b):c.reduce(a)};d.reduceRight=function(a,b){f.trackAccess(this._observable);const c=this._items;return 2===arguments.length?c.reduceRight(a,b):c.reduceRight(a)};d.remove=function(a){f.trackAccess(this._observable);return this.removeAt(this.indexOf(a))};d.removeAt=function(a){f.trackAccess(this._observable);if(!(0>a||a>=this.length||this._emitBeforeChanges(h.ObservableChangesType.REMOVE)))return a=E(this._splice(a,1)),this._emitAfterChanges(h.ObservableChangesType.REMOVE),
a};d.removeMany=function(a){f.trackAccess(this._observable);if(!a||!a.length||this._emitBeforeChanges(h.ObservableChangesType.REMOVE))return[];a=a instanceof v?a.toArray():a;const b=this._items,c=[],k=a.length;for(let l=0;l<k;l++){var p=b.indexOf(a[l]);if(-1<p){{var n=l+1;var m=p+1;const r=Math.min(a.length-n,b.length-m);let e=0;for(;e<r&&a[n+e]===b[m+e];)e++;n=e}n=1+n;(p=this._splice(p,n))&&0<p.length&&c.push.apply(c,p);l+=n-1}}this._emitAfterChanges(h.ObservableChangesType.REMOVE);return c};d.reverse=
function(){f.trackAccess(this._observable);if(this._emitBeforeChanges(h.ObservableChangesType.MOVE))return this;const a=this._splice(0,this.length);a&&(a.reverse(),this._splice(0,0,a));this._emitAfterChanges(h.ObservableChangesType.MOVE);return this};d.shift=function(){f.trackAccess(this._observable);if(this.length&&!this._emitBeforeChanges(h.ObservableChangesType.REMOVE)){var a=E(this._splice(0,1));this._emitAfterChanges(h.ObservableChangesType.REMOVE);return a}};d.slice=function(a=0,b=this.length){f.trackAccess(this._observable);
return this._createNewInstance({items:this._items.slice(a,b)})};d.some=function(a,b){f.trackAccess(this._observable);return this._items.some(a,b)};d.sort=function(a){f.trackAccess(this._observable);if(!this.length||this._emitBeforeChanges(h.ObservableChangesType.MOVE))return this;const b=G.assumeNonNull(this._splice(0,this.length));arguments.length?b.sort(a):b.sort();this._splice(0,0,b);this._emitAfterChanges(h.ObservableChangesType.MOVE);return this};d.splice=function(a,b,...c){f.trackAccess(this._observable);
const k=(b?h.ObservableChangesType.REMOVE:0)|(c.length?h.ObservableChangesType.ADD:0);if(this._emitBeforeChanges(k))return[];a=this._splice(a,b,c)||[];this._emitAfterChanges(k);return a};d.toArray=function(){f.trackAccess(this._observable);return this._items.slice()};d.toJSON=function(){f.trackAccess(this._observable);return this.toArray()};d.toLocaleString=function(){f.trackAccess(this._observable);return this._items.toLocaleString()};d.toString=function(){f.trackAccess(this._observable);return this._items.toString()};
d.unshift=function(...a){f.trackAccess(this._observable);if(!a.length||this._emitBeforeChanges(h.ObservableChangesType.ADD))return this.length;this._splice(0,0,a);this._emitAfterChanges(h.ObservableChangesType.ADD);return this.length};d._createNewInstance=function(a){return new this.constructor(a)};d._splice=function(a,b,c){const k=this._items;var p=this.itemType;let n=void 0;!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),
changes:[]}],this._timer&&this._timer.remove(),this._timer=P.schedule(()=>this._dispatchChange()));if(b){n=k.splice(a,b);if(this.hasEventListener("before-remove")){var m=u.acquire();m.target=this;m.cancellable=!0;for(let e=0,L=n.length;e<L;e++)b=n[e],m.reset(b),this.emit("before-remove",m),m.defaultPrevented&&(n.splice(e,1),k.splice(a,0,b),a+=1,--e,--L);u.release(m)}this.length=this._items.length;if(this.hasEventListener("after-remove")){b=u.acquire();b.target=this;b.cancellable=!1;m=n.length;for(let e=
0;e<m;e++)b.reset(n[e]),this.emit("after-remove",b);u.release(b)}}if(c&&c.length){if(p){b=[];for(var l of c)c=p.ensureType(l),null==c&&null!=l||b.push(c);c=b}p=this.hasEventListener("before-add");l=this.hasEventListener("after-add");b=a===this.length;if(p||l){var r=u.acquire();r.target=this;r.cancellable=!0;m=u.acquire();m.target=this;m.cancellable=!1;for(const e of c)p?(r.reset(e),this.emit("before-add",r),r.defaultPrevented||(b?k.push(e):k.splice(a++,0,e),this._set("length",k.length),l&&(m.reset(e),
this.emit("after-add",m)))):(b?k.push(e):k.splice(a++,0,e),this._set("length",k.length),m.reset(e),this.emit("after-add",m));u.release(m);u.release(r)}else{if(b)for(r of c)k.push(r);else k.splice(a,0,...c);this._set("length",k.length)}}(c&&c.length||n&&n.length)&&this._notifyChangeEvent(c,n);return n};d._emitBeforeChanges=function(a){let b=!1;if(this.hasEventListener("before-changes")){const c=u.acquire();c.target=this;c.cancellable=!0;c.type=a;this.emit("before-changes",c);b=c.defaultPrevented;u.release(c)}return b};
d._emitAfterChanges=function(a){if(this.hasEventListener("after-changes")){const b=u.acquire();b.target=this;b.cancellable=!1;b.type=a;this.emit("after-changes",b);u.release(b)}this._observable.notify()};d._notifyChangeEvent=function(a,b){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:a,removed:b})};d._dispatchChange=function(){this._timer&&(this._timer.remove(),this._timer=null);if(this._notifications){var a=this._notifications;
this._notifications=null;for(const b of a){a=b.changes;w.clear();x.clear();y.clear();for(const {added:l,removed:r}of a){if(l)if(0===y.size&&0===x.size)for(const e of l)w.add(e);else for(const e of l)x.has(e)?(y.add(e),x.delete(e)):y.has(e)||w.add(e);if(r)if(0===y.size&&0===w.size)for(const e of r)x.add(e);else for(const e of r)w.has(e)?w.delete(e):(y.delete(e),x.add(e))}const c=z.acquire();w.forEach(l=>{c.push(l)});const k=z.acquire();x.forEach(l=>{k.push(l)});const p=this._items,n=b.items,m=z.acquire();
y.forEach(l=>{n.indexOf(l)!==p.indexOf(l)&&m.push(l)});if(b.listeners&&(c.length||k.length||m.length)){a={target:this,added:c,removed:k,moved:m};const l=b.listeners.length;for(let r=0;r<l;r++){const e=b.listeners[r];e.removed||e.callback.call(this,a)}}z.release(c);z.release(k);z.release(m)}w.clear();x.clear();y.clear()}};C._createClass(q,[{key:"items",get:function(){f.trackAccess(this._observable);return this._items},set:function(a){this._emitBeforeChanges(h.ObservableChangesType.ADD)||(this._splice(0,
this.length,D(a)),this._emitAfterChanges(h.ObservableChangesType.ADD))}}]);return q}(M.EventedAccessor,Symbol.iterator);A.ofType=g=>{if(!g)return v;if(F.has(g))return F.get(g);let t=null;if("function"===typeof g)t=g.prototype.declaredClass;else if(g.base)t=g.base.prototype.declaredClass;else for(var q in g.typeMap){const d=g.typeMap[q].prototype.declaredClass;t=t?t+` | ${d}`:d}q=function(d){function a(){return d.apply(this,arguments)||this}C._inheritsLoose(a,d);return a}(v);B.__decorate([Q.shared({Type:g,
ensureType:"function"===typeof g?I.ensureType(g):I.ensureOneOfType(g)})],q.prototype,"itemType",void 0);q=B.__decorate([J.subclass(`esri.core.Collection<${t}>`)],q);F.set(g,q);return q};B.__decorate([H.property()],A.prototype,"length",void 0);B.__decorate([H.property()],A.prototype,"items",null);return A=v=B.__decorate([J.subclass("esri.core.Collection")],A)});