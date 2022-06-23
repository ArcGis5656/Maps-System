// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../support/requestImageUtils ./glUtil3D ./SMAATechnique ../../../../chunks/SMAA.glsl ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/Texture".split(" "),
function(x,l,r,n,y,g,p,t,D,E,F,z,A,B,u,q,b,v,C){l.SmaaRenderPass=function(w){function m(e,a){var c=w.call(this,{})||this;c.rctx=e;c._techniqueRep=a;c._isEnabled=!1;return c}r._inheritsLoose(m,w);var h=m.prototype;h.normalizeCtorArgs=function(){return{}};h.dispose=function(){this._abortController=g.abortMaybe(this._abortController);this.disable()};h._loadResources=function(e){if(g.isSome(this._abortController))return!1;if(g.isSome(this._searchTexture))return!0;this._abortController=new AbortController;
const a=this._abortController.signal;(new Promise((c,d)=>x(["./SmaaRenderPassData"],c,d))).then(c=>this._loadTextures(c,a)).then(()=>e()).finally(()=>this._abortController=null);return!1};h._loadTextures=function(e,a){p.throwIfAborted(a);return Promise.all([this._loadTextureFromBase64(e.areaTexture,b.TextureSamplingMode.LINEAR,b.PixelFormat.RGB),this._loadTextureFromBase64(e.searchTexure,b.TextureSamplingMode.NEAREST,b.PixelFormat.LUMINANCE)]).then(([c,d])=>{p.isAborted(a)?(c.dispose(),d.dispose(),
p.throwIfAborted(a)):(this._areaTexture=c,this._searchTexture=d)})};h.enable=function(e){if(this._isEnabled)return!0;if(!this._edgeDetectTechnique||!this._blendWeightsTechnique||!this._blurTechnique){const a=new u.SMAATechniqueConfiguration,c=(d,f)=>this._techniqueRep.releaseAndAcquire(u.SMAATechnique,d,f);a.output=q.SMAAOutput.EdgeDetector;this._edgeDetectTechnique=c(a,this._edgeDetectTechnique);a.output=q.SMAAOutput.BlendWeight;this._blendWeightsTechnique=c(a,this._blendWeightsTechnique);a.output=
q.SMAAOutput.Blur;this._blurTechnique=c(a,this._blurTechnique)}if(!this._loadResources(e))return!1;this._vao=B.createScreenSizeTriangleVAO(this.rctx);this._edges=new v.FramebufferObject(this.rctx,{colorTarget:b.TargetType.TEXTURE,depthStencilTarget:b.DepthStencilTargetType.NONE},{target:b.TextureType.TEXTURE_2D,pixelFormat:b.PixelFormat.RGB,dataType:b.PixelType.UNSIGNED_BYTE,samplingMode:b.TextureSamplingMode.LINEAR,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,width:4,height:4});this._blend=new v.FramebufferObject(this.rctx,
{colorTarget:b.TargetType.TEXTURE,depthStencilTarget:b.DepthStencilTargetType.NONE},{target:b.TextureType.TEXTURE_2D,pixelFormat:b.PixelFormat.RGBA,dataType:b.PixelType.UNSIGNED_BYTE,samplingMode:b.TextureSamplingMode.LINEAR,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,width:4,height:4});return this._isEnabled=!0};h.disable=function(){this._isEnabled&&(this._vao=g.disposeMaybe(this._vao),this._areaTexture=g.disposeMaybe(this._areaTexture),this._searchTexture=g.disposeMaybe(this._searchTexture),this._blend=
g.disposeMaybe(this._blend),this._edges=g.disposeMaybe(this._edges),this._isEnabled=!1)};h.render=function(e){if(this._isEnabled){var a=this.rctx,c=a.getBoundFramebufferObject(),d=e.descriptor.width,f=e.descriptor.height;a.bindVAO(this._vao);a.setViewport(0,0,d,f);this._edges.resize(d,f);a.bindFramebuffer(this._edges);a.setClearColor(0,0,0,1);a.clear(b.ClearBufferBit.COLOR_BUFFER_BIT);var k=a.useTechnique(this._edgeDetectTechnique);k.bindTexture(e,"tColor");k.setUniform4f("resolution",1/d,1/f,d,f);
a.drawArrays(b.PrimitiveType.TRIANGLES,0,3);this._blend.resize(d,f);a.bindFramebuffer(this._blend);a.setClearColor(0,0,1,1);a.clear(b.ClearBufferBit.COLOR_BUFFER_BIT);k=a.useTechnique(this._blendWeightsTechnique);k.setUniform4f("resolution",1/d,1/f,d,f);k.bindTexture(this._searchTexture,"tSearch");k.bindTexture(this._areaTexture,"tArea");k.bindTexture(this._edges.colorTexture,"tEdges");a.drawArrays(b.PrimitiveType.TRIANGLES,0,3);a.bindFramebuffer(c);a.setClearColor(0,1,0,1);a.clear(b.ClearBufferBit.COLOR_BUFFER_BIT);
c=a.useTechnique(this._blurTechnique);c.setUniform4f("resolution",1/d,1/f,d,f);c.bindTexture(e,"tColor");c.bindTexture(this._blend.colorTexture,"tBlendWeights");a.drawArrays(b.PrimitiveType.TRIANGLES,0,3)}};h._loadTextureFromBase64=function(e,a,c){const d=new C.Texture(this.rctx,{pixelFormat:c,dataType:b.PixelType.UNSIGNED_BYTE,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:a},null);return A.requestImage(e).then(f=>{d.resize(f.width,f.height);d.setData(f);return d})};r._createClass(m,[{key:"updating",
get:function(){return g.isSome(this._abortController)}}]);return m}(y);n.__decorate([t.property()],l.SmaaRenderPass.prototype,"_abortController",void 0);n.__decorate([t.property({readOnly:!0})],l.SmaaRenderPass.prototype,"updating",null);l.SmaaRenderPass=n.__decorate([z.subclass("esri.views.3d.webgl-engine.lib.SmaaRenderPass")],l.SmaaRenderPass);Object.defineProperty(l,"__esModule",{value:!0})});