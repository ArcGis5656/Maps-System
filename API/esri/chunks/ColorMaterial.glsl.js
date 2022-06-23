// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(f,d,h,k,l,m,n,p,q,r,t,c,u,v){function g(b){const a=new u.ShaderBuilder,e=b.output===d.ShaderOutput.Depth;a.include(k.Transform,{linearDepth:e});a.include(l.VertexColor,b);a.vertex.uniforms.add("proj","mat4").add("view","mat4");a.attributes.add(v.VertexAttribute.POSITION,"vec3");a.varyings.add("vpos","vec3");b.multipassTerrainEnabled&&a.varyings.add("depth","float");e&&(a.include(m.OutputDepth,b),a.vertex.uniforms.add("nearFar","vec2"),a.varyings.add("linearDepth","float"));a.vertex.code.add(c.glsl`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${e?c.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `);a.include(h.Slice,b);a.fragment.include(t.ColorConversion);b.multipassTerrainEnabled&&(a.fragment.include(p.ReadLinearDepth),a.include(q.multipassTerrainTest,b));a.fragment.uniforms.add("eColor","vec4");b.output===d.ShaderOutput.Highlight&&a.include(n.OutputHighlight);a.fragment.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${b.attributeColor?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${c.glsl.float(r.symbolAlphaCutoff)}) {
      discard;
    }

    ${b.output===d.ShaderOutput.Alpha?c.glsl`gl_FragColor = vec4(fColor.a);`:""}

    ${b.output===d.ShaderOutput.Color?c.glsl`gl_FragColor = highlightSlice(fColor, vpos); ${b.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}`:""}
    ${b.output===d.ShaderOutput.Highlight?c.glsl`outputHighlight();`:""};
    ${b.output===d.ShaderOutput.Depth?c.glsl`outputDepth(linearDepth);`:""};
  }
  `);return a}const w=Object.freeze({__proto__:null,build:g});f.ColorMaterialShader=w;f.build=g});