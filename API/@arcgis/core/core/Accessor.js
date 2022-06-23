/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{b as t}from"../chunks/deprecate.js";import{L as e}from"../chunks/Logger.js";import{g as s}from"../chunks/get.js";import{L as r,subclass as i}from"./accessorSupport/decorators/subclass.js";import{a as n}from"../chunks/metadata.js";import{a as o,g as a,clone as c,equals as l}from"./lang.js";import{O as h}from"../chunks/ArrayPool.js";import{F as u,t as d,r as p,a as _,b as f,i as g}from"../chunks/tracking.js";import{g as v}from"../chunks/utils.js";import{property as m,s as y}from"./accessorSupport/decorators/property.js";import{r as E,w as O}from"../chunks/watch.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ensureType.js";import"./Error.js";import"../chunks/handleUtils.js";import"./scheduling.js";import"../chunks/nextTick.js";import"./promiseUtils.js";var b;!function(t){t[t.DEFAULTS=0]="DEFAULTS",t[t.COMPUTED=1]="COMPUTED",t[t.SERVICE=2]="SERVICE",t[t.PORTAL_ITEM=3]="PORTAL_ITEM",t[t.WEB_SCENE=4]="WEB_SCENE",t[t.WEB_MAP=5]="WEB_MAP",t[t.USER=6]="USER"}(b||(b={}));const I=b.USER+1;function A(t){switch(t){case"defaults":return b.DEFAULTS;case"service":return b.SERVICE;case"portal-item":return b.PORTAL_ITEM;case"web-scene":return b.WEB_SCENE;case"web-map":return b.WEB_MAP;case"user":return b.USER}}function C(t){switch(t){case b.DEFAULTS:return"defaults";case b.SERVICE:return"service";case b.PORTAL_ITEM:return"portal-item";case b.WEB_SCENE:return"web-scene";case b.WEB_MAP:return"web-map";case b.USER:return"user"}return o(void 0)}function S(t){return C(t)}class T{constructor(t,e){this._observers=t,this._observer=e}remove(){a(this._observers,this._observer)}}class N{constructor(t,e,s){this.properties=t,this.propertyName=e,this.metadata=s,this._observers=null,this._accessed=null,this._handles=null,this.flags=u.Dirty|(s.nonNullable?u.NonNullable:0)|(s.hasOwnProperty("value")?u.HasDefaultValue:0)|(void 0===s.get?u.DepTrackingInitialized:0)|(void 0===s.dependsOn?u.AutoTracked:0)}destroy(){this._accessed=null,this._observers=null,this._clearObservationHandles()}getComputed(){d(this);const t=this.properties.store,e=this.propertyName,s=this.flags,r=t.get(e);if(s&u.Computing)return r;if(~s&u.Dirty&&t.has(e))return r;this.flags|=u.Computing;const i=this.properties.host;let n;s&u.AutoTracked?n=p(this,this.metadata.get,i):(_(i,this),n=this.metadata.get.call(i)),t.set(e,n,b.COMPUTED);const o=t.get(e);return o===r?this.flags&=~u.Dirty:f(this.commit,this),this.flags&=~u.Computing,o}onObservableAccessed(t){t!==this&&(null===this._accessed&&(this._accessed=[]),this._accessed.includes(t)||this._accessed.push(t))}onTrackingEnd(){this._clearObservationHandles(),this.flags|=u.DepTrackingInitialized;const t=this._accessed;if(null===t)return;let e=this._handles;null===e&&(e=this._handles=[]);for(let s=0;s<t.length;++s)e.push(t[s].observe(this));t.length=0}observe(t){return null===this._observers&&(this._observers=[]),this._observers.includes(t)||this._observers.push(t),new T(this._observers,t)}notifyChange(){this.onInvalidated(),this.onCommitted()}invalidate(){this.onInvalidated()}onInvalidated(){~this.flags&u.Overriden&&(this.flags|=u.Dirty);const t=this._observers;if(null!==t)for(let e=0;e<t.length;++e)t[e].onInvalidated()}commit(){this.flags&=~u.Dirty,this.onCommitted()}onCommitted(){if(null===this._observers)return;const t=this._observers.slice();for(let e=0;e<t.length;++e)t[e].onCommitted()}_clearObservationHandles(){const t=this._handles;if(null!==t){for(let e=0;e<t.length;++e)t[e].remove();t.length=0}}}class k{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(t){const e=new k;return this._values.forEach(((s,r)=>{t&&t.has(r)||e.set(r,c(s))})),e}get(t){return this._values.get(t)}originOf(){return b.USER}keys(){return[...this._values.keys()]}set(t,e){this._values.set(t,e)}delete(t){this._values.delete(t)}has(t){return this._values.has(t)}forEach(t){this._values.forEach(t)}}function w(t,e,s){return void 0!==t}function D(t,e,s,i){return void 0!==t&&(!(null==s&&t.flags&u.NonNullable)||(i.lifecycle,r.INITIALIZING,!1))}e.getLogger("esri.core.accessorSupport.Properties");class j{constructor(t){this.host=t,this.properties=new Map,this.ctorArgs=null,this.destroyed=!1,this.lifecycle=r.INITIALIZING,this.store=new k,this._origin=b.USER;const e=this.host.constructor.__accessorMetadata__,s=e.properties;for(const t in s){const e=new N(this,t,s[t]);this.properties.set(t,e)}this.metadatas=s,this._autoDestroy=e.autoDestroy}initialize(){this.lifecycle=r.CONSTRUCTING}constructed(){this.lifecycle=r.CONSTRUCTED}destroy(){if(this.destroyed=!0,this._autoDestroy)for(const[e,s]of this.properties){const r=this.internalGet(e);r&&((t=r)&&"function"==typeof t.destroy)&&(r.destroy(),~s.flags&u.NonNullable&&this._internalSet(s,null)),s.destroy()}else for(const[t,e]of this.properties)e.destroy();var t}get initialized(){return this.lifecycle!==r.INITIALIZING}get(t){const e=this.properties.get(t);if(e.metadata.get)return e.getComputed();d(e);const s=this.store;return s.has(t)?s.get(t):e.metadata.value}originOf(t){const e=this.store.originOf(t);if(void 0===e){const e=this.properties.get(t);if(void 0!==e&&e.flags&u.HasDefaultValue)return"defaults"}return C(e)}has(t){return!!this.properties.has(t)&&this.store.has(t)}keys(){return[...this.properties.keys()]}internalGet(t){const e=this.properties.get(t);if(w(e))return this.store.has(t)?this.store.get(t):e.metadata.value}internalSet(t,e){const s=this.properties.get(t);w(s)&&this._internalSet(s,e)}getDependsInfo(t,e,s){const r=this.properties.get(e);if(!w(r))return"";const i=new Set,n=p({onObservableAccessed:t=>i.add(t),onTrackingEnd:()=>{}},(()=>{var e;return null==(e=r.metadata.get)?void 0:e.call(t)}));let o=`${s}${t.declaredClass.split(".").pop()}.${e}: ${n}\n`;if(0===i.size)return o;s+="  ";for(const t of i){if(!(t instanceof N))continue;const e=t.properties.host,r=t.propertyName,i=v(e);o+=i?i.getDependsInfo(e,r,s):`${s}${r}: undefined\n`}return o}setAtOrigin(t,e,s){const r=this.properties.get(t);if(w(r))return this._setAtOrigin(r,e,s)}isOverridden(t){const e=this.properties.get(t);return void 0!==e&&!!(e.flags&u.Overriden)}clearOverride(t){const e=this.properties.get(t);void 0!==e&&e.flags&u.Overriden&&(e.flags&=~u.Overriden,e.notifyChange())}override(t,e){const s=this.properties.get(t);if(!D(s,0,e,this))return;const r=s.metadata.cast;if(r){const t=this._cast(r,e),{valid:s,value:i}=t;if(U.release(t),!s)return;e=i}s.flags|=u.Overriden,this._internalSet(s,e)}set(t,e){const s=this.properties.get(t);if(!D(s,0,e,this))return;const r=s.metadata.cast;if(r){const t=this._cast(r,e),{valid:s,value:i}=t;if(U.release(t),!s)return;e=i}const i=s.metadata.set;i?i.call(this.host,e):this._internalSet(s,e)}setDefaultOrigin(t){this._origin=A(t)}getDefaultOrigin(){return C(this._origin)}notifyChange(t){const e=this.properties.get(t);void 0!==e&&e.notifyChange()}invalidate(t){const e=this.properties.get(t);void 0!==e&&e.invalidate()}commit(t){const e=this.properties.get(t);void 0!==e&&e.commit()}_internalSet(t,e){const s=this.lifecycle!==r.INITIALIZING?this._origin:b.DEFAULTS;this._setAtOrigin(t,e,s)}_setAtOrigin(t,e,s){const r=this.store,i=t.propertyName;r.has(i,s)&&l(e,r.get(i))&&~t.flags&u.Overriden&&s===r.originOf(i)||(t.invalidate(),r.set(i,e,s),t.commit(),g(this.host,t))}_cast(t,e){const s=U.acquire();return s.valid=!0,s.value=e,t&&(s.value=t.call(this.host,e,s)),s}}const U=new h(class{constructor(){this.value=null,this.valid=!0}acquire(){this.valid=!0}release(){this.value=null}});function L(t){if(null==t)return{value:t};if(Array.isArray(t))return{type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return{type:Boolean,value:t};case"string":return{type:String,value:t};case"number":return{type:Number,value:t};case"function":return{type:t,value:null};default:return}}class P{constructor(...t){if(this.constructor===P)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new j(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t))}static createSubclass(t={}){if(Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:e,declaredClass:s,constructor:r}=t;delete t.declaredClass,delete t.properties,delete t.constructor;const o=this;class a extends o{constructor(...t){super(...t),this.inherited=null,r&&r.apply(this,t)}}n(a.prototype);for(const e in t){const s=t[e];a.prototype[e]="function"==typeof s?function(...t){const r=this.inherited;let i;this.inherited=function(...t){if(o.prototype[e])return o.prototype[e].apply(this,t)};try{i=s.apply(this,t)}catch(t){throw this.inherited=r,t}return this.inherited=r,i}:t[e]}for(const t in e){const s=L(e[t]);m(s)(a.prototype,t)}return i(s)(a)}postscript(t){const e=this.__accessor__,s=e.ctorArgs||t;e.initialize(),s&&(this.set(s),e.ctorArgs=null),e.constructed(),this.initialize()}initialize(){}destroy(){this.destroyed||(E(this),this.__accessor__.destroy())}get initialized(){return this.__accessor__&&this.__accessor__.initialized||!1}get constructed(){return this.__accessor__&&this.__accessor__.lifecycle===r.CONSTRUCTED||!1}get destroyed(){return this.__accessor__&&this.__accessor__.destroyed||!1}commitProperty(t){this.get(t)}get(t){return s(this,t)}hasOwnProperty(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)}isInstanceOf(s){return t(e.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof s}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(t,e){return y(this,t,e),this}watch(t,e,s){return O(this,t,e,s)}_clearOverride(t){return this.__accessor__.clearOverride(t)}_override(t,e){return this.__accessor__.override(t,e)}_isOverridden(t){return this.__accessor__.isOverridden(t)}notifyChange(t){this.__accessor__.notifyChange(t)}_get(t){return this.__accessor__.internalGet(t)}_set(t,e){return this.__accessor__.internalSet(t,e),this}}export{T as O,b as a,I as b,C as c,P as default,S as i,A as n};