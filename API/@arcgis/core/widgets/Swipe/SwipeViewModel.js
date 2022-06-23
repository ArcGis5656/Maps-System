/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import i from"../../core/Accessor.js";import s from"../../core/Collection.js";import{t as e}from"../../chunks/compilerUtils.js";import r from"../../core/Handles.js";import{init as o,on as n}from"../../core/watchUtils.js";import{property as p}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import a from"../../layers/Layer.js";import{a as c}from"../../chunks/ClipRect.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/Identifiable.js";import"../../chunks/Loadable.js";import"../../chunks/Promise.js";const m=s.ofType(a);const h={left:0,right:0,top:0,bottom:0};let y=class extends i{constructor(t){super(t),this._handles=new r,this._leadingClips=new Map,this._trailingClips=new Map,this.direction="horizontal",this.leadingLayers=new m,this.max=100,this.min=0,this.precision=4,this.step=.5,this.stepMultiplier=10,this.trailingLayers=new m,this.view=null}initialize(){this._handles.add([o(this,["view","view.ready","position","direction"],(()=>this._clipLayers())),n(this,"leadingLayers","change",(()=>this._clipLeadingLayers())),n(this,"trailingLayers","change",(()=>this._clipTrailingLayers()))])}destroy(){this._removeExistingClips(),this._handles.destroy(),this._handles=null}get position(){return 25}set position(t){const{precision:i,min:s,max:e}=this;this._set("position",function(t,i){const s=10**i;return Math.round(t*s)/s}(Math.max(Math.min(t,e),s),i))}get state(){const{view:t}=this;return t&&t.ready?"ready":"disabled"}_clipLayers(){this._clipLeadingLayers(),this._clipTrailingLayers()}_clipLeadingLayers(){this._removeClips("leading");const{leadingLayers:t}=this;t.forEach((t=>this._clipLayer({layer:t,type:"leading"})))}_clipTrailingLayers(){this._removeClips("trailing");const{trailingLayers:t}=this;t.forEach((t=>this._clipLayer({layer:t,type:"trailing"})))}async _getLayerView(t){const{view:i}=this;if(!t||!i)return null;const s=await e(i)().whenLayerView(t);return"clips"in s?s:null}_getVerticalClipRect(t){const{position:i}=this;return"leading"===t?new c({...h,bottom:100-i+"%"}):"trailing"===t?new c({...h,top:`${i}%`}):null}_getHorizontalClipRect(t){const{position:i}=this;return"leading"===t?new c({...h,right:100-i+"%"}):"trailing"===t?new c({...h,left:`${i}%`}):null}_getClipRect(t){const{direction:i}=this;return"vertical"===i?this._getVerticalClipRect(t):"horizontal"===i?this._getHorizontalClipRect(t):null}async _clipLayer(t){const{_leadingClips:i,_trailingClips:s}=this,{layer:e,type:r}=t,o="trailing"===r?s:"leading"===r?i:null,n=await this._getLayerView(e);if(!(n&&"clips"in n&&o&&n.hasOwnProperty("clips")))return;const p=o.get(n);p&&n.clips.remove(p);const l=this._getClipRect(r);l&&(o.set(n,l),n.clips.add(l))}_removeClips(t){const{_leadingClips:i,_trailingClips:s}=this,e="trailing"===t?s:"leading"===t?i:null;e&&(e.forEach(((t,i)=>{i&&i.hasOwnProperty("clips")&&i.clips.remove(t)})),e.clear())}_removeExistingClips(){this._removeClips("leading"),this._removeClips("trailing")}};t([p()],y.prototype,"direction",void 0),t([p({type:m})],y.prototype,"leadingLayers",void 0),t([p({readOnly:!0})],y.prototype,"max",void 0),t([p({readOnly:!0})],y.prototype,"min",void 0),t([p()],y.prototype,"position",null),t([p()],y.prototype,"precision",void 0),t([p({readOnly:!0})],y.prototype,"state",null),t([p()],y.prototype,"step",void 0),t([p()],y.prototype,"stepMultiplier",void 0),t([p({type:m})],y.prototype,"trailingLayers",void 0),t([p()],y.prototype,"view",void 0),y=t([l("esri.widgets.Swipe.SwipeViewModel")],y);const g=y;export{g as default};