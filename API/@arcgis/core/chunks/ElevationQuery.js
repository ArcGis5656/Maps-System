/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{r as e}from"./asyncUtils.js";import t from"../core/Error.js";import{i,b as o}from"../core/lang.js";import{whenOrAbort as s,throwIfAbortError as l,eachAlways as n}from"../core/promiseUtils.js";import{g as a}from"./unitUtils.js";import r from"../geometry/Multipoint.js";import c from"../geometry/Point.js";import p from"../geometry/Polyline.js";import{initializeProjection as m,project as u}from"../geometry/projection.js";import{m as h,b as d,h as f}from"./aaBoundingRect.js";import{MultiTileElevationSampler as y}from"../layers/support/ElevationSampler.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"./tslib.es6.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./tracking.js";import"./ensureType.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./writer.js";import"./Ellipsoid.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./zmUtils.js";import"./extentUtils.js";import"./mathUtils.js";import"./common.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";class T{constructor(e,t=null){if(this.tile=e,i(t)){const i=e.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}}sample(e,t){if(o(this.samplerData))return;const{safeWidth:i,width:s,pixelData:l,noDataValue:n,dx:a,dy:r,y1:c,x0:p}=this.samplerData,m=g(r*(c-t),0,i),u=g(a*(e-p),0,i),h=Math.floor(m),d=Math.floor(u),f=h*s+d,y=f+s,T=l[f],x=l[y],v=l[f+1],w=l[y+1];if(T!==n&&x!==n&&v!==n&&w!==n){const e=u-d,t=T+(v-T)*e;return t+(x+(w-x)*e-t)*(m-h)}}}function g(e,t,i){return e<t?t:e>i?i:e}class x{async queryAll(e,i,o){if(!(e=o&&o.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new t("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s=v.fromGeometry(i);let l=!1;o&&o.returnSampleInfo||(l=!0);const n={...R,...o,returnSampleInfo:!0},a=await this.query(e[e.length-1],s,n),r=await this._queryAllContinue(e,a,n);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r}async query(e,i,o){if(!e)throw new t("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||!(i instanceof v)&&"point"!==i.type&&"multipoint"!==i.type&&"polyline"!==i.type)throw new t("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s={...R,...o},l=new j(e,i.spatialReference,s),n=s.signal;return await e.load({signal:n}),await this._createGeometryDescriptor(l,i,n),await this._selectTiles(l,n),await this._populateElevationTiles(l,n),this._sampleGeometryWithElevation(l),this._createQueryResult(l,n)}async createSampler(e,i,o){if(!e)throw new t("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new t("elevation-query:invalid-extent","Invalid or undefined extent");const s={...R,...o};return this._createSampler(e,i,s)}async createSamplerAll(e,i,o){if(!(e=o&&o.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new t("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!i||"extent"!==i.type)throw new t("elevation-query:invalid-extent","Invalid or undefined extent");const s={...R,...o,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],i,s);return this._createSamplerAllContinue(e,i,l,s)}async _createSampler(e,t,i,o){const s=i.signal;await e.load({signal:s});const l=t.spatialReference,n=e.tileInfo.spatialReference;l.equals(n)||(await m([{source:l,dest:n}],{signal:s}),t=u(t,n));const a=new _(e,t,i,o);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new y(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,o){if(e.pop(),!e.length)return i;const s=i.samplers.map((e=>h(e.extent))),l=await this._createSampler(e[e.length-1],t,o,s);if(0===l.samplers.length)return i;const n=i.samplers.concat(l.samplers),a=new y(n,o.noDataValue);return this._createSamplerAllContinue(e,t,a,o)}async _queryAllContinue(e,t,i){const o=e.pop(),s=t.geometry.coordinates,l=[],n=[];for(let i=0;i<s.length;i++){const a=t.sampleInfo[i];a.demResolution>=0?a.source||(a.source=o):e.length&&(l.push(s[i]),n.push(i))}if(!e.length||0===l.length)return t;const a=t.geometry.clone(l),r=await this.query(e[e.length-1],a,i);return n.forEach(((e,i)=>{s[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,i,o){let s;const l=e.layer.tileInfo.spatialReference;if(i instanceof v?s=await i.project(l,o):(await m([{source:i.spatialReference,dest:l}],{signal:o}),s=u(i,l)),!s)throw new t("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=v.fromGeometry(s)}async _selectTiles(e,i){const o=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof o)this._selectTilesClosestResolution(e);else if("finest-contiguous"===o)await this._selectTilesFinestContiguous(e,i);else{if("auto"!==o)throw new t("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${o}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,i)}}_preselectOutsideLayerExtent(e){if(o(e.layer.fullExtent))return;const t=new T(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const o=e.x,s=e.y;(o<i.xmin||o>i.xmax||s<i.ymin||s>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/a(e.spatialReference);let o=e.lods[0],s=0;for(let t=1;t<e.lods.length;t++){const l=e.lods[t];Math.abs(l.resolution-i)<Math.abs(o.resolution-i)&&(o=l,s=t)}return s}async _selectTilesFinestContiguous(e,t){const i=E(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,i,o){const n=e.layer;if(e.selectTilesAtLOD(i),i<0)return;const a=n.tilemapCache,r=e.getTilesToFetch();try{if(a)await s(Promise.all(r.map((e=>a.fetchAvailability(e.level,e.row,e.col,{signal:o})))),o);else if(await this._populateElevationTiles(e,o),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new t("elevation-query:has-unavailable-tiles")}catch(t){l(t),await this._selectTilesFinestContiguousAt(e,i-1,o)}}async _populateElevationTiles(e,t){const o=e.getTilesToFetch(),l={},a=e.options.cache,r=e.options.noDataValue,c=o.map((async o=>{const s=`${e.layer.uid}:${o.id}:${r}`,n=i(a)?a.get(s):null,c=i(n)?n:await e.layer.fetchTile(o.level,o.row,o.col,{noDataValue:r,signal:t});i(a)&&a.put(s,c),l[o.id]=new T(o,c)}));await s(n(c),t),e.populateElevationTiles(l)}async _selectTilesAuto(t,i){this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t);const o=t.layer.tilemapCache;if(!o)return this._selectTilesAutoPrefetchUpsample(t,i);const n=t.getTilesToFetch(),a={},r=n.map((async t=>{const s={id:null,level:0,row:0,col:0,extent:d()},n=await e(o.fetchAvailabilityUpsample(t.level,t.row,t.col,s,{signal:i}));!1===n.ok?l(n.error):a[t.id]=s}));await s(Promise.all(r),i),t.remapTiles(a)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const o={},s=e=>{e.id in o?o[e.id]++:(o[e.id]=1,i++)},l=e=>{const t=o[e.id];1===t?(delete o[e.id],i--):o[e.id]=t-1};e.forEachTileToFetch(s,l);let n=!0;for(;n&&(n=!1,e.forEachTileToFetch((o=>{i<=e.options.maximumAutoTileRequests||(l(o),t.upsampleTile(o)&&(n=!0),s(o))}),l),n););}_selectTilesAutoFinest(e){const t=E(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let o=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?o=!0:t()})),o&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const o=t.elevationTile;let s=e.options.noDataValue;if(o){const e=o.sample(t.x,t.y);i(e)?s=e:t.elevationTile=null}t.z=s}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=a(t.spatialReference);return e.geometry.coordinates.map((o=>{let s=-1;if(o.elevationTile&&o.elevationTile!==e.outsideExtentTile){s=t.lodAt(o.elevationTile.tile.level).resolution*i}return{demResolution:s}}))}}class v{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new v;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await m([{source:this.spatialReference,dest:e}],{signal:t});const i=new r({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),o=u(i,e);if(!o)return null;const s=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),s=o.points[t];return i.x=s[0],i.y=s[1],i})),l=this.clone(s);return l.spatialReference=e,l}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new v;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof v)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const o=e.clone(t);return o.spatialReference=i,o};else switch(e.type){case"point":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?[{x:i.x,y:i.y,z:i.z,m:i.m}]:o?[{x:i.x,y:i.y,z:i.z}]:s?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new c(t[0].x,t[0].y,t[0].z,t[0].m,i):new c(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:o,hasM:s}=i;t.coordinates=o&&s?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):o?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):s?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new r({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new r(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,o=[],s=[],{hasZ:l,hasM:n}=e;let a=0;for(const e of i.paths)if(s.push([a,a+e.length]),a+=e.length,l&&n)for(const t of e)o.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(l)for(const t of e)o.push({x:t[0],y:t[1],z:t[2]});else if(n)for(const t of e)o.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)o.push({x:t[0],y:t[1]});t.coordinates=o,t._exporter=(t,i)=>{const o=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=s.map((e=>o.slice(e[0],e[1])));return new p({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class w{constructor(e,t){this.layer=e,this.options=t}}class j extends w{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const o=i.tile;i.elevationTile||!i.tile||e[o.id]||(e[o.id]=o,t.push(o))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}}class _ extends w{constructor(e,t,i,o){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=o}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),o=Math.min(i,e);o<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(o)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if(o(i))return-1;for(let o=t.lods.length-1;o>=0;o--){const s=t.lods[o],l=s.resolution*t.size[0],n=s.resolution*t.size[1];if(Math.ceil(i.width/l)*Math.ceil(i.height/n)<=e)return o}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let o=!1;e(i,(()=>o=!0)),o?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},o=[];for(const s of e)i[s.id]?t&&t(s):(i[s.id]=s,o.push(s));const s=o.sort(((e,t)=>e.level-t.level));return s.filter(((e,i)=>{for(let o=0;o<i;o++)if(f(s[o].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if(o(t))return;const i=this.layer.tileInfo,s=i.lods[e],l=i.tileAt(s.level,t.xmin,t.ymin),n=s.resolution*i.size[0],a=s.resolution*i.size[1],r=Math.ceil((t.xmax-l.extent[0])/n),c=Math.ceil((t.ymax-l.extent[1])/a);for(let e=0;e<c;e++)for(let t=0;t<r;t++){const o={id:null,level:l.level,row:l.row-e,col:l.col+t};i.updateTileInfo(o),this._tileIsMasked(o)||this.candidateTiles.push(o)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>f(t,e.extent)))}}function E(e,t){let i=e.lods.length-1;if(t>0){const o=e.lods.findIndex((e=>e.resolution<t));0===o?i=0:o>0&&(i=o-1)}return i}const R={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{x as ElevationQuery,v as GeometryDescriptor,x as default,E as getFinestLodIndex};