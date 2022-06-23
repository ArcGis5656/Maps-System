/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{aliasOf as e}from"../core/accessorSupport/decorators/aliasOf.js";import"../core/lang.js";import"../chunks/ensureType.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import o from"./Widget.js";import i from"./Fullscreen/FullscreenViewModel.js";import{a as l}from"../chunks/accessibleHandler.js";import{m as c}from"../chunks/messageBundle.js";import"../chunks/Logger.js";import{t as n}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/deprecate.js";import"../chunks/domUtils.js";import"../chunks/Evented.js";import"../core/Accessor.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/widgetThemeUtils.js";const p="esri-fullscreen esri-widget--button esri-widget",a="esri-icon-font-fallback-text",u="esri-icon",m="esri-icon-zoom-out-fixed",d="esri-icon-zoom-in-fixed",h="esri-disabled";let j=class extends o{constructor(s,e){super(s,e),this.element=null,this.label=void 0,this.messages=null,this.view=null,this.viewModel=new i}get fullscreenTitle(){var s;const e=null==(s=this.viewModel)?void 0:s.state;return"active"===e?this.messages.exit:"ready"===e?this.messages.enter:""}render(){var s;const e=null==(s=this.viewModel)?void 0:s.state,{fullscreenTitle:t}=this,r={[h]:"disabled"===e||"feature-unsupported"===e};return n("div",{bind:this,class:this.classes(p,r),role:"button",tabIndex:0,onclick:this._toggle,onkeydown:this._toggle,"aria-label":t,title:t},this.renderIcon(),this.renderTitle())}renderIcon(){var s;const e=null==(s=this.viewModel)?void 0:s.state,t={[m]:"ready"===e||"disabled"===e||"feature-unsupported"===e,[d]:"active"===e};return n("span",{class:this.classes(u,t),"aria-hidden":"true"})}renderTitle(){return n("span",{class:a},this.fullscreenTitle)}_toggle(){this.viewModel.toggle()}};s([e("viewModel.element")],j.prototype,"element",void 0),s([t({readOnly:!0})],j.prototype,"fullscreenTitle",null),s([t({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],j.prototype,"label",void 0),s([t(),c("esri/widgets/Fullscreen/t9n/Fullscreen")],j.prototype,"messages",void 0),s([e("viewModel.view")],j.prototype,"view",void 0),s([t({type:i})],j.prototype,"viewModel",void 0),s([l()],j.prototype,"_toggle",null),j=s([r("esri.widgets.Fullscreen")],j);const k=j;export{k as default};
