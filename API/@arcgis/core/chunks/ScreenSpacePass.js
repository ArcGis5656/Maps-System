/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{g as i}from"./ShaderBuilder.js";import{V as o}from"./VertexAttribute.js";function t(t,e=!0){t.attributes.add(o.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(i`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?i`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}export{t as S};
