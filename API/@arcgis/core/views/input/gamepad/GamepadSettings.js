/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as s}from"../../../chunks/tslib.es6.js";import o from"../../../core/Accessor.js";import r from"../../../core/Collection.js";import{property as e}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import c from"./GamepadInputDevice.js";import"../../../chunks/deprecate.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/Evented.js";import"../../../chunks/shared.js";let i=class extends o{constructor(...s){super(...s),this.devices=new r,this.enabledFocusMode="document"}};s([e({type:r.ofType(c),readOnly:!0})],i.prototype,"devices",void 0),s([e({type:["document","view","none"]})],i.prototype,"enabledFocusMode",void 0),i=s([t("esri.views.input.gamepad.GamepadSettings")],i);const p=i;export{p as default};
