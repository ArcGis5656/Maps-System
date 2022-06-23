/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import t from"../../../core/Accessor.js";import o from"../../../core/Collection.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";import i from"./FeatureSnappingLayerSource.js";import{d as n}from"../../../chunks/Settings2.js";import"../../../chunks/deprecate.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/Evented.js";import"../../../chunks/shared.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/common.js";import"../../../chunks/JSONSupport.js";let p=class extends t{constructor(e){super(e),this.enabled=!1,this.enabledToggled=!1,this.selfEnabled=!0,this.featureEnabled=!0,this.featureSources=new o,this.distance=n.distance,this.touchSensitivityMultiplier=n.touchSensitivityMultiplier}get effectiveEnabled(){return this.enabledToggled?!this.enabled:this.enabled}get effectiveSelfEnabled(){return this.effectiveEnabled&&this.selfEnabled}get effectiveFeatureEnabled(){return this.effectiveEnabled&&this.featureEnabled}};e([s()],p.prototype,"enabled",void 0),e([s()],p.prototype,"enabledToggled",void 0),e([s()],p.prototype,"selfEnabled",void 0),e([s()],p.prototype,"featureEnabled",void 0),e([s({type:o.ofType(i)})],p.prototype,"featureSources",void 0),e([s()],p.prototype,"distance",void 0),e([s()],p.prototype,"touchSensitivityMultiplier",void 0),e([s({readOnly:!0})],p.prototype,"effectiveEnabled",null),e([s({readOnly:!0})],p.prototype,"effectiveSelfEnabled",null),e([s({readOnly:!0})],p.prototype,"effectiveFeatureEnabled",null),p=e([r("esri.views.interactive.snapping.SnappingOptions")],p);const c=p;export{c as default};