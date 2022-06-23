// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","./Accessor","./handleUtils","./accessorSupport/decorators/subclass"],function(m,n,r,t,p){let l=function(){function h(){this._emitter=new h.EventEmitter(this)}var k=h.prototype;k.emit=function(g,d){return this._emitter.emit(g,d)};k.on=function(g,d){return this._emitter.on(g,d)};k.once=function(g,d){return this._emitter.once(g,d)};k.hasEventListener=function(g){return this._emitter.hasEventListener(g)};return h}();(function(h){let k=
function(){function d(a=null){this.target=a;this._listenersMap=null}var f=d.prototype;f.clear=function(){this._listenersMap&&this._listenersMap.clear();this._listenersMap=null};f.emit=function(a,c){a=this._listenersMap&&this._listenersMap.get(a);if(!a)return!1;const b=this.target||this;[...a].forEach(e=>{e.call(b,c)});return 0<a.length};f.on=function(a,c){if(Array.isArray(a)){var b=a.map(e=>this.on(e,c));return t.handlesGroup(b)}if(-1<a.indexOf(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");
this._listenersMap||(this._listenersMap=new Map);b=this._listenersMap.get(a)||[];b.push(c);this._listenersMap.set(a,b);return{remove:()=>{const e=this._listenersMap&&this._listenersMap.get(a)||[],q=e.indexOf(c);0<=q&&e.splice(q,1)}}};f.once=function(a,c){const b=this.on(a,e=>{b.remove();c.call(null,e)});return b};f.hasEventListener=function(a){a=this._listenersMap&&this._listenersMap.get(a);return null!=a&&0<a.length};return d}();h.EventEmitter=k;h.EventedMixin=d=>{d=function(f){function a(){var b=
f.apply(this,arguments)||this;b._emitter=new k;return b}m._inheritsLoose(a,f);var c=a.prototype;c.destroy=function(){this._emitter.clear()};c.emit=function(b,e){return this._emitter.emit(b,e)};c.on=function(b,e){return this._emitter.on(b,e)};c.once=function(b,e){return this._emitter.once(b,e)};c.hasEventListener=function(b){return this._emitter.hasEventListener(b)};return a}(d);return d=n.__decorate([p.subclass("esri.core.Evented")],d)};let g=function(d){function f(){var c=d.apply(this,arguments)||
this;c._emitter=new l.EventEmitter(m._assertThisInitialized(c));return c}m._inheritsLoose(f,d);var a=f.prototype;a.destroy=function(){this._emitter.clear()};a.emit=function(c,b){return this._emitter.emit(c,b)};a.on=function(c,b){return this._emitter.on(c,b)};a.once=function(c,b){return this._emitter.once(c,b)};a.hasEventListener=function(c){return this._emitter.hasEventListener(c)};return f}(r);g=n.__decorate([p.subclass("esri.core.Evented")],g);h.EventedAccessor=g})(l||(l={}));return l});