// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(d,f,r,t,u,v,w,x,y,h,z,c,A,g){function m(b){const a=new A.ShaderBuilder,B=b.capType!==d.CapType.BUTT,e=b.capType===d.CapType.ROUND,n=b.stippleEnabled&&e,k=b.falloffEnabled||n,l=b.innerColorEnabled||e,p=b.stippleEnabled&&b.stippleScaleWithLineWidth||e,q=b.stippleEnabled&&b.stippleScaleWithLineWidth,C=b.stippleEnabled||e;a.include(y.PiUtils);a.include(t.RibbonVertexPosition,b);a.include(w.LineStipple,{...b,stippleRequiresStretchMeasure:!0});b.output===f.ShaderOutput.Depth&&a.include(u.OutputDepth,
b);a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("nearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2").add("inverseProjectionMatrix","mat4");a.vertex.constants.add("LARGE_HALF_FLOAT","float",65500);a.attributes.add(g.VertexAttribute.POSITION,"vec3");a.attributes.add(g.VertexAttribute.SUBDIVISIONFACTOR,"float");a.attributes.add(g.VertexAttribute.UV0,"vec2");a.attributes.add(g.VertexAttribute.AUXPOS1,"vec3");a.attributes.add(g.VertexAttribute.AUXPOS2,
"vec3");a.varyings.add("vColor","vec4");a.varyings.add("vpos","vec3");a.varyings.add("linearDepth","float");b.multipassTerrainEnabled&&a.varyings.add("depth","float");p&&a.varyings.add("vLineWidth","float");q&&a.varyings.add("vLineSizeInv","float");l&&a.varyings.add("vLineDistance","float");k&&a.varyings.add("vLineDistanceNorm","float");b.falloffEnabled&&a.fragment.uniforms.add("falloff","float");b.innerColorEnabled&&(a.fragment.uniforms.add("innerColor","vec4"),a.fragment.uniforms.add("innerWidth",
"float"));e&&(a.varyings.add("vSegmentSDF","float"),a.varyings.add("vReverseSegmentSDF","float"));a.vertex.code.add(c.glsl`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`);a.vertex.code.add(c.glsl`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= screenSize / posNdc.w;
return posNdc;
}`);a.vertex.code.add(c.glsl`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${b.multipassTerrainEnabled?"depth \x3d pos.z;":""}
      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `);a.vertex.code.add(c.glsl`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${p?c.glsl`vLineWidth = lineWidth;`:""}
      ${q?c.glsl`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `);C&&a.vertex.code.add(c.glsl`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${e?c.glsl`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `);a.vertex.code.add(c.glsl`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`);b.roundJoins?a.vertex.code.add(c.glsl`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${b.stippleEnabled?c.glsl`min(1.0, subdivisionFactor * ${c.glsl.float(1.5)})`:c.glsl`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):a.vertex.code.add(c.glsl`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);a.vertex.code.add(c.glsl`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${B?c.glsl`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `);a.vertex.code.add(c.glsl`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${k||l?c.glsl`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${l?c.glsl`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${k?c.glsl`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `);e&&a.vertex.code.add(c.glsl`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`);b.stippleEnabled&&(b.draped||a.vertex.code.add(c.glsl`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),a.vertex.code.add(c.glsl`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),b.draped?a.vertex.code.add(c.glsl`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):a.vertex.code.add(c.glsl`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),a.vertex.code.add(c.glsl`
      float patternLength = ${b.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `));a.vertex.code.add(c.glsl`
      // Convert back into NDC
      pos.xy = (pos.xy / screenSize) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${b.wireframe&&!b.draped?"pos.z -\x3d 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
    }
  }
  `);b.multipassTerrainEnabled&&(a.fragment.include(v.ReadLinearDepth),a.include(x.multipassTerrainTest,b));a.include(r.Slice,b);a.fragment.uniforms.add("intrinsicColor","vec4");a.fragment.include(z.ColorConversion);a.fragment.code.add(c.glsl`
  void main() {
    discardBySlice(vpos);
    ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
  `);b.wireframe?a.fragment.code.add(c.glsl`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(e&&a.fragment.code.add(c.glsl`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${c.glsl.float(h.symbolAlphaCutoff)}) {
        discard;
      }
    `),n?a.fragment.code.add(c.glsl`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${c.glsl.float(h.symbolAlphaCutoff)}, stippleCoverage);
      `):a.fragment.code.add(c.glsl`float stippleAlpha = getStippleAlpha();`),a.fragment.code.add(c.glsl`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),b.innerColorEnabled&&a.fragment.code.add(c.glsl`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.fragment.code.add(c.glsl`vec4 finalColor = blendStipple(color, stippleAlpha);`),b.falloffEnabled&&a.fragment.code.add(c.glsl`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`));a.fragment.code.add(c.glsl`
    if (finalColor.a < ${c.glsl.float(h.symbolAlphaCutoff)}) {
      discard;
    }

    ${b.output===f.ShaderOutput.Alpha?c.glsl`gl_FragColor = vec4(finalColor.a);`:""}
    ${b.output===f.ShaderOutput.Color?c.glsl`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${b.output===f.ShaderOutput.Color&&b.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
    ${b.output===f.ShaderOutput.Highlight?c.glsl`gl_FragColor = vec4(1.0);`:""}
    ${b.output===f.ShaderOutput.Depth?c.glsl`outputDepth(linearDepth);`:""}
  }
  `);return a}d.CapType=void 0;(function(b){b[b.BUTT=0]="BUTT";b[b.SQUARE=1]="SQUARE";b[b.ROUND=2]="ROUND";b[b.COUNT=3]="COUNT"})(d.CapType||(d.CapType={}));const D=Object.freeze({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:1,get CapType(){return d.CapType},build:m});d.NUM_ROUND_JOIN_SUBDIVISIONS=1;d.RibbonLineShader=D;d.build=m});