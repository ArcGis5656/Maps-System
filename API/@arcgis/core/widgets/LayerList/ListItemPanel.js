/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Handles.js";import{I as s}from"../../chunks/Identifiable.js";import{init as r}from"../../core/watchUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import o from"../Widget.js";import{d as l}from"../../chunks/layerListUtils.js";import{isWidget as c}from"../support/widget.js";import{t as a}from"../../chunks/jsxFactory.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../chunks/Promise.js";import"../../core/reactiveUtils.js";import"../../chunks/uuid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/widgetThemeUtils.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";const p="esri-layer-list-panel",h="esri-layer-list-panel__content",m="esri-layer-list-panel__content--legend",d="esri-layer-list-panel__content--string",u="esri-layer-list-panel__content--html-element",g="esri-layer-list-panel__content--widget";let j=class extends(s(o)){constructor(t,s){super(t,s),this._legend=null,this._handles=new e,this.content=null,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}initialize(){this.own([r(this,"content",(t=>this._createLegend(t)))])}destroy(){const{_legend:t}=this;t&&t.destroy(),this._legend=null}get className(){const{image:t}=this,e=this._getFirstWidget();return this._get("className")||!t&&e?e.iconClass:""}set className(t){void 0!==t?this._override("className",t):this._clearOverride("className")}get title(){const t=this._getFirstWidget();return this._get("title")||t?t.label:""}set title(t){void 0!==t?this._override("title",t):this._clearOverride("title")}render(){return a("div",{class:p},this._renderContents())}_renderContent(t){const{_legend:e,listItem:s}=this;if(!t)return null;if("legend"===t){return s&&s.view&&s.layer&&e?a("div",{class:this.classes(h,m),key:e},e.render()):null}return"string"==typeof t?a("div",{class:this.classes(h,d),key:t,innerHTML:t}):c(t)?a("div",{class:this.classes(h,g),key:t},t.render()):t instanceof HTMLElement?a("div",{class:this.classes(h,u),key:t,bind:t,afterCreate:this._attachToNode}):null}_renderContents(){const{content:t}=this;return Array.isArray(t)?t.map((t=>this._renderContent(t))):this._renderContent(t)}_getLegendOptions(){const{listItem:t}=this;if(!t)return{};const{layer:e,view:s}=t;return e&&s?{view:s,layerInfos:[l(e)]}:{}}_createLegend(t){this._hasLegend(t)&&!this._legend&&import("../Legend.js").then((({default:t})=>{const{_handles:e}=this,s=new t(this._getLegendOptions());this._legend=s,this.notifyChange("className"),this.notifyChange("title");const i=r(this,["listItem.view","listItem.layer","listItem.layer.source","listItem.layer.parent"],(()=>this._updateLegend(s)));e.add(i,"legends"),this.scheduleRender()}))}_hasLegend(t){const e="legend";return t===e||!!Array.isArray(t)&&t.some((t=>t===e))}_attachToNode(t){t.appendChild(this)}_updateLegend(t){t.set(this._getLegendOptions()),this.scheduleRender()}_getWidget(t){return"legend"===t?this._legend:c(t)?t:null}_getFirstWidget(){const{content:t}=this;if(Array.isArray(t)){let e=null;return t.some((t=>{const s=this._getWidget(t);return s&&(e=s),!!s})),e}return this._getWidget(t)}};t([i()],j.prototype,"className",null),t([i()],j.prototype,"content",void 0),t([i()],j.prototype,"image",void 0),t([i()],j.prototype,"listItem",void 0),t([i()],j.prototype,"title",null),t([i()],j.prototype,"open",void 0),t([i()],j.prototype,"visible",void 0),j=t([n("esri.widgets.LayerList.ListItemPanel")],j);const _=j;export{_ as default};