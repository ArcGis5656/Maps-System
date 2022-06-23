/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{r as t}from"./reader.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{T as a,s as i}from"./TilemapCache.js";import l from"../geometry/SpatialReference.js";const p=p=>{let s=class extends p{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new a({layer:this}):null}};return e([r({json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),e([r()],s.prototype,"minScale",void 0),e([t("service","minScale")],s.prototype,"readMinScale",null),e([r()],s.prototype,"maxScale",void 0),e([t("service","maxScale")],s.prototype,"readMaxScale",null),e([r({type:l})],s.prototype,"spatialReference",void 0),e([r({readOnly:!0})],s.prototype,"supportsBlankTile",null),e([r(i)],s.prototype,"tileInfo",void 0),e([r()],s.prototype,"tilemapCache",void 0),e([t("service","tilemapCache",["capabilities"])],s.prototype,"readTilemapCache",null),e([r()],s.prototype,"version",void 0),s=e([o("esri.layers.mixins.ArcGISCachedService")],s),s};export{p as A};