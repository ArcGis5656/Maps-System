/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../core/Accessor.js";import s from"../../core/Handles.js";import{init as e}from"../../core/watchUtils.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{G as a}from"../../chunks/GoTo.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/shared.js";let n=class extends(a(o)){constructor(t){super(t),this._handles=new s,this.orientation={x:0,y:0,z:0},this.view=null,this._updateForCamera=this._updateForCamera.bind(this),this._updateForRotation=this._updateForRotation.bind(this),this._updateRotationWatcher=this._updateRotationWatcher.bind(this)}initialize(){this._handles.add(e(this,"view",this._updateRotationWatcher))}destroy(){this._handles.destroy(),this._handles=null,this.view=null}get canShowNorth(){const t=this.get("view.spatialReference");return!(!t||!t.isWebMercator&&!t.isGeographic)}get state(){return this.get("view.ready")?this.canShowNorth?"compass":"rotation":"disabled"}reset(){if(!this.get("view.ready"))return;const t={};"2d"===this.view.type?t.rotation=0:t.heading=0,this.callGoTo({target:t})}_updateForRotation(t){null!=t&&(this.orientation={z:t})}_updateForCamera(t){if(!t)return;const o=-t.heading;this.orientation={x:0,y:0,z:o}}_updateRotationWatcher(t){this._handles.removeAll(),t&&("2d"===t.type?this._handles.add(e(this,"view.rotation",this._updateForRotation)):this._handles.add(e(this,"view.camera",this._updateForCamera)))}};t([r({readOnly:!0})],n.prototype,"canShowNorth",null),t([r()],n.prototype,"orientation",void 0),t([r({readOnly:!0})],n.prototype,"state",null),t([r()],n.prototype,"view",void 0),n=t([i("esri.widgets.CompassViewModel")],n);const h=n;export{h as default};
