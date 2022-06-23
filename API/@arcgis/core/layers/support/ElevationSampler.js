/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import"../../geometry.js";import{b as t,o as e}from"../../core/lang.js";import{L as s}from"../../chunks/Logger.js";import{g as o}from"../../chunks/unitUtils.js";import{t as r,b as i}from"../../chunks/aaBoundingRect.js";import{e as n}from"../../geometry/Extent.js";import{project as a}from"../../geometry/support/webMercatorUtils.js";import c from"../../geometry/Point.js";import"../../chunks/ensureType.js";import"../../geometry/Geometry.js";import"../../chunks/tslib.es6.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../chunks/object.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";const l=s.getLogger("esri.layers.support.ElevationSampler");class p{queryElevation(t){return h(t.clone(),this)}on(){return d}projectIfRequired(t,e){return j(t,e)}}class m extends p{constructor(t,e,s){super(),this.tile=t,this.noDataValue=s,this.extent=r(t.tile.extent,e.spatialReference);const i=o(e.spatialReference),n=e.lodAt(t.tile.level).resolution*i;this.demResolution={min:n,max:n}}get spatialReference(){return this.extent.spatialReference}contains(t){const e=this.projectIfRequired(t,this.spatialReference);return n(this.extent,e)}elevationAt(e){const s=this.projectIfRequired(e,this.spatialReference);if(t(s))return null;if(!this.contains(e)){const t=this.extent,s=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;return l.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${s})`),this.noDataValue}return this.tile.sample(s.x,s.y)}}class u extends p{constructor(t,e,s){let o;super(),"number"==typeof e?(this.noDataValue=e,o=null):(o=e,this.noDataValue=s),this.samplers=o?t.map((t=>new m(t,o,this.noDataValue))):t;const n=this.samplers[0];if(n){this.extent=n.extent.clone();const{min:t,max:e}=n.demResolution;this.demResolution={min:t,max:e};for(let t=1;t<this.samplers.length;t++){const e=this.samplers[t];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max)}}else this.extent=r(i(),o.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(t){const e=this.projectIfRequired(t,this.spatialReference);if(!e)return null;for(const t of this.samplers)if(t.contains(e))return t.elevationAt(e);return l.warn("#elevationAt()",`Point used to sample elevation (${t.x}, ${t.y}) is outside of the sampler`),this.noDataValue}}function h(t,s){const o=j(t,s.spatialReference);if(!o)return null;switch(t.type){case"point":!function(t,s,o){t.z=e(o.elevationAt(s),0)}(t,o,s);break;case"polyline":!function(t,s,o){f.spatialReference=s.spatialReference;const r=t.hasM&&!t.hasZ;for(let i=0;i<t.paths.length;i++){const n=t.paths[i],a=s.paths[i];for(let t=0;t<n.length;t++){const s=n[t],i=a[t];f.x=i[0],f.y=i[1],r&&(s[3]=s[2]),s[2]=e(o.elevationAt(f),0)}}t.hasZ=!0}(t,o,s);break;case"multipoint":!function(t,s,o){f.spatialReference=s.spatialReference;const r=t.hasM&&!t.hasZ;for(let i=0;i<t.points.length;i++){const n=t.points[i],a=s.points[i];f.x=a[0],f.y=a[1],r&&(n[3]=n[2]),n[2]=e(o.elevationAt(f),0)}t.hasZ=!0}(t,o,s)}return t}function j(e,s){if(t(e))return null;const o=e.spatialReference;if(o.equals(s))return e;const r=a(e,s);return r||l.error(`Cannot project geometry spatial reference (wkid:${o.wkid}) to elevation sampler spatial reference (wkid:${s.wkid})`),r}const f=new c,d={remove(){}};export{p as ElevationSamplerBase,u as MultiTileElevationSampler,m as TileElevationSampler,h as updateGeometryElevation};