// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/shaderLibrary/util/DoublePrecision.glsl","../../../core/shaderModules/interfaces","../../../lib/VertexAttribute"],function(c,g,d,e){c.EdgeUtilMode=void 0;(function(a){a[a.SOLID=0]="SOLID";a[a.SKETCH=1]="SKETCH";a[a.MIXED=2]="MIXED";a[a.COUNT=3]="COUNT"})(c.EdgeUtilMode||(c.EdgeUtilMode={}));c.EdgeUtil=function(a,f){const b=a.vertex;b.uniforms.add("distanceFalloffFactor","float");b.code.add(d.glsl`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`);b.uniforms.add("componentDataTex","sampler2D");b.uniforms.add("componentDataTexInvDim","vec2");a.attributes.add(e.VertexAttribute.COMPONENTINDEX,"float");b.constants.add("componentColorFieldOffset","float",0);b.constants.add("componentOtherFieldOffset","float",1);b.constants.add("componentFieldCount","float",2);b.constants.add("lineWidthFractionFactor","float",8);b.constants.add("extensionLengthOffset","float",128);b.constants.add("componentTexWidth","float",4096);b.code.add(d.glsl`vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
float rowIndex = floor(fieldIndex / componentTexWidth);
float colIndex = mod(fieldIndex, componentTexWidth);
vec2 linearIndex = vec2(
(colIndex + 0.5) / componentTexWidth,
(rowIndex + 0.5) * componentDataTexInvDim.y
);
return linearIndex;
}
struct ComponentData {
vec4 color;
float lineWidth;
float extensionLength;
float type;
};
ComponentData readComponentData() {
vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
vec4 colorValue = texture2D(componentDataTex, colorIndex);
vec4 otherValue = texture2D(componentDataTex, otherIndex);
return ComponentData(
vec4(colorValue.rgb, colorValue.a * otherValue.w),
otherValue.x * (255.0 / lineWidthFractionFactor),
otherValue.y * 255.0 - extensionLengthOffset,
-(otherValue.z * 255.0) + 0.5
);
}`);f.legacy?b.code.add(d.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (view * model * vec4(normal, 0.0)).xyz;
}`):(b.uniforms.add("transformNormalGlobalFromModel","mat3"),b.code.add(d.glsl`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`));f.silhouette?(a.attributes.add(e.VertexAttribute.NORMALA,"vec3"),a.attributes.add(e.VertexAttribute.NORMALB,"vec3"),b.code.add(d.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normalize(normalA + normalB));
}`)):(a.attributes.add(e.VertexAttribute.NORMAL,"vec3"),b.code.add(d.glsl`vec3 worldNormal() {
return _modelToWorldNormal(normal);
}`));f.legacy?b.code.add(d.glsl`vec3 worldFromModelPosition(vec3 position) {
return (model * vec4(position, 1.0)).xyz;
}
vec3 viewFromModelPosition(vec3 position) {
return (view * vec4(worldFromModelPosition(position), 1.0)).xyz;
}
vec4 projFromViewPosition(vec3 position) {
return proj * vec4(position, 1.0);
}`):(a.vertex.include(g.DoublePrecision,f),b.code.add(d.glsl`vec3 worldFromModelPosition(vec3 position) {
vec3 rotatedModelPosition = transformWorldFromModelRS * position;
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 viewFromModelPosition(vec3 position) {
return transformViewFromCameraRelativeRS * worldFromModelPosition(position);
}
vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`));b.code.add(d.glsl`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)};c.usesSketchLogic=function(a){return a.mode===c.EdgeUtilMode.SKETCH||a.mode===c.EdgeUtilMode.MIXED};c.usesSolidLogic=function(a){return a.mode===c.EdgeUtilMode.SOLID||a.mode===c.EdgeUtilMode.MIXED};Object.defineProperty(c,"__esModule",{value:!0})});