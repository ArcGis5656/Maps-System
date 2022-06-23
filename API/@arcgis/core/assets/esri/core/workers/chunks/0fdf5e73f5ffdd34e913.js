"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5880],{15215:(e,t,r)=>{r.d(t,{n:()=>s});var i=r(40167),o=r(27726);class n{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new n(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const o=this.stride;if(o%4==0){const n=new Uint32Array(e.buffer,t*o,i*o/4);new Uint32Array(this.buffer,r*o,i*o/4).set(n)}else{const n=new Uint8Array(e.buffer,t*o,i*o);new Uint8Array(this.buffer,r*o,i*o).set(n)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,i.c,t),this}vec2f64(e,t){return this._appendField(e,i.d,t),this}vec3f(e,t){return this._appendField(e,i.B,t),this}vec3f64(e,t){return this._appendField(e,i.e,t),this}vec4f(e,t){return this._appendField(e,i.a,t),this}vec4f64(e,t){return this._appendField(e,i.f,t),this}mat3f(e,t){return this._appendField(e,i.g,t),this}mat3f64(e,t){return this._appendField(e,i.h,t),this}mat4f(e,t){return this._appendField(e,i.i,t),this}mat4f64(e,t){return this._appendField(e,i.j,t),this}vec4u8(e,t){return this._appendField(e,i.b,t),this}f32(e,t){return this._appendField(e,i.k,t),this}f64(e,t){return this._appendField(e,i.l,t),this}u8(e,t){return this._appendField(e,i.m,t),this}u16(e,t){return this._appendField(e,i.n,t),this}i8(e,t){return this._appendField(e,i.o,t),this}vec2i8(e,t){return this._appendField(e,i.p,t),this}vec2i16(e,t){return this._appendField(e,i.q,t),this}vec2u8(e,t){return this._appendField(e,i.r,t),this}vec4u16(e,t){return this._appendField(e,i.s,t),this}u32(e,t){return this._appendField(e,i.t,t),this}_appendField(e,t,r){const i=t.ElementCount*(0,o.e)(t.ElementType),n=this.stride;this.fields.set(e,{size:i,constructor:t,offset:n,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new n(this,e)}createView(e){return new n(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},4663:(e,t,r)=>{var i,o;r.d(t,{R:()=>o,a:()=>i}),function(e){e[e.MATERIAL=0]="MATERIAL",e[e.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",e[e.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",e[e.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",e[e.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",e[e.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",e[e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",e[e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT",e[e.MAX_PASS=8]="MAX_PASS"}(i||(i={})),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_PLUGIN=3]="OPAQUE_PLUGIN",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_PLUGIN=5]="TRANSPARENT_PLUGIN",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=12]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=13]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VOXEL=22]="VOXEL",e[e.MAX_SLOTS=23]="MAX_SLOTS"}(o||(o={}))},10638:(e,t,r)=>{r.d(t,{T:()=>p,a:()=>h,c:()=>m,i:()=>f,w:()=>u});var i=r(76506),o=r(82426),n=r(60991),a=r(92143),s=r(95708),l=r(30752);const c=a.L.getLogger("esri/views/webgl"),d=!!(0,i.h)("enable-feature:webgl-debug");function u(){return d}function h(){return d}function m(e){if(u()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),i=(new Error).stack;c.error(new n.Z("webgl-error","WebGL error occured",{message:r,stack:i}))}}}function f(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}class p{constructor(e,t,r=null){if(this._context=e,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(l.R.Texture,this),this._descriptor={target:l.T.TEXTURE_2D,samplingMode:l.c.LINEAR,wrapMode:l.f.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1,...t},e.type!==s.C.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),_(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===l.T.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(l.R.Texture,this))}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===l.T.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=l.T.TEXTURE_CUBE_MAP_POSITIVE_X;t<=l.T.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===e&&(e=null);const o=this._descriptor;null!=t||(t=o.target);const n=_(t);var a;null===e&&(o.width=o.width||4,o.height=o.height||4,n&&(o.depth=null!=(a=o.depth)?a:1));const s=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(p.TEXTURE_UNIT_FOR_UPDATES),p._validateTexture(this._context,o),this._configurePixelStorage();const c=o.pixelFormat;let d=o.internalFormat?o.internalFormat:this._deriveInternalFormat(c,o.dataType);if(v(e)){let i=e.width,a=e.height;const s=1;e instanceof HTMLVideoElement&&(i=e.videoWidth,a=e.videoHeight),o.width&&o.height,n&&o.depth,o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,d,o.hasMipmap,i,a,s),this._texImage(t,0,d,i,a,s,e),m(r),o.hasMipmap&&this.generateMipmap(),void 0===o.width&&(o.width=i),void 0===o.height&&(o.height=a),n&&void 0===o.depth&&(o.depth=s)}else{const{width:a,height:s,depth:c}=o;if(null!=a&&null!=s||console.error("Width and height must be specified!"),n&&null==c&&console.error("Depth must be specified!"),o.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,d,o.hasMipmap,a,s,c),r.DEPTH24_STENCIL8&&d===r.DEPTH_STENCIL&&(d=r.DEPTH24_STENCIL8),g(e)){const i=e.levels,n=T(t,a,s,c),u=Math.min(n-1,i.length-1);f(r)?r.texParameteri(o.target,r.TEXTURE_MAX_LEVEL,u):o.hasMipmap=o.hasMipmap&&n===i.length;const h=d;if(!(h in l.k))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel(((e,r,o,n)=>{const a=i[Math.min(e,i.length-1)];this._compressedTexImage(t,e,h,r,o,n,a)}),u)}else(0,i.i)(e)?(this._texImage(t,0,d,a,s,c,e),m(r),o.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel(((e,i,o,n)=>{this._texImage(t,e,d,i,o,n,null),m(r)}))}p._applySamplingMode(r,this._descriptor),p._applyWrapMode(r,this._descriptor),p._applyAnisotropicFilteringParameters(this._context,this._descriptor),m(r),this._context.bindTexture(s,p.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,r,i,o,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const a=this._context.gl,s=this._descriptor,{pixelFormat:l,internalFormat:c,dataType:d,isImmutable:u,target:h}=s;if(u&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const m=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES);(t<0||r<0||i>s.width||o>s.height||t+i>s.width||r+o>s.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),v(n)?a.texSubImage2D(h,e,t,r,l,d,n):g(n)?a.compressedTexSubImage2D(h,e,t,r,i,o,c,n.levels[e]):a.texSubImage2D(h,e,t,r,i,o,l,d,n),this._context.bindTexture(m,p.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,r,i,o,n,a,s){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._context.gl;if(!f(l))throw new Error("3D textures are not supported in WebGL1");const c=this._descriptor,{pixelFormat:d,dataType:u,isImmutable:h,target:m,internalFormat:v}=c;if(h&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");_(m)||console.warn("Attempting to set 3D texture data on a non-3D texture");const T=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(p.TEXTURE_UNIT_FOR_UPDATES),(t<0||r<0||i<0||o>c.width||n>c.height||a>c.depth||t+o>c.width||r+n>c.height||i+a>c.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),g(s))s=s.levels[e],l.compressedTexSubImage3D(m,e,t,r,i,o,n,a,v,s);else{const c=s;l.texSubImage3D(m,e,t,r,i,o,n,a,d,u,c)}this._context.bindTexture(T,p.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,p._validateTexture(this._context,e)}e.samplingMode===l.c.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=l.c.LINEAR_MIPMAP_NEAREST):e.samplingMode===l.c.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=l.c.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,p.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(p.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,p.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,p._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(p._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(p._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.type===s.C.WEBGL1)return e;switch(t){case l.b.FLOAT:switch(e){case l.a.RGBA:return l.g.RGBA32F;case l.a.RGB:return l.g.RGB32F;default:throw new Error("Unable to derive format")}case l.b.UNSIGNED_BYTE:switch(e){case l.a.RGBA:return l.g.RGBA8;case l.a.RGB:return l.g.RGB8}default:return e}}_configurePixelStorage(){const e=this._context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,i,o,n){const a=this._context.gl;if(!f(a))throw new Error("Immutable textures are not supported in WebGL1");if(!(t in l.g))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const s=r?T(e,i,o,n):1;_(e)?a.texStorage3D(e,s,t,i,o,n):a.texStorage2D(e,s,t,i,o),this._wasImmutablyAllocated=!0}_texImage(e,t,r,o,n,a,l){const c=this._context.gl;let d=null;const u=this._context.type===s.C.WEBGL2,h=_(e),{isImmutable:m,pixelFormat:f,dataType:p}=this._descriptor;if(u&&(d=c),u||!v(l))if(m){if((0,i.i)(l)){const r=l;h?d.texSubImage3D(e,t,0,0,0,o,n,a,f,p,r):c.texSubImage2D(e,t,0,0,o,n,f,p,r)}}else{const s=(0,i.u)(l);h?d.texImage3D(e,t,r,o,n,a,0,f,p,s):c.texImage2D(e,t,r,o,n,0,f,p,s)}else c.texImage2D(e,0,r,f,p,l)}_compressedTexImage(e,t,r,o,n,a,l){const c=this._context.gl;let d=null;const u=_(e),h=this._descriptor.isImmutable;if(u){if(this._context.type!==s.C.WEBGL2)throw new Error("3D textures are not supported in WebGL1");d=c}h?(0,i.i)(l)&&(u?d.compressedTexSubImage3D(e,t,0,0,0,o,n,a,r,l):c.compressedTexSubImage2D(e,t,0,0,o,n,r,l)):u?d.compressedTexImage3D(e,t,r,o,n,a,0,l):c.compressedTexImage2D(e,t,r,o,n,0,l)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:i,depth:o,hasMipmap:n,target:a}=this._descriptor;const s=a===l.T.TEXTURE_3D;for(let a=0;e(a,r,i,o),n&&(1!==r||1!==i||s&&1!==o)&&!(a>=t);++a)r=Math.max(1,r>>1),i=Math.max(1,i>>1),s&&(o=Math.max(1,o>>1))}static _validateTexture(e,t){(t.width<0||t.height<0||t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const r=f(e.gl),i=(0,o.S)(t.width)&&(0,o.S)(t.height);r||!t.isImmutable&&!_(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),r||i||("number"==typeof t.wrapMode?t.wrapMode!==l.f.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===l.f.CLAMP_TO_EDGE&&t.wrapMode.t===l.f.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let r=t.samplingMode,i=t.samplingMode;r===l.c.LINEAR_MIPMAP_NEAREST||r===l.c.LINEAR_MIPMAP_LINEAR?(r=l.c.LINEAR,t.hasMipmap||(i=l.c.LINEAR)):r!==l.c.NEAREST_MIPMAP_NEAREST&&r!==l.c.NEAREST_MIPMAP_LINEAR||(r=l.c.NEAREST,t.hasMipmap||(i=l.c.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}static _applyWrapMode(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){var r;const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,null!=(r=t.maxAnisotropy)?r:1)}}function g(e){return(0,i.i)(e)&&"type"in e&&"compressed"===e.type}function v(e){return(0,i.i)(e)&&!g(e)&&!function(e){return(0,i.i)(e)&&"byteLength"in e}(e)}function _(e){return e===l.T.TEXTURE_3D||e===l.T.TEXTURE_2D_ARRAY}function T(e,t,r,i=1){let o=Math.max(t,r);return e===l.T.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}p.TEXTURE_UNIT_FOR_UPDATES=0},99520:(e,t,r)=>{var i;r.d(t,{V:()=>i}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(i||(i={}))},59696:(e,t,r)=>{r.d(t,{V:()=>i});class i{constructor(e,t,r,i,o,n=!1,a=0){this.name=e,this.count=t,this.type=r,this.offset=i,this.stride=o,this.normalized=n,this.divisor=a}}},95708:(e,t,r)=>{var i,o;function n(e,t,r={}){const o=t===i.WEBGL1?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let n=null;for(const t of o){try{n=e.getContext(t,r)}catch(e){}if(n)break}return n}r.d(t,{C:()=>i,c:()=>n}),r(76506),(o=i||(i={}))[o.WEBGL1=1]="WEBGL1",o[o.WEBGL2=2]="WEBGL2"},49500:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>{var r;return null!=(null==(r=e)?void 0:r.match(t))}))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{a:()=>o,i:()=>i});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,l]},76287:(e,t,r)=>{r.r(t),r.d(t,{C:()=>eo,D:()=>ki,E:()=>ro,H:()=>io,M:()=>oo,N:()=>Ci,P:()=>Bi,V:()=>$i,a:()=>Li,b:()=>Zi,c:()=>ji,d:()=>Ki,e:()=>Yi,f:()=>Oi,g:()=>Xi,h:()=>Ii,i:()=>Gi,j:()=>Mi,k:()=>mo,l:()=>Co,m:()=>vo,n:()=>Do,o:()=>to,p:()=>Ui,q:()=>Ri,r:()=>Qi,s:()=>Fo});var i,o,n,a,s,l,c,d,u,h,m,f,p,g,v,_=r(49500),T=r(76506),x=r(26923),b=r(45087),A=r(65775),E=r(57532),S=r(82426),R=r(53326),C=r(40167),M=r(72836),O=r(90779),y=r(82058),N=r(41864),w=r(60991),P=r(92143),D=r(50406),L=r(10738);async function I(e,t){const{data:r}=await(0,y.default)(e,{responseType:"image",...t});return r}(v=i||(i={}))[v.None=0]="None",v[v.Front=1]="Front",v[v.Back=2]="Back",v[v.COUNT=3]="COUNT",function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(n||(n={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(a||(a={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(l||(l={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(c||(c={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(d||(d={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(h||(h={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(m||(m={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(f||(f={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(p||(p={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(g||(g={}));var F=r(6906),B=r(68681);(0,B.c)();class U{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function G(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new U(t)}var z,V=r(19657),H=r(99520);function W(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}!function(e){e[e.Global=1]="Global",e[e.Local=2]="Local"}(z||(z={}));const k=new Float64Array(1),q=new Float32Array(2);new Float64Array(3),new Float32Array(6),(0,E.c)();class ${constructor(){this.id=(0,V.g)()}unload(){}}var X,j;(j=X||(X={}))[j.Layer=0]="Layer",j[j.Object=1]="Object",j[j.Geometry=2]="Geometry",j[j.Material=3]="Material",j[j.Texture=4]="Texture",j[j.COUNT=5]="COUNT";const Y=new Map([[H.V.POSITION,0],[H.V.NORMAL,1],[H.V.UV0,2],[H.V.COLOR,3],[H.V.SIZE,4],[H.V.TANGENT,4],[H.V.AUXPOS1,5],[H.V.SYMBOLCOLOR,5],[H.V.AUXPOS2,6],[H.V.FEATUREATTRIBUTE,6],[H.V.INSTANCEFEATUREATTRIBUTE,6],[H.V.INSTANCECOLOR,7],[H.V.MODEL,8],[H.V.MODELNORMAL,12],[H.V.MODELORIGINHI,11],[H.V.MODELORIGINLO,15]]);(0,S.k)(10),(0,S.k)(12),(0,S.k)(70),(0,S.k)(40);const K={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Z=(0,R.a)();function Q(e,t,r,i,o,n,a){if(!function(e){return!!(0,T.i)(e)&&!e.visible}(t))if(e.boundingInfo){G(e.primitiveType===h.Triangle);const t=r.tolerance;ee(e.boundingInfo,i,o,t,n,a)}else{const t=e.indices.get(H.V.POSITION),r=e.vertexAttributes.get(H.V.POSITION);re(i,o,0,t.length/3,t,r,void 0,n,a)}}const J=(0,S.b)();function ee(e,t,r,i,o,n){if((0,T.b)(e))return;const a=function(e,t,r){return(0,S.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,J);if((0,R.b)(Z,e.getBBMin()),(0,R.d)(Z,e.getBBMax()),(0,T.i)(o)&&o.applyToAabb(Z),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,r,i)}(Z,t,a,i)){const{primitiveIndices:a,indices:s,position:l}=e,c=a?a.length:s.length/3;if(c>ce){const a=e.getChildren();if(void 0!==a){for(let e=0;e<8;++e)void 0!==a[e]&&ee(a[e],t,r,i,o,n);return}}re(t,r,0,c,s,l,a,o,n)}}const te=(0,S.b)();function re(e,t,r,i,o,n,a,s,l){if(a)return function(e,t,r,i,o,n,a,s,l){const c=n.data,d=n.stride||n.size,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,g=t[2]-m;for(let e=r;e<i;++e){const t=a[e];let r=3*t,i=d*o[r++],n=c[i++],v=c[i++],_=c[i];i=d*o[r++];let x=c[i++],b=c[i++],A=c[i];i=d*o[r];let E=c[i++],S=c[i++],R=c[i];(0,T.i)(s)&&([n,v,_]=s.applyToVertex(n,v,_,e),[x,b,A]=s.applyToVertex(x,b,A,e),[E,S,R]=s.applyToVertex(E,S,R,e));const C=x-n,M=b-v,O=A-_,y=E-n,N=S-v,w=R-_,P=p*w-N*g,D=g*y-w*f,L=f*N-y*p,I=C*P+M*D+O*L;if(Math.abs(I)<=Number.EPSILON)continue;const F=u-n,B=h-v,U=m-_,G=F*P+B*D+U*L;if(I>0){if(G<0||G>I)continue}else if(G>0||G<I)continue;const z=B*O-M*U,V=U*C-O*F,H=F*M-C*B,W=f*z+p*V+g*H;if(I>0){if(W<0||G+W>I)continue}else if(W>0||G+W<I)continue;const k=(y*z+N*V+w*H)/I;k>=0&&l(k,ne(C,M,O,y,N,w,te),t,!1)}}(e,t,r,i,o,n,a,s,l);const c=n.data,d=n.stride||n.size,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,g=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=d*o[t++],i=c[r++],n=c[r++],a=c[r];r=d*o[t++];let v=c[r++],_=c[r++],x=c[r];r=d*o[t++];let b=c[r++],A=c[r++],E=c[r];(0,T.i)(s)&&([i,n,a]=s.applyToVertex(i,n,a,e),[v,_,x]=s.applyToVertex(v,_,x,e),[b,A,E]=s.applyToVertex(b,A,E,e));const S=v-i,R=_-n,C=x-a,M=b-i,O=A-n,y=E-a,N=p*y-O*g,w=g*M-y*f,P=f*O-M*p,D=S*N+R*w+C*P;if(Math.abs(D)<=Number.EPSILON)continue;const L=u-i,I=h-n,F=m-a,B=L*N+I*w+F*P;if(D>0){if(B<0||B>D)continue}else if(B>0||B<D)continue;const U=I*C-R*F,G=F*S-C*L,z=L*R-S*I,V=f*U+p*G+g*z;if(D>0){if(V<0||B+V>D)continue}else if(V>0||B+V<D)continue;const H=(M*U+O*G+y*z)/D;H>=0&&l(H,ne(S,R,C,M,O,y,te),e,!1)}}const ie=(0,S.b)(),oe=(0,S.b)();function ne(e,t,r,i,o,n,a){return(0,S.s)(ie,e,t,r),(0,S.s)(oe,i,o,n),(0,S.a)(a,ie,oe),(0,S.n)(a,a),a}function ae(e,t){const r=t?ae(t):{};for(const t in e){let i=e[t];i&&i.forEach&&(i=se(i)),null==i&&t in r||(r[t]=i)}return r}function se(e){const t=[];return e.forEach((e=>t.push(e))),t}const le={multiply:1,ignore:2,replace:3,tint:4},ce=1e3;class de extends ${constructor(e,t){super(),this.type=X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Y,this._parameters=ae(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(r=!0,Array.isArray(o)?e[i]=o.slice():e[i]=o)}return r})(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,T.i)(this.repository)&&this.repository.materialChanged(this)}}var ue;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(ue||(ue={}));const he={renderOccluded:ue.Occlude};var me=r(14049);function fe(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}function pe(e){e.code.add(fe`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function ge(e){e.include(pe),e.code.add(fe`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(fe||(fe={}));const ve=P.L.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class _e{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&ve.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class Te extends _e{constructor(){super(...arguments),this.vertex=new Ae,this.fragment=new Ae,this.attributes=new Ee,this.varyings=new Se,this.extensions=new Re,this.constants=new Ce}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?Oe:Me,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class xe{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){return Array.from(this._entries.values()).map((e=>{return`uniform ${e.type} ${e.name}${t=e.arraySize,t?`[${t}]`:""};`;var t}))}get entries(){return Array.from(this._entries.values())}}class be{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Ae extends _e{constructor(){super(...arguments),this.uniforms=new xe,this.code=new be,this.constants=new Ce}get builder(){return this}}class Ee{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class Se{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class Re{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?Re.ALLOWLIST_VERTEX:Re.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}Re.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Re.ALLOWLIST_VERTEX=[];class Ce{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=Ce._numberToFloatStr(r);break;case"int":i=Ce._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${Ce._numberToFloatStr(r[0])},                            ${Ce._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${Ce._numberToFloatStr(r[0])},                            ${Ce._numberToFloatStr(r[1])},                            ${Ce._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${Ce._numberToFloatStr(r[0])},                            ${Ce._numberToFloatStr(r[1])},                            ${Ce._numberToFloatStr(r[2])},                            ${Ce._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${Ce._numberToIntStr(r[0])},                             ${Ce._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${Ce._numberToIntStr(r[0])},                             ${Ce._numberToIntStr(r[1])},                             ${Ce._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${Ce._numberToIntStr(r[0])},                             ${Ce._numberToIntStr(r[1])},                             ${Ce._numberToIntStr(r[2])},                             ${Ce._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>Ce._numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const Me="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Oe="precision highp float;\nprecision highp sampler2D;";var ye=r(22465),Ne=r(30752),we=r(10638),Pe=r(59696),De=r(95708);const Le=P.L.getLogger("esri.views.webgl.BufferObject");class Ie{constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(Ne.R.Buffer,this),this._glName=this._context.gl.createBuffer(),(0,we.c)(this._context.gl),i&&this.setData(i)}static createIndex(e,t,r){return new Ie(e,Ne.l.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new Ie(e,Ne.l.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==De.C.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new Ie(e,Ne.l.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=Ne.U.STREAM_READ,r){if(e.type!==De.C.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new Ie(e,Ne.l.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=Ne.U.STREAM_DRAW,r){if(e.type!==De.C.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new Ie(e,Ne.l.PIXEL_UNPACK_BUFFER,t,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return this.bufferType===Ne.l.ELEMENT_ARRAY_BUFFER?this._indexType===Ne.D.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===Ne.l.ELEMENT_ARRAY_BUFFER||this.bufferType===Ne.l.ARRAY_BUFFER}dispose(){var e;null!=(e=this._context)&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(Ne.R.Buffer,this),this._context=null):this._glName&&Le.warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&Le.error("Buffer size needs to be positive!"),this.bufferType===Ne.l.ELEMENT_ARRAY_BUFFER&&(0,T.i)(t))switch(this._indexType=t,t){case Ne.D.UNSIGNED_SHORT:e*=2;break;case Ne.D.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===Ne.l.ELEMENT_ARRAY_BUFFER&&((0,T.z)(e)&&(t/=2,this._indexType=Ne.D.UNSIGNED_SHORT),(0,T.A)(e)&&(t/=4,this._indexType=Ne.D.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;(0,T.i)(t)?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,we.c)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t=0,r=0,i=e.byteLength){if(!e)return;(t<0||t>=this._size)&&Le.error("offset is out of range!");let o=t,n=r,a=i,s=e.byteLength;this.bufferType===Ne.l.ELEMENT_ARRAY_BUFFER&&((0,T.z)(e)?(s/=2,o*=2,n*=2,a*=2):(0,T.A)(e)&&(s/=4,o*=4,n*=4,a*=4)),void 0===i&&(i=s-1),r>=i&&Le.error("end must be bigger than start!"),t+r-i>this._size&&Le.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const c=this._context.gl,d=ArrayBuffer.isView(e)?e.buffer:e,u=0===n&&a===e.byteLength?d:d.slice(n,a);c.bufferSubData(this.bufferType,o,u),(0,we.c)(c),this._isVAOAware&&this._context.bindVAO(l)}setSubDataFromView(e,t,r,i){if(!e)return;(t<0||t>=this._size)&&Le.error("offset is out of range!"),r>=i&&Le.error("end must be bigger than start!"),t+r-i>this._size&&Le.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const n=this._context.gl;if(this._context.type===De.C.WEBGL2)n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{const o=0===r&&i===e.length?e:e.subarray(r,i);n.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,o)}(0,we.c)(n),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,t=0,r,i){if(this._context.type!==De.C.WEBGL2)return void Le.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||i<0)return void Le.error("Problem getting subdata: offset and length were less than zero!");const o=(0,T.B)(e)?e.BYTES_PER_ELEMENT:1;if(o*((null!=r?r:0)+(null!=i?i:0))>e.byteLength)return void Le.error("Problem getting subdata: offset and length exceeded destination size!");t+o*(null!=i?i:0)>this.byteSize&&Le.warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this._context.bindBuffer(this,Ne.l.COPY_READ_BUFFER),n.getBufferSubData(Ne.l.COPY_READ_BUFFER,t,e,r,i),this._context.unbindBuffer(Ne.l.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,r,i){this._context.type===De.C.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):Le.error("Get buffer subdata is supported in WebGL2 only!")}}function Fe(e,t,r,i,o=0){const n=e.gl,a=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);void 0===r&&console.error(`There is no location for vertex attribute '${e.name}' defined.`);const i=o*e.stride;if(e.count<=4)n.vertexAttribPointer(r,e.count,e.type,e.normalized,e.stride,e.offset+i),n.enableVertexAttribArray(r),e.divisor>0&&a&&a.vertexAttribDivisor(r,e.divisor);else if(9===e.count)for(let t=0;t<3;t++)n.vertexAttribPointer(r+t,3,e.type,e.normalized,e.stride,e.offset+12*t+i),n.enableVertexAttribArray(r+t),e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else if(16===e.count)for(let t=0;t<4;t++)n.vertexAttribPointer(r+t,4,e.type,e.normalized,e.stride,e.offset+16*t+i),n.enableVertexAttribArray(r+t),e.divisor>0&&a&&a.vertexAttribDivisor(r+t,e.divisor);else console.error("Unsupported vertex attribute element count: "+e.count)}}function Be(e,t,r,i){const o=e.gl,n=e.capabilities.instancing;e.bindBuffer(r);for(const e of i){const r=t.get(e.name);if(e.count<=4)o.disableVertexAttribArray(r),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r,0);else if(9===e.count)for(let t=0;t<3;t++)o.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else if(16===e.count)for(let t=0;t<4;t++)o.disableVertexAttribArray(r+t),e.divisor&&e.divisor>0&&n&&n.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}e.unbindBuffer(Ne.l.ARRAY_BUFFER)}function Ue(e){switch(e){case Ne.a.ALPHA:case Ne.a.LUMINANCE:case Ne.a.RED:case Ne.a.RED_INTEGER:case Ne.g.R8:case Ne.g.R8I:case Ne.g.R8UI:case Ne.g.R8_SNORM:case Ne.m.STENCIL_INDEX8:return 1;case Ne.a.LUMINANCE_ALPHA:case Ne.a.RG:case Ne.a.RG_INTEGER:case Ne.g.RGBA4:case Ne.g.R16F:case Ne.g.R16I:case Ne.g.R16UI:case Ne.g.RG8:case Ne.g.RG8I:case Ne.g.RG8UI:case Ne.g.RG8_SNORM:case Ne.g.RGB565:case Ne.g.RGB5_A1:case Ne.m.DEPTH_COMPONENT16:return 2;case Ne.a.DEPTH_COMPONENT:case Ne.a.RGB:case Ne.a.RGB_INTEGER:case Ne.g.RGB8:case Ne.g.RGB8I:case Ne.g.RGB8UI:case Ne.g.RGB8_SNORM:case Ne.g.SRGB8:case Ne.m.DEPTH_COMPONENT24:return 3;case Ne.a.DEPTH_STENCIL:case Ne.a.RGBA:case Ne.a.RGBA_INTEGER:case Ne.g.RGBA8:case Ne.g.R32F:case Ne.g.R11F_G11F_B10F:case Ne.g.RG16F:case Ne.g.R32I:case Ne.g.R32UI:case Ne.g.RG16I:case Ne.g.RG16UI:case Ne.g.RGBA8I:case Ne.g.RGBA8UI:case Ne.g.RGBA8_SNORM:case Ne.g.SRGB8_ALPHA8:case Ne.g.RGB9_E5:case Ne.g.RGB10_A2UI:case Ne.g.RGB10_A2:case Ne.m.DEPTH_STENCIL:case Ne.m.DEPTH_COMPONENT32F:case Ne.m.DEPTH24_STENCIL8:return 4;case Ne.m.DEPTH32F_STENCIL8:return 5;case Ne.g.RGB16F:case Ne.g.RGB16I:case Ne.g.RGB16UI:return 6;case Ne.g.RG32F:case Ne.g.RG32I:case Ne.g.RG32UI:case Ne.g.RGBA16F:case Ne.g.RGBA16I:case Ne.g.RGBA16UI:return 8;case Ne.g.RGB32F:case Ne.g.RGB32I:case Ne.g.RGB32UI:return 12;case Ne.g.RGBA32F:case Ne.g.RGBA32I:case Ne.g.RGBA32UI:return 16;case Ne.k.COMPRESSED_RGB_S3TC_DXT1_EXT:case Ne.k.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case Ne.k.COMPRESSED_RGBA_S3TC_DXT3_EXT:case Ne.k.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case Ne.k.COMPRESSED_R11_EAC:case Ne.k.COMPRESSED_SIGNED_R11_EAC:case Ne.k.COMPRESSED_RGB8_ETC2:case Ne.k.COMPRESSED_SRGB8_ETC2:case Ne.k.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case Ne.k.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case Ne.k.COMPRESSED_RG11_EAC:case Ne.k.COMPRESSED_SIGNED_RG11_EAC:case Ne.k.COMPRESSED_RGBA8_ETC2_EAC:case Ne.k.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function Ge(e){if((0,T.b)(e))return 0;if("descriptor"in e)return e.glName?Ge(e.descriptor):0;const t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;const r="hasMipmap"in e&&e.hasMipmap?1.3:1,i=e.width*e.height;return Ue(t)*i*r}const ze=P.L.getLogger("esri.views.webgl.VertexArrayObject");class Ve{constructor(e,t,r,i,o=null){this._context=e,this._locations=t,this._layout=r,this._buffers=i,this._indexBuffer=o,this._glName=null,this._initialized=!1,e.instanceCounter.increment(Ne.R.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].size),(0,T.i)(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(this._context){if(this._glName){var t,r;const e=null==(t=this._context)||null==(r=t.capabilities)?void 0:r.vao;e?(e.deleteVertexArray(this._glName),this._glName=null):ze.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e].dispose(),delete this._buffers[e];this._indexBuffer=(0,T.p)(this._indexBuffer)}this._context.instanceCounter.decrement(Ne.R.VAO,this),this._context=null}else(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&ze.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||ze.error("Vertex buffer dictionary is empty!");const i=this._context.gl;for(const r in e){const i=e[r];i||ze.error("Vertex buffer is uninitialized!");const o=t[r];o||ze.error("Vertex element descriptor is empty!"),Fe(this._context,this._locations,i,o)}(0,T.i)(r)&&(this._context.capabilities.vao?i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:e,_layout:t}=this;e||ze.error("Vertex buffer dictionary is empty!");for(const r in e){const i=e[r];i||ze.error("Vertex buffer is uninitialized!");const o=t[r];Be(this._context,this._locations,i,o)}(0,T.i)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}class He{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,S.b)(),G(e.length>=1),G(r.length%this._numIndexPerPrimitive==0),G(r.length>=e.length*this._numIndexPerPrimitive),G(3===i.size||4===i.size);const{data:o,size:n}=i,a=e.length;let s=n*r[this._numIndexPerPrimitive*e[0]];We.clear(),We.push(s),this.bbMin=(0,S.q)(o[s],o[s+1],o[s+2]),this.bbMax=(0,S.p)(this.bbMin);for(let t=0;t<a;++t){const i=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=n*r[i+e],We.push(s);let t=o[s];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[s+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[s+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}(0,S.g)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let e=0;e<We.length;++e){s=We.getItemAt(e);const t=o[s]-this.center[0],r=o[s+1]-this.center[1],i=o[s+2]-this.center[2],n=t*t+r*r+i*i;if(n<=l)continue;const a=Math.sqrt(n),c=.5*(a-this.radius);this.radius=this.radius+c,l=this.radius*this.radius;const d=c/a;this.center[0]+=t*d,this.center[1]+=r*d,this.center[2]+=i*d}We.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,S.F)(this.bbMin,this.bbMax)>1){const e=(0,S.g)((0,S.b)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:n}=this.position;for(let a=0;a<t;++a){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=n*this.indices[s],c=o[l],d=o[l+1],u=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=n*this.indices[s+e];const t=o[l],r=o[l+1],i=o[l+2];t<c&&(c=t),r<d&&(d=r),i<u&&(u=i)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),r[a]=t,++i[t]}let a=0;for(let e=0;e<8;++e)i[e]>0&&++a;if(a<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];s[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==s[e]&&(this._children[e]=new He(s[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){We.prune()}}const We=new F.P({deallocator:null});class ke extends ${constructor(e,t=[],r=h.Triangle,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=X.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,r]of e)r&&this._vertexAttributes.set(t,{...r});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,me.g)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,r]of t)r&&(this._indices.set(e,qe(r)),e===H.V.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}cloneShallow(){const e=new ke([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:r}=e;return this._vertexAttributes.forEach(((e,r)=>{t.set(r,e)})),this._indices.forEach(((e,t)=>{r.set(t,e)})),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,T.b)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===h.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(H.V.POSITION),r=this.vertexAttributes.get(H.V.POSITION);return(0,me.c)(r,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(H.V.POSITION),r=this.vertexAttributes.get(H.V.POSITION);return(0,me.a)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(H.V.POSITION);if(0===e.length)return null;const t=this.primitiveType===h.Triangle?3:1;G(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,me.g)(e.length/t),i=this.vertexAttributes.get(H.V.POSITION);return new He(r,t,e,i)}}function qe(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var $e;function Xe(e,t,r,i){const o=r.typedBuffer,n=r.typedBufferStride,a=e.length;i*=n;for(let r=0;r<a;++r){const a=2*e[r];o[i]=t[a],o[i+1]=t[a+1],i+=n}}function je(e,t,r,i,o){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==o||1===o)for(let r=0;r<s;++r){const o=3*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],i+=a}else for(let r=0;r<s;++r){const s=3*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],i+=a}}function Ye(e,t,r,i,o,n=1){if(!r)return void je(e,t,i,o,n);const a=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],d=r[1],u=r[2],h=r[4],m=r[5],f=r[6],p=r[8],g=r[9],v=r[10],_=r[12],T=r[13],x=r[14];if(o*=s,1===n)for(let r=0;r<l;++r){const i=3*e[r],n=t[i],l=t[i+1],b=t[i+2];a[o]=c*n+h*l+p*b+_,a[o+1]=d*n+m*l+g*b+T,a[o+2]=u*n+f*l+v*b+x,o+=s}else for(let r=0;r<l;++r){const i=3*e[r],l=t[i],b=t[i+1],A=t[i+2],E=c*l+h*b+p*A+_,S=d*l+m*b+g*A+T,R=u*l+f*b+v*A+x;for(let e=0;e<n;++e)a[o]=E,a[o+1]=S,a[o+2]=R,o+=s}}function Ke(e,t,r,i,o,n=1){if(!r)return void je(e,t,i,o,n);const a=r,s=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=a[0],u=a[1],h=a[2],m=a[4],f=a[5],p=a[6],g=a[8],v=a[9],_=a[10],T=!(0,A.k)(a),x=1e-6,b=.999999;if(o*=l,1===n)for(let r=0;r<c;++r){const i=3*e[r],n=t[i],a=t[i+1],c=t[i+2];let A=d*n+m*a+g*c,E=u*n+f*a+v*c,S=h*n+p*a+_*c;if(T){const e=A*A+E*E+S*S;if(e<b&&e>x){const t=1/Math.sqrt(e);A*=t,E*=t,S*=t}}s[o+0]=A,s[o+1]=E,s[o+2]=S,o+=l}else for(let r=0;r<c;++r){const i=3*e[r],a=t[i],c=t[i+1],A=t[i+2];let E=d*a+m*c+g*A,S=u*a+f*c+v*A,R=h*a+p*c+_*A;if(T){const e=E*E+S*S+R*R;if(e<b&&e>x){const t=1/Math.sqrt(e);E*=t,S*=t,R*=t}}for(let e=0;e<n;++e)s[o+0]=E,s[o+1]=S,s[o+2]=R,o+=l}}function Ze(e,t,r,i,o,n=1){if(!r)return void function(e,t,r,i,o=1){const n=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===o)for(let r=0;r<s;++r){const o=4*e[r];n[i]=t[o],n[i+1]=t[o+1],n[i+2]=t[o+2],n[i+3]=t[o+3],i+=a}else for(let r=0;r<s;++r){const s=4*e[r];for(let e=0;e<o;++e)n[i]=t[s],n[i+1]=t[s+1],n[i+2]=t[s+2],n[i+3]=t[s+3],i+=a}}(e,t,i,o,n);const a=r,s=i.typedBuffer,l=i.typedBufferStride,c=e.length,d=a[0],u=a[1],h=a[2],m=a[4],f=a[5],p=a[6],g=a[8],v=a[9],_=a[10],T=!(0,A.k)(a),x=1e-6,b=.999999;if(o*=l,1===n)for(let r=0;r<c;++r){const i=4*e[r],n=t[i],a=t[i+1],c=t[i+2],A=t[i+3];let E=d*n+m*a+g*c,S=u*n+f*a+v*c,R=h*n+p*a+_*c;if(T){const e=E*E+S*S+R*R;if(e<b&&e>x){const t=1/Math.sqrt(e);E*=t,S*=t,R*=t}}s[o+0]=E,s[o+1]=S,s[o+2]=R,s[o+3]=A,o+=l}else for(let r=0;r<c;++r){const i=4*e[r],a=t[i],c=t[i+1],A=t[i+2],E=t[i+3];let S=d*a+m*c+g*A,R=u*a+f*c+v*A,C=h*a+p*c+_*A;if(T){const e=S*S+R*R+C*C;if(e<b&&e>x){const t=1/Math.sqrt(e);S*=t,R*=t,C*=t}}for(let e=0;e<n;++e)s[o+0]=S,s[o+1]=R,s[o+2]=C,s[o+3]=E,o+=l}}function Qe(e,t,r,i,o,n=1){const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(o*=s,1===n){if(4===r)for(let r=0;r<l;++r){const i=4*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<l;++r){const i=3*e[r];a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}else if(4===r)for(let r=0;r<l;++r){const i=4*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=t[i+3],o+=s}else if(3===r)for(let r=0;r<l;++r){const i=3*e[r];for(let e=0;e<n;++e)a[o]=t[i],a[o+1]=t[i+1],a[o+2]=t[i+2],a[o+3]=255,o+=s}}function Je(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=fe`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=fe`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.sliceHighlightDisabled?fe`#define highlightSlice(_color_, _pos_) (_color_)`:fe`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(o)}else{const r=fe`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}!function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}($e||($e={}));const et=(0,S.b)(),tt=(0,S.b)(),rt=(0,S.b)(),it=(0,E.c)(),ot=(0,B.f)(1,1,0,1),nt=(0,B.f)(1,0,1,1);function at(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",ot).add("unoccludedHighlightFlag","vec4",nt),e.fragment.code.add(fe`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function st(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(fe`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}const lt=(0,ye.c)();class ct{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function dt(e={}){return(t,r)=>{var i,o;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const n=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(Math.log2(a)),l=null!=(o=t._parameterBits)?o:[0];let c=0;for(;l[c]+s>16;)c++,c>=l.length&&l.push(0);t._parameterBits=l;const d=l[c],u=(1<<s)-1<<d;l[c]+=s,Object.defineProperty(t,r,{get(){return this[n]},set(e){if(this[n]!==e&&(this[n]=e,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}class ut{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new F.P({deallocator:null}),this._glProgram=e.programCache.acquire(t.generateSource("vertex"),t.generateSource("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=(0,we.w)()?t.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2f(e,t,r){this._glProgram.setUniform2f(e,t,r)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3f(e,t,r,i){this._glProgram.setUniform3f(e,t,r,i)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4f(e,t,r,i,o){this._glProgram.setUniform4f(e,t,r,i,o)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,T.b)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,T.i)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}Ne.C.LESS,Ne.C.ALWAYS;const ht={mask:255},mt={function:{func:Ne.C.ALWAYS,ref:c.OutlineVisualElementMask,mask:c.OutlineVisualElementMask},operation:{fail:Ne.S.KEEP,zFail:Ne.S.KEEP,zPass:Ne.S.ZERO}},ft={function:{func:Ne.C.ALWAYS,ref:c.OutlineVisualElementMask,mask:c.OutlineVisualElementMask},operation:{fail:Ne.S.KEEP,zFail:Ne.S.KEEP,zPass:Ne.S.REPLACE}};function pt(e,t){const r={hasModelTransformation:!1,...t};if(r.hasModelTransformation)return r.linearDepth?void e.vertex.code.add(fe`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(fe`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.linearDepth?e.vertex.code.add(fe`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(fe`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function gt(e,t){e.fragment.include(pe),t.output===$e.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(fe`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===$e.Depth&&e.fragment.code.add(fe`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}function vt(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case p.Blend:r.code.add(fe`
        #define discardOrAdjustAlpha(color) { if (color.a < ${fe.float(.001)}) { discard; } }
      `);break;case p.Opaque:r.code.add(fe`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case p.Mask:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(fe`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case p.MaskBlend:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(fe`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function _t(e){e.code.add(fe`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}Ne.C.EQUAL,c.OutlineVisualElementMask,c.OutlineVisualElementMask,Ne.S.KEEP,Ne.S.KEEP,Ne.S.KEEP,Ne.C.NOTEQUAL,c.OutlineVisualElementMask,c.OutlineVisualElementMask,Ne.S.KEEP,Ne.S.KEEP,Ne.S.KEEP,new Pe.V(H.V.POSITION,3,Ne.D.FLOAT,0,12),new Pe.V(H.V.POSITION,3,Ne.D.FLOAT,0,20),new Pe.V(H.V.UV0,2,Ne.D.FLOAT,12,20),new Pe.V(H.V.POSITION,3,Ne.D.FLOAT,0,32),new Pe.V(H.V.NORMAL,3,Ne.D.FLOAT,12,32),new Pe.V(H.V.UV0,2,Ne.D.FLOAT,24,32),new Pe.V(H.V.POSITION,3,Ne.D.FLOAT,0,16),new Pe.V(H.V.COLOR,4,Ne.D.UNSIGNED_BYTE,12,16);const Tt=[new Pe.V(H.V.POSITION,2,Ne.D.FLOAT,0,8)],xt=[new Pe.V(H.V.POSITION,2,Ne.D.FLOAT,0,16),new Pe.V(H.V.UV0,2,Ne.D.FLOAT,8,16)];var bt=r(48190),At=r(76996),Et=r(32101),St=r(73173);class Rt{constructor(e,t){this._context=e,this._desc=t,this.type="renderbuffer",this._context.instanceCounter.increment(Ne.R.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:i,height:o,internalFormat:n,multisampled:a}=t;if(a){if(this._context.type!==De.C.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,n,i,o)}else r.renderbufferStorage(r.RENDERBUFFER,n,i,o)}get descriptor(){return this._desc}get samples(){const e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}resize(e,t){const r=this._desc;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(Ne.R.Renderbuffer,this),this._context=null)}}const Ct=P.L.getLogger("esri.views.webgl.FrameBufferObject");class Mt{constructor(e,t,r=null,i=null){if(this._context=e,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc={...t},e.instanceCounter.increment(Ne.R.Framebuffer,this),(0,T.i)(r)){Array.isArray(r)||(r=[r]);for(let e=0;e<r.length;++e){const t=r[e],i=Ne.n.COLOR_ATTACHMENT0+e;let o;Nt(t)?(Ot(t)?(o=t.descriptor,this._colorAttachments.set(i,t)):(o=t,this._colorAttachments.set(i,new we.T(this._context,o))),wt(o,this._desc)):(yt(t)?(o=t.descriptor,this._colorAttachments.set(i,t)):(o=t,this._colorAttachments.set(i,new Rt(this._context,o))),Pt(o,this._desc)),this._validateColorAttachmentPoint(i)}}if((0,T.i)(i)){let e,t;if(Nt(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),Ot(i)?(t=i.descriptor,this._depthStencilTexture=i):(t=i,this._depthStencilTexture=new we.T(this._context,t)),wt(t,this._desc);else{var o;yt(i)?(t=i.descriptor,e=i):(t=i,e=new Rt(this._context,t));const r=null!=(o=this._desc.depthStencilTarget)?o:Ne.e.DEPTH_STENCIL_RENDER_BUFFER;r===Ne.e.STENCIL_RENDER_BUFFER?this._stencilAttachment=e:r===Ne.e.DEPTH_RENDER_BUFFER||r===Ne.e.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=e:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),Pt(t,this._desc)}}}dispose(){if(!this._desc)return;const e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(Ne.R.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const e=this._colorAttachments.get(Ne.n.COLOR_ATTACHMENT0);return e&&Ot(e)?e:null}get colorAttachment(){return this._colorAttachments.get(Ne.n.COLOR_ATTACHMENT0)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((e,[t,r])=>e+Ge(r)),0)+Ge(this.depthStencilAttachment)}getColorTexture(e){const t=this._colorAttachments.get(e);return t&&Ot(t)?t:null}attachColorTexture(e,t=Ne.n.COLOR_ATTACHMENT0){e&&(this._validateColorAttachmentPoint(t),wt(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e))}detachColorTexture(e=Ne.n.COLOR_ATTACHMENT0){const t=this._colorAttachments.get(e);if(Ot(t)){const r=t;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),r}}setColorTextureTarget(e,t=Ne.n.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(t);Ot(r)&&this._framebufferTexture2D(r.glName,t,e)}attachDepthStencilTexture(e){if((0,T.b)(e))return;const t=e.descriptor;t.pixelFormat!==Ne.a.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==Ne.b.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),wt(t,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==Ne.e.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=Ne.e.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,Ne.o)),this._depthStencilTexture=e}detachDepthStencilTexture(){const e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,Ne.o)),this._depthStencilTexture=null,e}attachDepthStencilBuffer(e){if((0,T.b)(e))return;const t=e.descriptor;if(t.internalFormat!==Ne.m.DEPTH_STENCIL&&t.internalFormat!==Ne.m.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),Pt(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=t.internalFormat===Ne.m.DEPTH_STENCIL?Ne.e.DEPTH_STENCIL_RENDER_BUFFER:Ne.e.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);const t=this._context.gl,r=this._desc.depthStencilTarget===Ne.e.DEPTH_RENDER_BUFFER?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(Ne.p.FRAMEBUFFER,r,t.RENDERBUFFER,e.glName)}this._depthAttachment=e}detachDepthStencilBuffer(){const e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===Ne.e.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Ne.p.FRAMEBUFFER,t,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}detachAll(){this._colorAttachments.forEach(((e,t)=>this._detachColorAttachment(t))),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(e,t,r,i,o,n,a){(e<0||t<0||o<0||n<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const s=this._desc,l=a.descriptor;a.descriptor.target!==Ne.T.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(e+r>s.width||t+i>s.height||o+r>l.width||n+i>l.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,d=c.bindTexture(a,we.T.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(we.T.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(Ne.T.TEXTURE_2D,0,o,n,e,t,r,i),c.bindTexture(d,we.T.TEXTURE_UNIT_FOR_UPDATES)}readPixels(e,t,r,i,o,n,a){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,o,n,a)}async readPixelsAsync(e,t,r,i,o,n,a){if(this._context.type!==De.C.WEBGL2)return(0,we.w)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(e,t,r,i,o,n,a);const s=this._context.gl,l=Ie.createPixelPack(this._context,Ne.U.STREAM_READ,a.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),s.readPixels(e,t,r,i,o,n,0),this._context.unbindBuffer(Ne.l.PIXEL_PACK_BUFFER),await l.getSubDataAsync(a),l.dispose()}resize(e,t){const r=this._desc;if(r.width!==e||r.height!==t){if(!this._initialized)return r.width=e,r.height=t,this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));r.width=e,r.height=t,this._colorAttachments.forEach((r=>{r&&r.resize(e,t)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(e=Ne.p.FRAMEBUFFER){var t,r,i,o;const n=this._context.gl;if(this._initialized)return void n.bindFramebuffer(e,this.glName);this._glName&&n.deleteFramebuffer(this._glName);const a=this._context,s=n.createFramebuffer(),l=this._desc,c=null!=(t=l.colorTarget)?t:Ne.d.RENDER_BUFFER,d=null!=(r=l.width)?r:1,u=null!=(i=l.height)?i:1;if(n.bindFramebuffer(e,s),0===this._colorAttachments.size)if(c===Ne.d.TEXTURE||c===Ne.d.CUBEMAP)this._colorAttachments.set(Ne.n.COLOR_ATTACHMENT0,function(e,t,r){return new we.T(e,{target:r,pixelFormat:Ne.a.RGBA,dataType:Ne.b.UNSIGNED_BYTE,samplingMode:Ne.c.NEAREST,wrapMode:Ne.f.CLAMP_TO_EDGE,width:t.width,height:t.height})}(a,l,this.descriptor.colorTarget===Ne.d.CUBEMAP?Ne.T.TEXTURE_CUBE_MAP:Ne.T.TEXTURE_2D));else{const e=new Rt(a,{internalFormat:Ne.g.RGBA4,width:d,height:u});this._colorAttachments.set(Ne.n.COLOR_ATTACHMENT0,e)}this._colorAttachments.forEach(((t,r)=>{t&&(Ot(t)?this._framebufferTexture2D(t.glName,r,Dt(t),e):n.framebufferRenderbuffer(e,r,n.RENDERBUFFER,t.glName))}));const h=null!=(o=l.depthStencilTarget)?o:Ne.e.NONE;switch(h){case Ne.e.DEPTH_RENDER_BUFFER:case Ne.e.DEPTH_STENCIL_RENDER_BUFFER:{this._depthAttachment||(this._depthAttachment=new Rt(a,{internalFormat:l.depthStencilTarget===Ne.e.DEPTH_RENDER_BUFFER?Ne.m.DEPTH_COMPONENT16:Ne.m.DEPTH_STENCIL,width:d,height:u}));const t=h===Ne.e.DEPTH_RENDER_BUFFER?n.DEPTH_ATTACHMENT:n.DEPTH_STENCIL_ATTACHMENT;n.framebufferRenderbuffer(e,t,n.RENDERBUFFER,this._depthAttachment.glName);break}case Ne.e.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new Rt(a,{internalFormat:Ne.m.STENCIL_INDEX8,width:d,height:u})),n.framebufferRenderbuffer(e,n.STENCIL_ATTACHMENT,n.RENDERBUFFER,this._stencilAttachment.glName);break;case Ne.e.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){a.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");const e={target:Ne.T.TEXTURE_2D,pixelFormat:Ne.a.DEPTH_STENCIL,dataType:Ne.b.UNSIGNED_INT_24_8,samplingMode:Ne.c.NEAREST,wrapMode:Ne.f.CLAMP_TO_EDGE,width:d,height:u};this._depthStencilTexture=new we.T(a,e)}this._framebufferTexture2D(this._depthStencilTexture.glName,n.DEPTH_STENCIL_ATTACHMENT,Dt(this._depthStencilTexture),e)}(0,we.a)()&&n.checkFramebufferStatus(e)!==n.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=s,this._initialized=!0}_framebufferTexture2D(e,t=Ne.n.COLOR_ATTACHMENT0,r=Ne.T.TEXTURE_2D,i=Ne.p.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(i,t,r,e,o)}_detachColorAttachment(e){(0,we.w)()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");const t=this._context.gl,r=this._colorAttachments.get(e);return Ot(r)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(Ne.p.FRAMEBUFFER,e,t.RENDERBUFFER,null)),this._colorAttachments.delete(e),r}_disposeColorAttachments(){this._colorAttachments.forEach(((e,t)=>{this._detachColorAttachment(t),e.dispose()})),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);const t=this._desc.depthStencilTarget===Ne.e.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(Ne.p.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(Ne.p.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateColorAttachmentPoint(e){if(-1===Mt._MAX_COLOR_ATTACHMENTS){const e=this._context.capabilities.drawBuffers;if(e){const t=this._context.gl;Mt._MAX_COLOR_ATTACHMENTS=t.getParameter(e.MAX_COLOR_ATTACHMENTS)}else Mt._MAX_COLOR_ATTACHMENTS=1}const t=e-Ne.n.COLOR_ATTACHMENT0;t+1>Mt._MAX_COLOR_ATTACHMENTS&&Ct.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${t+1}. Implementation supports up to ${Mt._MAX_COLOR_ATTACHMENTS} color attachments`)}}function Ot(e){return"type"in e&&"texture"===e.type}function yt(e){return"type"in e&&"renderbuffer"===e.type}function Nt(e){return Ot(e)||"pixelFormat"in e}function wt(e,t){e.target!==Ne.T.TEXTURE_2D&&e.target!==Ne.T.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function Pt(e,t){void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function Dt(e){return e.descriptor.target===Ne.T.TEXTURE_CUBE_MAP?Ne.T.TEXTURE_CUBE_MAP_POSITIVE_X:Ne.T.TEXTURE_2D}let Lt;var It;Mt._MAX_COLOR_ATTACHMENTS=-1,function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(It||(It={}));let Ft=null,Bt=null;async function Ut(){return(0,T.b)(Bt)&&(Bt=function(){if((0,T.b)(Lt)){const e=e=>(0,St.g)(`esri/libs/basisu/${e}`);Lt=r.e(3786).then(r.bind(r,73786)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return Lt}(),Ft=await Bt),Bt}function Gt(e,t,r,i,o){const n=Ue(t?Ne.k.COMPRESSED_RGBA8_ETC2_EAC:Ne.k.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function zt(e){return e.getNumImages()>=1&&!e.isUASTC()}function Vt(e){return e.getFaces()>=1&&e.isETC1S()}function Ht(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[It.ETC2_RGBA,Ne.k.COMPRESSED_RGBA8_ETC2_EAC]:[It.ETC1_RGB,Ne.k.COMPRESSED_RGB8_ETC2]:c?i?[It.BC3_RGBA,Ne.k.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[It.BC1_RGB,Ne.k.COMPRESSED_RGB_S3TC_DXT1_EXT]:[It.RGBA32,Ne.a.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);const f=m.length>1,p=f?Ne.c.LINEAR_MIPMAP_LINEAR:Ne.c.LINEAR,g={...t,samplingMode:p,hasMipmap:f,internalFormat:u,width:o,height:n};return new we.T(e,g,{type:"compressed",levels:m})}const Wt=P.L.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function kt(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const qt=kt("DXT1"),$t=kt("DXT3"),Xt=kt("DXT5");class jt extends ${constructor(e,t){super(),this.data=e,this.type=X.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new At.E,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Ne.f.REPEAT,t:Ne.f.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||m.STRETCH,this.estimatedTexMemRequired=jt._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;(0,T.b)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){(0,Et.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){(0,Et.HK)(e.src)||(0,Et.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,T.b)(e))return 0;if((0,T.N)(e)||(0,T.M)(e))return t.encoding===jt.KTX2_ENCODING?function(e,t){if((0,T.b)(Ft))return e.byteLength;const r=new Ft.KTX2File(new Uint8Array(e)),i=Vt(r)?Gt(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,t.mipmap):t.encoding===jt.BASIS_ENCODING?function(e,t){if((0,T.b)(Ft))return e.byteLength;const r=new Ft.BasisFile(new Uint8Array(e)),i=zt(r)?Gt(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?jt._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var t;return{target:Ne.T.TEXTURE_2D,pixelFormat:Ne.a.RGBA,dataType:Ne.b.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Ne.c.LINEAR_MIPMAP_LINEAR:Ne.c.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if((0,T.i)(this._glTexture))return this._glTexture;if((0,T.i)(this._loadingPromise))return this._loadingPromise;const r=this.data;return(0,T.b)(r)?(this._glTexture=new we.T(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,T.N)(r)||(0,T.M)(r))&&this.params.encoding===jt.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,r)):((0,T.N)(r)||(0,T.M)(r))&&this.params.encoding===jt.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,r)):((0,T.N)(r)||(0,T.M)(r))&&this.params.encoding===jt.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,r)):(0,T.M)(r)?this._loadFromPixelData(e,r):(0,T.N)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,T.b)(this._glTexture))return r;if(this.data.readyState<Yt.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if((0,T.i)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this.data),this._drawStretchedTexture(e,t,r,i,o,this._glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const{textureData:i,internalFormat:o,width:n,height:a}=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return Wt.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return Wt.error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case qt:o=8,n=Ne.k.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case $t:o=16,n=Ne.k.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Xt:o=16,n=Ne.k.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Wt.error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,l=r[4],c=r[3];0==(3&l)&&0==(3&c)||(Wt.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const d=l,u=c;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||(0,S.S)(l)&&(0,S.S)(c)||(Wt.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let h,m,f=r[1]+4;const p=[];for(let t=0;t<s;++t)m=(l+3>>2)*(c+3>>2)*o,h=new Uint8Array(e,f,m),p.push(h),f+=m,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:n,width:d,height:u}}(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?Ne.c.LINEAR_MIPMAP_LINEAR:Ne.c.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=n,t.height=a,new we.T(e,t,i)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){(0,T.b)(Ft)&&(Ft=await Ut());const i=new Ft.KTX2File(new Uint8Array(r));if(!Vt(i))return null;i.startTranscoding();const o=Ht(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){(0,T.b)(Ft)&&(Ft=await Ut());const i=new Ft.BasisFile(new Uint8Array(r));if(!zt(i))return null;i.startTranscoding();const o=Ht(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){G(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?Ne.a.LUMINANCE:3===this.params.components?Ne.a.RGB:Ne.a.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new we.T(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const o=await I(r,{signal:i});return(0,D.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const o=await(0,y.l)(r,r.src,!1,i);return(0,D.k_)(i),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=Yt.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((o,n)=>{const a=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",l),(0,T.r)(c)},s=()=>{r.readyState>=Yt.HAVE_CURRENT_DATA&&(a(),o(this._loadFromImage(e,r,t)))},l=e=>{a(),n(e||new w.Z("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",l);const c=(0,D.fu)(i,(()=>l((0,D.zE)())))}))))}_loadFromImage(e,t,r){const i=jt._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?Ne.a.RGB:Ne.a.RGBA,!this._requiresPowerOfTwo(e,o)||(0,S.S)(i.width)&&(0,S.S)(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new we.T(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,o,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=Ne.f.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,we.i)(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,o){const{width:n,height:a}=r,s=(0,S.H)(n),l=(0,S.H)(a);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case m.PAD:i.textureCoordinateScaleFactor=[n/s,a/l],c=new we.T(e,i),c.updateData(0,0,0,n,a,t);break;case m.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,i,o());break;default:(0,bt.n)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,r,i){const o=new we.T(e,r),n=new Mt(e,{colorTarget:Ne.d.TEXTURE,depthStencilTarget:Ne.e.NONE},o),a=new we.T(e,{target:Ne.T.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:Ne.b.UNSIGNED_BYTE,wrapMode:Ne.f.CLAMP_TO_EDGE,samplingMode:Ne.c.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=function(e,t=Tt,r=Y,i=-1,o=1){let n=null;return n=t===xt?new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):new Float32Array([i,i,o,i,i,o,o,o]),new Ve(e,r,{geometry:t},{geometry:Ie.createVertex(e,Ne.U.STATIC_DRAW,n)})}(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,n,s,a,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:n}:(s.dispose(!0),a.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,t,r,i,o,n){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const s=e.useTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture(o,"tex"),e.bindVAO(i),e.drawArrays(Ne.P.TRIANGLE_STRIP,0,function(e,t){return e.vertexBuffers[t].size/e.layout[t][0].stride}(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if((0,T.i)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,T.i)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,T.i)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var Yt;jt.DDS_ENCODING="image/vnd-ms.dds",jt.KTX2_ENCODING="image/ktx2",jt.BASIS_ENCODING="image/x.basis",function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Yt||(Yt={}));var Kt=r(15215);function Zt(e,t,r=Ne.h.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}const Qt={face:Ne.F.BACK,mode:Ne.j.CCW},Jt={face:Ne.F.FRONT,mode:Ne.j.CCW},er=e=>e===i.Back?Qt:e===i.Front?Jt:null,tr={zNear:0,zFar:1},rr={r:!0,g:!0,b:!0,a:!0};function ir(e){return mr.intern(e)}function or(e){return pr.intern(e)}function nr(e){return vr.intern(e)}function ar(e){return Tr.intern(e)}function sr(e){return br.intern(e)}function lr(e){return Er.intern(e)}function cr(e){return Rr.intern(e)}function dr(e){return Mr.intern(e)}class ur{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function hr(e){return"["+e.join(",")+"]"}const mr=new ur(fr,(e=>({__tag:"Blending",...e})));function fr(e){return e?hr([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const pr=new ur(gr,(e=>({__tag:"Culling",...e})));function gr(e){return e?hr([e.face,e.mode]):null}const vr=new ur(_r,(e=>({__tag:"PolygonOffset",...e})));function _r(e){return e?hr([e.factor,e.units]):null}const Tr=new ur(xr,(e=>({__tag:"DepthTest",...e})));function xr(e){return e?hr([e.func]):null}const br=new ur(Ar,(e=>({__tag:"StencilTest",...e})));function Ar(e){return e?hr([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const Er=new ur(Sr,(e=>({__tag:"DepthWrite",...e})));function Sr(e){return e?hr([e.zNear,e.zFar]):null}const Rr=new ur(Cr,(e=>({__tag:"ColorWrite",...e})));function Cr(e){return e?hr([e.r,e.g,e.b,e.a]):null}const Mr=new ur(Or,(e=>({__tag:"StencilWrite",...e})));function Or(e){return e?hr([e.mask]):null}const yr=new ur((function(e){return e?hr([fr(e.blending),gr(e.culling),_r(e.polygonOffset),xr(e.depthTest),Ar(e.stencilTest),Sr(e.depthWrite),Cr(e.colorWrite),Or(e.stencilWrite)]):null}),(e=>({blending:ir(e.blending),culling:or(e.culling),polygonOffset:nr(e.polygonOffset),depthTest:ar(e.depthTest),stencilTest:sr(e.stencilTest),depthWrite:lr(e.depthWrite),colorWrite:cr(e.colorWrite),stencilWrite:dr(e.stencilWrite)}))),Nr=function(e,t,r,i,o=Ne.h.ADD,n=Ne.h.ADD,a=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:n,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}(Ne.B.SRC_ALPHA,Ne.B.ONE,Ne.B.ONE_MINUS_SRC_ALPHA,Ne.B.ONE_MINUS_SRC_ALPHA),wr=Zt(Ne.B.ONE,Ne.B.ONE),Pr=Zt(Ne.B.ZERO,Ne.B.ONE_MINUS_SRC_ALPHA);function Dr(e){return e===a.FrontFace?null:e===a.Alpha?Pr:wr}const Lr={factor:-1,units:-2};function Ir(e){return e?Lr:null}function Fr(e,t=Ne.C.LESS){return e===a.NONE||e===a.FrontFace?t:Ne.C.LEQUAL}var Br,Ur,Gr=r(4663),zr=r(35861),Vr=r(56697),Hr=r(2484);new Hr.O((function(){return{origin:null,direction:null}})),(Ur=Br||(Br={}))[Ur.X=0]="X",Ur[Ur.Y=1]="Y",Ur[Ur.Z=2]="Z",(0,S.b)(),(0,S.b)();const Wr=P.L.getLogger("esri.geometry.support.sphere");function kr(){return(0,B.c)()}function qr(e,t=kr()){return(0,S.m)(t,e)}function $r(e){return Array.isArray(e)?e[3]:e}function Xr(e){return Array.isArray(e)?e:ri}function jr(e,t,r){if((0,T.b)(t))return!1;const{origin:i,direction:o}=t,n=Yr;n[0]=i[0]-e[0],n[1]=i[1]-e[1],n[2]=i[2]-e[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],s=2*(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),l=s*s-4*a*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);let d=(-s-c)/(2*a);const u=(-s+c)/(2*a);return(d<0||u<d&&u>0)&&(d=u),!(d<0||(r&&(r[0]=i[0]+o[0]*d,r[1]=i[1]+o[1]*d,r[2]=i[2]+o[2]*d),0))}const Yr=(0,S.b)();function Kr(e,t,r){const i=Hr.s.get(),o=Hr.a.get();(0,S.a)(i,t.origin,t.direction);const n=$r(e);(0,S.a)(r,i,t.origin),(0,S.e)(r,r,1/(0,S.l)(r)*n);const a=Qr(e,t.origin),s=function(e,t){const r=(0,S.d)(e,t)/((0,S.l)(e)*(0,S.l)(t));return-(0,S.i)(r)}(t.origin,r);return(0,A.e)(o,s+a,i),(0,S.v)(r,r,o),r}function Zr(e,t,r){const i=(0,S.h)(Hr.s.get(),t,Xr(e)),o=(0,S.e)(Hr.s.get(),i,e[3]/(0,S.l)(i));return(0,S.f)(r,o,Xr(e))}function Qr(e,t){const r=(0,S.h)(Hr.s.get(),t,Xr(e)),i=(0,S.l)(r),o=$r(e),n=o+Math.abs(o-i);return(0,S.i)(o/n)}const Jr=(0,S.b)();function ei(e,t,r,i){const o=(0,S.h)(Jr,t,Xr(e));switch(r){case Br.X:{const e=(0,S.w)(o,Jr)[2];return(0,S.s)(i,-Math.sin(e),Math.cos(e),0)}case Br.Y:{const e=(0,S.w)(o,Jr),t=e[1],r=e[2],n=Math.sin(t);return(0,S.s)(i,-n*Math.cos(r),-n*Math.sin(r),Math.cos(t))}case Br.Z:return(0,S.n)(i,o);default:return}}function ti(e,t){const r=(0,S.h)(ii,t,Xr(e));return(0,S.l)(r)-e[3]}const ri=(0,S.b)(),ii=(0,S.b)();Object.freeze({__proto__:null,create:kr,copy:qr,fromCenterAndRadius:function(e,t){return(0,B.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:$r,getCenter:Xr,fromValues:function(e,t,r,i){return(0,B.f)(e,t,r,i)},elevate:function(e,t,r){return e!==r&&(0,S.j)(r,e),r[3]=e[3]+t,r},setExtent:function(e,t,r){return Wr.error("sphere.setExtent is not yet supported"),e===r?r:qr(e,r)},intersectRay:jr,intersectsRay:function(e,t){return jr(e,t,null)},intersectRayClosestSilhouette:function(e,t,r){if(jr(e,t,r))return r;const i=Kr(e,t,Hr.s.get());return(0,S.f)(r,t.origin,(0,S.e)(Hr.s.get(),t.direction,(0,S.u)(t.origin,i)/(0,S.l)(t.direction))),r},closestPointOnSilhouette:Kr,closestPoint:function(e,t,r){return jr(e,t,r)?r:(function(e,t,r){const i=(0,S.d)(e.direction,(0,S.h)(r,t,e.origin));(0,S.f)(r,e.origin,(0,S.e)(r,e.direction,i))}(t,Xr(e),r),Zr(e,r,r))},projectPoint:Zr,distanceToSilhouette:function(e,t){const r=(0,S.h)(Hr.s.get(),t,Xr(e)),i=(0,S.o)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},angleToSilhouette:Qr,axisAt:ei,altitudeAt:ti,setAltitudeAt:function(e,t,r,i){const o=ti(e,t),n=ei(e,t,Br.Z,ii),a=(0,S.e)(ii,n,r-o);return(0,S.f)(i,t,a)}});const oi=new class{constructor(e=0){this.offset=e,this.sphere=kr(),this.tmpVertex=(0,S.b)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*t+i[8]*r+i[12],n=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(o*o+n*n+a*a);o+=o*s,n+=n*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*n+l[8]*a+l[12],this.tmpVertex[1]=l[1]*o+l[5]*n+l[9]*a+l[13],this.tmpVertex[2]=l[2]*o+l[6]*n+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=(0,S.b)(),this.mbs=(0,B.c)(),this.obb={center:(0,S.b)(),halfSize:(0,Vr.c)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,o=t,n=r+this.componentLocalOriginLength,a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],a=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(o*o+n*n+a*a);return e[3]+=o*l,e[4]+=n*l,e[5]+=a*l,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,(0,S.T)(this.obb.halfSize,e.halfSize,e.quaternion),(0,S.f)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,(0,S.h)(this.obb.halfSize,this.obb.halfSize,e.center),(0,zr.c)(ni,e.quaternion),(0,S.T)(this.obb.halfSize,this.obb.halfSize,ni),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,S.b)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],o=t+this.localOrigin[1],n=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+o*o+n*n);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+o*a,this.tmpVertex[2]=r+n*a,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],o=e[3]+this.localOrigin[0],n=e[4]+this.localOrigin[1],a=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(o*o+n*n+a*a);return e[3]+=o*l,e[4]+=n*l,e[5]+=a*l,e}};const ni=(0,b.d)();var ai,si,li=r(29768);function ci(e,t){t.attributeTextureCoordinates===ai.Default&&(e.attributes.add(H.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(fe`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),t.attributeTextureCoordinates===ai.Atlas&&(e.attributes.add(H.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(H.V.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(fe`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),t.attributeTextureCoordinates===ai.None&&e.vertex.code.add(fe`void forwardTextureCoordinates() {}`)}function di(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(fe`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function ui(e,t){e.include(ci,t),e.fragment.code.add(fe`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.attributeTextureCoordinates===ai.Default&&e.fragment.code.add(fe`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),t.attributeTextureCoordinates===ai.Atlas&&(e.include(di),e.fragment.code.add(fe`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}function hi(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;t.pbrMode===si.Normal&&i&&e.include(ui,t),t.pbrMode!==si.Schematic?(t.pbrMode===si.Disabled&&r.code.add(fe`float getBakedOcclusion() { return 1.0; }`),t.pbrMode===si.Normal&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(fe`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(fe`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(fe`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(fe`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(fe`float getBakedOcclusion() { return 1.0; }`),r.code.add(fe`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(fe`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function mi(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(fe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(fe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(fe`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==si.Normal&&t.pbrMode!==si.Schematic||r.code.add(fe`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}function fi(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.uniforms.add("lightingSpecularStrength","float"),t.uniforms.add("lightingEnvironmentStrength","float"),t.code.add(fe`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function pi(e){e.vertex.code.add(fe`const float PI = 3.141592653589793;`),e.fragment.code.add(fe`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function gi(e,t){t.output===$e.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(fe`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===$e.Depth||t.output===$e.Shadow?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("nearFar","vec2"),e.vertex.code.add(fe`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(fe`void forwardLinearDepth() {}`)}function vi(e){const t=e.fragment.code;t.add(fe`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(fe`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(fe`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function _i(e,t){const r=e.fragment.code;e.include(pi),t.pbrMode===si.Water||t.pbrMode===si.WaterOnIntegratedMesh?(r.add(fe`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(fe`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(fe`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(fe`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(fe`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==si.Normal&&t.pbrMode!==si.Schematic||(e.include(vi),r.add(fe`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(fe`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(fe`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(fe`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(fe`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(fe`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Ti(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add(H.V.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(fe`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(fe`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?fe`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(fe`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(fe`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?fe`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(fe`vec4 vvColor() { return vec4(1.0); }`)}function xi(e){e.vertex.code.add(fe`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(fe`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(fe`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(fe`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(fe`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(fe`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(fe`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function bi(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(xi),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(fe`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${t.viewingMode===z.Global?fe`vec3 worldNormal = normalize(worldPos + localOrigin);`:fe`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?fe`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:fe`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(fe`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(ai||(ai={})),(0,Vr.f)(0,.6,.2),function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(si||(si={}));const Ai={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};function Ei(e){e.fragment.include(pe),e.fragment.uniforms.add("shadowMapTex","sampler2D"),e.fragment.uniforms.add("numCascades","int"),e.fragment.uniforms.add("cascadeDistances","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(fe`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function Si(e,t){t.attributeColor?(e.attributes.add(H.V.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(fe`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(fe`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(fe`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ri(e,t){const r=e.fragment;switch(r.code.add(fe`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case Ci.None:r.code.add(fe`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Ci.View:r.code.add(fe`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Ci.WindingOrder:r.code.add(fe`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,bt.n)(t.doubleSidedMode);case Ci.COUNT:}}var Ci;function Mi({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(fe`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(fe`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function Oi(e){return!!(0,T.h)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}function yi(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(H.V.MODELORIGINHI,"vec3"),e.attributes.add(H.V.MODELORIGINLO,"vec3"),e.attributes.add(H.V.MODEL,"mat3"),e.attributes.add(H.V.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(Mi,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[fe`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,fe`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?fe`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,fe`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,fe`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?fe`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:fe``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),t.output===$e.Normal&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(Ci||(Ci={}));const Ni=(0,S.b)(),wi=(0,S.b)();function Pi(e){const t=fe`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function Di(e,t){t.normalType===Li.Attribute&&(e.attributes.add(H.V.NORMAL,"vec3"),e.vertex.code.add(fe`vec3 normalModel() {
return normal;
}`)),t.normalType===Li.CompressedAttribute&&(e.include(Pi),e.attributes.add(H.V.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(fe`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===Li.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(fe`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var Li,Ii;function Fi(e){e.vertex.code.add(fe`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Bi(e){e.attributes.add(H.V.POSITION,"vec3"),e.vertex.code.add(fe`vec3 positionModel() { return position; }`)}function Ui(e){switch(e){case"multiply":default:return Ii.Multiply;case"ignore":return Ii.Ignore;case"replace":return Ii.Replace;case"tint":return Ii.Tint}}function Gi(e,t,r){if((0,T.b)(e)||t===Ii.Ignore)return r[0]=255,r[1]=255,r[2]=255,void(r[3]=255);const i=(0,S.c)(Math.round(e[3]*Vi),0,Vi),o=0===i||t===Ii.Tint?0:t===Ii.Replace?Hi:Wi;r[0]=(0,S.c)(Math.round(e[0]*zi),0,zi),r[1]=(0,S.c)(Math.round(e[1]*zi),0,zi),r[2]=(0,S.c)(Math.round(e[2]*zi),0,zi),r[3]=i+o}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(Li||(Li={})),function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(Ii||(Ii={}));const zi=255,Vi=85,Hi=Vi,Wi=2*Vi;function ki(e){e.vertex.code.add(fe`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${fe.int(Ii.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${fe.int(Ii.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${fe.int(Ii.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${fe.int(Ii.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function qi(e,t){t.symbolColor?(e.include(ki),e.attributes.add(H.V.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(fe`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(fe`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function $i(e,t){e.include(Bi),e.vertex.include(Mi,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("transformWorldFromModelRS","mat3"),e.vertex.uniforms.add("transformWorldFromModelTH","vec3"),e.vertex.uniforms.add("transformWorldFromModelTL","vec3"),e.vertex.uniforms.add("transformWorldFromViewTH","vec3"),e.vertex.uniforms.add("transformWorldFromViewTL","vec3"),e.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),e.vertex.uniforms.add("transformProjFromView","mat4"),e.vertex.code.add(fe`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("transformWorldFromViewTL","vec3"),e.fragment.code.add(fe`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Xi{constructor(){this.transformWorldFromModelRS=(0,b.b)(),this.transformWorldFromModelTH=(0,S.b)(),this.transformWorldFromModelTL=(0,S.b)()}}class ji{constructor(){this.transformWorldFromViewTH=(0,S.b)(),this.transformWorldFromViewTL=(0,S.b)(),this.transformViewFromCameraRelativeRS=(0,b.b)(),this.transformProjFromView=(0,E.c)()}}function Yi(e,t){e.setUniformMatrix3fv("transformWorldFromModelRS",t.transformWorldFromModelRS),e.setUniform3fv("transformWorldFromModelTH",t.transformWorldFromModelTH),e.setUniform3fv("transformWorldFromModelTL",t.transformWorldFromModelTL)}function Ki(e,t){e.setUniform3fv("transformWorldFromViewTH",t.transformWorldFromViewTH),e.setUniform3fv("transformWorldFromViewTL",t.transformWorldFromViewTL),e.setUniformMatrix4fv("transformProjFromView",t.transformProjFromView),e.setUniformMatrix3fv("transformViewFromCameraRelativeRS",t.transformViewFromCameraRelativeRS)}function Zi(e,t){t.normalType===Li.Attribute||t.normalType===Li.CompressedAttribute?(e.include(Di,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),e.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),e.vertex.code.add(fe`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===Li.Ground?(e.include($i,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(fe`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===z.Global?fe`normalize(vPositionWorldCameraRelative);`:fe`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(fe`void forwardNormal() {}`)}function Qi(e,t){e.setUniformMatrix4fv("viewNormal",t)}function Ji(e,t){const r=e.vertex.code,i=e.fragment.code,o=t.hasModelTransformation;t.output!==$e.Depth&&t.output!==$e.Shadow||(e.include(pt,{linearDepth:!0,hasModelTransformation:o}),e.include(ci,t),e.include(Ti,t),e.include(gt,t),e.include(Je,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(fe`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(vt,t),i.add(fe`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?fe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===$e.Normal&&(e.include(pt,{linearDepth:!1,hasModelTransformation:o}),e.include(Di,t),e.include(Zi,t),e.include(ci,t),e.include(Ti,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(fe`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===Li.Attribute?fe`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Je,t),e.include(vt,t),i.add(fe`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?fe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===Li.ScreenDerivative?fe`
            vec3 normal = screenDerivativeNormal(vPositionView);`:fe`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===$e.Highlight&&(e.include(pt,{linearDepth:!1,hasModelTransformation:o}),e.include(ci,t),e.include(Ti,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(fe`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(Je,t),e.include(vt,t),e.include(at),i.add(fe`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?fe`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function eo(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add(H.V.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===Ci.WindingOrder?r.code.add(fe`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(fe`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(fe`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.attributeTextureCoordinates!==ai.None&&(e.include(ui,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(fe`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function to(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(fe`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(fe`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function ro(e,t){const r=e.fragment;e.include(fi),e.include(to,t),t.pbrMode!==si.Disabled&&e.include(_i,t),e.include(mi,t),t.receiveShadows&&e.include(Ei,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),r.uniforms.add("hasFillLights","bool"),e.include(pi),r.code.add(fe`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===si.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(fe`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.viewingMode===z.Global?fe`normalize(vPosWorld)`:fe`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(fe`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===si.Disabled||t.pbrMode===si.WaterOnIntegratedMesh?r.code.add(fe`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):t.pbrMode!==si.Normal&&t.pbrMode!==si.Schematic||(r.code.add(fe`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(fe`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(fe`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(fe`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(fe`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===si.Schematic?fe`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:fe`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function io(e,t){const r=fe`
  /*
  *  ${t.name}
  *  ${t.output===$e.Color?"RenderOutput: Color":t.output===$e.Depth?"RenderOutput: Depth":t.output===$e.Shadow?"RenderOutput: Shadow":t.output===$e.Normal?"RenderOutput: Normal":t.output===$e.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,we.a)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}function oo(e){e.include(_t),e.code.add(fe`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${fe.int(Ii.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${fe.int(Ii.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${fe.int(Ii.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${fe.int(Ii.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${fe.int(Ii.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}const no=Object.freeze({__proto__:null,build:function(e){const t=new Te,r=t.vertex.code,i=t.fragment.code;t.include(io,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const o=e.hasModelTransformation;return o&&t.vertex.uniforms.add("model","mat4"),t.include(Bi),t.varyings.add("vpos","vec3"),t.include(Ti,e),t.include(yi,e),t.include(bi,e),e.output!==$e.Color&&e.output!==$e.Alpha||(t.include(Di,e),t.include(pt,{linearDepth:!1,hasModelTransformation:o}),e.normalType===Li.Attribute&&e.offsetBackfaces&&t.include(Fi),t.include(eo,e),t.include(Zi,e),e.instancedColor&&t.attributes.add(H.V.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(ci,e),t.include(gi,e),t.include(qi,e),t.include(Si,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(fe`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${fe.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===Li.Attribute?fe`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
          ${e.normalType===Li.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===$e.Alpha&&(t.include(Je,e),t.include(vt,e),e.multipassTerrainEnabled&&(t.fragment.include(ge),t.include(st,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(oo),i.add(fe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?fe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:fe`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?fe`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:fe`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===$e.Color&&(t.include(Je,e),t.include(ro,e),t.include(to,e),t.include(vt,e),e.receiveShadows&&t.include(Ei,e),e.multipassTerrainEnabled&&(t.fragment.include(ge),t.include(st,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(hi,e),t.include(_i,e),t.fragment.include(oo),t.include(Ri,e),i.add(fe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?fe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:fe`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===Li.ScreenDerivative?fe`
        vec3 normal = screenDerivativeNormal(localvpos);`:fe`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===si.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===z.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?fe`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:fe`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?fe`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${e.pbrMode===si.Normal||e.pbrMode===si.Schematic?e.viewingMode===z.Global?fe`vec3 normalGround = normalize(vpos + localOrigin);`:fe`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:fe``}
        ${e.pbrMode===si.Normal||e.pbrMode===si.Schematic?fe`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Ji,e),t}}),ao=P.L.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class so extends class{constructor(e,t,r){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,T.p)(this._program),this._pipeline=this._config=null}reload(e){(0,T.p)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Ne.P.TRIANGLES}getPipelineState(e,t){return this._pipeline}}{initializeProgram(e){const t=so.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===a.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?si.Schematic:si.Normal:si.Disabled,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,hasModelTransformation:r.hasModelTransformation,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?Li.ScreenDerivative:Li.Attribute,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?ai.Default:ai.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Oi(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new ut(e.rctx,i,Y)}bindPass(e,t){var r,i;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const o=this.configuration.output;this.configuration.hasModelTransformation&&((0,T.i)(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):ao.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===$e.Depth||t.multipassTerrainEnabled||o===$e.Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),function(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}(this.program,t)),o===$e.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",le[e.colorMixMode])),o===$e.Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",le[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(this.program,e,this.configuration.isSchematic)):o===$e.Highlight&&function(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}(this.program,t),function(e,t){(function(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))})(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}(this.program,e),function(e,t,r){if(!t.verticalOffset)return;const i=function(e,t,r,i=Ai){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*o,i.perDistance,i.minWorldLength,i.maxWorldLength)}(this.program,e,t),function(e,t,r){if(!e)return;const i=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f("screenSizePerspectiveAlignment",i.divisor,i.offset,i.minPixelSize,o)}(e.screenSizePerspective,this.program),e.textureAlphaMode!==p.Mask&&e.textureAlphaMode!==p.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,S.q)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(function(e,t,r){(0,A.t)(lt,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",lt)})(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===$e.Color||this.configuration.output===$e.Alpha||this.configuration.output===$e.Depth&&this.configuration.screenSizePerspective||this.configuration.output===$e.Normal&&this.configuration.screenSizePerspective||this.configuration.output===$e.Highlight&&this.configuration.screenSizePerspective)&&function(e,t,r){e.setUniform3f("cameraPosition",r[3]-t[0],r[7]-t[1],r[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===$e.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&function(e,t){(function(e,t,r,i){for(let i=0;i<3;++i)k[0]=e[i],W(k,q,1),t[i]=q[0],r[i]=q[1]})(t,Ni,wi),e.setUniform3fv("viewOriginHi",Ni),e.setUniform3fv("viewOriginLo",wi)}(this.program,t),function(e,t,r,i){if(t.slicePlaneEnabled)if((0,T.i)(r)){if((0,S.j)(et,r.origin),(0,S.j)(tt,r.basis1),(0,S.j)(rt,r.basis2),(0,T.i)(i)&&(0,T.i)(i.origin)&&(0,S.h)(et,r.origin,i.origin),(0,T.i)(i)&&(0,T.i)(i.view)){const e=(0,T.i)(i.origin)?(0,A.t)(it,i.view,i.origin):i.view;(0,S.f)(tt,tt,et),(0,S.f)(rt,rt,et),(0,S.v)(et,et,e),(0,S.v)(tt,tt,e),(0,S.v)(rt,rt,e),(0,S.h)(tt,tt,et),(0,S.h)(rt,rt,et)}e.setUniform3fv("slicePlaneOrigin",et),e.setUniform3fv("slicePlaneBasis1",tt),e.setUniform3fv("slicePlaneBasis2",rt)}else e.setUniform3fv("slicePlaneBasis1",S.Z),e.setUniform3fv("slicePlaneBasis2",S.Z),e.setUniform3fv("slicePlaneOrigin",S.Z)}(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===$e.Color&&function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}(this.program,e,t)}_convertDepthTestFunction(e){return e===o.Lequal?Ne.C.LEQUAL:Ne.C.LESS}_setPipeline(e,t){const r=this.configuration,i=e===a.NONE,o=e===a.FrontFace;return function(e){return yr.intern(e)}({blending:r.output!==$e.Color&&r.output!==$e.Alpha||!r.transparent?null:i?Nr:Dr(e),culling:lo(r)&&er(r.cullFace),depthTest:{func:Fr(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:i||o?r.writeDepth&&tr:null,colorWrite:rr,stencilWrite:r.sceneHasOcludees?ht:null,stencilTest:r.sceneHasOcludees?t?ft:mt:null,polygonOffset:i||o?null:Ir(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function lo(e){return e.cullFace?e.cullFace!==i.None:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}so.shader=new ct(no,(()=>Promise.resolve().then((()=>no))));class co extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}{constructor(){super(...arguments),this.output=$e.Color,this.alphaDiscardMode=p.Opaque,this.doubleSidedMode=Ci.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=i.None,this.transparencyPassType=a.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=o.Less}}(0,li._)([dt({count:$e.COUNT})],co.prototype,"output",void 0),(0,li._)([dt({count:p.COUNT})],co.prototype,"alphaDiscardMode",void 0),(0,li._)([dt({count:Ci.COUNT})],co.prototype,"doubleSidedMode",void 0),(0,li._)([dt()],co.prototype,"isSchematic",void 0),(0,li._)([dt()],co.prototype,"vertexColors",void 0),(0,li._)([dt()],co.prototype,"offsetBackfaces",void 0),(0,li._)([dt()],co.prototype,"symbolColors",void 0),(0,li._)([dt()],co.prototype,"vvSize",void 0),(0,li._)([dt()],co.prototype,"vvColor",void 0),(0,li._)([dt()],co.prototype,"verticalOffset",void 0),(0,li._)([dt()],co.prototype,"receiveShadows",void 0),(0,li._)([dt()],co.prototype,"slicePlaneEnabled",void 0),(0,li._)([dt()],co.prototype,"sliceHighlightDisabled",void 0),(0,li._)([dt()],co.prototype,"receiveAmbientOcclusion",void 0),(0,li._)([dt()],co.prototype,"screenSizePerspective",void 0),(0,li._)([dt()],co.prototype,"textureAlphaPremultiplied",void 0),(0,li._)([dt()],co.prototype,"hasColorTexture",void 0),(0,li._)([dt()],co.prototype,"usePBR",void 0),(0,li._)([dt()],co.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,li._)([dt()],co.prototype,"hasEmissionTexture",void 0),(0,li._)([dt()],co.prototype,"hasOcclusionTexture",void 0),(0,li._)([dt()],co.prototype,"hasNormalTexture",void 0),(0,li._)([dt()],co.prototype,"instanced",void 0),(0,li._)([dt()],co.prototype,"instancedColor",void 0),(0,li._)([dt()],co.prototype,"instancedDoublePrecision",void 0),(0,li._)([dt()],co.prototype,"vertexTangents",void 0),(0,li._)([dt()],co.prototype,"normalsTypeDerivate",void 0),(0,li._)([dt()],co.prototype,"writeDepth",void 0),(0,li._)([dt()],co.prototype,"sceneHasOcludees",void 0),(0,li._)([dt()],co.prototype,"transparent",void 0),(0,li._)([dt()],co.prototype,"enableOffset",void 0),(0,li._)([dt({count:i.COUNT})],co.prototype,"cullFace",void 0),(0,li._)([dt({count:a.COUNT})],co.prototype,"transparencyPassType",void 0),(0,li._)([dt()],co.prototype,"multipassTerrainEnabled",void 0),(0,li._)([dt()],co.prototype,"cullAboveGround",void 0),(0,li._)([dt()],co.prototype,"hasModelTransformation",void 0),(0,li._)([dt({count:o.COUNT})],co.prototype,"customDepthTest",void 0);const uo=Object.freeze({__proto__:null,build:function(e){const t=new Te,r=t.vertex.code,i=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),t.include(Bi),t.varyings.add("vpos","vec3"),t.include(Ti,e),t.include(yi,e),t.include(bi,e),e.output!==$e.Color&&e.output!==$e.Alpha||(t.include(Di,e),t.include(pt,{linearDepth:!1}),e.offsetBackfaces&&t.include(Fi),e.instancedColor&&t.attributes.add(H.V.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(ci,e),t.include(gi,e),t.include(qi,e),t.include(Si,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(fe`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${fe.float(.001)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?fe`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===$e.Alpha&&(t.include(Je,e),t.include(vt,e),e.multipassTerrainEnabled&&(t.fragment.include(ge),t.include(st,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(oo),i.add(fe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?fe`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?fe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:fe`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?fe`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:fe`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===$e.Color&&(t.include(Je,e),t.include(ro,e),t.include(to,e),t.include(vt,e),e.receiveShadows&&t.include(Ei,e),e.multipassTerrainEnabled&&(t.fragment.include(ge),t.include(st,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(hi,e),t.include(_i,e),t.fragment.include(oo),i.add(fe`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?fe`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?fe`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:fe`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===si.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===z.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?fe`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:fe`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${fe`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===si.Normal||e.pbrMode===si.Schematic?e.viewingMode===z.Global?fe`vec3 normalGround = normalize(vpos + localOrigin);`:fe`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:fe``}
        ${e.pbrMode===si.Normal||e.pbrMode===si.Schematic?fe`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(Ji,e),t}});class ho extends so{initializeProgram(e){const t=ho.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===a.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?si.Normal:si.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:Li.Attribute,doubleSidedMode:Ci.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?ai.Default:ai.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Oi(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new ut(e.rctx,i,Y)}}ho.shader=new ct(uo,(()=>Promise.resolve().then((()=>uo))));class mo extends de{constructor(e){super(e,po),this.supportsEdges=!0,this.techniqueConfig=new co,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,Kt.n)().vec3f(H.V.POSITION).vec3f(H.V.NORMAL);return e.vertexTangents&&r.vec4f(H.V.TANGENT),t&&r.vec2f(H.V.UV0),e.vertexColors&&r.vec4u8(H.V.COLOR),e.symbolColors&&r.vec4u8(H.V.SYMBOLCOLOR),r}(this.parameters),this.instanceBufferLayout=e.instanced?vo(this.parameters):null}isVisibleInPass(e){return e!==Gr.a.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Gr.a.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Gr.a.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,o=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(o||n||i)?!!a||s:r?a?l:s:o||n||i?!!a||s:a?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,T.i)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?i.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,T.i)(this.parameters.modelTransformation),e!==$e.Color&&e!==$e.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=Ci.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Ci.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Ci.WindingOrder:Ci.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<5e5),this.techniqueConfig}intersect(e,t,r,i,o,n,a){if(null!==this.parameters.verticalOffset){const e=i.camera;(0,S.s)(Eo,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case z.Global:t=(0,S.n)(bo,Eo);break;case z.Local:t=(0,S.j)(bo,xo)}let a=0;if(null!==this.parameters.verticalOffset){const r=(0,S.h)(So,Eo,e.eye),i=(0,S.l)(r),o=(0,S.e)(r,r,1/i);let n=null;this.parameters.screenSizePerspective&&(n=(0,S.d)(t,o)),a+=function(e,t,r,i,o){let n=(r.screenLength||0)*e.pixelRatio;o&&(n=function(e,t,r,i){return function(e,t){return Math.max((0,S.G)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}(e,function(e,t,r){const i=r.parameters,o=r.paddingPixelsOverride;return K.scale=Math.min(i.divisor/(t-i.offset),1),K.factor=function(e){return Math.abs(e*e*e)}(e),K.minPixelSize=i.minPixelSize,K.paddingPixels=o,K}(t,r,i))}(n,i,t,o));const a=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,S.c)(a*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,i,this.parameters.verticalOffset,n,this.parameters.screenSizePerspective)}(0,S.e)(t,t,a),(0,S.E)(Ao,t,i.transform.inverseRotation),o=(0,S.h)(_o,o,Ao),n=(0,S.h)(To,n,Ao)}var s;Q(e,t,i,o,n,(s=i.verticalOffset,(0,T.i)(s)?(oi.offset=s,oi):null),a)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?Gr.R.TRANSPARENT_MATERIAL:Gr.R.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Gr.R.OPAQUE_MATERIAL)||e===Gr.R.DRAPED_MATERIAL}createGLMaterial(e){return e.output===$e.Color||e.output===$e.Alpha||e.output===$e.Depth||e.output===$e.Normal||e.output===$e.Shadow||e.output===$e.Highlight?new fo(e):null}createBufferWriter(){return new go(this.vertexBufferLayout,this.instanceBufferLayout)}}class fo extends class extends class{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,t),this._technique),this._technique}ensureResources(e){return l.LOADED}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,T.q)(this._texture),this._textureNormal=(0,T.q)(this._textureNormal),this._textureEmissive=(0,T.q)(this._textureEmissive),this._textureOcclusion=(0,T.q)(this._textureOcclusion),this._textureMetallicRoughness=(0,T.q)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?l.LOADED:l.LOADING}updateTexture(e){((0,T.b)(this._texture)||e!==this._texture.id)&&(this._texture=(0,T.q)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}bindTextures(e){(0,T.i)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),(0,T.i)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,T.i)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,T.i)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,T.i)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=(0,T.i)(this._texture)?this._texture.glTexture:null;(0,T.i)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,t){if((0,T.b)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,D.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,T.q)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?ho:so,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==$e.Color&&this._output!==$e.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const po={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:i.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,b.b)(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:o.Less,textureAlphaMode:p.Blend,textureAlphaCutoff:.1,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...he};class go{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(H.V.POSITION).length}write(e,t,r,i){!function(e,t,r,i,o,n){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case H.V.POSITION:{G(3===t.size);const e=o.getField(a,C.B);e&&Ye(s,t.data,r,e,n);break}case H.V.NORMAL:{G(3===t.size);const e=o.getField(a,C.B);e&&Ke(s,t.data,i,e,n);break}case H.V.UV0:{G(2===t.size);const e=o.getField(a,C.c);e&&Xe(s,t.data,e,n);break}case H.V.COLOR:{G(3===t.size||4===t.size);const e=o.getField(a,C.b);e&&Qe(s,t.data,t.size,e,n);break}case H.V.SYMBOLCOLOR:{G(3===t.size||4===t.size);const e=o.getField(a,C.b);e&&Qe(s,t.data,t.size,e,n);break}case H.V.TANGENT:{G(4===t.size);const e=o.getField(a,C.a);e&&Ze(s,t.data,i,e,n);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}function vo(e){let t=(0,Kt.n)();return t=e.instancedDoublePrecision?t.vec3f(H.V.MODELORIGINHI).vec3f(H.V.MODELORIGINLO).mat3f(H.V.MODEL).mat3f(H.V.MODELNORMAL):t.mat4f(H.V.MODEL).mat4f(H.V.MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(H.V.INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(H.V.INSTANCEFEATUREATTRIBUTE)),t}const _o=(0,S.b)(),To=(0,S.b)(),xo=(0,S.q)(0,0,1),bo=(0,S.b)(),Ao=(0,S.b)(),Eo=(0,S.b)(),So=(0,S.b)(),Ro=P.L.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Co(e,t){const r=await async function(e,t){const r=(0,T.i)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,N.r)(t.request(e,"json",r));return!0===i.ok?i.value:((0,D.r9)(i.error),void Mo(i.error.details.url))}(e,r,t);const i=await(0,N.r)((0,y.default)(e,(0,T.u)(t)));return!0===i.ok?i.value.data:((0,D.r9)(i.error),void Mo(i.error))}(e,t),i=await async function(e,t){const r=[];for(const i in e){const o=e[i],n=o.images[0].data;if(!n){Ro.warn("Externally referenced texture data is not yet supported");continue}const a=o.encoding+";base64,"+n,s="/textureDefinitions/"+i,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:Ne.f.REPEAT,t:Ne.f.REPEAT},preMultiplyAlpha:No(l)!==p.Opaque},d=(0,T.i)(t)&&t.disableTextures?Promise.resolve(null):I(a,t);r.push(d.then((e=>({refId:s,image:e,params:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}(r.textureDefinitions,t);return{resource:r,textures:i}}function Mo(e){throw new w.Z("",`Request for object resource failed: ${e}`)}function Oo(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Ro.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ro.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ro.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Ro.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Ro.warn("Indexed geometries must specify faces"),i=!1;break}default:Ro.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Ro.warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Ro.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function yo(e){const t=(0,R.e)();return e.forEach((e=>{const r=e.boundingInfo;(0,T.i)(r)&&((0,R.x)(t,r.getBBMin()),(0,R.x)(t,r.getBBMax()))})),t}function No(e){switch(e){case"mask":return p.Mask;case"maskAndTransparency":return p.MaskBlend;case"none":return p.Opaque;default:return p.Blend}}function wo(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Po=new L.V(1,2,"wosr");async function Do(e,t){const r=Lo((0,_.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Co(r.url,t)),o=function(e,t){const r=[],o=[],n=[],a=[],s=e.resource,l=L.V.parse(s.version||"1.0","wosr");Po.validate(l);const c=s.model.name,d=s.model.geometries,u=s.materialDefinitions,h=e.textures;let m=0;const f=new Map;for(let e=0;e<d.length;e++){const s=d[e];if(!Oo(s))continue;const l=wo(s),c=s.params.vertexAttributes,p=[];for(const e in c){const t=c[e],r=t.values;p.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)g.push([t,new Uint32Array(e[t].values)])}const v=h&&h[l.texture];if(v&&!f.has(l.texture)){const{image:e,params:t}=v,r=new jt(e,t);a.push(r),f.set(l.texture,r)}const _=f.get(l.texture),x=_?_.id:void 0;let b=n[l.material]?n[l.material][l.texture]:null;if(!b){const e=u[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=v&&v.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=v?No(v.alphaChannelUsage):void 0,s={ambient:(0,S.L)(e.diffuse),diffuse:(0,S.L)(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:x,initTextureTransparent:!0,doubleSided:!0,cullFace:i.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!v&&!!v.params.preMultiplyAlpha};(0,T.i)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),b=new mo(s),n[l.material]||(n[l.material]={}),n[l.material][l.texture]=b}o.push(b);const A=new ke(p,g);m+=g.position?g.position.length:0,r.push(A)}return{name:c,stageResources:{textures:a,materials:o,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:yo(r),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,O.l)(new O.D(t.streamDataRequester),r.url,t,t.usePBR)),n=(0,T.j)(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&(0,T.i)(n)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const o of i.parts){const i=o.attributes.normal;if((0,T.b)(i))return;const n=o.attributes.position,a=n.count,s=(0,S.b)(),l=(0,S.b)(),c=(0,S.b)(),d=(0,O.c)(C.b,a),u=(0,O.c)(C.B,a),h=(0,A.g)((0,E.c)(),o.transform);for(let m=0;m<a;m++){n.getVec(m,l),i.getVec(m,s),(0,S.v)(l,l,o.transform),(0,S.h)(c,l,t.center),(0,S.ad)(c,c,t.radius);const a=c[2],f=(0,S.l)(c),p=Math.min(.45+.55*f*f,1);(0,S.ad)(c,c,t.radius),(0,S.v)(c,c,h),(0,S.n)(c,c),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,S.g)(c,c,s,a>-1?.2:Math.min(-4*a-3.8,1)),u.setVec(m,c),d.set(m,0,255*p),d.set(m,1,255*p),d.set(m,2,255*p),d.set(m,3,255)}o.attributes.normal=u,o.attributes.color=d}}}(o,n);const a=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},s={...t.materialParamsMixin,treeRendering:o.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=Io(o,a,s,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=Io(o,a,s,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const l=Io(o,a,s);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}function Lo(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Io(e,t,r,n){const a=e.model,s=(0,b.b)(),l=new Array,c=new Map,d=new Map;return a.lods.forEach(((e,u)=>{if(void 0!==n&&u!==n)return;const h={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,T.i)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,R.e)()};l.push(h),e.parts.forEach((e=>{const n=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),l=a.materials.get(e.material),u=(0,T.i)(e.attributes.texCoord0),m=(0,T.i)(e.attributes.normal),f=function(e){switch(e){case"BLEND":return p.Blend;case"MASK":return p.Mask;case"OPAQUE":case null:case void 0:return p.Opaque}}(l.alphaMode);if(!c.has(n)){if(u){if((0,T.i)(l.textureColor)&&!d.has(l.textureColor)){const e=a.textures.get(l.textureColor),t={...e.parameters,preMultiplyAlpha:f!==p.Opaque};d.set(l.textureColor,new jt(e.data,t))}if((0,T.i)(l.textureNormal)&&!d.has(l.textureNormal)){const e=a.textures.get(l.textureNormal);d.set(l.textureNormal,new jt(e.data,e.parameters))}if((0,T.i)(l.textureOcclusion)&&!d.has(l.textureOcclusion)){const e=a.textures.get(l.textureOcclusion);d.set(l.textureOcclusion,new jt(e.data,e.parameters))}if((0,T.i)(l.textureEmissive)&&!d.has(l.textureEmissive)){const e=a.textures.get(l.textureEmissive);d.set(l.textureEmissive,new jt(e.data,e.parameters))}if((0,T.i)(l.textureMetallicRoughness)&&!d.has(l.textureMetallicRoughness)){const e=a.textures.get(l.textureMetallicRoughness);d.set(l.textureMetallicRoughness,new jt(e.data,e.parameters))}}const s=l.color[0]**(1/O.C),h=l.color[1]**(1/O.C),g=l.color[2]**(1/O.C),v=l.emissiveFactor[0]**(1/O.C),_=l.emissiveFactor[1]**(1/O.C),x=l.emissiveFactor[2]**(1/O.C),b=(0,T.i)(l.textureColor)&&u?d.get(l.textureColor):null;c.set(n,new mo({...t,transparent:f===p.Blend,customDepthTest:o.Lequal,textureAlphaMode:f,textureAlphaCutoff:l.alphaCutoff,diffuse:[s,h,g],ambient:[s,h,g],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?i.None:i.Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:m?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:(0,T.i)(b)?b.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:(0,T.i)(l.textureNormal)&&u?d.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:(0,T.i)(b)&&!!b.params.preMultiplyAlpha,occlusionTextureId:(0,T.i)(l.textureOcclusion)&&u?d.get(l.textureOcclusion).id:void 0,emissiveTextureId:(0,T.i)(l.textureEmissive)&&u?d.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,T.i)(l.textureMetallicRoughness)&&u?d.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[v,_,x],mrrFactors:[l.metallicFactor,l.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const g=function(e,t){switch(t){case Ne.P.TRIANGLES:return(0,O.e)(e);case Ne.P.TRIANGLE_STRIP:return(0,O.d)(e);case Ne.P.TRIANGLE_FAN:return(0,O.b)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),v=e.attributes.position.count,_=(0,O.c)(C.B,v);(0,M.t)(_,e.attributes.position,e.transform);const b=[[H.V.POSITION,{data:_.typedBuffer,size:_.elementCount,exclusive:!0}]],A=[[H.V.POSITION,g]];if((0,T.i)(e.attributes.normal)){const t=(0,O.c)(C.B,v);(0,x.a)(s,e.transform),(0,M.a)(t,e.attributes.normal,s),b.push([H.V.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),A.push([H.V.NORMAL,g])}if((0,T.i)(e.attributes.tangent)){const t=(0,O.c)(C.a,v);(0,x.a)(s,e.transform),(0,O.t)(t,e.attributes.tangent,s),b.push([H.V.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),A.push([H.V.TANGENT,g])}if((0,T.i)(e.attributes.texCoord0)){const t=(0,O.c)(C.c,v);(0,O.n)(t,e.attributes.texCoord0),b.push([H.V.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),A.push([H.V.UV0,g])}if((0,T.i)(e.attributes.color)){const t=(0,O.c)(C.b,v);if(4===e.attributes.color.elementCount)e.attributes.color instanceof C.a?(0,O.s)(t,e.attributes.color,255):e.attributes.color instanceof C.b?(0,O.a)(t,e.attributes.color):e.attributes.color instanceof C.s&&(0,O.s)(t,e.attributes.color,1/256);else{(0,O.f)(t,255,255,255,255);const r=new C.u(t.buffer,0,4);e.attributes.color instanceof C.B?(0,M.s)(r,e.attributes.color,255):e.attributes.color instanceof C.u?(0,M.c)(r,e.attributes.color):e.attributes.color instanceof C.v&&(0,M.s)(r,e.attributes.color,1/256)}b.push([H.V.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),A.push([H.V.COLOR,g])}const E=new ke(b,A);h.stageResources.geometries.push(E),h.stageResources.materials.push(c.get(n)),u&&((0,T.i)(l.textureColor)&&h.stageResources.textures.push(d.get(l.textureColor)),(0,T.i)(l.textureNormal)&&h.stageResources.textures.push(d.get(l.textureNormal)),(0,T.i)(l.textureOcclusion)&&h.stageResources.textures.push(d.get(l.textureOcclusion)),(0,T.i)(l.textureEmissive)&&h.stageResources.textures.push(d.get(l.textureEmissive)),(0,T.i)(l.textureMetallicRoughness)&&h.stageResources.textures.push(d.get(l.textureMetallicRoughness))),h.numberOfVertices+=v;const S=E.boundingInfo;(0,T.i)(S)&&((0,R.x)(h.boundingBox,S.getBBMin()),(0,R.x)(h.boundingBox,S.getBBMax()))}))})),l}const Fo=Object.freeze({__proto__:null,fetch:Do,parseUrl:Lo,gltfToEngineResources:Io})},56697:(e,t,r)=>{function i(){return new Float32Array(3)}function o(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}r.d(t,{c:()=>i,f:()=>o}),o(1,1,1),o(1,0,0),o(0,1,0),o(0,0,1)}}]);