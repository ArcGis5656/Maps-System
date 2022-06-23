/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"../request.js";import{h as t,L as r,i as a,b as n,S as o,V as s,_ as i,$ as l}from"../core/lang.js";import c from"../core/Error.js";import{eachAlways as f}from"../core/promiseUtils.js";import{e as u}from"./mat3.js";import{b as h}from"./quatf64.js";import{g as p}from"./mat4.js";import{c as m}from"./mat4f64.js";import{a as d,m as y,c as b}from"./quat.js";import{b as g}from"./quatf32.js";import{b as S,s as w,j as M,t as T,T as v,e as E,f as I,v as x}from"./mathUtils.js";import{c as R}from"./vec4f64.js";import{computeTranslationToOriginAndRotation as j,projectBoundingSphere as q,canProjectWithoutEngine as C,projectBuffer as N,projectVectorToVector as k}from"../geometry/projection.js";import{g as z,a as W}from"./projectionEllipsoid.js";import D,{k as F}from"../geometry/SpatialReference.js";import{b as O,d as _,i as U,p as A}from"./aaBoundingRect.js";import L from"../rest/support/Query.js";import{r as G}from"./I3SBinaryReader.js";import{q as K,p as P}from"./LayerView3D.js";import{p as B,h as $}from"./objectResourceUtils.js";import{c as V,a as Q,b as Z}from"../views/SceneView.js";function H(e,t,r,a){const n=J(e,t,r),o=m();return j(r,n,o,a),o}function J(e,t,r){const a=S(),n=e[3],o=2**(4*Math.ceil(Math.log(n)*Math.LOG2E/4)+1);if(r.isGeographic){const t=o/z(r).radius*180/Math.PI,n=Math.round(e[1]/t),s=Math.max(-90,Math.min(90,n*t)),i=t/Math.cos((Math.abs(s)-t/2)/180*Math.PI),l=Math.round(e[0]/i)*i;a[0]=l,a[1]=s}else{const t=Math.round(e[0]/o),r=Math.round(e[1]/o);a[0]=t*o,a[1]=r*o}const s=e[2]+t,i=Math.round(s/o);return a[2]=i*o,a}function X(e){return e&&parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10)}function Y(e){if(t("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers){var r;if("draco"===(null==(r=e.compressedAttributes)?void 0:r.encoding))return!0}return!1}function ee(e,t,r,a,n,o){n.traverse(r,(r=>{let n=r.mbs;t!==a&&(n=oe,q(r.mbs,a,n,t));const s=ie(e,n);return s!==se.OUTSIDE&&(o(r,s),!0)}))}function te(e,t,r){let a=0,n=0;for(let o=0;o<t.length&&a<e.length;o++)e[a]===t[o]&&(r(o)&&(e[n]=e[a],n++),a++);e.length=n}function re(e,t,a){let n=0,o=0;for(;n<a.length;){r(e,a[n])>=0===t&&(a[o]=a[n],o++),n++}a.length=o}const ae=O();function ne(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return ae[0]=(e[0]-t.position[0])/t.rotationScale[0],ae[1]=(e[1]-t.position[1])/t.rotationScale[4],ae[2]=(e[2]-t.position[0])/t.rotationScale[0],ae[3]=(e[3]-t.position[1])/t.rotationScale[4],ae}const oe=R();var se;function ie(e,t){const r=t[0],a=t[1],n=t[3],o=e[0]-r,s=r-e[2],i=e[1]-a,l=a-e[3],c=Math.max(o,s,0),f=Math.max(i,l,0),u=c*c+f*f;if(u>n*n)return se.OUTSIDE;if(u>0)return se.INTERSECTS_CENTER_OUTSIDE;return-Math.max(o,s,i,l)>n?se.INSIDE:se.INTERSECTS_CENTER_INSIDE}function le(e,t,r){const a=[],n=r&&r.missingFields,o=r&&r.originalFields;for(const r of e){const e=r.toLowerCase();let s=!1;for(const n of t)if(e===n.name.toLowerCase()){a.push(n.name),s=!0,o&&o.push(r);break}!s&&n&&n.push(r)}return a}async function ce(t,r,s,i,l){if(0===r.length)return[];const u=t.attributeStorageInfo;if(a(t.associatedLayer))try{return await async function(e,t,r,a){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const n=t.map((e=>e.attributes[r])),o=[],s=le(a,e.fields,{originalFields:o}),i=await fe(e,n,s);for(let e=0;e<t.length;e++){const r=t[e],a=i[e],n={};if(r.attributes)for(const e in r.attributes)n[e]=r.attributes[e];for(let e=0;e<o.length;e++)n[o[e]]=a[s[e]];r.attributes=n}return t}(t.associatedLayer,r,s,i)}catch(e){if(t.associatedLayer.loaded)throw e}if(u){const a=function(e,t,r){const a=new Map,n=[],o=r();for(const r of e){const e=r.attributes[t];for(let t=0;t<o.length;t++){const s=o[t],i=s.featureIds.indexOf(e);if(i>=0){let e=a.get(s.node);e||(e={node:s.node,indices:[],graphics:[]},n.push(e),a.set(s.node,e)),e.indices.push(i),e.graphics.push(r);for(let e=t;e>0;e--)o[e]=o[e-1];o[0]=s;break}}}return n}(r,s,l);if(n(a))throw new c("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const h=t.parsedUrl.path,p=await Promise.all(a.map((t=>function(t,r,a,n,o){const s=[];for(const e of r)if(e&&-1!==o.indexOf(e.name)){const r=`${t}/nodes/${a.resources.attributes}/attributes/${e.key}/0`;s.push({url:r,storageInfo:e})}return f(s.map((t=>e(t.url,{responseType:"array-buffer"}).then((e=>G(t.storageInfo,e.data)))))).then((e=>{const t=[];for(const r of n){const a={};for(let t=0;t<e.length;t++)null!=e[t].value&&(a[s[t].storageInfo.name]=ue(e[t].value,r));t.push(a)}return t}))}(h,u,t.node,t.indices,i).then((e=>{for(let r=0;r<t.graphics.length;r++){const a=t.graphics[r],n=e[r];if(a.attributes)for(const e in a.attributes)e in n||(n[e]=a.attributes[e]);a.attributes=n}return t.graphics})))));return o(p)}throw new c("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function fe(e,t,r){const a=e.capabilities.query.maxRecordCount;if(null!=a&&t.length>a){const n=s(t,a);return Promise.all(n.map((t=>fe(e,t,r)))).then(o)}const n=new L({objectIds:t,outFields:r,orderByFields:[e.objectIdField]});return e.queryFeatures(n).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new c("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(se||(se={}));function ue(e,t){if(!e)return null;const r=e[t];if(i(e))return-32768===r?null:r;if(l(e))return-2147483648===r?null:r;return r!=r?null:r}function he(e){const t=e.store.indexCRS||e.store.geographicCRS,r=void 0===t?e.store.indexWKT:void 0;if(r){if(!e.spatialReference)throw new c("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new c("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=t?new D(X(t)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function pe(e){const t=e.store.vertexCRS||e.store.projectedCRS,r=void 0===t?e.store.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new c("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new c("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const a=t?new D(X(t)):e.spatialReference;return a.equals(e.spatialReference)?e.spatialReference:a}function me(e,t){return n(t)?"@null":t===W(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function de(e,t,r){if(!C(e,t))throw new c("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&!function(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}(e,t))throw new c("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function ye(e,t,r){const a=he(e),n=pe(e);de(a,t,r),de(n,t,r)}function be(e){if(null==e.store||null==e.store.defaultGeometrySchema||(null!=(t=e.store.defaultGeometrySchema).geometryType&&"triangles"!==t.geometryType||null!=t.topology&&"PerAttributeArray"!==t.topology||null==t.vertexAttributes||null==t.vertexAttributes.position))throw new c("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path});var t}function ge(e,t){ye(e,t.spatialReference,t.viewingMode)}function Se(e){if(null==e.store||null==e.store.defaultGeometrySchema||(null==(t=e.store.defaultGeometrySchema).geometryType||"points"!==t.geometryType||null!=t.topology&&"PerAttributeArray"!==t.topology||null!=t.encoding&&""!==t.encoding&&"lepcc-xyz"!==t.encoding||null==t.vertexAttributes||null==t.vertexAttributes.position))throw new c("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{});var t}function we(e,t){de(e.spatialReference,t.spatialReference,t.viewingMode)}function Me(e){return"mesh-3d"===e.type}function Te(e){if(null==e||!function(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const e of t){if(!Me(e)||0===e.symbolLayers.length)return!0;for(const t of e.symbolLayers.items)if("fill"!==t.type||n(t.material)||n(t.material.color)||"replace"!==t.material.colorMixMode)return!0}return!1}const ve=K({color:[0,0,0,0],opacity:0});class Ee{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function Ie(e){const t=new Ee;let r=!1,n=!1;for(const o of e.symbolLayers.items)if("fill"===o.type&&o.enabled){const e=o.material,s=o.edges;if(a(e)&&!r){const n=e.color,s=B(e.colorMixMode);a(n)?t.material={color:[n.r/255,n.g/255,n.b/255],alpha:n.a,colorMixMode:s}:t.material={color:[1,1,1],alpha:1,colorMixMode:$.Multiply},t.castShadows=o.castShadows,r=!0}a(s)&&!n&&(t.edgeMaterial=P(s,{}),n=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:$.Multiply}),t}function xe(e,t){return(0|e)+(0|t)|0}function Re(e,t,r,a,n=0){a===W(a)?t.isGeographic?function(e,t,r,a){const n=z(r),o=1+Math.max(0,a)/(n.radius+e.center[2]);w(t.center,e.center[0],e.center[1],e.center[2]+a),N(t.center,r,0,t.center,W(r),0,1),d(t.quaternion,e.quaternion),b(Fe,e.quaternion),w(Le,0,0,1),v(Le,Le,Fe),w(Le,e.halfSize[0]*Math.abs(Le[0]),e.halfSize[1]*Math.abs(Le[1]),e.halfSize[2]*Math.abs(Le[2])),E(Le,Le,n.inverseFlattening),I(t.halfSize,e.halfSize,Le),E(t.halfSize,t.halfSize,o)}(e,r,t,n):function(e,t,r,a){Z(e,Oe),w(t.center,e.center[0],e.center[1],e.center[2]+a),j(r,t.center,De,W(r)),w(t.center,De[12],De[13],De[14]);const n=2*Math.sqrt(1+De[0]+De[5]+De[10]);Fe[0]=(De[6]-De[9])/n,Fe[1]=(De[8]-De[2])/n,Fe[2]=(De[1]-De[4])/n,Fe[3]=.25*n,y(t.quaternion,Fe,e.quaternion),b(Fe,t.quaternion);let o=0,s=0,i=0;for(const e of Oe)e[2]+=a,N(e,r,0,e,W(r),0,1),T(Le,e,t.center),v(Le,Le,Fe),o=Math.max(o,Math.abs(Le[0])),s=Math.max(s,Math.abs(Le[1])),i=Math.max(i,Math.abs(Le[2]));w(t.halfSize,o,s,i)}(e,r,t,n):t.isWGS84&&(a.isWebMercator||F(a))?function(e,t,r,a,n){M(Ne,t.center),Ne[2]+=n;const o=W(r);N(Ne,e,0,Ne,o,0,1),ze(o,t,Ne,r,a)}(t,e,a,r,n):t.isWebMercator&&F(a)?function(e,t,r,a,n){M(Ne,t.center),Ne[2]+=n,ze(e,t,Ne,r,a)}(t,e,a,r,n):e===r?(r.center[2]+=n,N(r.center,t,0,r.center,a,0,1)):(w(r.center,e.center[0],e.center[1],e.center[2]+n),N(r.center,t,0,r.center,a,0,1),d(r.quaternion,e.quaternion),M(r.halfSize,e.halfSize))}const je=new Float64Array(24),qe={data:je,size:3},Ce=S(),Ne=S(),ke=h();function ze(e,t,r,a,n){const o=u(ke,t.quaternion);for(let e=0;e<8;++e){for(let r=0;r<3;++r)Ce[r]=t.halfSize[r]*(0!=(e&1<<r)?-1:1);for(let t=0;t<3;++t){let a=r[t];for(let e=0;e<3;++e)a+=Ce[e]*o[3*e+t];je[3*e+t]=a}}N(je,e,0,je,a,0,8),Q(qe,n)}function We(e,t,r,o,s,i){if(!i||0===i.length||n(t))return null;const l=H(e.mbs,s,r,t);let c;p(Ke,l);let f=1/0,u=-1/0;const h=n=>{if("replace"!==n.type)return;const i=n.geometry;if(!i.hasZ)return;_(_e);const l=i.spatialReference||o,h=i.rings.reduce(((e,r)=>r.reduce(((e,r)=>(k(r,l,Le,t),x(Le,Le,Ke),U(_e,Le),Math.min(Le[2],e))),e)),1/0);(()=>{if(!c)if(c=Oe,_(Ue),a(e.serviceObb)){Re(e.serviceObb,r,Ae,t,s),Z(Ae,c);for(const e of c)x(e,e,Ke),U(Ue,e)}else{const a=e.mbs,n=a[3];k(a,r,Le,t),x(Le,Le,Ke),Le[2]+=s;for(let e=0;e<8;++e){const t=1&e?n:-n,r=2&e?n:-n,a=4&e?n:-n,o=c[e];M(o,[Le[0]+t,Le[1]+r,Le[2]+a]),U(Ue,o)}}})(),A(Ue,_e)&&(f=Math.min(f,h),u=Math.max(u,h))};if(i.forEach((e=>h(e))),f===1/0)return null;for(let e=0;e<8;++e)m=Ge.data,d=3*e,y=c[e],x(Le,y,l),m[d+0]=Le[0],m[d+1]=Le[1],m[d+2]=Le[2],d+=24,y[2]=f,x(Le,y,l),m[d+0]=Le[0],m[d+1]=Le[1],m[d+2]=Le[2],d+=24,y[2]=u,x(Le,y,l),m[d+0]=Le[0],m[d+1]=Le[1],m[d+2]=Le[2];var m,d,y;return Q(Ge)}const De=m(),Fe=g(),Oe=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],_e=O(),Ue=O(),Ae=V(),Le=[0,0,0],Ge={data:new Array(72),size:3},Ke=m();export{se as M,be as a,ge as b,de as c,me as d,H as e,le as f,he as g,We as h,J as i,te as j,ie as k,xe as l,Ie as m,ue as n,ne as o,re as p,Re as q,Te as r,pe as s,ve as t,ee as u,Se as v,ce as w,we as x,ye as y,Y as z};