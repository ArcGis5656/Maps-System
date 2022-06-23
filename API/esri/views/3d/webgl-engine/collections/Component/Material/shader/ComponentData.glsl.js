// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./DecodeSymbolColor.glsl","../../../../core/shaderModules/interfaces","../../../../lib/VertexAttribute"],function(b,e,c,f){b.ComponentDataType=void 0;(function(a){a[a.Uniform=0]="Uniform";a[a.Varying=1]="Varying";a[a.COUNT=2]="COUNT"})(b.ComponentDataType||(b.ComponentDataType={}));b.ComponentData=function(a,d){d.componentData===b.ComponentDataType.Varying&&(a.vertex.uniforms.add("componentColorTex","sampler2D"),a.vertex.uniforms.add("componentColorTexInvDim","vec2"),a.attributes.add(f.VertexAttribute.COMPONENTINDEX,
"float"),a.varyings.add("vExternalColorMixMode","mediump float"),a.varyings.add("vExternalColor","vec4"),a.include(e.DecodeSymbolColor),a.vertex.code.add(c.glsl`vec4 _readComponentColor() {
float normalizedIndex = (componentIndex + 0.5) * componentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * componentColorTexInvDim.y
);
return texture2D(componentColorTex, indexCoord);
}
vec4 forwardExternalColor(out bool castShadows) {
vec4 componentColor = _readComponentColor() * 255.0;
float shadowFlag = mod(componentColor.b * 255.0, 2.0);
componentColor.b -= shadowFlag;
castShadows = shadowFlag >= 1.0;
int decodedColorMixMode;
vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451;
vExternalColorMixMode = float(decodedColorMixMode) + 0.5;
return vExternalColor;
}`),a.fragment.code.add(c.glsl`void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
externalColor = vExternalColor;
externalColorMixMode = int(vExternalColorMixMode);
}`));d.componentData===b.ComponentDataType.Uniform&&(a.vertex.uniforms.add("externalColor","vec4"),a.fragment.uniforms.add("externalColorMixMode","int"),a.varyings.add("vExternalColor","vec4"),a.vertex.code.add(c.glsl`vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`),a.fragment.code.add(c.glsl`void readExternalColor(out vec4 color, out int colorMixMode) {
color = vExternalColor;
colorMixMode = externalColorMixMode;
}`))};Object.defineProperty(b,"__esModule",{value:!0})});