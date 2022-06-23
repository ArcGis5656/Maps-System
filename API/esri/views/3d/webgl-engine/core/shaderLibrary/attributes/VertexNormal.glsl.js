// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../ViewingMode","./NormalAttribute.glsl","./VertexPosition.glsl","../../shaderModules/interfaces"],function(e,f,d,g,c){e.VertexNormal=function(a,b){b.normalType===d.NormalAttributeType.Attribute||b.normalType===d.NormalAttributeType.CompressedAttribute?(a.include(d.NormalAttribute,b),a.varyings.add("vNormalWorld","vec3"),a.varyings.add("vNormalView","vec3"),a.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),a.vertex.uniforms.add("transformNormalViewFromGlobal",
"mat3"),a.vertex.code.add(c.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):b.normalType===d.NormalAttributeType.Ground?(a.include(g.VertexPosition,b),a.varyings.add("vNormalWorld","vec3"),a.vertex.code.add(c.glsl`
    void forwardNormal() {
      vNormalWorld = ${b.viewingMode===f.ViewingMode.Global?c.glsl`normalize(vPositionWorldCameraRelative);`:c.glsl`vec3(0.0, 0.0, 1.0);`}
    }
    `)):a.vertex.code.add(c.glsl`void forwardNormal() {}`)};e.bindVertexNormalUniforms=function(a,b){a.setUniformMatrix4fv("viewNormal",b)};Object.defineProperty(e,"__esModule",{value:!0})});