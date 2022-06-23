// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutputOptions ../lib/basicInterfaces ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ../lib/VertexAttribute ../shaders/MeasurementArrowTechnique".split(" "),function(A,B,c,p,H,I,J,K,C,L,h,D){let P=function(k){function e(a){a=k.call(this,a,M)||this;a.techniqueConfig=new D.MeasurementArrowTechniqueConfiguration;return a}
B._inheritsLoose(e,k);var b=e.prototype;b.getTechniqueConfig=function(a,f){var q;this.techniqueConfig.polygonOffsetEnabled=this.parameters.polygonOffset;this.techniqueConfig.transparent=1>this.parameters.stripeEvenColor[3]||1>this.parameters.stripeOddColor[3]||1>this.parameters.outlineColor[3];this.techniqueConfig.transparencyPassType=null!=(q=null==f?void 0:f.transparencyPassType)?q:J.TransparencyPassType.NONE;return this.techniqueConfig};b.dispose=function(){};b.getPassParameters=function(){return this.parameters};
b.intersect=function(){};b.requiresSlot=function(a){return a===L.RenderSlot.OPAQUE_MATERIAL};b.createGLMaterial=function(a){return a.output===I.ShaderOutput.Color?new N(a):null};b.createBufferWriter=function(){return new O};return e}(C.Material),N=function(k){function e(){return k.apply(this,arguments)||this}B._inheritsLoose(e,k);var b=e.prototype;b.updateParameters=function(a){return this.ensureTechnique(D.MeasurementArrowTechnique,a)};b.beginSlot=function(a){return this.updateParameters(a)};b.bind=
function(a,f){f.bindPass(this._material.getPassParameters(),a)};return e}(K);const M={width:32,outlineSize:.2,outlineColor:[1,.5,0,1],stripeLength:1,stripeEvenColor:[1,1,1,1],stripeOddColor:[1,.5,0,1],polygonOffset:!1,...C.DefaultMaterialParameters},Q=H.newLayout().vec3f(h.VertexAttribute.POSITION).vec3f(h.VertexAttribute.NORMAL).vec2f(h.VertexAttribute.UV0).f32(h.VertexAttribute.AUXPOS1),l=p.create(),r=p.create(),v=p.create(),m=p.create(),w=p.create();let O=function(){function k(){this.vertexBufferLayout=
Q}var e=k.prototype;e.allocate=function(b){return this.vertexBufferLayout.createBuffer(b)};e.elementCount=function(b){return 2*(b.indices.get(h.VertexAttribute.POSITION).length/2+1)};e.write=function(b,a,f,q){var g=a.vertexAttributes.get(h.VertexAttribute.POSITION).data;const z=a.vertexAttributes.get(h.VertexAttribute.NORMAL).data,t=g.length/3;(a=a&&a.indices&&a.indices.get(h.VertexAttribute.POSITION))&&a.length!==2*(t-1)&&console.warn("MeasurementArrowMaterial does not support indices");a=b.transformation;
const E=b.invTranspTransformation,F=f.position,G=f.normal,x=f.uv0;b=0;for(let n=0;n<t;++n){var d=3*n;c.set(l,g[d],g[d+1],g[d+2]);n<t-1&&(d=3*(n+1),c.set(r,g[d],g[d+1],g[d+2]),c.set(w,z[d],z[d+1],z[d+2]),c.normalize(w,w),c.subtract(v,r,l),c.normalize(v,v),c.cross(m,w,v),c.normalize(m,m));d=c.distance(l,r);a&&E&&(c.transformMat4(l,l,a),c.transformMat4(r,r,a),c.transformMat4(m,m,E));const u=q+2*n,y=u+1;F.setVec(u,l);F.setVec(y,l);G.setVec(u,m);G.setVec(y,m);x.set(u,0,b);x.set(u,1,-1);x.set(y,0,b);x.set(y,
1,1);n<t-1&&(b+=d)}f=f.auxpos1;for(g=0;g<2*t;++g)f.set(q+g,b)};return k}();A.MeasurementArrowMaterial=P;Object.defineProperty(A,"__esModule",{value:!0})});