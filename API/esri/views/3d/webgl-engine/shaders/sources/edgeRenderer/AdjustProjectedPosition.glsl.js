// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/shaderLibrary/attributes/VertexPosition.glsl","../../../core/shaderLibrary/util/IsNaN.glsl","../../../core/shaderModules/interfaces"],function(d,e,f,b){d.AdjustProjectedPosition=function(a,c){a.vertex.include(f.IsNaN);a.include(e.VertexPosition,c);a=a.vertex;a.uniforms.add("depthBias","vec2");a.uniforms.add("inverseViewport","vec2");c.legacy?(a.uniforms.add("view","mat4"),a.uniforms.add("proj","mat4")):a.uniforms.add("transformNormalViewFromGlobal","mat3");c.legacy?
a.code.add(b.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
float offsetZ  = depthBias.y;
vec4 projNormal = proj * view * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`):a.code.add(b.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
float offsetZ  = depthBias.y;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`);a.code.add(b.glsl`float _calculateProjectedBiasZ(vec4 projPos) {
float offsetZ = depthBias.y;
return sqrt(max(projPos.z,0.0)) * offsetZ;
}
vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
projPos.xy += offsetXY;
}
projPos.z += _calculateProjectedBiasZ(projPos);
return projPos;
}`)};Object.defineProperty(d,"__esModule",{value:!0})});