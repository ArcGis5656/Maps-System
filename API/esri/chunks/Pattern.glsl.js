// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute ../views/3d/webgl-engine/materials/PatternStyle".split(" "),
function(k,e,m,n,p,q,r,t,u,v,w,c,x,g,d){function l(b){const a=new x.ShaderBuilder;b.draped||a.extensions.add("GL_OES_standard_derivatives");const f=b.output===e.ShaderOutput.Depth;a.include(n.Transform,{linearDepth:f});a.include(p.VertexColor,b);a.vertex.uniforms.add("proj","mat4");a.vertex.uniforms.add("view","mat4");f&&(a.include(q.OutputDepth,b),a.vertex.uniforms.add("nearFar","vec2"),a.varyings.add("linearDepth","float"));b.draped?a.vertex.uniforms.add("worldToScreenRatio","float"):(a.vertex.uniforms.add("worldToScreenPerDistanceRatio",
"float"),a.vertex.uniforms.add("cameraPosition","vec3"),a.attributes.add(g.VertexAttribute.BOUNDINGRECT,"mat3"));a.attributes.add(g.VertexAttribute.POSITION,"vec3");a.attributes.add(g.VertexAttribute.UVMAPSPACE,"vec4");a.varyings.add("vpos","vec3");a.varyings.add("vuv","vec2");b.multipassTerrainEnabled&&a.varyings.add("depth","float");const h=b.style===d.Style.ForwardDiagonal||b.style===d.Style.BackwardDiagonal||b.style===d.Style.DiagonalCross;h&&a.vertex.code.add(c.glsl`
      const mat2 rotate45 = mat2(${c.glsl.float(.70710678118)}, ${c.glsl.float(-.70710678118)},
                                 ${c.glsl.float(.70710678118)}, ${c.glsl.float(.70710678118)});
    `);b.draped||(a.vertex.code.add(c.glsl`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),a.vertex.code.add(c.glsl`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),a.vertex.code.add(c.glsl`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${c.glsl.float(.08715574274)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `));a.vertex.code.add(c.glsl`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${h?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${h?" * rotate45":""};

      ${b.draped?"":c.glsl`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${c.glsl.float(b.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);a.vertex.code.add(c.glsl`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${f?c.glsl`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:c.glsl`transformPosition(proj, view, vpos);`}
    }
  `);a.include(m.Slice,b);a.fragment.include(w.ColorConversion);a.fragment.uniforms.add("uColor","vec4");b.draped&&a.fragment.uniforms.add("texelSize","float");b.output===e.ShaderOutput.Highlight&&a.include(r.OutputHighlight);b.multipassTerrainEnabled&&(a.fragment.include(t.ReadLinearDepth),a.include(u.multipassTerrainTest,b));b.output!==e.ShaderOutput.Highlight&&(a.fragment.code.add(c.glsl`
      const float lineWidth = ${c.glsl.float(b.lineWidth)};
      const float spacing = ${c.glsl.float(b.patternSpacing)};
      const float spacingINV = ${c.glsl.float(1/b.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),b.draped||a.fragment.code.add(c.glsl`const int maxSamples = 5;
float sample(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`));a.fragment.code.add(c.glsl`
    void main() {
      discardBySlice(vpos);
      ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${b.attributeColor?"vColor * uColor;":"uColor;"}
      color = highlightSlice(color, vpos);

      ${b.output!==e.ShaderOutput.Highlight?c.glsl`color.a *= ${y(b)};`:""}

      if (color.a < ${c.glsl.float(v.symbolAlphaCutoff)}) {
        discard;
      }

      ${b.output===e.ShaderOutput.Alpha?c.glsl`gl_FragColor = vec4(color.a);`:""}

      ${b.output===e.ShaderOutput.Color?c.glsl`gl_FragColor = color; ${b.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}`:""}
      ${b.output===e.ShaderOutput.Highlight?c.glsl`outputHighlight();`:""}
      ${b.output===e.ShaderOutput.Depth?c.glsl`outputDepth(linearDepth);`:""};
    }
  `);return a}function y(b){function a(f){return b.draped?c.glsl`coverage(vuv.${f}, texelSize)`:c.glsl`sample(vuv.${f})`}switch(b.style){case d.Style.ForwardDiagonal:case d.Style.Horizontal:return a("y");case d.Style.BackwardDiagonal:case d.Style.Vertical:return a("x");case d.Style.DiagonalCross:case d.Style.Cross:return c.glsl`
        1.0 - (1.0 - ${a("x")}) * (1.0 - ${a("y")})
      `;default:return"0.0"}}const z=Object.freeze({__proto__:null,build:l});k.PatternShader=z;k.build=l});