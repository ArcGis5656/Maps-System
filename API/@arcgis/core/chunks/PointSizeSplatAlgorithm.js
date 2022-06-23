/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as o}from"./tslib.es6.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{e}from"./enumeration.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{J as s}from"./jsonMap.js";import{a as p}from"./JSONSupport.js";const a=new s({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let i=class extends p{};o([t({type:a.apiValues,readOnly:!0,nonNullable:!0,json:{type:a.jsonValues,read:!1,write:a.write}})],i.prototype,"type",void 0),i=o([r("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i);const l=i;var n;let c=n=class extends l{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new n({scaleFactor:this.scaleFactor})}};o([e({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),o([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0),c=n=o([r("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const u=c;export{l as P,u as a};
