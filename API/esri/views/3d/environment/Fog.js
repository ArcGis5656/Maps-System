// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/mathUtils ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../chunks/vec3 ../../../chunks/vec3f32 ../../../geometry/projectionEllipsoid ./atmosphereUtils ./FogTechnique ./weather ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/glUtil3D ../../webgl/enums".split(" "),
function(f,q,n,y,r,e,t,I,J,K,z,u,v,A,B,c,p,C,D,k,l,E,F,G){f.Fog=function(w){function g(a){var b=w.call(this,a)||this;b._projectionInverse=v.create();b._viewInverse=v.create();b._nearFar=B.create();b._fogColor=p.create();b._fogColorAtNight=p.create();b._cameraDirection=p.create();b._foggyFadeStart=.3;b._foggyFadeEnd=.6;b._hazeFadeStart=.7;b._hazeFadeEnd=1;b._strength=4E-6;b._vao=F.createQuadVAO(a.context.renderContext.rctx,E.Pos2Tex);a=C.getReferenceEllipsoid(a.view.spatialReference);b._planetRadius=
a.radius;b._atmosphereRadius=a.radius+D.atmosphereHeight;return b}q._inheritsLoose(g,w);var h=g.prototype;h.destroy=function(){this._hazeFogTechnique=e.releaseMaybe(this._hazeFogTechnique);this._thickFogTechnique=e.releaseMaybe(this._thickFogTechnique);this._vao=e.disposeMaybe(this._vao)};h.when=function(){return Promise.resolve()};h.render=function(a,b,d){if(0!==this.view.basemapTerrain.baseOpacity||b)if(this._update(a,b,d),!(0>=this._fogAmount)){var m=a.offscreenRenderingHelper,x=b?this.thickFogTechnique:
this.hazeFogTechnique,H=a.rctx.useTechnique(x);m.renderDepthDetached(()=>{H.bindTexture(m.depthTexture,"depthTex");this._renderFog(x.program,a)})}};h._renderFog=function(a,b){if(e.isNone(this._vao))return!1;const d=b.rctx;a.setUniform3fv("cameraPosition",b.camera.eye);a.setUniformMatrix4fv("inverseProjectionMatrix",this._projectionInverse);a.setUniformMatrix4fv("inverseViewMatrix",this._viewInverse);a.setUniform2fv("nearFar",this._nearFar);a.setUniform1f("atmosphereC",this._atmosphereC);a.setUniform1f("fogStrength",
this._strength);a.setUniform1f("fogAmount",this._fogAmount);a.setUniform3fv("fogColor",this._fogColor);d.bindVAO(this._vao);a.assertCompatibleVertexAttributeLocations(this._vao);d.drawArrays(G.PrimitiveType.TRIANGLE_STRIP,0,4);return!0};h._update=function(a,b,d){if(!e.isNone(a.camera)){var m=b?.1:0;d?c.set(this._fogColor,.5,.5,.5):b?c.set(this._fogColor,1.5,1.5,1.5):c.set(this._fogColor,.24,.44,.8);c.scale(this._fogColorAtNight,this._fogColor,m);c.normalize(this._cameraDirection,a.camera.eye);d=Math.max(0,
c.dot(this._cameraDirection,a.scenelightingData.lightingMainDirection));c.lerp(this._fogColor,this._fogColorAtNight,this._fogColor,d);u.invert(this._projectionInverse,a.camera.projectionMatrix);u.invert(this._viewInverse,a.camera.viewMatrix);A.set(this._nearFar,a.camera.near,a.camera.far);a=c.length(a.camera.eye);this._atmosphereC=a*a-this._atmosphereRadius*this._atmosphereRadius;this._fogAmount=b?1-r.smoothstep(this._foggyFadeStart*l.weatherHeightLimit,this._foggyFadeEnd*l.weatherHeightLimit,Math.abs(a-
this._planetRadius)):1-r.smoothstep(this._hazeFadeStart*l.weatherHeightLimit,this._hazeFadeEnd*l.weatherHeightLimit,Math.abs(a-this._planetRadius))}};g.isSupported=function(a){return a.capabilities.depthTexture};q._createClass(g,[{key:"_shaderTechniqueRepository",get:function(){return this.context.shaderTechniqueRepository}},{key:"strength",get:function(){return this._strength},set:function(a){this._strength=a}},{key:"thickFogTechnique",get:function(){if(e.isNone(this._thickFogTechnique)){const a=
new k.FogTechniqueConfiguration;a.haze=!1;this._thickFogTechnique=this._shaderTechniqueRepository.acquire(k.FogTechnique,a)}return this._thickFogTechnique}},{key:"hazeFogTechnique",get:function(){if(e.isNone(this._hazeFogTechnique)){const a=new k.FogTechniqueConfiguration;a.haze=!0;this._hazeFogTechnique=this._shaderTechniqueRepository.acquire(k.FogTechnique,a)}return this._hazeFogTechnique}}]);return g}(y);n.__decorate([t.property({constructOnly:!0})],f.Fog.prototype,"context",void 0);n.__decorate([t.property({constructOnly:!0})],
f.Fog.prototype,"view",void 0);f.Fog=n.__decorate([z.subclass("esri.views.3d.environment.Fog")],f.Fog);Object.defineProperty(f,"__esModule",{value:!0})});