/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import s from"../core/Accessor.js";import{urlToObject as t}from"../core/urlUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";let i=class extends s{constructor(...r){super(...r),this.requestOptions=null,this.url=null}normalizeCtorArgs(r,s){return"string"!=typeof r?r:{url:r,...s}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(r){return r?t(r):null}_encode(r,s,t){const o={};for(const e in r){if("declaredClass"===e)continue;const i=r[e];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){o[e]=[];for(let r=0;r<i.length;r++)o[e][r]=this._encode(i[r])}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(t&&t[e]);o[e]=s?r:JSON.stringify(r)}else o[e]=s?i:JSON.stringify(i);else o[e]=i}return o}};r([o({readOnly:!0})],i.prototype,"parsedUrl",null),r([o()],i.prototype,"requestOptions",void 0),r([o({type:String})],i.prototype,"url",void 0),i=r([e("esri.tasks.Task")],i);const n=i;export{n as default};