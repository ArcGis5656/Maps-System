// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/uid ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/Renderbuffer ../../../webgl/Texture ../../../webgl/Util".split(" "),function(m,q,r,n,e,k,t,p,u){const v={dataType:e.PixelType.UNSIGNED_BYTE,internalFormat:e.PixelFormat.RGBA},w={};let x=function(){function l(a){this.rctx=a;this._activeTargets=new Set;this._depthTextures=new Map;this._depthBuffers=new Map;this._colorTextures=new Map;
this._framebuffers=new Map;this.depthTextureSupported=a.capabilities.depthTexture}var f=l.prototype;f.dispose=function(){this._depthBuffers.forEach(a=>a.dispose());this._depthBuffers.clear();this._depthTextures.forEach(a=>a.dispose());this._depthTextures.clear();this._colorTextures.forEach(a=>a.dispose());this._colorTextures.clear();this._framebuffers.forEach(a=>a.dispose());this._framebuffers.clear();this._activeTargets.clear()};f.disposeTargetResource=function(a){a=a.id;this._activeTargets.has(a)&&
(this._activeTargets.delete(a),this._disposeWithFramebuffers(this._depthTextures,a),this._disposeWithFramebuffers(this._depthBuffers,a),this._disposeWithFramebuffers(this._colorTextures,a))};f._disposeWithFramebuffers=function(a,c){const b=a.get(c);b&&(this._framebuffers.forEach((g,d)=>{if(g.colorAttachment===b||g.depthStencilAttachment===b)g.detachAll(),g.dispose(),this._framebuffers.delete(d)}),b.dispose(),a.delete(c))};f.getDepthTexture=function(a,c){if(!this.depthTextureSupported)return null;
let b=this._depthTextures.get(a.id);!b||b.descriptor.width===c.width&&b.descriptor.height===c.height||(b.dispose(),b=null);b||(b=new p.Texture(this.rctx,{target:e.TextureType.TEXTURE_2D,pixelFormat:e.PixelFormat.DEPTH_STENCIL,dataType:e.PixelType.UNSIGNED_INT_24_8,samplingMode:e.TextureSamplingMode.NEAREST,wrapMode:e.TextureWrapMode.CLAMP_TO_EDGE,width:c.width,height:c.height}),this._depthTextures.set(a.id,b),this._activeTargets.add(a.id));return b};f.getAllocatedDepthTexture=function(a){return this._depthTextures.get(a.id)};
f.getDepthBuffer=function(a,c){if(this.depthTextureSupported)return null;let b=this._depthBuffers.get(a.id);b?b.descriptor.width===c.width&&b.descriptor.height===c.height||b.resize(c.width,c.height):(b=new t.Renderbuffer(this.rctx,{internalFormat:e.RenderbufferFormat.DEPTH_STENCIL,...c}),this._depthBuffers.set(a.id,b),this._activeTargets.add(a.id));return b};f.getColorTexture=function(a,c){let b=this._colorTextures.get(a.id);!b||b.descriptor.width===c.width&&b.descriptor.height===c.height||(b.dispose(),
b=null);b||(b=new p.Texture(this.rctx,{target:e.TextureType.TEXTURE_2D,pixelFormat:e.PixelFormat.RGBA,internalFormat:a.internalFormat,dataType:a.dataType,samplingMode:null!=a.samplingMode?a.samplingMode:e.TextureSamplingMode.LINEAR,wrapMode:e.TextureWrapMode.CLAMP_TO_EDGE,width:c.width,height:c.height}),this._colorTextures.set(a.id,b),this._activeTargets.add(a.id));return b};f.getAllocatedColorTexture=function(a){return this._colorTextures.get(a.id)};f.registerDepthTarget=function(a={}){return{id:n.generateUID(),
...w,...a}};f.registerColorTarget=function(a={}){return{id:n.generateUID(),...v,...a}};f.getFramebuffer=function(a,c,b){const g=this._getKey(c,b);let d=this._framebuffers.get(g);c=this.getColorTexture(c,a);if(this.depthTextureSupported){var h=b?this.getDepthTexture(b,a):void 0;if(!d)return d=r.isSome(b)?new k.FramebufferObject(this.rctx,{colorTarget:e.TargetType.TEXTURE,depthStencilTarget:e.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE},c,h):new k.FramebufferObject(this.rctx,{colorTarget:e.TargetType.TEXTURE,
depthStencilTarget:e.DepthStencilTargetType.NONE},c),this._framebuffers.set(g,d),d;if(d.width!==a.width||d.height!==a.height||d.colorTexture!==c||d.depthStencilTexture!==h)d.detachAll(),d.resize(a.width,a.height),d.attachColorTexture(c),d.attachDepthStencilTexture(h);return d}h=b?this.getDepthBuffer(b,a):void 0;if(!d)return d=new k.FramebufferObject(this.rctx,{colorTarget:e.TargetType.TEXTURE,depthStencilTarget:b?e.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER:e.DepthStencilTargetType.NONE},
c,h),this._framebuffers.set(g,d),d;if(d.width!==a.width||d.height!==a.height||d.colorTexture!==c)d.detachAll(),d.resize(a.width,a.height),d.attachColorTexture(c),d.attachDepthStencilBuffer(h);return d};f._getKey=function(a,c){return`${a.id}_${c?c.id:"X"}_${a.name}${c?"_"+c.name:""}`};q._createClass(l,[{key:"gpuMemoryUsage",get:function(){let a=0;const c=new Set,b=g=>{c.has(g)||(c.add(g),a+=u.getGpuMemoryUsage(g))};this._depthTextures.forEach(b);this._colorTextures.forEach(b);this._depthBuffers.forEach(b);
return a}}]);return l}();m.RenderTargetHelper=x;Object.defineProperty(m,"__esModule",{value:!0})});