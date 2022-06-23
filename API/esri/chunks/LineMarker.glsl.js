// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/layers/support/markerUtils ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(g,e,d,k,l,m,n,p,q,r,t,c,u,f){function h(b){const a=new u.ShaderBuilder;a.include(l.RibbonVertexPosition,b);b.output===d.ShaderOutput.Depth&&a.include(m.OutputDepth,b);a.fragment.include(t.RgbaFloatEncoding);a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("nearFar","vec2").add("pixelRatio","float").add("screenSize","vec2").add("inverseProjectionMatrix","mat4");a.fragment.uniforms.add("tex","sampler2D");a.attributes.add(f.VertexAttribute.POSITION,"vec3");a.attributes.add(f.VertexAttribute.UV0,
"vec2");a.attributes.add(f.VertexAttribute.AUXPOS1,"vec3");a.varyings.add("vColor","vec4");a.varyings.add("vpos","vec3");a.varyings.add("vUV","vec2");a.varyings.add("vSize","float");a.varyings.add("linearDepth","float");b.multipassTerrainEnabled&&a.varyings.add("depth","float");a.vertex.code.add(c.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}`);a.vertex.code.add(c.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`);a.vertex.code.add(c.glsl`
    void clipAndTransform(inout vec4 pos, inout vec4 prev) {
      float vnp = nearFar[0] * 0.99;

      if (prev.z > -nearFar[0]) {
        //previous behind ncp
        prev = mix(pos, prev, interp(vnp, pos, prev));
      }

      ${b.multipassTerrainEnabled?"depth \x3d pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      prev = projectAndScale(prev);
    }
  `);a.vertex.code.add(c.glsl`
    void main(void) {
      float coverage = 1.0;

      // Check for special value of uv0.y which is used by the Renderer when graphics
      // are removed before the VBO is recompacted. If this is the case, then we just
      // project outside of clip space.
      if (uv0.y == 0.0) {
        // Project out of clip space
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      }
      else {
        float lineSize = getSize();
        float lineWidth = max(lineSize, 1.0) * pixelRatio;

        vec4 pos  = view * vec4(position.xyz, 1.0);
        vec4 prev = view * vec4(auxpos1.xyz, 1.0);
        clipAndTransform(pos, prev);

        // normalize vector along line segment
        vec2 segment = pos.xy - prev.xy;
        float segmentLen = length(segment);
        segment = (segmentLen > 0.001) ? segment / segmentLen : vec2(0.0, 0.0);

        // displace according to position in the texture
        vec2 displacementDirU = uv0.x * PERPENDICULAR(segment);
        vec2 displacementDirV = uv0.y * segment;

        vSize = ${c.glsl.float(e.MARKER_TEXTURE_SIZE/e.MARKER_THICKNESS)} * lineWidth;
        pos.xy += displacementDirU * vSize + displacementDirV * vSize;

        // Convert back into NDC
        pos.xy = (pos.xy / screenSize) * pos.w;

        // Convert texture coordinate into [0,1]
        vUV = (uv0 + 1.0) / 2.0;

        vColor = getColor();
        vColor.a *= coverage;

        // transform final position to camera space for slicing
        vpos = (inverseProjectionMatrix * pos).xyz;
        gl_Position = pos;
      }
    }
  `);b.multipassTerrainEnabled&&(a.fragment.include(n.ReadLinearDepth),a.include(p.multipassTerrainTest,b));a.include(k.Slice,b);a.fragment.uniforms.add("intrinsicColor","vec4");a.fragment.include(r.ColorConversion);a.fragment.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    // Offset texture coordinate s.t. we sample texel centers
    float texelSize = ${c.glsl.float(1/e.MARKER_TEXTURE_SIZE)};
    vec2 samplePos = vUV + vec2(0.5, -0.5) * texelSize;

    // Evaluate sdf
    float sdf = rgba2float(texture2D(tex, samplePos)) - 0.5;
    float distance = sdf * vSize;

    // Grow by a halfpixel to make sure the line is fully covered by the cross marker
    // (otherwise there will be a halo if they are different colours)
    distance -= 0.5;

    finalColor.a *= clamp(0.5 - distance, 0.0, 1.0);

    if (finalColor.a < ${c.glsl.float(q.symbolAlphaCutoff)}) {
      discard;
    }

    ${b.output===d.ShaderOutput.Alpha?c.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${b.output===d.ShaderOutput.Color?c.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${b.output===d.ShaderOutput.Color&&b.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    ${b.output===d.ShaderOutput.Highlight?c.glsl`gl_FragColor = vec4(1.0);`:""}
    ${b.output===d.ShaderOutput.Depth?c.glsl`outputDepth(linearDepth);`:""}
  }
  `);return a}const v=Object.freeze({__proto__:null,build:h});g.LineMarkerShader=v;g.build=h});