// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../chunks/vec3f32","../attributes/VertexTextureCoordinates.glsl","../../shaderModules/interfaces"],function(d,f,h,e){f=f.fromValues(0,.6,.2);d.PBRMode=void 0;(function(b){b[b.Disabled=0]="Disabled";b[b.Normal=1]="Normal";b[b.Schematic=2]="Schematic";b[b.Water=3]="Water";b[b.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh";b[b.COUNT=5]="COUNT"})(d.PBRMode||(d.PBRMode={}));d.PBRSchematicMRRValues=f;d.PhysicallyBasedRenderingParameters=function(b,a){const c=b.fragment,
g=a.hasMetalnessAndRoughnessTexture||a.hasEmissionTexture||a.hasOcclusionTexture;a.pbrMode===d.PBRMode.Normal&&g&&b.include(h.VertexTextureCoordinates,a);a.pbrMode===d.PBRMode.Schematic?c.code.add(e.glsl`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`):(a.pbrMode===d.PBRMode.Disabled&&c.code.add(e.glsl`float getBakedOcclusion() { return 1.0; }`),a.pbrMode===d.PBRMode.Normal&&(c.uniforms.add("emissionFactor","vec3"),c.uniforms.add("mrrFactors","vec3"),c.code.add(e.glsl`vec3 mrr;
vec3 emission;
float occlusion;`),a.hasMetalnessAndRoughnessTexture&&(c.uniforms.add("texMetallicRoughness","sampler2D"),a.supportsTextureAtlas&&c.uniforms.add("texMetallicRoughnessSize","vec2"),c.code.add(e.glsl`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),a.hasEmissionTexture&&(c.uniforms.add("texEmission","sampler2D"),a.supportsTextureAtlas&&c.uniforms.add("texEmissionSize","vec2"),c.code.add(e.glsl`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),a.hasOcclusionTexture?(c.uniforms.add("texOcclusion","sampler2D"),a.supportsTextureAtlas&&c.uniforms.add("texOcclusionSize","vec2"),c.code.add(e.glsl`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):c.code.add(e.glsl`float getBakedOcclusion() { return 1.0; }`),c.code.add(e.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${g?"vtc.uv \x3d vuv0;":""}
      ${a.hasMetalnessAndRoughnessTexture?a.supportsTextureAtlas?"vtc.size \x3d texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${a.hasEmissionTexture?a.supportsTextureAtlas?"vtc.size \x3d texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${a.hasOcclusionTexture?a.supportsTextureAtlas?"vtc.size \x3d texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)))};d.bindPBRUniforms=function(b,a,c=!1){c||(b.setUniform3fv("mrrFactors",a.mrrFactors),b.setUniform3fv("emissionFactor",a.emissiveFactor))};Object.defineProperty(d,"__esModule",{value:!0})});