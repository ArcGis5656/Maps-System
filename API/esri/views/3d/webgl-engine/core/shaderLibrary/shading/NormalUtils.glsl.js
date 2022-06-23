// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../ViewingMode","../../shaderModules/interfaces"],function(c,d,a){c.NormalUtils=function(b,e){e.viewingMode===d.ViewingMode.Global?b.vertex.code.add(a.glsl`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):b.vertex.code.add(a.glsl`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`);e.viewingMode===d.ViewingMode.Global?b.vertex.code.add(a.glsl`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):b.vertex.code.add(a.glsl`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)};Object.defineProperty(c,"__esModule",{value:!0})});