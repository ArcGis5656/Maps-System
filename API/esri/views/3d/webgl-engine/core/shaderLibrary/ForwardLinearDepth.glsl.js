// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./ShaderOutputOptions","../shaderModules/interfaces"],function(e,c,d){e.ForwardLinearDepth=function(a,b){b.output===c.ShaderOutput.Color&&b.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(d.glsl`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):b.output===c.ShaderOutput.Depth||b.output===c.ShaderOutput.Shadow?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("nearFar","vec2"),a.vertex.code.add(d.glsl`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):a.vertex.code.add(d.glsl`void forwardLinearDepth() {}`)};Object.defineProperty(e,"__esModule",{value:!0})});