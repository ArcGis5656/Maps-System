/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import{a as r}from"../../chunks/JSONSupport.js";import{i as s}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import l from"./MeshTexture.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/persistableUrlUtils.js";import"../../core/urlUtils.js";import"../../chunks/screenshotUtils.js";var n;let p=n=class extends r{constructor(o){super(o),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,t){const r=s(o)?o.get(this):null;if(r)return r;const e=new n(this.clonePropertiesWithDeduplication(t));return s(o)&&o.set(this,e),e}clonePropertiesWithDeduplication(o){return{color:s(this.color)?this.color.clone():null,colorTexture:s(this.colorTexture)?this.colorTexture.cloneWithDeduplication(o):null,normalTexture:s(this.normalTexture)?this.normalTexture.cloneWithDeduplication(o):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};o([e({type:t,json:{write:!0}})],p.prototype,"color",void 0),o([e({type:l,json:{write:!0}})],p.prototype,"colorTexture",void 0),o([e({type:l,json:{write:!0}})],p.prototype,"normalTexture",void 0),o([e({nonNullable:!0,json:{write:!0}})],p.prototype,"alphaMode",void 0),o([e({nonNullable:!0,json:{write:!0}})],p.prototype,"alphaCutoff",void 0),o([e({nonNullable:!0,json:{write:!0}})],p.prototype,"doubleSided",void 0),p=n=o([i("esri.geometry.support.MeshMaterial")],p);const c=p;export{c as default};
