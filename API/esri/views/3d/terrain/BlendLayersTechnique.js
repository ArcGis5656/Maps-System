// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../webgl-engine/core/shaderLibrary/output/BlendOptions ../../../chunks/BlendLayers.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(p,
k,m,q,d,e,r,f,n,t,u,g,h){f=function(b){function a(){return b.apply(this,arguments)||this}m._inheritsLoose(a,b);var c=a.prototype;c.initializeProgram=function(l){const v=a.shader.get().build();return new u.Program(l.rctx,v,t.Default3D)};c.initializePipeline=function(){const l=this.configuration.mode===d.BlendMode.OneMinusSourceAlpha?h.simpleBlendingParams(g.BlendFactor.ONE,g.BlendFactor.ONE_MINUS_SRC_ALPHA):this.configuration.mode===d.BlendMode.SourceAlpha?h.simpleBlendingParams(g.BlendFactor.ZERO,
g.BlendFactor.SRC_ALPHA):null;return h.makePipelineState({blending:l,colorWrite:h.defaultColorWriteParams})};return a}(f.ShaderTechnique);f.shader=new r.ReloadableShaderModule(e.BlendLayersShader,()=>new Promise((b,a)=>p(["../webgl-engine/core/shaderLibrary/util/BlendLayers.glsl"],b,a)));e=function(b){function a(){var c=b.apply(this,arguments)||this;c.mode=d.BlendMode.NoAlpha;return c}m._inheritsLoose(a,b);return a}(n.ShaderTechniqueConfiguration);q.__decorate([n.parameter({count:d.BlendMode.COUNT})],
e.prototype,"mode",void 0);k.BlendLayersTechnique=f;k.BlendLayersTechniqueConfiguration=e;Object.defineProperty(k,"__esModule",{value:!0})});