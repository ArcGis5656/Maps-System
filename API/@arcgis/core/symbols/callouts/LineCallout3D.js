/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import s from"../../Color.js";import{clone as r,i as t}from"../../core/lang.js";import{p as e}from"../../chunks/screenUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{e as c}from"../../chunks/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import n from"./Callout3D.js";import{a as l}from"../../chunks/JSONSupport.js";import{c as m,s as u}from"../../chunks/materialUtils.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/opacityUtils.js";var a;let h=a=class extends l{constructor(){super(...arguments),this.color=new s("white")}clone(){return new a({color:r(this.color)})}};o([i(m)],h.prototype,"color",void 0),h=a=o([p("esri.symbols.callouts.LineCallout3DBorder")],h);const j=h,k=Object.freeze({__proto__:null,get LineCallout3DBorder(){return h},default:j});var d;let y=d=class extends n{constructor(o){super(o),this.type="line",this.color=new s([0,0,0,1]),this.size=e(1),this.border=null}get visible(){return this.size>0&&t(this.color)&&this.color.a>0}clone(){return new d({color:r(this.color),size:this.size,border:r(this.border)})}};o([c({line:"line"},{readOnly:!0})],y.prototype,"type",void 0),o([i(m)],y.prototype,"color",void 0),o([i(u)],y.prototype,"size",void 0),o([i({type:j,json:{write:!0}})],y.prototype,"border",void 0),o([i({readOnly:!0})],y.prototype,"visible",null),y=d=o([p("esri.symbols.callouts.LineCallout3D")],y);const f=y;export{k as L,f as default};