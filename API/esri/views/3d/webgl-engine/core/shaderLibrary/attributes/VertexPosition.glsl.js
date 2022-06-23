// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/mat3f64 ../../../../../../chunks/mat4f64 ../../../../../../chunks/vec3f64 ./PositionAttribute.glsl ../util/DoublePrecision.glsl ../../shaderModules/interfaces".split(" "),function(c,e,g,d,h,k,f){c.VertexPosition=function(a,b){a.include(h.PositionAttribute);a.vertex.include(k.DoublePrecision,b);a.varyings.add("vPositionWorldCameraRelative","vec3");a.varyings.add("vPosition_view","vec3");a.vertex.uniforms.add("transformWorldFromModelRS","mat3");a.vertex.uniforms.add("transformWorldFromModelTH",
"vec3");a.vertex.uniforms.add("transformWorldFromModelTL","vec3");a.vertex.uniforms.add("transformWorldFromViewTH","vec3");a.vertex.uniforms.add("transformWorldFromViewTL","vec3");a.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3");a.vertex.uniforms.add("transformProjFromView","mat4");a.vertex.code.add(f.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);a.fragment.uniforms.add("transformWorldFromViewTL","vec3");a.fragment.code.add(f.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)};c.VertexPositionModelTransform=function(){this.transformWorldFromModelRS=e.create();this.transformWorldFromModelTH=d.create();this.transformWorldFromModelTL=d.create()};c.VertexPositionViewProjectionTransform=function(){this.transformWorldFromViewTH=d.create();this.transformWorldFromViewTL=d.create();this.transformViewFromCameraRelativeRS=e.create();this.transformProjFromView=g.create()};c.bindModelTransform=function(a,b){a.setUniformMatrix3fv("transformWorldFromModelRS",b.transformWorldFromModelRS);
a.setUniform3fv("transformWorldFromModelTH",b.transformWorldFromModelTH);a.setUniform3fv("transformWorldFromModelTL",b.transformWorldFromModelTL)};c.bindViewProjTransform=function(a,b){a.setUniform3fv("transformWorldFromViewTH",b.transformWorldFromViewTH);a.setUniform3fv("transformWorldFromViewTL",b.transformWorldFromViewTL);a.setUniformMatrix4fv("transformProjFromView",b.transformProjFromView);a.setUniformMatrix3fv("transformViewFromCameraRelativeRS",b.transformViewFromCameraRelativeRS)};Object.defineProperty(c,
"__esModule",{value:!0})});