/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{o as e,p as t,b as r,i,q as a,h as s,u as o,s as n}from"../core/lang.js";import{c as l,d}from"./vec2.js";import{b as c,q as h,H as u,a as p,n as m,I as f,j as g,c as v,l as _,e as y,h as T,s as S,d as E,f as R,u as C,v as x,J as b}from"./mathUtils.js";import{projectBuffer as O,computeTranslationToOriginAndRotation as A,lonLatToWebMercatorComparable as I}from"../geometry/projection.js";import{g as D}from"./projectionEllipsoid.js";import{C as w,p as P}from"./triangulationUtils.js";import{V as L}from"./ViewingMode.js";import{O as F,Z as N}from"./vec4f64.js";import{n as M}from"./compilerUtils.js";import{c as H,g as U,l as z,m as W,h as V,o as G,j as B}from"./mat4.js";import{c as j,I as q}from"./mat4f64.js";import{i as k,a as Z,g as $}from"./ElevationProvider.js";import{u as J,o as X,D as Y,P as K,G as Q,W as ee,O as te}from"./DefaultBufferWriter.js";import{_ as re}from"./tslib.es6.js";import ie from"../core/Accessor.js";import{E as ae}from"./Evented.js";import se from"../core/Handles.js";import{L as oe}from"./Logger.js";import{s as ne}from"./ensureType.js";import{P as le,M as de}from"../core/scheduling.js";import{g as ce,s as he}from"./watch.js";import{init as ue}from"../core/watchUtils.js";import{property as pe}from"../core/accessorSupport/decorators/property.js";import{subclass as me}from"../core/accessorSupport/decorators/subclass.js";import{f as fe,a as ge}from"./vec2f64.js";import{b as ve,o as _e,c as ye}from"./aaBoundingRect.js";import{V as Te,T as Se,R as Ee,A as Re,P as Ce,U as xe}from"./basicInterfaces.js";import{c as be}from"./vec2f32.js";import{d as Oe,e as Ae,T as Ie,a as De,b as we,f as Pe,c as Le,B as Fe,C as Ne,P as Me,U as He,g as Ue,h as ze,i as We}from"./enums.js";import{F as Ve}from"./FramebufferObject.js";import{a as Ge,R as Be}from"./RenderSlot.js";import{N as je}from"./NestedMap.js";import{C as qe}from"./Camera.js";import{C as ke,S as Ze,P as $e,R as Je,u as Xe,T as Ye,d as Ke,s as Qe,m as et,f as tt,k as rt,p as it,c as at,b as st,g as ot,l as nt,a as lt,h as dt,i as ct,G as ht,j as ut,v as pt,D as mt,O as ft,x as gt,n as vt,o as _t,q as yt,y as Tt,z as St,A as Et,B as Rt,t as Ct,e as xt,E as bt}from"./glUtil3D.js";import{g as Ot}from"./glUtil.js";import{D as At,a as It,M as Dt,i as wt,R as Pt}from"./Material.js";import{a as Lt,s as Ft,i as Nt}from"./Util.js";import{m as Mt,i as Ht,d as Ut,b as zt,o as Wt,f as Vt,a as Gt,e as Bt,g as jt,h as qt,O as kt,s as Zt}from"./OrderIndependentTransparency.js";import{b as $t}from"./sphere.js";import{c as Jt,a as Xt}from"./vectorStacks.js";import{E as Yt,a as Kt,P as Qt,b as er,c as tr,F as rr,d as ir}from"./VisualVariables.glsl.js";import{g as ar,S as sr,a as or,R as nr}from"./ShaderBuilder.js";import{V as lr}from"./VertexAttribute.js";import{w as dr}from"./weather.js";import{R as cr,b as hr}from"./ReadShadowMap.glsl.js";import{R as ur,M as pr}from"./MemCache.js";import{V as mr,B as fr,v as gr}from"./VertexArrayObject.js";import{c as vr,i as _r}from"./utils2.js";import{n as yr}from"./InterleavedLayout.js";import{c as Tr}from"./heatmapUtils.js";import{T as Sr}from"./Texture.js";import{S as Er}from"./ScreenSpacePass.js";import{b as Rr}from"./screenUtils.js";import{P as Cr}from"./frustum.js";import{c as xr,d as br,f as Or,b as Ar}from"./lineSegment.js";import{c as Ir,j as Dr,k as wr,n as Pr}from"./plane.js";import{b as Lr}from"./geometryDataUtils.js";import{b as Fr}from"./quatf64.js";import{f as Nr}from"./vec3f32.js";import{S as Mr,n as Hr,I as Ur}from"./Intersector.js";import{p as zr}from"./floatRGBA.js";import{I as Wr,T as Vr,n as Gr}from"./Scheduler.js";const Br=1.2,jr=N,qr=F;function kr(e,t,r,i,a,s,o,n,l,d,c){const h=ti[c.mode];let u,p,m=0;if(O(e,t,r,i,l.spatialReference,a,n))return h.requiresAlignment(c)?(m=h.applyElevationAlignmentBuffer(i,a,s,o,n,l,d,c),u=s,p=o):(u=i,p=a),O(u,l.spatialReference,p,s,d.spatialReference,o,n)?m:void 0}function Zr(t,r,i,a,s){const o=(k(t)?t.z:Z(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const i=e($(r,t,"ground"),0);return s.verticalDistanceToGround=0,s.sampledElevation=i,void(s.z=i)}case"relative-to-ground":{const n=e($(r,t,"ground"),0),l=i.geometryZWithOffset(o,a);return s.verticalDistanceToGround=l,s.sampledElevation=n,void(s.z=l+n)}case"relative-to-scene":{const n=e($(r,t,"scene"),0),l=i.geometryZWithOffset(o,a);return s.verticalDistanceToGround=l,s.sampledElevation=n,void(s.z=l+n)}case"absolute-height":{const n=i.geometryZWithOffset(o,a),l=e($(r,t,"ground"),0);return s.verticalDistanceToGround=n-l,s.sampledElevation=l,void(s.z=n)}default:return M(i.mode),void(s.z=0)}}function $r(e,t,r,i){return Zr(e,t,r,i,ii),ii.z}function Jr(e,t,r){return null==t||null==r?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===r?e.staysOnTheGround:t===r||"on-the-ground"!==t&&"on-the-ground"!==r?ei.UPDATE:e.onTheGroundChanged}function Xr(e){return"relative-to-ground"===e||"relative-to-scene"===e}function Yr(e){return"absolute-height"!==e}function Kr(e,t,r,i,a){Zr(t,r,a,i,ii),J(e,ii.verticalDistanceToGround);const s=ii.sampledElevation,o=H(ri,e.transformation);ai[0]=t.x,ai[1]=t.y,ai[2]=ii.z;return A(t.spatialReference,ai,o,i.spatialReference)?e.transformation=o:console.warn("Could not locate symbol object properly, it might be misplaced"),s}class Qr{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var ei;!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(ei||(ei={}));const ti={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,r,i,a,s,o,n){const l=n.calculateOffsetRenderUnits(o),d=n.featureExpressionInfoContext;t*=3,i*=3;for(let s=0;s<a;++s){const a=e[t+0],s=e[t+1],o=e[t+2];r[i+0]=a,r[i+1]=s,r[i+2]=null==d?o+l:l,t+=3,i+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,r=e.featureExpressionInfoContext;return 0!==t||null!=r}},"on-the-ground":{applyElevationAlignmentBuffer:function(t,r,i,a,s,o){let n=0;const l=o.spatialReference;r*=3,a*=3;for(let d=0;d<s;++d){const s=t[r+0],d=t[r+1],c=t[r+2],h=e(o.getElevation(s,d,c,l,"ground"),0);n+=h,i[a+0]=s,i[a+1]=d,i[a+2]=h,r+=3,a+=3}return n/s},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(t,r,i,a,s,o,n,l){let d=0;const c=l.calculateOffsetRenderUnits(n),h=l.featureExpressionInfoContext,u=o.spatialReference;r*=3,a*=3;for(let n=0;n<s;++n){const s=t[r+0],n=t[r+1],l=t[r+2],p=e(o.getElevation(s,n,l,u,"ground"),0);d+=p,i[a+0]=s,i[a+1]=n,i[a+2]=null==h?l+p+c:p+c,r+=3,a+=3}return d/s},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(t,r,i,a,s,o,n,l){let d=0;const c=l.calculateOffsetRenderUnits(n),h=l.featureExpressionInfoContext,u=o.spatialReference;r*=3,a*=3;for(let n=0;n<s;++n){const s=t[r+0],n=t[r+1],l=t[r+2],p=e(o.getElevation(s,n,l,u,"scene"),0);d+=p,i[a+0]=s,i[a+1]=n,i[a+2]=null==h?l+p+c:p+c,r+=3,a+=3}return d/s},requiresAlignment:()=>!0}},ri=j(),ii=new Qr,ai=c();var si,oi,ni;!function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"}(si||(si={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(oi||(oi={})),function(e){e[e.LAYER_VIEW=0]="LAYER_VIEW",e[e.EXTERNAL=1]="EXTERNAL"}(ni||(ni={}));let li=class extends ie{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.SCENEVIEW_LOCKING_LOG=!1,this.HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED=!0,this.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};re([pe()],li.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),re([pe()],li.prototype,"SCENEVIEW_LOCKING_LOG",void 0),re([pe()],li.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED",void 0),re([pe()],li.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),re([pe()],li.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),re([pe()],li.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),re([pe()],li.prototype,"DECONFLICTOR_SHOW_GRID",void 0),re([pe()],li.prototype,"LABELS_SHOW_BORDER",void 0),re([pe()],li.prototype,"TEXT_SHOW_BASELINE",void 0),re([pe()],li.prototype,"TEXT_SHOW_BORDER",void 0),re([pe()],li.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),re([pe()],li.prototype,"OVERLAY_SHOW_CENTER",void 0),re([pe()],li.prototype,"SHOW_POI",void 0),re([pe()],li.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),re([pe()],li.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),re([pe()],li.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),re([pe()],li.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),re([pe()],li.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),re([pe()],li.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),re([pe()],li.prototype,"I3S_TREE_SHOW_TILES",void 0),re([pe()],li.prototype,"I3S_SHOW_MODIFICATIONS",void 0),re([pe()],li.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),re([pe()],li.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),re([pe()],li.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),re([pe()],li.prototype,"LINE_WIREFRAMES",void 0),li=re([me("esri.views.3d.support.DebugFlags")],li);const di=new li;var ci,hi,ui,pi,mi,fi;!function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(ci||(ci={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(hi||(hi={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(ui||(ui={})),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.Water=3]="Water",e[e.Occluded=4]="Occluded"}(pi||(pi={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(mi||(mi={}));class gi{constructor(e,t){this.vec3=e,this.id=t}}function vi(e,t,r,i){return new gi(h(e,t,r),i)}!function(e){e[e.None=0]="None",e[e.ColorAndWater=1]="ColorAndWater",e[e.Highlight=2]="Highlight",e[e.Occluded=3]="Occluded"}(fi||(fi={}));class _i{constructor(e,t){this.index=e,this.renderTargets=t,this.extent=ve(),this.resolution=0,this.renderLocalOrigin=vi(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new Ti,this.validTargets=null,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(t.renderTargets.length).fill(!1)}getValidTarget(e){return this.validTargets[e]?this.renderTargets.getTarget(e):null}get needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=e===fi.ColorAndWater?this.renderTargets.getTarget(pi.Color):e===fi.Highlight?this.renderTargets.getTarget(pi.Highlight):this.renderTargets.getTarget(pi.Occluded);return t?t.getTexture():null}getNormalTexture(e){const t=e===fi.ColorAndWater?this.renderTargets.getTarget(pi.Water):null;return t?t.getTexture():null}draw(e,t){const r=this.computeRenderTargetValidityBitfield(),i=this.needsColorWithoutRasterImage;for(const r of this.renderTargets.renderTargets)r.type===pi.ColorNoRasterImage&&!1===i?this.validTargets[r.type]=!1:this.validTargets[r.type]=e.drawTarget(this,r,t);return r^this.computeRenderTargetValidityBitfield()?Te.CHANGED:Te.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[pi.Color]|+e[pi.ColorNoRasterImage]<<1|+e[pi.Highlight]<<2|+e[pi.Water]<<3|+e[pi.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const t=.001*e.range;if(this.extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];_e(this.extent,e.range,0,t)}if(this.extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];_e(this.extent,-e.range,0,t)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,ye(this.canvasGeometries.extents[0],this.extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}applyViewport(e){e.setViewport(this.index===ci.INNER?0:this.resolution,0,this.resolution,this.resolution)}}function yi(e,t,r){return Math.min(u(Math.max(e,t)+256),r)}class Ti{constructor(){this.extents=[ve(),ve(),ve()],this.numViews=0}}class Si{constructor(e,t){this.size=be(),this._fbo=null,this._fbo=new Ve(e,{colorTarget:Oe.TEXTURE,depthStencilTarget:Ae.NONE},{target:Ie.TEXTURE_2D,pixelFormat:De.RGBA,dataType:we.UNSIGNED_BYTE,wrapMode:Pe.CLAMP_TO_EDGE,samplingMode:Le.LINEAR_MIPMAP_LINEAR,hasMipmap:t,maxAnisotropy:8,width:0,height:0})}dispose(){this._fbo=t(this._fbo)}getTexture(){return this._fbo?this._fbo.colorTexture:null}isValid(){return null!==this._fbo}resize(e,t){this.size[0]=e,this.size[1]=t,this._fbo.resize(this.size[0],this.size[1])}bind(e){e.bindFramebuffer(this._fbo)}generateMipMap(){this._fbo.colorTexture.descriptor.hasMipmap&&this._fbo.colorTexture.generateMipmap()}disposeRenderTargetMemory(){var e;null==(e=this._fbo)||e.resize(0,0)}get gpuMemoryUsage(){var e,t;return null!=(e=null==(t=this._fbo)?void 0:t.gpuMemoryUsage)?e:0}}class Ei{constructor(e){const t=(t,r,i=!0)=>({type:r,fbo:new Si(e,i),renderPass:t,valid:!1,lastUsed:1/0});this.renderTargets=[t(Ge.MATERIAL,pi.Color),t(Ge.MATERIAL,pi.ColorNoRasterImage),t(Ge.MATERIAL_HIGHLIGHT,pi.Highlight,!1),t(Ge.MATERIAL_NORMAL,pi.Water),t(Ge.MATERIAL,pi.Occluded)]}getTarget(e){return this.renderTargets[e].fbo}dispose(){for(const e of this.renderTargets)e.fbo.dispose()}disposeRenderTargetMemory(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()}validateUsageForTarget(e,t,r){if(e)t.lastUsed=r;else if(r-t.lastUsed>Ri)t.fbo.disposeRenderTargetMemory(),t.lastUsed=1/0;else if(t.lastUsed<1/0)return!0;return!1}get gpuMemoryUsage(){return this.renderTargets.reduce(((e,t)=>e+t.fbo.gpuMemoryUsage),0)}}const Ri=1e3;class Ci{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}class xi{constructor(e){this._context=e,this._perConstructorInstances=new je,this._frameCounter=0,this._keepAliveFrameCount=bi}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.destroy())))),this._perConstructorInstances.clear()}acquire(e,t){const i=t.key;let a=this._perConstructorInstances.get(e,i);if(r(a)){const r=new e(this._context,t,(()=>this.release(r)));a=new Ci(r),this._perConstructorInstances.set(e,i,a)}return++a.refCount,a.technique}releaseAndAcquire(e,t,r){if(i(r)){if(t.key===r.key)return r;this.release(r)}return this.acquire(e,t)}release(e){if(r(e)||this._perConstructorInstances.empty)return;const t=this._perConstructorInstances.get(e.constructor,e.key);r(t)||(--t.refCount,0===t.refCount&&(t.refZeroFrame=this._frameCounter))}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==bi&&this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((e,r)=>{0===e.refCount&&e.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(e.technique.destroy(),this._perConstructorInstances.delete(t,r))}))}))}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{e.push((async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context)})))})(t,r))})),await Promise.all(e)}}const bi=-1,Oi=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const t of null!=(e=this._managedDisposables)?e:[]){var e;const r=this[t];this[t]=null,r&&"function"==typeof r.dispose&&r.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class Ai extends(Oi(class{})){}function Ii(){return(e,t)=>{var r,i;e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=null!=(r=null==(i=e._managedDisposables)?void 0:i.slice())?r:[]);e._managedDisposables.unshift(t)}}class Di{constructor(){this.adds=new le,this.removes=new le,this.updates=new le({allocator:e=>e||new wi,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class wi{}class Pi{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}function Li(e){const t=new Map,r=e=>{let r=t.get(e);return r||(r=new Pi,t.set(e,r)),r};return e.removes.forAll((e=>{Fi(e)&&r(e.material).removes.push(e)})),e.adds.forAll((e=>{Fi(e)&&r(e.material).adds.push(e)})),e.updates.forAll((e=>{Fi(e.renderGeometry)&&r(e.renderGeometry.material).updates.push(e)})),t}function Fi(e){return e.data.indexCount>=1}var Ni;!function(e){var t;!function(e){e[e.ADD=1]="ADD",e[e.UPDATE=2]="UPDATE",e[e.REMOVE=4]="REMOVE"}(e.Geometry||(e.Geometry={})),(t=e.State||(e.State={}))[t.VISIBILITIES=1]="VISIBILITIES",t[t.VERTEXATTRS=2]="VERTEXATTRS",t[t.TRANSFORMATION=4]="TRANSFORMATION",t[t.HIGHLIGHTS=8]="HIGHLIGHTS",t[t.OCCLUDEES=16]="OCCLUDEES"}(Ni||(Ni={}));class Mi{constructor(){this.enabled=!0,this._time=0}get time(){return de(this._time)}advance(e){return i(e.forcedTime)?this._time!==e.forcedTime&&(this._time=e.forcedTime,!0):!(!this.enabled||0===e.dt)&&(this._time+=e.dt,!0)}}function Hi(e=Vi){return[e[0],e[1],e[2],e[3]]}function Ui(e,t){return function(e,t,r,i,a=Hi()){return a[0]=e,a[1]=t,a[2]=r,a[3]=i,a}(e[0],e[1],e[2],t,Jt.get())}function zi(e,t,r=Hi()){return p(r,e,t),m(r,r),r[3]=$t(e,t),r}function Wi(e){return e}const Vi=[0,0,1,0];function Gi(e){e.fragment.code.add(ar`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}function Bi(e){e.fragment.uniforms.add("anchorPosition","vec3").add("anchorPositionCrossFade","vec3").add("fadeInOutFactor","float").add("cloudsHeight","float").add("rotationMatrixClouds","mat4").add("rotationMatrixCloudsCrossFade","mat4").add("radiusCurvatureCorrectionFactor","float").add("radius","float").add("cameraPosition","vec3").add("totalFadeInOut","float").add("crossFade","int").add("crossFadeAnchorFactor","float").add("cloudVariables","vec2").add("cubeMap","samplerCube"),e.fragment.code.add(ar`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos, float radiusReduction)
{
vec3 dirAnchor = normalize(spherePos);
vec3 sphereOriginOffset = dirAnchor * radiusReduction;
float radiusClouds = radius + cloudsHeight - radiusReduction;
float B = 2.0 * dot(cameraPosition - sphereOriginOffset, dir);
float C = dot(cameraPosition - sphereOriginOffset, cameraPosition - sphereOriginOffset) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),e.fragment.code.add(ar`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),e.fragment.code.add(ar`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),e.fragment.code.add(ar`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(lightingMainDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(lightingMainDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((lightingMainIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * pow(dirDotLight, RIM_SCATTERING_FACTOR) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),e.fragment.code.add(ar`vec4 getCloudData(vec3 rayDir)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
return mix(vec4(vec3(clamp(1.0 - cloudVariables.y, 0.6, 1.0)), 0.0), cloudData, smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(mu)));
}`),e.fragment.code.add(ar`vec4 renderCloud(vec3 worldRay, vec3 position)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), position, anchorPosition, 0.0);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(normalize(-worldRay), cloudData), totalTransmittance);
}`),e.fragment.code.add(ar`vec4 renderCloudCrossFade(vec3 worldRay, vec3 position)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), position, anchorPosition, 0.0);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColor = vec4(calculateCloudColor(normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), position, anchorPositionCrossFade, 0.0);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const ji=Object.freeze({__proto__:null,build:function(){const e=new sr;return e.attributes.add(lr.POSITION,"vec2"),e.varyings.add("worldRay","vec3"),e.vertex.uniforms.add("inverseProjectionMatrix","mat4"),e.vertex.uniforms.add("inverseViewMatrix","mat4"),e.vertex.code.add(ar`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0.0)).xyz;
gl_Position = vec4(position, 1.0, 1.0);
}`),e.fragment.uniforms.add("lightingMainDirection","vec3"),e.fragment.include(ke),e.fragment.include(or),e.include(Yt),e.include(Kt,{pbrMode:Qt.Disabled,lightingSphericalHarmonicsOrder:2}),e.include(er),e.include(Gi),e.include(Bi),e.fragment.code.add(ar`void main() {
vec4 cloudsColor = crossFade == 0 ? renderCloud(normalize(worldRay), cameraPosition) : renderCloudCrossFade(normalize(worldRay), cameraPosition);
gl_FragColor = vec4((1.0 - totalFadeInOut) * cloudsColor.rgb, cloudsColor.a);
}`),e}});class qi extends Ze{constructor(e){super(e,null,(()=>this.destroy()))}initializeProgram(e){const t=qi.shader.get().build();return new $e(e.rctx,t,At)}initializePipeline(){return Mt({blending:Ht(Fe.ONE,Fe.SRC_ALPHA),depthTest:{func:Ne.LEQUAL},colorWrite:Ut})}}qi.shader=new Je(ji,(()=>Promise.resolve().then((()=>ji))));let ki=class extends ie{constructor(e){super(e),this._inverseProjectionMatrix=j(),this._inverseViewMatrix=j(),this._technique=new qi(e),this._vao=Xe(e.rctx),this._setDefaultParallax(e.radius)}destroy(){this._technique=a(this._technique),this._vao=t(this._vao)}render(e,t,i){this._parameters.clouds=t;const a=e.camera;if(r(this._vao)||r(a))return;const s=e.rctx,o=s.useTechnique(this._technique);e.scenelightingData.setLightDirectionUniform(o),e.scenelightingData.setUniforms(o,!1,!1),U(this._inverseProjectionMatrix,a.projectionMatrix),U(this._inverseViewMatrix,a.viewMatrix),o.setUniformMatrix4fv("inverseProjectionMatrix",this._inverseProjectionMatrix),o.setUniformMatrix4fv("inverseViewMatrix",this._inverseViewMatrix),o.setUniform2f("cloudVariables",this._parameters.clouds.coverage,this._parameters.clouds.absorption),this._setParallaxParams(a.eye,i),e.cloudsCompositionParams=this._parameters,Yi(o,a,this._parameters),s.bindVAO(this._vao),o.assertCompatibleVertexAttributeLocations(this._vao),s.drawArrays(Me.TRIANGLE_STRIP,0,4)}get isFading(){return this._parameters.crossFade.stage!==Ji.FINISHED||this._parameters.fadeInOut.stage!==$i.FINISHED||this._parameters.fadeIn.stage!==Zi.FINISHED||this._parameters.fadeInOutHeight.stage!==Xi.FINISHED}_setDefaultParallax(e){this._parameters={parallax:{anchorPointClouds:c(),radius:e,cloudsHeight:1e5,radiusCurvatureCorrectionFactor:0,transform:j()},parallaxNew:{anchorPointClouds:c(),radius:e,cloudsHeight:1e5,radiusCurvatureCorrectionFactor:0,transform:j()},crossFade:{stage:Ji.FINISHED,factor:0,distanceThresholdFactor:.3},fadeInOut:{stage:$i.FINISHED,factor:0,distanceThresholdFactor:.6},fadeIn:{stage:Zi.FINISHED,factor:0,distanceThresholdFactor:2},fadeInOutHeight:{stage:Xi.FINISHED,factor:-1},cameraPositionLastFrame:c(),startTime:0,startTimeHeightFade:0,clouds:null}}_isCameraPositionFinal(e){return f(this._parameters.cameraPositionLastFrame,e)}_setFadeInStage(e){const t=this._isCameraPositionFinal(e);this._parameters.fadeIn.stage===Zi.FINISHED&&(this._parameters.fadeIn.factor=1,g(this._parameters.parallax.anchorPointClouds,ea),this._parameters.fadeIn.stage=Zi.CHANGE_ANCHOR,this._parameters.crossFade.stage=Ji.FINISHED,this._parameters.fadeInOut.stage=$i.FINISHED),this._parameters.fadeIn.stage===Zi.CHANGE_ANCHOR&&t&&(g(this._parameters.parallax.anchorPointClouds,ea),this._parameters.fadeIn.stage=Zi.FADE_IN,this._parameters.startTime=performance.now()),this._parameters.fadeIn.factor>0&&this._parameters.fadeIn.stage===Zi.FADE_IN&&(this._parameters.fadeIn.factor=1-(performance.now()-this._parameters.startTime)/500),this._parameters.fadeIn.factor<=0&&this._parameters.fadeIn.stage===Zi.FADE_IN&&(this._parameters.fadeIn.stage=Zi.FINISHED,this._parameters.fadeIn.factor=0)}_setCrossFadingStage(){this._parameters.crossFade.stage===Ji.FINISHED&&(g(this._parameters.parallaxNew.anchorPointClouds,ea),this._parameters.startTime=performance.now(),this._parameters.crossFade.factor=0,this._parameters.crossFade.stage=Ji.CROSS_FADE),this._parameters.crossFade.factor<1&&this._parameters.crossFade.stage===Ji.CROSS_FADE&&(this._parameters.crossFade.factor=(performance.now()-this._parameters.startTime)/500),this._parameters.crossFade.factor>=1&&this._parameters.crossFade.stage===Ji.CROSS_FADE&&(this._parameters.crossFade.stage=Ji.FINISHED,this._parameters.crossFade.factor=1,g(this._parameters.parallax.anchorPointClouds,this._parameters.parallaxNew.anchorPointClouds))}_setFadeInOutStage(e){this._parameters.fadeInOut.stage===$i.FINISHED&&(this._parameters.startTime=performance.now(),this._parameters.fadeInOut.factor=0,this._parameters.fadeInOut.stage=$i.FADE_OUT),this._parameters.fadeInOut.factor<1&&this._parameters.fadeInOut.stage===$i.FADE_OUT&&(this._parameters.fadeInOut.factor=(performance.now()-this._parameters.startTime)/250),this._parameters.fadeInOut.factor>=1&&this._parameters.fadeInOut.stage===$i.FADE_OUT&&(this._parameters.fadeInOut.factor=1,g(this._parameters.parallax.anchorPointClouds,ea)),this._parameters.fadeInOut.factor>=1&&this._parameters.fadeInOut.stage===$i.FADE_OUT&&this._isCameraPositionFinal(e)&&(this._parameters.startTime=performance.now(),this._parameters.fadeInOut.factor=1,this._parameters.fadeInOut.stage=$i.FADE_IN,this._parameters.crossFade.stage=Ji.FINISHED,this._parameters.crossFade.factor=0),this._parameters.fadeInOut.factor>0&&this._parameters.fadeInOut.stage===$i.FADE_IN&&(this._parameters.fadeInOut.factor=1-(performance.now()-this._parameters.startTime)/500),this._parameters.fadeInOut.factor<=0&&this._parameters.fadeInOut.stage===$i.FADE_IN&&(this._parameters.fadeInOut.stage=$i.FINISHED,this._parameters.fadeInOut.factor=0)}_setFadeInOutHeight(e){const t=performance.now();this._parameters.startTimeHeightFade=this._parameters.fadeInOutHeight.stage===Xi.FINISHED?t:this._parameters.startTimeHeightFade,e?this._parameters.fadeInOutHeight.factor+=(t-this._parameters.startTimeHeightFade)/500:this._parameters.fadeInOutHeight.factor-=(t-this._parameters.startTimeHeightFade)/500,this._parameters.startTimeHeightFade=t,this._parameters.fadeInOutHeight.factor=v(this._parameters.fadeInOutHeight.factor,0,1),this._parameters.fadeInOutHeight.stage=Xi.HEIGHT_FADE}_setParallaxParams(e,t){this._parameters.fadeInOutHeight.factor<0&&(this._parameters.fadeInOutHeight.factor=_(e)-this._parameters.parallax.radius>dr?1:0),m(ea,e),y(ea,ea,this._parameters.parallax.radius),0===this._parameters.parallax.anchorPointClouds[0]&&0===this._parameters.parallax.anchorPointClouds[1]&&0===this._parameters.parallax.anchorPointClouds[2]&&g(this._parameters.parallax.anchorPointClouds,ea);const r=_(T(ta,this._parameters.parallax.anchorPointClouds,ea));let i=!0;r>this._parameters.fadeIn.distanceThresholdFactor*this._parameters.parallax.cloudsHeight||this._parameters.fadeIn.stage!==Zi.FINISHED?this._setFadeInStage(e):r>this._parameters.fadeInOut.distanceThresholdFactor*this._parameters.parallax.cloudsHeight||this._parameters.fadeInOut.stage!==$i.FINISHED?this._setFadeInOutStage(e):r>this._parameters.crossFade.distanceThresholdFactor*this._parameters.parallax.cloudsHeight&&!t||this._parameters.crossFade.stage!==Ji.FINISHED?this._setCrossFadingStage():i=!1;const a=_(e),s=a-this._parameters.parallax.radius;(s>1.7*dr||s<-dr)&&this._parameters.fadeInOutHeight.factor<1?this._parameters.fadeInOutHeight.factor=1:(s>dr||s<-.35*dr)&&this._parameters.fadeInOutHeight.factor<1?this._setFadeInOutHeight(!0):s<dr&&s>-.35*dr&&this._parameters.fadeInOutHeight.factor>0?this._setFadeInOutHeight(!1):this._parameters.fadeInOutHeight.stage=Xi.FINISHED,this._parameters.parallax.radiusCurvatureCorrectionFactor=.84*Math.sqrt(Math.max(a*a-this._parameters.parallax.radius*this._parameters.parallax.radius,0))/a,zi(Ki,this._parameters.parallax.anchorPointClouds,Qi),this._parameters.parallax.transform=j(),z(this._parameters.parallax.transform,this._parameters.parallax.transform,Qi[3],Qi),i&&(zi(Ki,this._parameters.parallaxNew.anchorPointClouds,Qi),this._parameters.parallaxNew.transform=j(),z(this._parameters.parallaxNew.transform,this._parameters.parallaxNew.transform,Qi[3],Qi)),g(this._parameters.cameraPositionLastFrame,e)}};var Zi,$i,Ji,Xi;function Yi(e,t,r){e.bindTexture(r.clouds.cubeMap.colorTexture,"cubeMap"),e.setUniform1f("cloudsHeight",r.parallax.cloudsHeight),e.setUniformMatrix4fv("rotationMatrixClouds",r.parallax.transform),e.setUniformMatrix4fv("rotationMatrixCloudsCrossFade",r.parallaxNew.transform),e.setUniform3fv("anchorPosition",r.parallax.anchorPointClouds),e.setUniform3fv("anchorPositionCrossFade",r.parallaxNew.anchorPointClouds),r.fadeInOut.stage!==$i.FINISHED?e.setUniform1f("totalFadeInOut",r.fadeInOutHeight.factor+Math.max(v(r.fadeInOut.factor,0,1))):e.setUniform1f("totalFadeInOut",r.fadeInOutHeight.factor+Math.max(v(r.fadeIn.factor,0,1))),e.setUniform1f("radiusCurvatureCorrectionFactor",r.parallax.radiusCurvatureCorrectionFactor),e.setUniform1i("crossFade",r.crossFade.stage),e.setUniform1f("crossFadeAnchorFactor",v(r.crossFade.factor,0,1)),e.setUniform1f("radius",r.parallax.radius),e.setUniform3fv("cameraPosition",t.eye)}re([pe({constructOnly:!0})],ki.prototype,"rctx",void 0),re([pe({constructOnly:!0})],ki.prototype,"viewingMode",void 0),re([pe({constructOnly:!0})],ki.prototype,"radius",void 0),ki=re([me("esri.views.3d.environment.CloudsComposition")],ki),function(e){e[e.FINISHED=0]="FINISHED",e[e.CHANGE_ANCHOR=1]="CHANGE_ANCHOR",e[e.FADE_IN=2]="FADE_IN"}(Zi||(Zi={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.FADE_OUT=1]="FADE_OUT",e[e.FADE_IN=2]="FADE_IN"}($i||($i={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.CROSS_FADE=1]="CROSS_FADE"}(Ji||(Ji={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.HEIGHT_FADE=1]="HEIGHT_FADE"}(Xi||(Xi={}));const Ki=h(0,0,1),Qi=Hi(),ea=c(),ta=c();function ra(e){e.fragment.uniforms.add("lastFrameColorMap","sampler2D"),e.fragment.uniforms.add("reprojectionMatrix","mat4"),e.fragment.uniforms.add("proj","mat4"),e.fragment.code.add(ar`vec2 reprojectionCoordinate(vec3 projectionCoordinate)
{
vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
reprojectedCoord.xy /= reprojectedCoord.w;
return reprojectedCoord.xy * 0.5 + 0.5;
}`)}function ia(e,t){e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("depthMapView","sampler2D"),e.fragment.uniforms.add("view","mat4"),e.fragment.uniforms.add("invResolutionHeight","float"),e.fragment.include(nr),e.include(ra),e.fragment.code.add(ar`
  const int maxSteps = ${t.highStepCount?"150;":"75;"}

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMapView, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
          return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}function aa(e,t){t.ssrEnabled&&(e.bindTexture(t.linearDepthTexture,"depthMapView"),e.setUniform2fv("nearFar",t.camera.nearFar),e.setUniformMatrix4fv("view",t.camera.viewMatrix),e.setUniform1f("invResolutionHeight",1/t.camera.height),function(e,t){e.bindTexture(t.lastFrameColorTexture,"lastFrameColorMap"),e.setUniformMatrix4fv("reprojectionMatrix",t.reprojectionMatrix),e.setUniformMatrix4fv("proj",t.camera.projectionMatrix)}(e,t))}function sa(e){e.fragment.code.add(ar`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function oa(e){e.fragment.code.add(ar`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function na(e){e.fragment.uniforms.add("texWaveNormal","sampler2D"),e.fragment.uniforms.add("texWavePerturbation","sampler2D"),e.fragment.uniforms.add("waveParams","vec4"),e.fragment.uniforms.add("waveDirection","vec2"),e.include(sa),e.fragment.code.add(ar`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture2D(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}function la(e,t){t.viewingMode===L.Global?e.vertex.code.add(ar`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):e.vertex.code.add(ar`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),t.viewingMode===L.Global?e.vertex.code.add(ar`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.vertex.code.add(ar`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}function da(e,t){e.include(tr,t),e.include(Gi),e.include(oa),t.cloudsReflectionsEnabled&&e.include(Bi),t.ssrEnabled&&e.include(ia,t),e.fragment.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),e.fragment.code.add(ar`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),e.fragment.code.add(ar`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 positionView, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.cloudsReflectionsEnabled&&e.fragment.code.add(ar`vec4 cloudsColor = crossFade == 0 ? renderCloud(reflectedWorld, position) : renderCloudCrossFade(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y*cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * (1.0 - totalFadeInOut);`),t.ssrEnabled?e.fragment.code.add(ar`vec4 viewPosition = vec4(positionView.xyz, 1.0);
vec3 viewDir = normalize(viewPosition.xyz);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view *vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection( normalize(reflected), viewPosition.xyz, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -positionView.z);
reflectionHit = clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod*0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor + reflSea * seaColorMod + specular  + foam);`):e.fragment.code.add(ar`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.cloudsReflectionsEnabled?t.ssrEnabled?e.fragment.code.add(ar`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):e.fragment.code.add(ar`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):e.fragment.code.add(ar`return waterRenderedColor;
}`)}const ca=Object.freeze({__proto__:null,build:function(e){const t=new sr;return t.include(Ye,{linearDepth:!1}),t.attributes.add(lr.POSITION,"vec3"),t.attributes.add(lr.UV0,"vec2"),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),t.vertex.uniforms.add("waterColor","vec4"),e.output!==Ke.Color&&e.output!==Ke.Alpha||(t.include(la,e),t.include(rr,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),t.fragment.uniforms.add("localOrigin","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.code.add(ar`
      void main(void) {
        if (waterColor.a < ${ar.float(Qe)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${e.output===Ke.Color?"forwardLinearDepth();":""}
      }
    `)),e.multipassTerrainEnabled&&(t.fragment.include(nr),t.include(et,e)),e.output===Ke.Alpha&&(t.include(tt,e),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add(ar`
        void main() {
          discardBySlice(vpos);
          ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),e.output===Ke.Color&&(t.include(Yt),t.include(Kt,{pbrMode:Qt.Disabled,lightingSphericalHarmonicsOrder:2}),t.include(na,e),t.include(tt,e),e.receiveShadows&&t.include(cr,e),t.include(da,e),t.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("lightingSpecularStrength","float").add("lightingEnvironmentStrength","float").add("cameraPosition","vec3").add("timeElapsed","float").add("view","mat4"),t.fragment.include(ke),t.fragment.code.add(ar`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${e.receiveShadows?ar`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),e.output===Ke.Normal&&(t.include(la,e),t.include(na,e),t.include(tt,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),t.vertex.code.add(ar`
        void main(void) {
          if (waterColor.a < ${ar.float(Qe)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.fragment.uniforms.add("timeElapsed","float"),t.fragment.code.add(ar`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`)),e.output===Ke.Draped&&(t.varyings.add("vpos","vec3"),t.vertex.code.add(ar`
        void main(void) {
          if (waterColor.a < ${ar.float(Qe)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add(ar`void main() {
gl_FragColor = waterColor;
}`)),e.output===Ke.Highlight&&(t.include(rt),t.varyings.add("vpos","vec3"),t.vertex.code.add(ar`
      void main(void) {
        if (waterColor.a < ${ar.float(Qe)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),t.include(tt,e),t.fragment.code.add(ar`void main() {
discardBySlice(vpos);
outputHighlight();
}`)),t}});class ha extends Ze{constructor(e,t,r){super(e,t,r),this._textureRepository=e.waterTextureRepository}initializeProgram(e){const t=ha.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===Se.Color,output:r.output,viewingMode:e.viewingMode,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:r.receiveShadows,pbrMode:Qt.Water,useCustomDTRExponentForWater:!0,ssrEnabled:r.useSSR,cloudsReflectionsEnabled:s("enable-feature:clouds-reflections"),highStepCount:!0,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new $e(e.rctx,i,At)}bindPass(e,t){var r,a;st(this.program,t.camera.projectionMatrix),t.multipassTerrainEnabled&&(this.program.setUniform2fv("nearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),ot(this.program,t)),this.configuration.output===Ke.Color&&(t.lighting.setUniforms(this.program,!1,!1),aa(this.program,t),s("enable-feature:clouds-reflections")&&i(t.cloudsCompositionParams)&&Yi(this.program,t.camera,t.cloudsCompositionParams)),this.configuration.output!==Ke.Color&&this.configuration.output!==Ke.Normal||(r=this.program,a=e,r.setUniform4f("waveParams",a.waveStrength,a.waveTextureRepeat,a.flowStrength,a.flowOffset),r.setUniform2f("waveDirection",a.waveDirection[0]*a.waveVelocity,a.waveDirection[1]*a.waveVelocity),this._textureRepository.bind(this.program)),this.program.setUniform4fv("waterColor",e.color),this.configuration.output===Ke.Highlight&&nt(this.program,t)}bindDraw(e){lt(this.program,e),this.program.rebindTextures(),this.configuration.output!==Ke.Color&&this.configuration.output!==Ke.Alpha||dt(this.program,e.origin,e.camera.viewInverseTransposeMatrix),this.configuration.output===Ke.Color&&hr(this.program,e),this.configuration.output!==Ke.Color&&this.configuration.output!==Ke.Alpha&&this.configuration.output!==Ke.Highlight||ct(this.program,this.configuration,e)}_setPipelineState(e){const t=this.configuration,r=e===Se.NONE,i=e===Se.FrontFace;return Mt({blending:t.output!==Ke.Normal&&t.output!==Ke.Highlight&&t.transparent?r?zt:Wt(e):null,depthTest:{func:Vt(e)},depthWrite:r?t.writeDepth&&Gt:Bt(e),colorWrite:Ut,polygonOffset:r||i?null:jt(t.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}ha.shader=new Je(ca,(()=>Promise.resolve().then((()=>ca))));class ua extends at{constructor(){super(...arguments),this.output=Ke.Color,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.useSSR=!1,this.isDraped=!1,this.transparencyPassType=Se.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}re([it({count:Ke.COUNT})],ua.prototype,"output",void 0),re([it()],ua.prototype,"receiveShadows",void 0),re([it()],ua.prototype,"slicePlaneEnabled",void 0),re([it()],ua.prototype,"transparent",void 0),re([it()],ua.prototype,"enableOffset",void 0),re([it()],ua.prototype,"writeDepth",void 0),re([it()],ua.prototype,"useSSR",void 0),re([it()],ua.prototype,"isDraped",void 0),re([it({count:Se.COUNT})],ua.prototype,"transparencyPassType",void 0),re([it()],ua.prototype,"multipassTerrainEnabled",void 0),re([it()],ua.prototype,"cullAboveGround",void 0);class pa extends ht{updateParameters(e){return this.ensureTechnique(ha,e)}setElapsedTimeUniform(e){const t=.001*this._material.animation.time;e.setUniform1f("timeElapsed",t*this._material.parameters.animationSpeed)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMappingEnabled})}_updateSSRState(e){e.ssrEnabled!==this._material.parameters.ssrEnabled&&this._material.setParameters({ssrEnabled:e.ssrEnabled})}ensureResources(e){const t=this._techniqueRep.constructionContext.waterTextureRepository;return t.ready||t.updating||t.loadTextures(e),t.ready?Ee.LOADED:Ee.LOADING}beginSlot(e){return this._output===Ke.Color&&(this._updateShadowState(e),this._updateSSRState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this._output!==Ke.Normal&&this._output!==Ke.Color||this.setElapsedTimeUniform(t.program)}}const ma={waveStrength:.06,waveTextureRepeat:32,waveDirection:fe(1,0),waveVelocity:.05,flowStrength:.015,flowOffset:-.5,animationSpeed:.35,color:[0,0,0,0],transparent:!0,writeDepth:!0,slicePlaneEnabled:!1,isDraped:!1,receiveShadows:!0,ssrEnabled:!1,...It},fa={"calm-small":{waveStrength:.005,perturbationStrength:.02,textureRepeat:12,waveVelocity:.01},"rippled-small":{waveStrength:.02,perturbationStrength:.09,textureRepeat:32,waveVelocity:.07},"slight-small":{waveStrength:.05,perturbationStrength:.07,textureRepeat:28,waveVelocity:.1},"moderate-small":{waveStrength:.075,perturbationStrength:.07,textureRepeat:24,waveVelocity:.1},"calm-medium":{waveStrength:.003125,perturbationStrength:.01,textureRepeat:8,waveVelocity:.02},"rippled-medium":{waveStrength:.035,perturbationStrength:.015,textureRepeat:12,waveVelocity:.07},"slight-medium":{waveStrength:.06,perturbationStrength:.015,textureRepeat:8,waveVelocity:.12},"moderate-medium":{waveStrength:.09,perturbationStrength:.03,textureRepeat:4,waveVelocity:.12},"calm-large":{waveStrength:.01,perturbationStrength:0,textureRepeat:4,waveVelocity:.05},"rippled-large":{waveStrength:.025,perturbationStrength:.01,textureRepeat:8,waveVelocity:.11},"slight-large":{waveStrength:.06,perturbationStrength:.02,textureRepeat:3,waveVelocity:.13},"moderate-large":{waveStrength:.14,perturbationStrength:.03,textureRepeat:2,waveVelocity:.15}};class ga extends Dt{constructor(e){super(e,ma),this._techniqueConfig=new ua,this.animation=new Mi}getTechniqueConfig(e,t){return this._techniqueConfig.output=e,this._techniqueConfig.writeDepth=this.parameters.writeDepth,this._techniqueConfig.receiveShadows=this.parameters.receiveShadows,this._techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this._techniqueConfig.transparent=this.parameters.transparent,this._techniqueConfig.useSSR=this.parameters.ssrEnabled,this._techniqueConfig.isDraped=this.parameters.isDraped,this._techniqueConfig.transparencyPassType=t.transparencyPassType,this._techniqueConfig.enableOffset=t.camera.relativeElevation<qt,this._techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this._techniqueConfig.cullAboveGround=t.cullAboveGround,this._techniqueConfig}update(e){const t=Math.min(e.camera.relativeElevation,e.camera.distance);this.animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*t<va;const r=this.animation.advance(e);return this.animation.enabled&&r}intersect(e,t,r,i,a,s,o){wt(e,t,i,a,s,void 0,o)}requiresSlot(e,t){switch(X(t)){case Ke.Normal:return e===Be.DRAPED_WATER;case Ke.Color:if(this.parameters.isDraped)return e===Be.DRAPED_MATERIAL;break;case Ke.Highlight:return e===Be.OPAQUE_MATERIAL||e===Be.DRAPED_MATERIAL}let r=Be.OPAQUE_MATERIAL;return this.parameters.transparent&&(r=this.parameters.writeDepth?Be.TRANSPARENT_MATERIAL:Be.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===r}createGLMaterial(e){if(e.output===Ke.Color&&this.parameters.isDraped)return e.output=Ke.Draped,new pa(e);switch(e.output){case Ke.Color:case Ke.Normal:case Ke.Highlight:case Ke.Alpha:return new pa(e)}return null}createBufferWriter(){return new Y(K)}}const va=35e3;class _a{constructor(e){this.first=e.from,this.count=e.to-e.from}}class ya{constructor(e=0,t=0){this.from=e,this.to=t}}class Ta extends ya{constructor(e,t,r,i,a,s){super(t,r),this.id=e,this.isVisible=i,this.hasHighlights=a,this.hasOccludees=s}}function Sa(e){return Array.from(e.values()).sort(Ea)}function Ea(e,t){return e.from===t.from?e.to-t.to:e.from-t.from}function Ra(e,t){if(0===e.length)return void e.push(new _a(t));const r=e[e.length-1];if(a=t,(i=r).first+i.count>=a.from){const e=t.from-r.first+t.to-t.from;r.count=e}else e.push(new _a(t));var i,a}class Ca{constructor(e,t){this._pool=e,this._size=0,this._buffer=e.newBuffer(xa(t))}dispose(){this._buffer=this._pool.deleteBuffer(this._buffer),this._size=0}release(){this.erase(0,this._size),this.dispose()}get vao(){return this._buffer.vao}get array(){return this._buffer.array}get size(){return this._size}grow(e){this._resize(this._size+e,!0).dispose()}alloc(e){return this._resize(e,!1)}_resize(e,t){let r;const i=function(e,t,r){if(t<=r)return e>=r?e:xa(Math.max(2*e,r));if(e<=2*r)return e;return xa(r)}(this._buffer.length,this._size,e);if(this._buffer.length!==i){const e=this._pool.newBuffer(i);t&&(e.array.set(this._buffer.array.subarray(0,Math.min(this._size,i))),e.vao.vertexBuffers.geometry.setSubData(e.array,0,0,e.array.byteLength)),r=this._buffer,this._buffer=e}const a=this._size;return this._size=e,r?{dispose:()=>{r.array.fill(0,0,a),this._pool.deleteBuffer(r)},copy:(e,t,i)=>this._buffer.array.set(r.array.subarray(t,i),e),hasNewBuffer:!0}:{dispose:()=>{},copy:(e,t,r)=>{e!==t&&this._buffer.array.copyWithin(e,t,r)},hasNewBuffer:!1}}erase(e,t){this._buffer.array.fill(0,e,t)}}function xa(e){return 65536*Math.ceil(e/65536)}class ba{constructor(e,t,r,i){this.vao=new mr(e,t,{geometry:r},{geometry:fr.createVertex(e,He.STATIC_DRAW)}),this.array=new Float32Array(i),this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}dispose(){this.vao.dispose(!0)}get length(){return this.array.length}}const Oa=pr+1;class Aa{constructor(e,t,r){this._rctx=e,this._locations=t,this._layout=r,this._cache=e.newCache(`MergedRenderer pool ${ce()}`,Ia)}dispose(){this._cache.destroy()}newBuffer(e){const t=e.toString(),r=this._cache.pop(t);if(i(r)){const e=r.pop();return r.length>0&&this._cache.put(t,r,e.array.byteLength*r.length,Oa),e}return new ba(this._rctx,this._locations,this._layout,e)}deleteBuffer(e){const t=e.array.byteLength,r=e.array.length.toString(),a=this._cache.pop(r);return i(a)?(a.push(e),this._cache.put(r,a,t*a.length,-1)):this._cache.put(r,[e],t,-1),null}}function Ia(e,t){if(t===ur.ALL)return void e.forEach((e=>e.dispose()));const r=e.pop(),i=e.length*r.array.byteLength;return r.dispose(),i}class Da{constructor(e,t,r){this._rctx=e,this._materialRepository=t,this._material=r,this.type="MergedRenderer",this._dataByOrigin=new Map,this._renderCommandData=new le,this._hasHighlights=!1,this._hasOccludees=!1,this._glMaterials=new Q(this._material,this._materialRepository),this._bufferWriter=r.createBufferWriter(),this._bufferPool=new Aa(e,r.vertexAttributeLocations,Ot(this._bufferWriter.vertexBufferLayout))}dispose(){this._glMaterials.destroy(),this._dataByOrigin.forEach((e=>e.buffer.dispose())),this._dataByOrigin.clear(),this._bufferPool.dispose()}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&this._material instanceof ga}get rendersOccluded(){return!this.isEmpty&&this._material.renderOccluded!==Pt.Occlude}modify(e){this._updateGeometries(e.updates),this._addAndRemoveGeometries(e.adds,e.removes),this._updateRenderCommands()}_addAndRemoveGeometries(e,t){const r=this._bufferWriter,i=r.vertexBufferLayout.stride/4,a=this._dataByOrigin,s=function(e,t){const r=new Map;for(const t of e)Pa(r,t,!0);for(const e of t)Pa(r,e,!1);return r}(e,t);s.forEach(((e,t)=>{s.delete(t);const o=e.toAdd.reduce(((e,t)=>e+r.elementCount(t.data)),0);let n=a.get(t);if(null==n)Lt(0===e.toRemove.length),n=new Ma(e.origin,new Ca(this._bufferPool,o*i)),a.set(t,n);else if(0===e.toAdd.length&&n.instances.size===e.toRemove.length)return n.buffer.dispose(),void a.delete(t);let l=0;n.instances.forEach((e=>l+=e.to-e.from));const d=e.toRemove.reduce(((e,t)=>e+r.elementCount(t.data)),0),c=n.buffer.size,h=(l+o-d)*i,u=Ua;if(h<c/2?this._removeAndRebuild(n,e.toRemove,i,h,u):e.toRemove.length>0&&this._remove(n,e.toRemove,i,u),e.toAdd.length>0){const t=za;Ft(t,-e.origin[0],-e.origin[1],-e.origin[2]),this._add(n,e.toAdd,i,t,u)}const p=n.buffer.vao.vertexBuffers.geometry;Na(u),u.forAll((({from:e,to:t})=>{if(e<t){const r=n.buffer.array,i=4,a=e*i,s=t*i;p.setSubData(r,a,a,s)}})),u.clear(),n.drawCommandsDirty=!0}))}_updateGeometries(e){const t=this._bufferWriter,r=t.vertexBufferLayout.stride/4;for(const i of e){const e=i.renderGeometry,a=this._dataByOrigin.get(e.origin.id),s=a&&a.instances.get(e.id);if(!s)return;const o=i.updateType;if(o&Ni.State.VISIBILITIES&&(s.isVisible=e.instanceParameters.visible),o&(Ni.State.HIGHLIGHTS|Ni.State.VISIBILITIES)){const t=e.instanceParameters.visible;s.hasHighlights=!!e.instanceParameters.highlights&&t}if(o&Ni.State.OCCLUDEES&&(s.hasOccludees=!!e.instanceParameters.occludees),o&(Ni.State.VERTEXATTRS|Ni.State.TRANSFORMATION)){const{array:i,vao:o}=a.buffer;vr(e,Wa,Va),t.write({transformation:Wa,invTranspTransformation:Va},e.data,t.vertexBufferLayout.createView(i.buffer),s.from),Lt(s.from+t.elementCount(e.data)===s.to,"material VBO layout has changed"),o.vertexBuffers.geometry.setSubData(i,s.from*r*4,s.from*r*4,s.to*r*4)}a.drawCommandsDirty=!0}}_updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((e=>{e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,ne(e.instances,(t=>(t.isVisible?(t.hasHighlights&&(this._hasHighlights=!0,e.hasHighlights=!0),t.hasOccludees&&(this._hasOccludees=!0,e.hasOccludees=!0)):e.hasHiddenInstances=!0,e.hasHiddenInstances&&e.hasHighlights&&e.hasOccludees)))}));const e=e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.drawCommandsShadowHighlightRest=null,0===e.instances.size)return;if(!La(e)){const t=this._bufferWriter.vertexBufferLayout.stride,r=4*e.buffer.size/t;return void(e.drawCommandsDefault=[{first:0,count:r}])}const t=Sa(e.instances);e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[],e.drawCommandsShadowHighlightRest=[];for(const r of t)r.isVisible&&(r.hasOccludees?Ra(e.drawCommandsOccludees,r):Ra(e.drawCommandsDefault,r),r.hasHighlights?Ra(e.drawCommandsHighlight,r):Ra(e.drawCommandsShadowHighlightRest,r))};this._dataByOrigin.forEach((t=>{t.drawCommandsDirty&&(e(t),t.drawCommandsDirty=!1)}))}updateAnimation(e){return this._material.update(e)}requiresSlot(e,t){return null==e||this._material.requiresSlot(e,t)}render(e,t,a){if(!this.requiresSlot(e,t))return!1;const s=t===Ge.MATERIAL_HIGHLIGHT||t===Ge.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT;if(s&&!this._hasHighlights)return!1;const o=t===Ge.MATERIAL_DEPTH_SHADOWMAP_DEFAULT,n=!(s||o);if(this._dataByOrigin.forEach((e=>{if(s&&!e.hasHighlights)return;const t=(s?e.drawCommandsHighlight:o&&La(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault)||null,r=n&&e.drawCommandsOccludees||null;(i(t)||i(r))&&this._renderCommandData.push(new Ha(e.origin,e.buffer,t,r))})),0===this._renderCommandData.length)return!1;const l=this._rctx,d=this._glMaterials.load(l,t);if(r(d))return this._renderCommandData.clear(),!1;const c=d.beginSlot(a);return l.useTechnique(c,e,!1),d.bind(a,c),this._renderCommandData.forAll((({origin:t,buffer:r,renderCommands:s,occludeeCommands:o})=>{a.origin=t,c.bindDraw(a),c.ensureAttributeLocations(r.vao),l.bindVAO(r.vao);const n=c.primitiveType;i(s)&&this._renderCommands(l,n,s),i(o)&&(c.bindPipelineState(l,e,!0),this._renderCommands(l,n,o),c.bindPipelineState(l,e,!1))})),this._renderCommandData.clear(),!0}_renderCommands(e,t,r){for(let i=0;i<r.length;i++)e.drawArrays(t,r[i].first,r[i].count)}_removeAndRebuild(e,t,r,i,a){for(const r of t)e.instances.delete(r.id);const s=Sa(e.instances);e.instances.clear();const o=e.buffer.size,n=e.buffer.alloc(i);let l=0;for(const t of s){const i=t.from*r,a=t.to*r;n.copy(l,i,a),t.from=l/r,l+=a-i,t.to=l/r,e.instances.set(t.id,t)}a.push(new ya(0,n.hasNewBuffer?e.buffer.array.length:o)),n.dispose(),e.buffer.erase(l,a.back().to),e.holes.clear()}_remove(e,t,r,i){for(const a of t){const t=a.id,s=e.instances.get(t),o=s.from*r,n=s.to*r;e.buffer.erase(o,n),e.holes.push(new ya(s.from,s.to)),e.instances.delete(t),i.push(new ya(o,n))}Na(e.holes)}_add(e,t,a,s,o){if(0===t.length)return;const n=this._bufferWriter;let l=n.vertexBufferLayout.createView(e.buffer.array.buffer);const d=e.holes.length>0;let c=Number.MAX_SAFE_INTEGER,h=Number.MIN_SAFE_INTEGER;for(const u of t){const t=i(u.transformation)?W(Wa,s,u.transformation):s;U(Va,t);const p=V(Va,Va),m=n.elementCount(u.data),f=m*a;let g=Fa(e.holes,m);r(g)&&(g=e.buffer.size/a,e.buffer.grow(f),l=n.vertexBufferLayout.createView(e.buffer.array.buffer)),n.write({transformation:t,invTranspTransformation:p},u.data,l,g);const v=u.instanceParameters.visible,_=!!u.instanceParameters.highlights&&v,y=!!u.instanceParameters.occludees,T=new Ta(u.id,g,g+m,v,_,y);Lt(null==e.instances.get(u.id)),e.instances.set(u.id,T),d?o.push(new ya(T.from*a,T.to*a)):(c=Math.min(T.from,c),h=Math.max(T.to,h))}d||o.push(new ya(c*a,h*a))}get test(){return{material:this._material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}}class wa{constructor(e){this.origin=e,this.toAdd=new Array,this.toRemove=new Array}}function Pa(e,t,i){const a=t.origin;if(r(a))return;let s=e.get(a.id);null==s&&(s=new wa(a.vec3),e.set(a.id,s)),i?s.toAdd.push(t):s.toRemove.push(t)}function La(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}function Fa(e,t){let r;if(!e.some((e=>!(e.to-e.from<t)&&(r=e,!0))))return null;const i=r.from;return r.from+=t,r.from>=r.to&&e.removeUnordered(r),i}function Na(e){const t=new Map;e.forAll((e=>t.set(e.from,e)));let r=!0;for(;r;)r=!1,e.forEach((i=>{const a=t.get(i.to);a&&(i.to=a.to,t.delete(a.from),e.removeUnordered(a),r=!0)}))}class Ma{constructor(e,t){this.origin=e,this.buffer=t,this.instances=new Map,this.holes=new le({deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!1}}class Ha{constructor(e,t,r,i){this.origin=e,this.buffer=t,this.renderCommands=r,this.occludeeCommands=i}}const Ua=new le({deallocator:null}),za=j(),Wa=j(),Va=j();let Ga=class extends ie{constructor(){super(...arguments),this._pending=new Ba,this._changes=new Di,this._materialRenderers=new Map,this._sortedMaterialRenderers=new le,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return ne(this._materialRenderers,(e=>e.rendersOccluded))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=Li(this._changes);let t=!1,r=!1,i=!1;return e.forEach(((e,a)=>{let s=this._materialRenderers.get(a);if(!s&&e.adds.length>0&&(s=new Da(this.rctx,this.materialRepository,a),this._materialRenderers.set(a,s),t=!0,r=!0,i=!0),!s)return;const o=r||s.hasHighlights,n=i||s.hasWater;s.modify(e),r=r||o!==s.hasHighlights,i=i||n!==s.hasWater,s.isEmpty&&(this._materialRenderers.delete(a),s.dispose(),t=!0)})),this._changes.clear(),t&&this._updateSortedMaterialRenderers(),r&&(this._hasHighlights=ne(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=ne(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}add(e){if(0===e.length)return;const t=this._pending.empty;for(const t of e)this._pending.adds.add(t);t&&this.notifyChange("updating")}remove(e){const t=this._pending.empty;for(const t of e)this._pending.adds.has(t)?(this._pending.removed.add(t),this._pending.adds.delete(t)):this._pending.removed.has(t)||this._pending.removes.add(t);t&&!this._pending.empty&&this.notifyChange("updating")}modify(e,t){const r=0===this._changes.updates.length;for(const r of e){const e=this._changes.updates.pushNew();e.renderGeometry=r,e.updateType=t}r&&this._changes.updates.length>0&&this.notifyChange("updating")}updateAnimation(e){let t=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:r})=>t=r.updateAnimation(e)||t)),t}render(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const i=this._sortedMaterialRenderers.data[r];i.material.shouldRender(e)&&i.materialRenderer.render(t.slot,e.pass,t)}}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let e=0;e<this._changes.updates.length;){const t=this._changes.updates.data[e];this._pending.has(t.renderGeometry)?this._changes.updates.removeUnorderedIndex(e):e++}this._pending.clear()}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};re([pe()],Ga.prototype,"rctx",void 0),re([pe()],Ga.prototype,"materialRepository",void 0),re([pe()],Ga.prototype,"updating",null),Ga=re([me("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],Ga);class Ba{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}var ja;!function(e){e[e.GaussianBlur=0]="GaussianBlur",e[e.KernelDensity=1]="KernelDensity"}(ja||(ja={}));const qa=Object.freeze({__proto__:null,get HeatmapMode(){return ja},build:function(e){const t=new sr,{mode:r,isAttributeDriven:i}=e;return t.attributes.add(lr.POSITION,"vec3"),t.attributes.add(lr.UV0,"vec2"),e.isAttributeDriven&&(t.attributes.add(lr.FEATUREATTRIBUTE,"float"),t.varyings.add("attributeValue","float")),t.varyings.add("unitCirclePos","vec2"),t.vertex.uniforms.add("radius","float"),t.vertex.uniforms.add("proj","mat4"),t.vertex.uniforms.add("view","mat4"),t.vertex.code.add(ar`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${lr.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${i?ar`attributeValue = ${lr.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `),r===ja.KernelDensity?t.fragment.code.add(ar`
      void main() {
        float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
        if (radiusRatioSquared > 1.0) {
          discard;
        }

        float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
        float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${i?ar` * attributeValue`:""};
        gl_FragColor = vec4(density);
      }
    `):r===ja.GaussianBlur&&(t.fragment.uniforms.add("kernel","sampler2D"),t.fragment.code.add(ar`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      vec2 uv = abs(unitCirclePos);
      vec2 uvX = vec2(uv.x, 0.5);
      vec2 uvY = vec2(uv.y, 0.5);
      float intensity = texture2D(kernel, uvX).r * texture2D(kernel, uvY).r${i?ar` * attributeValue`:""};
      gl_FragColor = vec4(intensity);
    }
  `)),t}});var ka;!function(e){e[e.Screen=0]="Screen",e[e.World=1]="World"}(ka||(ka={}));class Za extends Ze{constructor(e,t,r){super(e,t,r),this._kernelBlurRadius=1;const{R32F:i,textureFloatLinear:a}=e.rctx.capabilities.textureFloat,s=null!=i;this._kernelTextureChannels=s?1:4,this._floatInterpolationDisabled=!a;const o={target:Ie.TEXTURE_2D,pixelFormat:s?De.RED:De.RGBA,internalFormat:s?Ue.R32F:De.RGBA,dataType:we.FLOAT,samplingMode:Le.NEAREST,wrapMode:Pe.CLAMP_TO_EDGE,width:1,height:1};this._kernel=new Sr(e.rctx,o)}initializeProgram(e){const t=Za.shader.get().build({isAttributeDriven:this.configuration.isAttributeDriven,mode:this.configuration.mode});return new $e(e.rctx,t,At)}initializePipeline(){return Mt({blending:Ht(Fe.ONE,Fe.ONE,ze.ADD),colorWrite:Ut,depthTest:null,depthWrite:null})}bindPass(e,t){const{camera:r}=t,{mode:i}=this.configuration;switch(st(this.program,r.projectionMatrix),i){case ja.KernelDensity:this._bindKernelDensityPass(e,t);break;case ja.GaussianBlur:this._bindGaussianBlurPass(e,t)}}bindDraw(e){lt(this.program,e)}_bindKernelDensityPass({searchRadius:e,resolutionForScale:t},{camera:r,screenToWorldRatio:i}){0!==t&&(e/=i/t),this.program.setUniform1f("radius",e*r.pixelRatio/r.fullViewport[2])}_bindGaussianBlurPass({searchRadius:e,resolutionForScale:t},{camera:r,screenToWorldRatio:i}){const a=Math.round(e),s=3*(0===t?a:a*t/i);0===t||this._floatInterpolationDisabled?this._kernel.setSamplingMode(Le.NEAREST):this._kernel.setSamplingMode(Le.LINEAR),this._kernelBlurRadius!==a&&this._recomputeKernel(a),this.program.setUniform1f("radius",2*s*r.pixelRatio/r.fullViewport[2]),this.program.bindTexture(this._kernel,"kernel")}_recomputeKernel(e){const t=Tr(e),r=Math.ceil(t.length/2),i=this._kernelTextureChannels,a=new Float32Array(r*i);for(let e=0;e<r;++e){const s=t[r-1-e];for(let t=0;t<i;++t)a[e*i+t]=s}this._kernel.resize(r,1),this._kernel.setData(a),this._kernelBlurRadius=e}destroy(){this._kernel=t(this._kernel),super.destroy()}}Za.shader=new Je(qa,(()=>Promise.resolve().then((()=>qa))));class $a extends at{constructor(){super(...arguments),this.isAttributeDriven=!1,this.mode=ja.GaussianBlur}}re([it()],$a.prototype,"isAttributeDriven",void 0),re([it()],$a.prototype,"mode",void 0);const Ja={searchRadius:128,resolutionForScale:0,colorRampData:null,isAttributeDriven:!1,minDensity:0,maxDensity:100,fieldTotal:0,pixelRatio:1,...It};class Xa extends Dt{constructor(e){super(e,Ja),this._techniqueConfig=new $a}requiresSlot(e,t){return e===Be.DRAPED_MATERIAL&&t===Ge.MATERIAL}getTechniqueConfig(){return this._techniqueConfig.isAttributeDriven=this.parameters.isAttributeDriven,this._techniqueConfig}createGLMaterial(e){return new Ya(e)}intersect(){}createBufferWriter(){return new Ka(this.parameters.isAttributeDriven?es:Qa)}}class Ya extends ht{constructor(e){super(e)}beginSlot(e){return this.updateParameters(e)}updateParameters(e){return this.ensureTechnique(Za,e)}bind(e,t){t.bindPass(this._material.parameters,e)}}class Ka{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(lr.POSITION).length*ts}write(e,t,r,i){ut(t.indices.get(lr.POSITION),t.vertexAttributes.get(lr.POSITION).data,e.transformation,r.position,i,ts);const a=t.indices.get(lr.POSITION).length,s=r.uv0;let o=i;for(let e=0;e<a;++e)s.setValues(o++,-1,-1),s.setValues(o++,1,-1),s.setValues(o++,1,1),s.setValues(o++,1,1),s.setValues(o++,-1,1),s.setValues(o++,-1,-1);const n="featureAttribute"in r?r.featureAttribute:null;n&&pt(t.indices.get(lr.FEATUREATTRIBUTE),t.vertexAttributes.get(lr.FEATUREATTRIBUTE).data,n,i,ts)}}const Qa=yr().vec3f(lr.POSITION).vec2f(lr.UV0),es=Qa.clone().f32(lr.FEATUREATTRIBUTE),ts=6;const rs=Object.freeze({__proto__:null,build:function(e){const t=new sr,{mode:r}=e;return t.include(Er),t.include(mt,{alphaDiscardMode:Re.Blend}),t.fragment.uniforms.add("densityMap","sampler2D"),t.fragment.uniforms.add("tex","sampler2D"),t.fragment.uniforms.add("densityNormalizer","float"),t.fragment.uniforms.add("minDensity","float"),r===ja.KernelDensity&&t.fragment.uniforms.add("densityMultiplier","float"),t.fragment.code.add(ar`
    void main() {
      float density = texture2D(densityMap, uv).r${r===ja.KernelDensity?ar` * densityMultiplier`:""};
      float densityRatio = (density - minDensity) * densityNormalizer;

      vec4 color = texture2D(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));

      discardOrAdjustAlpha(color);
      gl_FragColor = color;
    }
  `),t},get HeatmapMode(){return ja}});class is extends Ze{constructor(e,t){super(e,t,(()=>this.destroy()))}initializeProgram(e){const t=is.shader.get().build({mode:this.configuration.mode});return new $e(e.rctx,t,At)}initializePipeline(e){return Mt({blending:zt,colorWrite:Ut,depthTest:null,depthWrite:null})}bindPass(e,t){const{densityMap:r,colorRamp:i,maxDensity:a,minDensity:s,searchRadius:o}=e;this.program.bindTexture(r,"densityMap"),this.program.bindTexture(i,"tex"),this.configuration.mode===ja.KernelDensity&&this.program.setUniform1f("densityMultiplier",3/(o*o*Math.PI)),this.program.setUniform1f("densityNormalizer",1/(a-s)),this.program.setUniform1f("minDensity",s)}get primitiveType(){return Me.TRIANGLE_STRIP}}is.shader=new Je(rs,(()=>Promise.resolve().then((()=>rs))));class as extends at{constructor(){super(...arguments),this.mode=ja.GaussianBlur}}re([it()],as.prototype,"mode",void 0);let ss=class extends Ga{constructor(){super(...arguments),this.type="draped-heatmap"}initialize(){super.initialize();const e={colorTarget:Oe.TEXTURE,depthStencilTarget:Ae.NONE,width:0,height:0},{capabilities:t}=this.rctx,{R32F:r}=t.colorBufferFloat,{textureFloatLinear:i}=t.textureFloat,a=null!=r,s={target:Ie.TEXTURE_2D,pixelFormat:a?De.RED:De.RGBA,internalFormat:a?Ue.R32F:De.RGBA,dataType:we.FLOAT,samplingMode:i?Le.LINEAR:Le.NEAREST,wrapMode:Pe.CLAMP_TO_EDGE,width:0,height:0};this._densityMap=new Ve(this.rctx,e,s),this._quad=Xe(this.rctx);const o={target:Ie.TEXTURE_2D,pixelFormat:De.RGBA,dataType:we.UNSIGNED_BYTE,samplingMode:Le.LINEAR,wrapMode:Pe.CLAMP_TO_EDGE,width:1,height:1},n=new Sr(this.rctx,o,new Uint8ClampedArray(4));this._colorRamp=n,this._technique=new is({rctx:this.rctx,viewingMode:L.Local},new as),this._heatmapParameters={colorRamp:n,densityMap:this._densityMap.colorTexture,searchRadius:1,minDensity:0,maxDensity:100,fieldTotal:0}}destroy(){this._technique=a(this._technique),this._densityMap=t(this._densityMap),this._quad=t(this._quad),this._colorRamp=t(this._colorRamp)}get hasHighlights(){return!1}get hasWater(){return!1}get rendersOccluded(){return!1}get _heatmapDensityMaterialRenderers(){return this._sortedMaterialRenderers.filter(os)}add(e){super.add(e)}remove(e){super.remove(e)}render(e,t){const r=this._heatmapDensityMaterialRenderers,a=r.length;if(a<1)return;const s=this.rctx.getBoundFramebufferObject(),o=this.rctx.getViewport(),n=r[0].material.parameters,{pixelRatio:l}=n,d=Math.ceil(o.width*l),c=Math.ceil(o.height*l);this._densityMap.resize(d,c),this.rctx.bindFramebuffer(this._densityMap),this.rctx.setViewport(0,0,d,c),this.rctx.clear(We.COLOR_BUFFER_BIT);let h=!1;for(let i=0;i<a;i++){const a=r[i];a.material.shouldRender(e)&&(h=h||a.materialRenderer.render(t.slot,e.pass,t))}if(this.rctx.bindFramebuffer(s),this.rctx.setViewport(o.x,o.y,o.width,o.height),!h)return;const{searchRadius:u,minDensity:p,maxDensity:m,fieldTotal:f,colorRampData:g}=n,v=this._heatmapParameters;if(v.searchRadius=u,v.fieldTotal=f,v.searchRadius=u,v.minDensity=p,v.maxDensity=m,i(g)&&g!==this._colorRampData){const{colorRamp:e}=v,t=e.descriptor.width,r=g.length/4;r!==t&&e.resize(r,1),e.setData(g),this._colorRampData=g}this.rctx.bindVAO(this._quad),this.rctx.useProgram(this._technique.program),this._technique.bindPipelineState(this.rctx),this._technique.bindPass(v,t),this.rctx.drawArrays(this._technique.primitiveType,0,gr(this._quad,"geometry"))}};function os(e){return e.material instanceof Xa}ss=re([me("esri.views.3d.webgl-engine.lib.DrapedHeatmapRenderer")],ss);const ns=oe.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository");class ls{constructor(e){this._glMaterial=e,this.refCnt=0,this._glMaterial=e}incRefCnt(){++this.refCnt}decRefCnt(){--this.refCnt,Lt(this.refCnt>=0)}getRefCnt(){return this.refCnt}get glMaterial(){return this._glMaterial}}class ds{constructor(e,t,r,i){this._textureRepository=e,this._techniqueRepository=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new je}dispose(){this._textureRepository.dispose()}acquire(e,t){this._ownMaterial(e);let i=this._id2glMaterialRef.get(t,e.id);if(r(i)){const r=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:t});i=new ls(r),this._id2glMaterialRef.set(t,e.id,i)}return i.incRefCnt(),i.glMaterial}release(e,r){const a=this._id2glMaterialRef.get(r,e.id);i(a)&&(a.decRefCnt(),0===a.getRefCnt()&&(t(a.glMaterial),this._id2glMaterialRef.delete(r,e.id)))}_ownMaterial(e){i(e.repository)&&e.repository!==this&&ns.error("Material is already owned by a different material repository"),e.repository=this}}const cs={vvSizeEnabled:!1,vvSizeMinSize:Nr(1,1,1),vvSizeMaxSize:Nr(100,100,100),vvSizeOffset:Nr(0,0,0),vvSizeFactor:Nr(1,1,1),vvSizeValue:Nr(1,1,1),vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvOpacityEnabled:!1,vvOpacityValues:[0,0,0,0,0,0,0,0],vvOpacityOpacities:[1,1,1,1,1,1,1,1],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Fr()};function hs(e,t){e.vertex.uniforms.add("intrinsicWidth","float"),t.vvSize?(e.attributes.add(lr.SIZEFEATUREATTRIBUTE,"float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(ar`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(lr.SIZE,"float"),e.vertex.code.add(ar`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(lr.OPACITYFEATUREATTRIBUTE,"float"),e.vertex.constants.add("vvOpacityNumber","int",8),e.vertex.code.add(ar`uniform float vvOpacityValues[vvOpacityNumber];
uniform float vvOpacityOpacities[vvOpacityNumber];
float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):e.vertex.code.add(ar`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.attributes.add(lr.COLORFEATUREATTRIBUTE,"float"),e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(ar`uniform float vvColorValues[vvColorNumber];
uniform vec4 vvColorColors[vvColorNumber];
vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(e.attributes.add(lr.COLOR,"vec4"),e.vertex.code.add(ar`vec4 getColor(){
return applyOpacity(color);
}`))}function us(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?function(e,t){const r=!(t.draped&&t.stipplePreferContinuous);e.fragment.include(or),e.vertex.uniforms.add("stipplePatternPixelSize","float"),e.vertex.uniforms.add("pixelRatio","float"),t.draped?e.vertex.uniforms.add("worldToScreenRatio","float"):(e.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),e.vertex.uniforms.add("cameraPosition","vec3"),e.vertex.code.add(ar`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`));e.varyings.add("vStippleDistance","float"),t.stippleRequiresClamp&&e.varyings.add("vStippleDistanceLimits","vec2");t.stippleRequiresStretchMeasure&&e.varyings.add("vStipplePatternStretch","float");e.vertex.code.add(ar`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${ps};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),e.vertex.code.add(ar`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),e.vertex.code.add(ar`
    if (segmentLengthPseudoScreen >= ${r?"patternLength":"1e4"}) {
  `),e.vertex.code.add(ar`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${t.stippleRequiresStretchMeasure?ar`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),e.fragment.uniforms.add("stipplePatternSDFNormalizer","float"),e.fragment.uniforms.add("stipplePatternTextureSize","float"),e.fragment.uniforms.add("stipplePatternPixelSizeInv","float"),t.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4");e.fragment.code.add(ar`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`),e.fragment.code.add(ar`
    float getStippleSDF(out bool isClamped) {
      ${t.stippleRequiresClamp?ar`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:ar`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${t.stippleScaleWithLineWidth?ar`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${t.stippleRequiresStretchMeasure?ar`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:ar`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${t.stippleScaleWithLineWidth?ar`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:ar`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),t.stippleOffColorEnabled?e.fragment.code.add(ar`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`):e.fragment.code.add(ar`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}(e,t):function(e){e.fragment.code.add(ar`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}(e)}const ps=ar.float(.4);var ms;!function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"}(ms||(ms={}));const fs=Object.freeze({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:1,get CapType(){return ms},build:function(e){const t=new sr,r=e.capType!==ms.BUTT,i=e.capType===ms.ROUND,a=e.stippleEnabled&&i,s=e.falloffEnabled||a,o=e.innerColorEnabled||i,n=e.stippleEnabled&&e.stippleScaleWithLineWidth||i,l=e.stippleEnabled&&e.stippleScaleWithLineWidth,d=e.stippleEnabled||i;return t.include(er),t.include(hs,e),t.include(us,{...e,stippleRequiresStretchMeasure:!0}),e.output===Ke.Depth&&t.include(ft,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("nearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2").add("inverseProjectionMatrix","mat4"),t.vertex.constants.add("LARGE_HALF_FLOAT","float",65500),t.attributes.add(lr.POSITION,"vec3"),t.attributes.add(lr.SUBDIVISIONFACTOR,"float"),t.attributes.add(lr.UV0,"vec2"),t.attributes.add(lr.AUXPOS1,"vec3"),t.attributes.add(lr.AUXPOS2,"vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),n&&t.varyings.add("vLineWidth","float"),l&&t.varyings.add("vLineSizeInv","float"),o&&t.varyings.add("vLineDistance","float"),s&&t.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&t.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(t.fragment.uniforms.add("innerColor","vec4"),t.fragment.uniforms.add("innerWidth","float")),i&&(t.varyings.add("vSegmentSDF","float"),t.varyings.add("vReverseSegmentSDF","float")),t.vertex.code.add(ar`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),t.vertex.code.add(ar`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`),t.vertex.code.add(ar`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${e.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),t.vertex.code.add(ar`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${n?ar`vLineWidth = lineWidth;`:""}
      ${l?ar`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),d&&t.vertex.code.add(ar`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${i?ar`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),t.vertex.code.add(ar`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?t.vertex.code.add(ar`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?ar`min(1.0, subdivisionFactor * ${ar.float(1.5)})`:ar`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):t.vertex.code.add(ar`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`),t.vertex.code.add(ar`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${r?ar`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),t.vertex.code.add(ar`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${s||o?ar`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${o?ar`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${s?ar`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),i&&t.vertex.code.add(ar`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped||t.vertex.code.add(ar`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),t.vertex.code.add(ar`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?t.vertex.code.add(ar`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):t.vertex.code.add(ar`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),t.vertex.code.add(ar`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),t.vertex.code.add(ar`
      // Convert back into NDC
      pos.xy = (pos.xy / screenSize) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
    }
  }
  `),e.multipassTerrainEnabled&&(t.fragment.include(nr),t.include(et,e)),t.include(tt,e),t.fragment.uniforms.add("intrinsicColor","vec4"),t.fragment.include(ke),t.fragment.code.add(ar`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.wireframe?t.fragment.code.add(ar`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(i&&t.fragment.code.add(ar`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${ar.float(Qe)}) {
        discard;
      }
    `),a?t.fragment.code.add(ar`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${ar.float(Qe)}, stippleCoverage);
      `):t.fragment.code.add(ar`float stippleAlpha = getStippleAlpha();`),t.fragment.code.add(ar`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&t.fragment.code.add(ar`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),t.fragment.code.add(ar`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&t.fragment.code.add(ar`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),t.fragment.code.add(ar`
    if (finalColor.a < ${ar.float(Qe)}) {
      discard;
    }

    ${e.output===Ke.Alpha?ar`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===Ke.Color?ar`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===Ke.Color&&e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===Ke.Highlight?ar`gl_FragColor = vec4(1.0);`:""}
    ${e.output===Ke.Depth?ar`outputDepth(linearDepth);`:""}
  }
  `),t}}),gs=new Map([[lr.POSITION,0],[lr.SUBDIVISIONFACTOR,1],[lr.UV0,2],[lr.AUXPOS1,3],[lr.AUXPOS2,4],[lr.SIZE,6],[lr.SIZEFEATUREATTRIBUTE,6],[lr.COLOR,5],[lr.COLORFEATUREATTRIBUTE,5],[lr.OPACITYFEATUREATTRIBUTE,7]]);class vs extends Ze{constructor(e,t,r){super(e,t,r),this.stippleTextureRepository=e.stippleTextureRepository}get stippleEnabled(){return this.configuration.stippleEnabled&&this.configuration.output!==Ke.Highlight}initializeProgram(e){const t=vs.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===Se.Color,output:r.output,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,draped:r.draped,stippleEnabled:this.stippleEnabled,stippleOffColorEnabled:r.stippleOffColorEnabled,stippleRequiresClamp:!0,stippleScaleWithLineWidth:r.stippleScaleWithLineWidth,stipplePreferContinuous:r.stipplePreferContinuous,capType:r.capType,roundJoins:r.roundJoins,vvColor:r.vvColor,vvSize:r.vvSize,vvInstancingEnabled:!0,vvOpacity:r.vvOpacity,falloffEnabled:r.falloffEnabled,innerColorEnabled:r.innerColorEnabled,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround,wireframe:r.wireframe});return new $e(e.rctx,i,gs)}destroy(){super.destroy(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(t,r){if(st(this.program,r.camera.projectionMatrix),this.configuration.output===Ke.Highlight&&nt(this.program,r),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),ot(this.program,r)),this.program.setUniform1f("intrinsicWidth",t.width),this.program.setUniform4fv("intrinsicColor",t.color),this.program.setUniform1f("miterLimit","miter"!==t.join?0:t.miterLimit),this.program.setUniform2fv("nearFar",r.camera.nearFar),this.program.setUniform1f("pixelRatio",r.camera.pixelRatio),this.program.setUniform2f("screenSize",r.camera.fullViewport[2],r.camera.fullViewport[3]),ir(this.program,t),this.stipplePattern!==t.stipplePattern){const e=t.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,e),this.stipplePattern=e}if(this.stippleEnabled){const{pixelSize:e,sdfNormalizer:a,pixels:s}=i(this.stippleTextureBind)?this.stippleTextureBind(this.program):{pixelSize:1,sdfNormalizer:1,pixels:1};if(this.program.setUniform1f("stipplePatternSDFNormalizer",a),this.program.setUniform1f("stipplePatternTextureSize",s),this.program.setUniform1f("stipplePatternPixelSize",e),this.program.setUniform1f("stipplePatternPixelSizeInv",1/e),this.configuration.draped?this.program.setUniform1f("worldToScreenRatio",1/r.screenToPCSRatio):this.program.setUniform1f("worldToScreenPerDistanceRatio",1/r.camera.perScreenPixelRatio),this.configuration.stippleOffColorEnabled){const e=o(t.stippleOffColor);this.program.setUniform4f("stippleOffColor",e[0],e[1],e[2],e.length>3?e[3]:1)}}this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",t.falloff),this.configuration.innerColorEnabled&&(this.program.setUniform4fv("innerColor",e(t.innerColor,t.color)),this.program.setUniform1f("innerWidth",t.innerWidth*r.camera.pixelRatio))}bindDraw(e){lt(this.program,e),this.stippleEnabled&&!this.configuration.draped&&dt(this.program,e.origin,e.camera.viewInverseTransposeMatrix),gt(this.program,this.configuration,e.slicePlane,{origin:e.origin,view:e.camera.viewMatrix}),this.program.setUniformMatrix4fv("inverseProjectionMatrix",U(Xt.get(),e.camera.projectionMatrix)),this.program.rebindTextures()}_makePipelineState(e,t){const r=this.configuration,i=e===Se.NONE,a=e===Se.FrontFace;return Mt({blending:r.output===Ke.Color||r.output===Ke.Alpha?i?zt:Wt(e):null,depthTest:{func:Vt(e)},depthWrite:i?r.writeDepth&&Gt:Bt(e),colorWrite:Ut,stencilWrite:r.sceneHasOcludees?vt:null,stencilTest:r.sceneHasOcludees?t?_t:yt:null,polygonOffset:i||a?r.polygonOffset&&_s:kt})}initializePipeline(){const e=this.configuration,t=e.polygonOffset&&_s;return e.occluder&&(this._occluderPipelineTransparent=Mt({blending:zt,polygonOffset:t,depthTest:Tt,depthWrite:null,colorWrite:Ut,stencilWrite:null,stencilTest:St}),this._occluderPipelineOpaque=Mt({blending:zt,polygonOffset:t,depthTest:Tt,depthWrite:null,colorWrite:Ut,stencilWrite:Et,stencilTest:Rt}),this._occluderPipelineMaskWrite=Mt({blending:null,polygonOffset:t,depthTest:Ct,depthWrite:null,colorWrite:null,stencilWrite:vt,stencilTest:_t})),this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return this.configuration.wireframe?Me.LINES:Me.TRIANGLE_STRIP}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?e===Be.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:e===Be.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,t)}}vs.shader=new Je(fs,(()=>Promise.resolve().then((()=>fs))));const _s={factor:0,units:-4};class ys extends at{constructor(){super(...arguments),this.output=Ke.Color,this.occluder=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.polygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.capType=ms.BUTT,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.sceneHasOcludees=!1,this.transparencyPassType=Se.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.wireframe=!1}}re([it({count:Ke.COUNT})],ys.prototype,"output",void 0),re([it()],ys.prototype,"occluder",void 0),re([it()],ys.prototype,"slicePlaneEnabled",void 0),re([it()],ys.prototype,"transparent",void 0),re([it()],ys.prototype,"polygonOffset",void 0),re([it()],ys.prototype,"writeDepth",void 0),re([it()],ys.prototype,"draped",void 0),re([it()],ys.prototype,"stippleEnabled",void 0),re([it()],ys.prototype,"stippleOffColorEnabled",void 0),re([it()],ys.prototype,"stippleScaleWithLineWidth",void 0),re([it()],ys.prototype,"stipplePreferContinuous",void 0),re([it({count:ms.COUNT})],ys.prototype,"capType",void 0),re([it()],ys.prototype,"roundJoins",void 0),re([it()],ys.prototype,"vvSize",void 0),re([it()],ys.prototype,"vvColor",void 0),re([it()],ys.prototype,"vvOpacity",void 0),re([it()],ys.prototype,"falloffEnabled",void 0),re([it()],ys.prototype,"innerColorEnabled",void 0),re([it()],ys.prototype,"sceneHasOcludees",void 0),re([it({count:Se.COUNT})],ys.prototype,"transparencyPassType",void 0),re([it()],ys.prototype,"multipassTerrainEnabled",void 0),re([it()],ys.prototype,"cullAboveGround",void 0),re([it()],ys.prototype,"wireframe",void 0);const Ts=oe.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");var Ss;!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(Ss||(Ss={}));class Es extends Dt{constructor(e){super(e,Cs),this._vertexAttributeLocations=gs,this.techniqueConfig=new ys,this.layout=this.createLayout()}isClosed(e,t){return As(this.parameters,e,t)}dispose(){}getPassParameters(){return this.parameters}getTechniqueConfig(e,t){this.techniqueConfig.output=e,this.techniqueConfig.draped=t.slot===Be.DRAPED_MATERIAL;const r=i(this.parameters.stipplePattern);return this.techniqueConfig.stippleEnabled=r,this.techniqueConfig.stippleOffColorEnabled=r&&i(this.parameters.stippleOffColor),this.techniqueConfig.stippleScaleWithLineWidth=r&&this.parameters.stippleScaleWithLineWidth,this.techniqueConfig.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.roundJoins="round"===this.parameters.join,this.techniqueConfig.capType=this.parameters.cap,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.vvOpacity=this.parameters.vvOpacityEnabled,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.parameters.innerWidth>0&&i(this.parameters.innerColor),this.techniqueConfig.falloffEnabled=this.parameters.falloff>0,this.techniqueConfig.occluder=this.parameters.renderOccluded===Pt.OccludeAndTransparentStencil,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.wireframe=this.parameters.wireframe,this.techniqueConfig}intersect(e,t,r,a,s,o,n,l,d){i(d)?this._intersectDrapedLineGeometry(e,a,d,o,n):this._intersectLineGeometry(e,t,r,a,n)}_intersectDrapedLineGeometry(e,t,r,i,a){if(!t.options.selectionMode)return;const s=e.vertexAttributes.get(lr.POSITION).data,o=e.vertexAttributes.get(lr.SIZE);let n=this.parameters.width;if(this.parameters.vvSizeEnabled){const t=e.vertexAttributes.get(lr.SIZEFEATUREATTRIBUTE).data[0];n*=v(this.parameters.vvSizeOffset[0]+t*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else o&&(n*=o.data[0]);const l=i[0],d=i[1],c=(n/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE,u=0;for(let e=0;e<s.length-5;e+=3){const t=s[e],r=s[e+1],i=l-t,a=d-r,o=s[e+3]-t,n=s[e+4]-r,c=v((o*i+n*a)/(o*o+n*n),0,1),p=o*c-i,m=n*c-a,f=p*p+m*m;f<h&&(h=f,u=e/3)}h<c*c&&a(r.dist,r.normal,u,!1)}_intersectLineGeometry(e,t,r,i,a){if(!i.options.selectionMode||_r(t))return;if(!Nt(r))return void Ts.error("intersection assumes a translation-only matrix");const s=e.vertexAttributes,o=s.get(lr.POSITION).data;let n=this.parameters.width;if(this.parameters.vvSizeEnabled){const e=s.get(lr.SIZEFEATUREATTRIBUTE).data[0];n*=v(this.parameters.vvSizeOffset[0]+e*this.parameters.vvSizeFactor[0],this.parameters.vvSizeMinSize[0],this.parameters.vvSizeMaxSize[0])}else s.has(lr.SIZE)&&(n*=s.get(lr.SIZE).data[0]);const d=i.camera,c=Ls;l(c,i.point);const h=n*d.pixelRatio/2+4*d.pixelRatio;S(Bs[0],c[0]-h,c[1]+h,0),S(Bs[1],c[0]+h,c[1]+h,0),S(Bs[2],c[0]+h,c[1]-h,0),S(Bs[3],c[0]-h,c[1]-h,0);for(let e=0;e<4;e++)if(!d.unprojectFromRenderScreen(Bs[e],js[e]))return;Dr(d.eye,js[0],js[1],qs),Dr(d.eye,js[1],js[2],ks),Dr(d.eye,js[2],js[3],Zs),Dr(d.eye,js[3],js[0],$s);let u=Number.MAX_VALUE,p=0;const m=Os(this.parameters,s,e.indices)?o.length-2:o.length-5;for(let e=0;e<m;e+=3){Is[0]=o[e]+r[12],Is[1]=o[e+1]+r[13],Is[2]=o[e+2]+r[14];const t=(e+3)%o.length;if(Ds[0]=o[t]+r[12],Ds[1]=o[t+1]+r[13],Ds[2]=o[t+2]+r[14],wr(qs,Is)<0&&wr(qs,Ds)<0||wr(ks,Is)<0&&wr(ks,Ds)<0||wr(Zs,Is)<0&&wr(Zs,Ds)<0||wr($s,Is)<0&&wr($s,Ds)<0)continue;if(d.projectToRenderScreen(Is,Fs),d.projectToRenderScreen(Ds,Ns),Fs[2]<0&&Ns[2]>0){T(ws,Is,Ds);const e=d.frustum,t=-wr(e[Cr.NEAR],Is)/E(ws,Pr(e[Cr.NEAR]));y(ws,ws,t),R(Is,Is,ws),d.projectToRenderScreen(Is,Fs)}else if(Fs[2]>0&&Ns[2]<0){T(ws,Ds,Is);const e=d.frustum,t=-wr(e[Cr.NEAR],Ds)/E(ws,Pr(e[Cr.NEAR]));y(ws,ws,t),R(Ds,Ds,ws),d.projectToRenderScreen(Ds,Ns)}else if(Fs[2]<0&&Ns[2]<0)continue;Fs[2]=0,Ns[2]=0;const i=br(Or(Fs,Ns,Us),c);i<u&&(u=i,g(Ms,Is),g(Hs,Ds),p=e/3)}const f=i.rayBegin,x=i.rayEnd;if(u<h*h){let e=Number.MAX_VALUE;if(Ar(Or(Ms,Hs,Us),Or(f,x,zs),Ps)){T(Ps,Ps,f);const t=_(Ps);y(Ps,Ps,1/t),e=t/C(f,x)}a(e,Ps,p,!1)}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return null;const i=e.indices,a=r.get(lr.POSITION);return Lr(a,i?i.get(lr.POSITION):null,i&&Os(this.parameters,r,i),t)}createLayout(){const e=yr().vec3f(lr.POSITION).f32(lr.SUBDIVISIONFACTOR).vec2f(lr.UV0).vec3f(lr.AUXPOS1).vec3f(lr.AUXPOS2);return this.parameters.vvSizeEnabled?e.f32(lr.SIZEFEATUREATTRIBUTE):e.f32(lr.SIZE),this.parameters.vvColorEnabled?e.f32(lr.COLORFEATUREATTRIBUTE):e.vec4f(lr.COLOR),this.parameters.vvOpacityEnabled&&e.f32(lr.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new xs(this.layout,this.parameters)}requiresSlot(e,t){if(e===Be.DRAPED_MATERIAL)return!0;if(this.parameters.renderOccluded===Pt.OccludeAndTransparentStencil)return e===Be.OPAQUE_MATERIAL||e===Be.OCCLUDER_MATERIAL||e===Be.TRANSPARENT_OCCLUDER_MATERIAL;const r=X(t);if(r===Ke.Color||r===Ke.Alpha){return e===(this.parameters.writeDepth?Be.TRANSPARENT_MATERIAL:Be.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL)}return e===Be.OPAQUE_MATERIAL}createGLMaterial(e){return e.output===Ke.Color||e.output===Ke.Alpha||e.output===Ke.Highlight||e.output===Ke.Depth?new Rs(e):null}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),this._requiresTransparent(e)&&(e.transparent=!0)}_requiresTransparent(e){return!!((e.color&&e.color[3])<1||e.innerWidth>0&&this._colorRequiresTransparent(e.innerColor)||e.stipplePattern&&this._colorRequiresTransparent(e.stippleOffColor)||e.falloff>0)}_colorRequiresTransparent(e){return i(e)&&e[3]<1&&e[3]>0}}class Rs extends ht{updateParameters(e){return this.ensureTechnique(vs,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==Ke.Color&&this._output!==Ke.Alpha||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.getPassParameters(),e)}}const Cs={width:0,color:[1,1,1,1],join:"miter",cap:ms.BUTT,miterLimit:5,writeDepth:!0,polygonOffset:!1,stipplePattern:null,stippleOffColor:null,stippleScaleWithLineWidth:!1,stipplePreferContinuous:!0,slicePlaneEnabled:!1,vvFastUpdate:!1,transparent:!1,isClosed:!1,falloff:0,innerWidth:0,innerColor:null,sceneHasOcludees:!1,wireframe:!1,...It,...cs};class xs{constructor(e,t){this.parameters=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e;const r=t.stipplePattern?1:0;switch(this.parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=1+r}}_isClosed(e){return Os(this.parameters,e.vertexAttributes,e.indices)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=e.indices.get(lr.POSITION).length/2+1,r=this._isClosed(e);let i=r?2:4;return i+=((r?t:t-1)-(r?0:1))*(2*this.numJoinSubdivisions+4),i+=2,this.parameters.wireframe&&(i=2+4*(i-2)),i}write(e,t,r,i){var a;const s=Ws,o=Vs,n=Gs,l=t.vertexAttributes.get(lr.POSITION).data,d=t.indices&&t.indices.get(lr.POSITION),c=null==(a=t.vertexAttributes.get(lr.DISTANCETOSTART))?void 0:a.data;d&&d.length!==2*(l.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let h=1,u=0;this.parameters.vvSizeEnabled?u=t.vertexAttributes.get(lr.SIZEFEATUREATTRIBUTE).data[0]:t.vertexAttributes.has(lr.SIZE)&&(h=t.vertexAttributes.get(lr.SIZE).data[0]);let p=[1,1,1,1],m=0;this.parameters.vvColorEnabled?m=t.vertexAttributes.get(lr.COLORFEATUREATTRIBUTE).data[0]:t.vertexAttributes.has(lr.COLOR)&&(p=t.vertexAttributes.get(lr.COLOR).data);let f=0;this.parameters.vvOpacityEnabled&&(f=t.vertexAttributes.get(lr.OPACITYFEATUREATTRIBUTE).data[0]);const v=l.length/3,_=e.transformation,y=new Float32Array(r.buffer),T=this.vertexBufferLayout.stride/4;let E=i*T;const R=E;let b=0;const O=c?(e,t,r)=>b=c[r]:(e,t,r)=>b+=C(e,t),A=(e,t,r,i,a,s,o)=>{if(y[E++]=t[0],y[E++]=t[1],y[E++]=t[2],y[E++]=i,y[E++]=o,y[E++]=a,y[E++]=e[0],y[E++]=e[1],y[E++]=e[2],y[E++]=r[0],y[E++]=r[1],y[E++]=r[2],this.parameters.vvSizeEnabled?y[E++]=u:y[E++]=h,this.parameters.vvColorEnabled)y[E++]=m;else{const e=Math.min(4*s,p.length-4);y[E++]=p[e+0],y[E++]=p[e+1],y[E++]=p[e+2],y[E++]=p[e+3]}this.parameters.vvOpacityEnabled&&(y[E++]=f)};E+=T,S(o,l[0],l[1],l[2]),_&&x(o,o,_);const I=this._isClosed(t);if(I){const e=l.length-3;S(s,l[e],l[e+1],l[e+2]),_&&x(s,s,_)}else S(n,l[3],l[4],l[5]),_&&x(n,n,_),A(o,o,n,1,Ss.LEFT_CAP_START,0,0),A(o,o,n,1,Ss.RIGHT_CAP_START,0,0),g(s,o),g(o,n);const D=I?0:1,w=I?v:v-1;for(let e=D;e<w;e++){const t=(e+1)%v*3;S(n,l[t+0],l[t+1],l[t+2]),_&&x(n,n,_),O(s,o,e),A(s,o,n,0,Ss.LEFT_JOIN_END,e,b),A(s,o,n,0,Ss.RIGHT_JOIN_END,e,b);const r=this.numJoinSubdivisions;for(let t=0;t<r;++t){const i=(t+1)/(r+1);A(s,o,n,i,Ss.LEFT_JOIN_END,e,b),A(s,o,n,i,Ss.RIGHT_JOIN_END,e,b)}A(s,o,n,1,Ss.LEFT_JOIN_START,e,b),A(s,o,n,1,Ss.RIGHT_JOIN_START,e,b),g(s,o),g(o,n)}I?(S(n,l[3],l[4],l[5]),_&&x(n,n,_),b=O(s,o,w),A(s,o,n,0,Ss.LEFT_JOIN_END,D,b),A(s,o,n,0,Ss.RIGHT_JOIN_END,D,b)):(b=O(s,o,w),A(s,o,o,0,Ss.LEFT_CAP_END,w,b),A(s,o,o,0,Ss.RIGHT_CAP_END,w,b)),bs(y,R+T,y,R,T);E=bs(y,E-T,y,E,T),this.parameters.wireframe&&this._addWireframeVertices(r,R,E,T)}_addWireframeVertices(e,t,r,i){const a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),s=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,r-t);let o=0;const n=e=>o=bs(s,e,a,o,i);for(let e=0;e<s.length-1;e+=2*i)n(e),n(e+2*i),n(e+1*i),n(e+2*i),n(e+1*i),n(e+3*i)}}function bs(e,t,r,i,a){for(let s=0;s<a;s++)r[i++]=e[t++];return i}function Os(e,t,r){return As(e,t.get(lr.POSITION).data,r?r.get(lr.POSITION):null)}function As(e,t,r){return!!e.isClosed&&(r?r.length>2:t.length>6)}const Is=c(),Ds=c(),ws=c(),Ps=c(),Ls=c(),Fs=Rr(),Ns=Rr(),Ms=c(),Hs=c(),Us=xr(),zs=xr(),Ws=c(),Vs=c(),Gs=c(),Bs=[Rr(),Rr(),Rr(),Rr()],js=[c(),c(),c(),c()],qs=Ir(),ks=Ir(),Zs=Ir(),$s=Ir();class Js{constructor(e,t=125e4){this._originSR=e,this._gridSize=t,this._origins=new Map,this._objects=new Map,this._rootOriginId="root/"+ce()}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(null==t){if(i(Xs))return this._origins.set(this._rootOriginId,vi(Xs[0],Xs[1],Xs[2],this._rootOriginId)),this.getOrigin(e);const t=vi(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,t),t}const r=this._gridSize,a=Math.round(e[0]/r),s=Math.round(e[1]/r),o=Math.round(e[2]/r),n=`${a}/${s}/${o}`;let l=this._origins.get(n);const d=.5*r;if(T(Ys,e,t.vec3),Ys[0]=Math.abs(Ys[0]),Ys[1]=Math.abs(Ys[1]),Ys[2]=Math.abs(Ys[2]),Ys[0]<d&&Ys[1]<d&&Ys[2]<d){if(l){const t=Math.max(...Ys);T(Ys,e,l.vec3),Ys[0]=Math.abs(Ys[0]),Ys[1]=Math.abs(Ys[1]),Ys[2]=Math.abs(Ys[2]);if(Math.max(...Ys)<t)return l}return t}return l||(l=vi(a*r,s*r,o*r,n),this._origins.set(n,l)),l}_drawOriginBox(e,t=[1,1,0,1]){const r=window.view,i=r._stage,a=t.toString();if(!this._objects.has(a)){this._material=new Es({width:2,color:t}),i.add(this._material);const e=new ee({isPickable:!1}),r=new te({castShadow:!1});i.add(r),e.add(r),i.add(e),this._objects.set(a,r)}const s=this._objects.get(a),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],n=o.length,l=new Array(3*n),d=new Uint16Array(2*(n-1)),c=.5*this._gridSize;for(let t=0;t<n;t++)l[3*t+0]=e[0]+(1&o[t]?c:-c),l[3*t+1]=e[1]+(2&o[t]?c:-c),l[3*t+2]=e[2]+(4&o[t]?c:-c),t>0&&(d[2*t+0]=t-1,d[2*t+1]=t);O(l,this._originSR,0,l,r.renderSpatialReference,0,n);const h=new xt([[lr.POSITION,{size:3,data:l,exclusive:!0}]],[[lr.POSITION,d]],Ce.Line);i.add(h),s.addGeometry(h,this._material,q)}}let Xs=null;const Ys=c();class Ks{constructor(e){this.rctx=e,this.camera=null,this.lastFrameCamera=new qe,this.pass=Ge.MATERIAL,this.slot=Be.OPAQUE_MATERIAL,this.highlightDepthTexture=null,this.renderOccludedMask=eo,this.hasOccludees=!1,this.hasFillLights=!0}resetRenderOccludedMask(){this.renderOccludedMask=eo}get isHighlightPass(){return this.pass===Ge.MATERIAL_HIGHLIGHT}}class Qs extends Ks{constructor(e,t,r,i,a,s){super(e),this.offscreenRenderingHelper=t,this.scenelightingData=r,this.shadowMap=i,this.ssaoHelper=a,this.sliceHelper=s}}const eo=Pt.Occlude|Pt.OccludeAndTransparent|Pt.OccludeAndTransparentStencil;const to=Object.freeze({__proto__:null,build:function(){const e=new sr;return e.include(Er),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("uColor","vec4"),e.fragment.code.add(ar`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}});class ro extends Ze{initializeProgram(e){const t=ro.shader.get().build();return new $e(e.rctx,t,At)}initializePipeline(){return this.configuration.hasAlpha?Mt({blending:Zt(Fe.SRC_ALPHA,Fe.ONE,Fe.ONE_MINUS_SRC_ALPHA,Fe.ONE_MINUS_SRC_ALPHA),colorWrite:Ut}):Mt({colorWrite:Ut})}}ro.shader=new Je(to,(()=>Promise.resolve().then((()=>to))));class io extends at{constructor(){super(...arguments),this.hasAlpha=!1}}re([it()],io.prototype,"hasAlpha",void 0);class ao{constructor(e=c()){this.intensity=e}}class so{constructor(e=c(),t=h(.57735,.57735,.57735)){this.intensity=e,this.direction=t}}class oo{constructor(e=c(),t=h(.57735,.57735,.57735),r=!0,i=1,a=1){this.intensity=e,this.direction=t,this.castShadows=r,this.specularStrength=i,this.environmentStrength=a}}class no{constructor(){this.r=[0],this.g=[0],this.b=[0]}}function lo(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t[i];return r}function co(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t;return r}function ho(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]+t[i];return r}function uo(e){return(e+1)*(e+1)}function po(e,t,r){const i=e[0],a=e[1],s=e[2],o=r||[];return o.length=uo(t),t>=0&&(o[0]=.28209479177),t>=1&&(o[1]=.4886025119*i,o[2]=.4886025119*s,o[3]=.4886025119*a),t>=2&&(o[4]=1.09254843059*i*a,o[5]=1.09254843059*a*s,o[6]=.31539156525*(3*s*s-1),o[7]=1.09254843059*i*s,o[8]=.54627421529*(i*i-a*a)),o}function mo(e,t){const r=(i=t.r.length,v(Math.floor(Math.sqrt(i)-1),0,2));var i;for(const i of e)b(So,i.direction),po(So,r,yo),lo(yo,Eo),co(yo,i.intensity[0],To),ho(t.r,To),co(yo,i.intensity[1],To),ho(t.g,To),co(yo,i.intensity[2],To),ho(t.b,To);return t}function fo(e,t,r,i){!function(e,t){const r=uo(e),i=t||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let e=0;e<r;e++)i.r[e]=i.g[e]=i.b[e]=0}(t,i),S(r.intensity,0,0,0);let a=!1;const s=go,o=vo,n=_o;s.length=0,o.length=0,n.length=0;for(const t of e)t instanceof oo&&!a?(g(r.direction,t.direction),g(r.intensity,t.intensity),r.specularStrength=t.specularStrength,r.environmentStrength=t.environmentStrength,r.castShadows=t.castShadows,a=!0):t instanceof oo||t instanceof so?s.push(t):t instanceof ao?o.push(t):t instanceof no&&n.push(t);mo(s,i),function(e,t){po(So,0,yo);for(const r of e)t.r[0]+=yo[0]*Eo[0]*r.intensity[0]*4*Math.PI,t.g[0]+=yo[0]*Eo[0]*r.intensity[1]*4*Math.PI,t.b[0]+=yo[0]*Eo[0]*r.intensity[2]*4*Math.PI}(o,i);for(const e of n)ho(i.r,e.r),ho(i.g,e.g),ho(i.b,e.b)}const go=[],vo=[],_o=[],yo=[0],To=[0],So=c(),Eo=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class Ro{constructor(){this._shOrder=2,this._ambientBoost=.4,this._oldSunlight={direction:c(),ambient:{color:c(),intensity:1},diffuse:{color:c(),intensity:1}},this.globalFactor=.5,this.groundLightingFactor=.5,this._sphericalHarmonics=new no,this._mainLight={intensity:c(),direction:h(1,0,0),castShadows:!1,specularStrength:1,environmentStrength:1}}get lightingMainDirection(){return this._mainLight.direction}setLightDirectionUniform(e){e.setUniform3fv("lightingMainDirection",this._mainLight.direction)}setUniforms(e,t,r){const i=t?(1-this.groundLightingFactor)*(1-this.globalFactor):0;e.setUniform1f("lightingFixedFactor",i),e.setUniform1f("lightingGlobalFactor",this.globalFactor),this.setLightDirectionUniform(e),e.setUniform3fv("lightingMainIntensity",this._mainLight.intensity),e.setUniform1f("lightingSpecularStrength",this._mainLight.specularStrength),e.setUniform1f("lightingEnvironmentStrength",this._mainLight.environmentStrength),e.setUniform1f("ambientBoostFactor",this._ambientBoost),e.setUniform1b("hasFillLights",r);const a=this._sphericalHarmonics;0===this._shOrder?e.setUniform3f("lightingAmbientSH0",a.r[0],a.g[0],a.b[0]):1===this._shOrder?(e.setUniform4f("lightingAmbientSH_R",a.r[0],a.r[1],a.r[2],a.r[3]),e.setUniform4f("lightingAmbientSH_G",a.g[0],a.g[1],a.g[2],a.g[3]),e.setUniform4f("lightingAmbientSH_B",a.b[0],a.b[1],a.b[2],a.b[3])):2===this._shOrder&&(e.setUniform3f("lightingAmbientSH0",a.r[0],a.g[0],a.b[0]),e.setUniform4f("lightingAmbientSH_R1",a.r[1],a.r[2],a.r[3],a.r[4]),e.setUniform4f("lightingAmbientSH_G1",a.g[1],a.g[2],a.g[3],a.g[4]),e.setUniform4f("lightingAmbientSH_B1",a.b[1],a.b[2],a.b[3],a.b[4]),e.setUniform4f("lightingAmbientSH_R2",a.r[5],a.r[6],a.r[7],a.r[8]),e.setUniform4f("lightingAmbientSH_G2",a.g[5],a.g[6],a.g[7],a.g[8]),e.setUniform4f("lightingAmbientSH_B2",a.b[5],a.b[6],a.b[7],a.b[8]))}set(e){fo(e,this._shOrder,this._mainLight,this._sphericalHarmonics),g(this._oldSunlight.direction,this._mainLight.direction);const t=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*t,this._oldSunlight.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*t,this._oldSunlight.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*t,y(this._oldSunlight.diffuse.color,this._mainLight.intensity,t),g(Co,this._oldSunlight.diffuse.color),y(Co,Co,this._ambientBoost*this.globalFactor),R(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,Co)}get old(){return this._oldSunlight}}const Co=c();class xo{constructor(e){this._rctx=e,this.cache=new Map}dispose(){this.cache.forEach((e=>e.texture=t(e.texture))),this.cache.clear()}_acquire(e){if(r(e))return null;const t=this._patternId(e),i=this.cache.get(t);if(i)return i.refCount++,i.bind;const a=e.pixelRatio,{encodedData:s,sdfNormalizer:o,pixels:n,paddedPixels:l}=function(e,t){const r=e.map((e=>Math.round(e*t))),i=1/t,a=Math.floor(r.reduce(((e,t)=>e+t))),s=r.reduce(((e,t)=>Math.max(e,t))),o=(Math.floor(.5*(s-1))+.5)*i,n=[];let l=1;for(const e of r){for(let t=0;t<e;t++){const r=l*(Math.min(t,e-1-t)+.5)*i/o*.5+.5;n.push(r)}l=-l}const d=Math.round(r[0]/2),c=[...n.slice(d),...n.slice(0,d)],h=a+2,u=new Uint8Array(4*h);let p=4;for(const e of c)zr(e,u,p),p+=4;return u.copyWithin(0,p-4,p),u.copyWithin(p,4,8),{encodedData:u,sdfNormalizer:o,paddedPixels:h,pixels:a}}(e.pattern,a),d=n/a,c={refCount:1,texture:null,bind:e=>(r(c.texture)&&(c.texture=new Sr(this._rctx,{width:l,height:1,internalFormat:De.RGBA,pixelFormat:De.RGBA,dataType:we.UNSIGNED_BYTE,wrapMode:Pe.CLAMP_TO_EDGE},s)),e.bindTexture(c.texture,"stipplePatternTexture"),{pixelSize:d,sdfNormalizer:o,pixels:n})};return this.cache.set(t,c),c.bind}release(e){if(r(e))return;const t=this._patternId(e),a=this.cache.get(t);a&&(a.refCount--,0===a.refCount&&(i(a.texture)&&a.texture.dispose(),this.cache.delete(t)))}swap(e,t){const r=this._acquire(t);return this.release(e),r}_patternId(e){return`${e.pattern.join(",")}-r${e.pixelRatio}`}}var bo;!function(e){e[e.Standard=0]="Standard",e[e.TransparentToHUDVisibility=1]="TransparentToHUDVisibility",e[e.Transparency=2]="Transparency",e[e.OverlayWithTransparency=3]="OverlayWithTransparency",e[e.COUNT=4]="COUNT"}(bo||(bo={}));const Oo=Object.freeze({__proto__:null,get CompositingFunction(){return bo},build:function(e){const t=new sr;return t.include(Er),t.fragment.uniforms.add("tex","sampler2D"),e.function===bo.Standard&&(e.hasOpacityFactor?(t.fragment.uniforms.add("opacity","float"),t.fragment.code.add(ar`void main() {
gl_FragColor = texture2D(tex, uv) * opacity;
}`)):t.fragment.code.add(ar`void main() {
gl_FragColor = texture2D(tex, uv);
}`)),e.function===bo.OverlayWithTransparency&&(t.fragment.uniforms.add("overlayIdx","int"),e.hasOpacityFactor&&t.fragment.uniforms.add("opacity","float"),t.fragment.code.add(ar`
      void main() {
        vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
        gl_FragColor = texture2D(tex, overlayUV) ${e.hasOpacityFactor?"* opacity":""};
      }`)),e.function===bo.TransparentToHUDVisibility&&t.fragment.code.add(ar`void main() {
gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
}`),e.function===bo.Transparency&&(t.fragment.uniforms.add("colorTexture","sampler2D"),t.fragment.uniforms.add("alphaTexture","sampler2D"),t.fragment.uniforms.add("frontFaceTexture","sampler2D"),t.fragment.code.add(ar`void main() {
vec4 srcColor = texture2D(colorTexture, uv);
float srcAlpha = texture2D(alphaTexture, uv).r;
vec4 frontFace = texture2D(frontFaceTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`)),t}});var Ao;!function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.PremultipliedAlpha=2]="PremultipliedAlpha",e[e.COUNT=3]="COUNT"}(Ao||(Ao={}));class Io extends Ze{initializeProgram(e){const t=Io.shader.get().build(this.configuration);return new $e(e.rctx,t,At)}initializePipeline(){if(this.configuration.function===bo.TransparentToHUDVisibility)return Mt({colorWrite:{r:!1,g:!0,b:!1,a:!1}});switch(this.configuration.alphaMode){case Ao.None:return Mt({colorWrite:Ut});case Ao.Alpha:return Mt({blending:Zt(Fe.SRC_ALPHA,Fe.ONE,Fe.ONE_MINUS_SRC_ALPHA,Fe.ONE_MINUS_SRC_ALPHA),colorWrite:Ut});default:return Mt({blending:Ht(Fe.ONE,Fe.ONE_MINUS_SRC_ALPHA),colorWrite:Ut})}}}Io.shader=new Je(Oo,(()=>Promise.resolve().then((()=>Oo))));class Do extends at{constructor(){super(...arguments),this.function=bo.Standard,this.alphaMode=Ao.None,this.hasOpacityFactor=!1}}re([it({count:bo.COUNT})],Do.prototype,"function",void 0),re([it({count:Ao.COUNT})],Do.prototype,"alphaMode",void 0),re([it()],Do.prototype,"hasOpacityFactor",void 0);const wo=oe.getLogger("esri.views.3d.webgl-engine.lib.OverlayRenderer");let Po=class extends(Oi(ie)){constructor(e){super(e),this._overlays=null,this._overlayRenderTarget=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._lighting=new Ro,this._handles=new se,this._frameTask=Wr,this._layerRenderers=new Map,this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers=new le,this._geometries=new Map,this.worldToPCSRatio=1,this.events=new ae,this.longitudeCyclical=null}initialize(){const e=this.view._stage.renderView;this._rctx=e.renderingContext,this._renderContext=new Ks(this._rctx);const t=e.waterTextureRepository;this._stippleTextureRepository=new xo(e.renderingContext),this._shaderTechniqueRepository=new xi({rctx:this._rctx,viewingMode:L.Local,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:t}),this._handles.add([ue(t,"loadingState",(()=>this.events.emit("content-changed"))),ue(this,"spatialReference",(e=>this._localOrigins=new Js(e)))]),this._materialRepository=new ds(e.textureRepository,this._shaderTechniqueRepository,(e=>{(e.renderOccluded&Wo)>0!==this._rendersOccluded&&this._updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating")}),(()=>this.events.emit("content-changed"))),this._lighting.groundLightingFactor=1,this._lighting.globalFactor=0,this._lighting.set([new ao(h(1,1,1))]),this._bindParameters={slot:Be.DRAPED_MATERIAL,highlightDepthTexture:bt(this._rctx),camera:Mo,inverseViewport:ge(),origin:null,screenToWorldRatio:null,screenToPCSRatio:null,shadowMappingEnabled:!1,slicePlane:null,ssaoEnabled:!1,hasOccludees:!1,linearDepthTexture:null,lastFrameColorTexture:null,reprojectionMatrix:q,ssrEnabled:!1,lighting:this._lighting,transparencyPassType:Se.NONE,terrainLinearDepthTexture:null,geometryLinearDepthTexture:null,multipassTerrainEnabled:!1,cullAboveGround:!1,multipassGeometryEnabled:!1,highlightColorTexture:null,cloudsCompositionParams:null,hasFillLights:!0},this._frameTask=this.view.resourceController.scheduler.registerTask(Vr.STAGE,this),this._handles.add(this._frameTask)}dispose(){this._handles.destroy(),this._layerRenderers.forEach((e=>e.destroy())),this._layerRenderers.clear(),this._debugTextureTechnique=a(this._debugTextureTechnique),this._debugPatternTexture=t(this._debugPatternTexture),this._bindParameters.highlightDepthTexture=t(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=t(this._shaderTechniqueRepository),this._temporaryFBO=t(this._temporaryFBO),this._quadVAO=t(this._quadVAO),this.disposeOverlays()}get updating(){return this._sortedLayerRenderersDirty||this._frameTask.updating||ne(this._layerRenderers,(e=>e.updating))}get hasOverlays(){return i(this._overlays)&&i(this._overlayRenderTarget)}get gpuMemoryUsage(){return i(this._overlayRenderTarget)?this._overlayRenderTarget.gpuMemoryUsage:0}collectUnusedRenderTargetMemory(e){let t=!1;if(i(this._overlayRenderTarget))for(const r of this._overlayRenderTarget.renderTargets){const i=this.overlays[0].validTargets[r.type]||!this.overlays[1].validTargets[r.type];t=this._overlayRenderTarget.validateUsageForTarget(i,r,e)||t}return t}get overlays(){return e(this._overlays,[])}ensureDrapeTargets(e){i(this._overlays)&&this._overlays.forEach((t=>{t.hasTargetWithoutRasterImage=he(e,(e=>e.drapeTargetType===oi.WithoutRasterImage))}))}ensureDrapeSources(e){i(this._overlays)&&this._overlays.forEach((t=>{t.hasDrapedFeatureSource=ne(e,((e,t)=>t.drapeSourceType===si.Features)),t.hasDrapedRasterSource=ne(e,((e,t)=>t.drapeSourceType===si.RasterImage))}))}ensureOverlays(e,t){r(this._overlays)&&(this._overlayRenderTarget=new Ei(this._rctx),this._overlays=[new _i(ci.INNER,this._overlayRenderTarget),new _i(ci.OUTER,this._overlayRenderTarget)]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t)}disposeOverlays(){this._overlays=null,this._overlayRenderTarget=t(this._overlayRenderTarget),this.events.emit("textures-disposed")}get running(){return this.updating}runTask(e,t=(()=>!0)){this._frameTask.processQueue(e),e.done||this._processLayers(e,t)}_processLayers(e,t){let r=!1;for(const[i,a]of this._layerRenderers){if(e.done)break;(i.destroyed||t(i))&&(a.commitChanges()&&(r=!0,e.madeProgress()),a.isEmpty&&(r=!0,this._sortedLayerRenderersDirty=!0,this._layerRenderers.delete(i),this._handles.remove(i),a.destroy()))}this._updateSortedLayerRenderers(),r&&(i(this._overlays)&&0===this._layerRenderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.events.emit("content-changed"),this._updateHasHighlights(),this._updateRendersOccluded(),this._updateHasWater())}processSyncLayers(){this._processLayers(Gr,(e=>e.updatePolicy===xe.SYNC))}addGeometries(e,t,i,a=!1){for(const t of e)r(t.origin)&&(t.origin=this._localOrigins.getOrigin(t.boundingSphere)),this._geometries.set(t.id,t);this._ensureLayerRenderer(t,a).add(e),i===Ni.Geometry.UPDATE&&this._notifyGraphicGeometryChanged(e,t)}removeGeometries(e,t,r){for(const t of e)this._geometries.delete(o(t.id));const i=this._layerRenderers.get(t);i&&(i.remove(e),r===Ni.Geometry.UPDATE&&this._notifyGraphicGeometryChanged(e,t))}updateGeometries(e,t,r){const i=this._layerRenderers.get(t);if(i)switch(i.modify(e,r),r){case Ni.State.TRANSFORMATION:case Ni.State.VERTEXATTRS:return this._notifyGraphicGeometryChanged(e,t);case Ni.State.VISIBILITIES:return this._notifyGraphicVisibilityChanged(e,t)}else wo.warn("Attempted to update geometry for nonexistent layer")}_notifyGraphicGeometryChanged(e,t){if(r(t.notifyGraphicGeometryChanged))return;let a;for(const r of e){const e=r.graphicUid;i(e)&&e!==a&&(t.notifyGraphicGeometryChanged(e),a=e)}}_notifyGraphicVisibilityChanged(e,t){if(r(t.notifyGraphicVisibilityChanged))return;let a;for(const r of e){const e=r.graphicUid;i(e)&&e!==a&&(t.notifyGraphicVisibilityChanged(e),a=e)}}updateHighlights(e,t){const r=this._layerRenderers.get(t);r?r.modify(e,Ni.State.HIGHLIGHTS):wo.warn("Attempted to update highlights for nonexistent layer")}isEmpty(){return 0===this._geometries.size&&!di.OVERLAY_DRAW_DEBUG_TEXTURE}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateAnimation(e){let t=!1;return this._layerRenderers.forEach((r=>t=r.updateAnimation(e)||t)),t}updateLayerOrder(){this._sortedLayerRenderersDirty=!0}drawTarget(e,t,r){const a=e.canvasGeometries;if(0===a.numViews)return!1;this._screenToWorldRatio=r*e.mapUnitsPerPixel;const s=t.renderPass;if(this.isEmpty()||s===Ge.MATERIAL_HIGHLIGHT&&!this.hasHighlights||s===Ge.MATERIAL_NORMAL&&!this.hasWater||!e.hasSomeSizedView())return!1;const o=t.fbo;if(!o.isValid())return!1;const n=2*e.resolution,l=e.resolution;o.resize(n,l);const d=this._rctx;Mo.pixelRatio=e.pixelRatio*r,this._renderContext.pass=s,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=s===Ge.MATERIAL_NORMAL?Be.DRAPED_WATER:Be.DRAPED_MATERIAL,e.applyViewport(this._rctx),o.bind(d),e.index===ci.INNER&&(d.setClearColor(0,0,0,0),d.clearSafe(We.COLOR_BUFFER_BIT));const c=t.type===pi.ColorNoRasterImage?Lo.ExcludeRasterImage:t.type===pi.Occluded?Lo.OccludedOnly:Lo.Normal;if(c===Lo.OccludedOnly&&(this._renderContext.renderOccludedMask=Wo),di.OVERLAY_DRAW_DEBUG_TEXTURE&&c!==Lo.OccludedOnly)for(let t=0;t<a.numViews;t++)this._setViewParameters(a.extents[t],e,Mo),this._drawDebugTexture(e.resolution,No[e.index]);return this._layerRenderers.size>0&&this._sortedLayerRenderers.forAll((({overlayLayer:t,renderer:r})=>{if(c===Lo.ExcludeRasterImage&&t.drapeSourceType===si.RasterImage)return;const{fullOpacity:h}=t,u=i(h)&&h<1&&s===Ge.MATERIAL;u&&(this.bindTemporaryFramebuffer(this._rctx,n,l),d.clearSafe(We.COLOR_BUFFER_BIT));for(let t=0;t<a.numViews;t++)this._setViewParameters(a.extents[t],e,Mo),r.render(this._renderContext,this._bindParameters);u&&i(this._temporaryFBO)&&(o.bind(d),this.view._stage.renderView.compositingHelper.composite(this._temporaryFBO.getTexture(),Ao.PremultipliedAlpha,h,bo.OverlayWithTransparency,e.index))})),d.bindFramebuffer(null),o.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,t,i){r(this._temporaryFBO)&&(this._temporaryFBO=new Si(e,!1)),this._temporaryFBO.resize(t,i),this._temporaryFBO.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll()}intersect(e,t,r,i){let a=0;this._geometries.forEach((s=>{if(i&&!i(s))return;this._intersectRenderGeometry(s,r,t,0,e,a);const o=this.longitudeCyclical;o&&(s.boundingSphere[0]-s.boundingSphere[3]<o.min&&this._intersectRenderGeometry(s,r,t,o.range,e,a),s.boundingSphere[0]+s.boundingSphere[3]>o.max&&this._intersectRenderGeometry(s,r,t,-o.range,e,a)),a++}))}_intersectRenderGeometry(e,t,r,a,s,o){if(!e.instanceParameters.visible)return;let n=0;i(e.transformation)&&(a+=e.transformation[12],n=e.transformation[13]),Ho[0]=r[0]-a,Ho[1]=r[1]-n,Ho[2]=1,Uo[0]=r[0]-a,Uo[1]=r[1]-n,Uo[2]=0,e.screenToWorldRatio=this._screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),s,Ho,Uo,((r,i,a)=>{!function(e,t,r,i,a,s,o){const n={layerUid:s,graphicUid:o,triangleNr:t},l=t=>{t.set(Ur.OVERLAY,n,e.dist,e.normal,e.transformation,r,i)};(null==a.results.min.drapedLayerOrder||r>=a.results.min.drapedLayerOrder)&&(null==a.results.min.dist||a.results.ground.dist<=a.results.min.dist)&&l(a.results.min);a.options.store!==Mr.MIN&&(null==a.results.max.drapedLayerOrder||r<a.results.max.drapedLayerOrder)&&(null==a.results.max.dist||a.results.ground.dist>a.results.max.dist)&&l(a.results.max);if(a.options.store===Mr.ALL){const e=Hr(a.ray);l(e),a.results.all.push(e)}}(t,a,e.material.renderPriority,o,s,e.layerUid,e.graphicUid)}),e.calculateShaderTransformation,t)}_ensureLayerRenderer(e,t){let r=this._layerRenderers.get(e);return r&&t===r instanceof ss||(r=t?new ss({rctx:this._rctx,materialRepository:this._materialRepository}):new Ga({rctx:this._rctx,materialRepository:this._materialRepository}),this._layerRenderers.set(e,r),this._sortedLayerRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(e.watch("fullOpacity",(()=>this.events.emit("content-changed"))),e),this._handles.add(ue(r,"updating",(()=>this.notifyChange("updating"))),e)),r}_updateSortedLayerRenderers(){if(!this._sortedLayerRenderersDirty)return;if(this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers.clear(),0===this._layerRenderers.size)return;const e=this.view.map.allLayers;this._layerRenderers.forEach(((t,r)=>{const i=e.indexOf(r.layer);this._sortedLayerRenderers.push(new Fo(r,t,i<0?1/0:i))})),this._sortedLayerRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t,r){r.viewport[0]=r.viewport[1]=0,r.viewport[2]=r.viewport[3]=t.resolution,G(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),B(r.viewMatrix,[-e[0],-e[1],0]),this._renderContext.camera=r,this._bindParameters.camera=r,this._bindParameters.inverseViewport[0]=1/r.fullViewport[2],this._bindParameters.inverseViewport[1]=1/r.fullViewport[3]}_updateHasWater(){const e=ne(this._layerRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water",e))}_updateHasHighlights(){const e=ne(this._layerRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.events.emit("has-highlights",e))}_updateRendersOccluded(){const e=ne(this._layerRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.events.emit("renders-occluded",e))}_drawDebugTexture(e,t){this._ensureDebugPatternResources(e,e);const r=this._rctx,i=r.useTechnique(this._debugTextureTechnique);i.setUniform4f("uColor",t[0],t[1],t[2],1),i.bindTexture(this._debugPatternTexture,"tex"),r.bindVAO(this._quadVAO),r.drawArrays(Me.TRIANGLE_STRIP,0,gr(this._quadVAO,"geometry"))}_ensureDebugPatternResources(e,t){if(this._debugPatternTexture)return;const r=new Uint8Array(e*t*4);let i=0;for(let a=0;a<t;a++)for(let s=0;s<e;s++){const o=Math.floor(s/10),n=Math.floor(a/10);o<2||n<2||10*o>e-20||10*n>t-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&o&&1&n?1&s^1&a?0:255:1&o^1&n?0:128)}this._debugPatternTexture=new Sr(this._rctx,{target:Ie.TEXTURE_2D,pixelFormat:De.RGBA,dataType:we.UNSIGNED_BYTE,samplingMode:Le.NEAREST,width:e,height:t},r);const a=new io;a.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire(ro,a),this._quadVAO=Xe(this._rctx)}get test(){return{layerRenderers:this._layerRenderers}}};var Lo;re([pe()],Po.prototype,"_frameTask",void 0),re([pe()],Po.prototype,"_sortedLayerRenderersDirty",void 0),re([(e,t)=>{var r,i;e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=null!=(r=null==(i=e._managedDisposables)?void 0:i.slice())?r:[]),e._managedDisposables.unshift(t)}],Po.prototype,"_shaderTechniqueRepository",void 0),re([(e,t)=>{var r,i;e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=null!=(r=null==(i=e._managedDisposables)?void 0:i.slice())?r:[]),e._managedDisposables.unshift(t)}],Po.prototype,"_stippleTextureRepository",void 0),re([pe({constructOnly:!0})],Po.prototype,"view",void 0),re([pe()],Po.prototype,"worldToPCSRatio",void 0),re([pe()],Po.prototype,"spatialReference",void 0),re([pe({type:Boolean,readOnly:!0})],Po.prototype,"updating",null),Po=re([me("esri.views.3d.terrain.OverlayRenderer")],Po),function(e){e[e.Normal=0]="Normal",e[e.OccludedOnly=1]="OccludedOnly",e[e.ExcludeRasterImage=2]="ExcludeRasterImage"}(Lo||(Lo={}));class Fo{constructor(e,t,r){this.overlayLayer=e,this.renderer=t,this.index=r}}const No=[[1,.5,.5],[.5,.5,1]];const Mo=new qe;Mo.near=1,Mo.far=1e4,Mo.relativeElevation=null;const Ho=c(),Uo=c(),zo=-2,Wo=Pt.OccludeAndTransparent;function Vo(t){const a=[],s=[];!function(e,t,r){const{attributeData:{position:i},removeDuplicateStartEnd:a}=e,s=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(i)&&a===qo.REMOVE,o=i.length/3-(s?1:0),l=new Uint32Array(2*(o-1)),d=s?n(i,0,i.length-3):i;let c=0;for(let e=0;e<o-1;e++)l[c++]=e,l[c++]=e+1;t.push([lr.POSITION,{size:3,data:d,exclusive:s}]),r.push([lr.POSITION,l])}(t,s,a);const o=s[0][1].data,l=a[0][1].length,c=new Uint16Array(l);return function(e,t,i){const a=e.attributeData.mapPosition;if(r(a))return;i.push([lr.MAPPOS,i[0][1]]),t.push([lr.MAPPOS,{size:3,data:a}])}(t,s,a),function(t,r,a,s){if(i(t.attributeData.colorFeature))return;const o=t.attributeData.color;r.push([lr.COLOR,{size:4,data:e(o,qr)}]),a.push([lr.COLOR,s])}(t,s,a,c),function(t,r,a,s){if(i(t.attributeData.sizeFeature))return;const o=t.attributeData.size;r.push([lr.SIZE,{size:1,data:[e(o,1)]}]),a.push([lr.SIZE,s])}(t,s,a,c),function(e,t,i,a){const s=e.attributeData.colorFeature;if(r(s))return;t.push([lr.COLORFEATUREATTRIBUTE,{size:1,data:new Float32Array([s])}]),i.push([lr.COLOR,a])}(t,s,a,c),function(e,t,i,a){const s=e.attributeData.sizeFeature;if(r(s))return;t.push([lr.SIZEFEATUREATTRIBUTE,{size:1,data:new Float32Array([s])}]),i.push([lr.SIZEFEATUREATTRIBUTE,a])}(t,s,a,c),function(e,t,i,a){const s=e.attributeData.opacityFeature;if(r(s))return;t.push([lr.OPACITYFEATUREATTRIBUTE,{size:1,data:new Float32Array([s])}]),i.push([lr.OPACITYFEATUREATTRIBUTE,a])}(t,s,a,c),function(e,t,i,a){if(r(e.overlayInfo)||e.overlayInfo.renderCoordsHelper.viewingMode!==L.Global||!e.overlayInfo.spatialReference.isGeographic)return;const s=new Float64Array(a.length),o=D(e.overlayInfo.spatialReference);for(let e=0;e<s.length;e+=3)I(a,e,s,e,o);const n=a.length/3,l=new Float32Array(n+1);let c=ko,h=Zo,u=0,p=0;S(c,s[p++],s[p++],s[p++]),l[0]=0;for(let e=1;e<n+1;++e)e===n&&(p=0),S(h,s[p++],s[p++],s[p++]),u+=d(c,h),l[e]=u,[c,h]=[h,c];t.push([lr.DISTANCETOSTART,{size:1,data:l}]),i.push([lr.DISTANCETOSTART,i[0][1]])}(t,s,a,o),new xt(s,a,Ce.Line)}function Go(e,t,r,i){const a="polygon"===e.type?w.CCW_IS_HOLE:w.NONE,s="polygon"===e.type?e.rings:e.paths,{position:o,outlines:n}=P(s,e.hasZ,a),l=new Float64Array(o.length),d=kr(o,e.spatialReference,0,l,0,o,0,o.length/3,t,r,i),c=null!=d;return{lines:c?Bo(n,o,l):[],projectionSuccess:c,sampledElevation:d}}function Bo(e,t,r){const i=new Array;for(const{index:a,count:s}of e){if(s<=1)continue;const e=3*a,o=e+3*s;i.push({position:t.subarray(e,o),mapPosition:r?r.subarray(e,o):void 0})}return i}function jo(e,t){const r="polygon"===e.type?w.CCW_IS_HOLE:w.NONE,i="polygon"===e.type?e.rings:e.paths,{position:a,outlines:s}=P(i,!1,r),o=O(a,e.spatialReference,0,a,t,0,a.length/3);for(let e=2;e<a.length;e+=3)a[e]=-2;return{lines:o?Bo(s,a):[],projectionSuccess:o}}var qo;!function(e){e[e.KEEP=0]="KEEP",e[e.REMOVE=1]="REMOVE"}(qo||(qo={}));const ko=c(),Zo=c();function $o(e){switch(e){case"butt":return ms.BUTT;case"square":return ms.SQUARE;case"round":return ms.ROUND;default:return null}}export{zo as $,Mi as A,ro as B,ki as C,ni as D,io as E,so as F,Gi as G,Oi as H,xo as I,xi as J,ds as K,us as L,oo as M,la as N,Po as O,hi as P,Di as Q,Es as R,Ro as S,mi as T,Qr as U,Zr as V,da as W,ei as X,Jr as Y,Xr as Z,kr as _,qo as a,Yr as a0,jr as a1,hs as a2,cs as a3,$o as a4,Go as a5,jo as a6,$r as a7,ma as a8,ga as a9,fa as aa,Kr as ab,si as ac,Br as ad,Xa as ae,oi as af,pi as ag,ao as b,Vo as c,Hi as d,Wi as e,zi as f,di as g,yi as h,ci as i,vi as j,ui as k,fi as l,aa as m,Ni as n,Wo as o,Js as p,Ai as q,Ii as r,Do as s,Ao as t,bo as u,Io as v,Ui as w,Qs as x,Li as y,Da as z};
