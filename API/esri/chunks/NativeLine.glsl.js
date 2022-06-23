// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(f,d,h,k,l,m,n,p,b,q,e){function g(c){const a=new q.ShaderBuilder;a.include(k.Transform,{linearDepth:!1});a.include(l.VertexColor,c);a.include(n.LineStipple,{...c,stippleRequiresStretchMeasure:!1});a.vertex.uniforms.add("proj","mat4").add("view","mat4");c.stippleEnabled&&(a.vertex.uniforms.add("ndcToPixel","vec2"),a.attributes.add(e.VertexAttribute.UV0,"vec2"),a.attributes.add(e.VertexAttribute.AUXPOS1,"vec3"));a.attributes.add(e.VertexAttribute.POSITION,"vec3");a.varyings.add("vpos","vec3");
a.vertex.code.add(b.glsl`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`);c.stippleEnabled&&(a.vertex.code.add(b.glsl`vec4 vpos2 = transformPosition(proj, view, auxpos1);
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),c.draped||a.vertex.code.add(b.glsl`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),a.vertex.code.add(b.glsl`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),c.draped?a.vertex.code.add(b.glsl`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):a.vertex.code.add(b.glsl`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),a.vertex.code.add(b.glsl`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`));a.vertex.code.add(b.glsl`}`);c.output===d.ShaderOutput.Highlight&&a.include(m.OutputHighlight);a.include(h.Slice,c);a.fragment.uniforms.add("constantColor","vec4").add("alphaCoverage","float");a.fragment.code.add(b.glsl`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${c.attributeColor?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${b.glsl.float(p.symbolAlphaCutoff)}) {
      discard;
    }

    ${c.output===d.ShaderOutput.Color?b.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${c.output===d.ShaderOutput.Highlight?b.glsl`outputHighlight();`:""}
  }
  `);return a}const r=Object.freeze({__proto__:null,build:g});f.NativeLineShader=r;f.build=g});