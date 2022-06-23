// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../2d/engine/imagery/enums ../webgl-engine/core/shaderLibrary/output/BlendOptions ../../../chunks/RasterColorizer.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/rasterUtils ../../webgl/renderState".split(" "),
function(w,q,r,k,t,f,l,d,x,m,h,y,z,n,g,p){m=function(e){function b(){return e.apply(this,arguments)||this}r._inheritsLoose(b,e);var c=b.prototype;c.initializeProgram=function(a){var u=b.shader.get();const v=this.configuration;u=u.build({output:v.colorizerType,applyColormap:v.applyColormap,stretchType:v.stretchType});this._context=a.rctx;return new z.Program(a.rctx,u,y.Default3D)};c.initializePipeline=function(){const a=this.configuration.mode===l.BlendMode.OneMinusSourceAlpha?p.simpleBlendingParams(n.BlendFactor.ONE,
n.BlendFactor.ONE_MINUS_SRC_ALPHA):this.configuration.mode===l.BlendMode.SourceAlpha?p.simpleBlendingParams(n.BlendFactor.ZERO,n.BlendFactor.SRC_ALPHA):null;return p.makePipelineState({blending:a,colorWrite:p.defaultColorWriteParams})};c.bindPass=function(a){g.setUniforms(this.program,this.uniformLocationInfos,a.basic);g.setUniforms(this.program,this.uniformLocationInfos,a.common);t.isSome(a.colormap)&&g.setUniforms(this.program,this.uniformLocationInfos,a.colormap);this.configuration.colorizerType===
f.RasterColorizerType.Stretch&&t.isSome(a.stretch)?g.setUniforms(this.program,this.uniformLocationInfos,a.stretch):this.configuration.colorizerType===f.RasterColorizerType.Hillshade&&t.isSome(a.hillshade)&&g.setUniforms(this.program,this.uniformLocationInfos,a.hillshade)};r._createClass(b,[{key:"uniformLocationInfos",get:function(){this._uniformLocationInfos||(this._uniformLocationInfos=g.getUniformLocationInfos(this._context,this.program));return this._uniformLocationInfos}}]);return b}(m.ShaderTechnique);
m.shader=new x.ReloadableShaderModule(d.RasterColorizerShader,()=>new Promise((e,b)=>w(["../webgl-engine/core/shaderLibrary/raster/RasterColorizer.glsl"],e,b)));d=function(e){function b(){var c=e.apply(this,arguments)||this;c.mode=l.BlendMode.OneMinusSourceAlpha;c.colorizerType=f.RasterColorizerType.Stretch;c.stretchType=f.RasterColorizerStretchType.Noop;c.applyColormap=!0;return c}r._inheritsLoose(b,e);return b}(h.ShaderTechniqueConfiguration);k.__decorate([h.parameter({count:l.BlendMode.COUNT})],
d.prototype,"mode",void 0);k.__decorate([h.parameter({count:f.RasterColorizerType.COUNT})],d.prototype,"colorizerType",void 0);k.__decorate([h.parameter({count:f.RasterColorizerStretchType.COUNT})],d.prototype,"stretchType",void 0);k.__decorate([h.parameter()],d.prototype,"applyColormap",void 0);q.RasterColorizerTechnique=m;q.RasterColorizerTechniqueConfiguration=d;Object.defineProperty(q,"__esModule",{value:!0})});