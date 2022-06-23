/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{T as e,f as t,m as a,d as r,r as s,C as i,p as n,c as o,R as l,S as p,P as u,b as c,g as d,a as h,i as m,n as g,o as f,q as v}from"./glUtil3D.js";import{C as T,T as b}from"./basicInterfaces.js";import{o as P,D as E,P as C}from"./DefaultBufferWriter.js";import{G as _}from"./GLMaterialTexture.js";import{D as y,a as A,M as x,i as O}from"./Material.js";import{i as S,m as D,o as F,c as w,f as N,a as q,e as R,d as j,g as I,h as H}from"./OrderIndependentTransparency.js";import{R as M}from"./RenderSlot.js";import{_ as U}from"./tslib.es6.js";import{S as G,g as L,R as B}from"./ShaderBuilder.js";import{V}from"./VertexAttribute.js";import{B as W}from"./enums.js";const $=Object.freeze({__proto__:null,build:function(n){const o=new G;return o.include(e,{linearDepth:!1}),o.vertex.uniforms.add("proj","mat4").add("view","mat4"),o.attributes.add(V.POSITION,"vec3"),o.attributes.add(V.UV0,"vec2"),o.varyings.add("vpos","vec3"),n.multipassTerrainEnabled&&o.varyings.add("depth","float"),o.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),o.vertex.code.add(L`
    void main(void) {
      vpos = position;
      ${n.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),o.include(t,n),n.multipassTerrainEnabled&&(o.fragment.include(B),o.include(a,n)),o.fragment.uniforms.add("tex","sampler2D"),o.fragment.uniforms.add("opacity","float"),o.varyings.add("vTexCoord","vec2"),n.output===r.Alpha?o.fragment.code.add(L`
    void main() {
      discardBySlice(vpos);
      ${n.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${L.float(s)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(o.fragment.include(i),o.fragment.code.add(L`
    void main() {
      discardBySlice(vpos);
      ${n.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${L.float(s)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${n.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),o}});class z extends p{initializeProgram(e){const t=z.shader.get(),a=this.configuration,r=t.build({output:a.output,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,oitEnabled:a.transparencyPassType===b.Color,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new u(e.rctx,r,y)}bindPass(e,t){c(this.program,t.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),t.multipassTerrainEnabled&&(this.program.setUniform2fv("nearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),d(this.program,t))}bindDraw(e){h(this.program,e),m(this.program,this.configuration,e),this.program.rebindTextures()}_setPipelineState(e,t){const a=this.configuration,s=e===b.NONE,i=e===b.FrontFace;return D({blending:a.output!==r.Color&&a.output!==r.Alpha||!a.transparent?null:s?Q:F(e),culling:w(a.cullFace),depthTest:{func:N(e)},depthWrite:s?a.writeDepth&&q:R(e),colorWrite:j,stencilWrite:a.sceneHasOcludees?g:null,stencilTest:a.sceneHasOcludees?t?f:v:null,polygonOffset:s||i?null:I(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}z.shader=new l($,(()=>Promise.resolve().then((()=>$))));const Q=S(W.ONE,W.ONE_MINUS_SRC_ALPHA);class k extends o{constructor(){super(...arguments),this.output=r.Color,this.cullFace=T.None,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=b.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}U([n({count:r.COUNT})],k.prototype,"output",void 0),U([n({count:T.COUNT})],k.prototype,"cullFace",void 0),U([n()],k.prototype,"slicePlaneEnabled",void 0),U([n()],k.prototype,"transparent",void 0),U([n()],k.prototype,"enableOffset",void 0),U([n()],k.prototype,"writeDepth",void 0),U([n()],k.prototype,"sceneHasOcludees",void 0),U([n({count:b.COUNT})],k.prototype,"transparencyPassType",void 0),U([n()],k.prototype,"multipassTerrainEnabled",void 0),U([n()],k.prototype,"cullAboveGround",void 0);class J extends x{constructor(e){super(e,X),this.supportsEdges=!0,this.techniqueConfig=new k}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<H,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,a,r,s,i,n){O(e,t,r,s,i,void 0,n)}requiresSlot(e,t){if(e===M.DRAPED_MATERIAL)return!0;if(P(t)===r.Highlight)return e===M.OPAQUE_MATERIAL;return e===(this.parameters.transparent?this.parameters.writeDepth?M.TRANSPARENT_MATERIAL:M.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:M.OPAQUE_MATERIAL)}createGLMaterial(e){return e.output===r.Color||e.output===r.Alpha||e.output===r.Highlight?new K(e):void 0}createBufferWriter(){return new E(C)}}class K extends _{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(z,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&(this._material.setParameters({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e))}beginSlot(e){return this._output!==r.Color&&this._output!==r.Alpha||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e)}}const X={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:T.None,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...A};export{J as I};
