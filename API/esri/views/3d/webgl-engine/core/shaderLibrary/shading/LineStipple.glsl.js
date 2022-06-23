// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(d,e,b){const f=b.glsl.float(.4);d.LineStipple=function(a,c){a.constants.add("stippleAlphaColorDiscard","float",.001);a.constants.add("stippleAlphaHighlightDiscard","float",.5);if(c.stippleEnabled){{const g=!(c.draped&&c.stipplePreferContinuous);a.fragment.include(e.RgbaFloatEncoding);a.vertex.uniforms.add("stipplePatternPixelSize","float");a.vertex.uniforms.add("pixelRatio","float");c.draped?a.vertex.uniforms.add("worldToScreenRatio",
"float"):(a.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),a.vertex.uniforms.add("cameraPosition","vec3"),a.vertex.code.add(b.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`));a.varyings.add("vStippleDistance","float");c.stippleRequiresClamp&&a.varyings.add("vStippleDistanceLimits","vec2");c.stippleRequiresStretchMeasure&&a.varyings.add("vStipplePatternStretch","float");a.vertex.code.add(b.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${f};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `);a.vertex.code.add(b.glsl`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`);a.vertex.code.add(b.glsl`
    if (segmentLengthPseudoScreen >= ${g?"patternLength":"1e4"}) {
  `);a.vertex.code.add(b.glsl`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${c.stippleRequiresStretchMeasure?b.glsl`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `);a.fragment.uniforms.add("stipplePatternTexture","sampler2D");a.fragment.uniforms.add("stipplePatternSDFNormalizer","float");a.fragment.uniforms.add("stipplePatternTextureSize","float");a.fragment.uniforms.add("stipplePatternPixelSizeInv","float");c.stippleOffColorEnabled&&a.fragment.uniforms.add("stippleOffColor","vec4");a.fragment.code.add(b.glsl`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`);a.fragment.code.add(b.glsl`
    float getStippleSDF(out bool isClamped) {
      ${c.stippleRequiresClamp?b.glsl`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:b.glsl`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${c.stippleScaleWithLineWidth?b.glsl`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${c.stippleRequiresStretchMeasure?b.glsl`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:b.glsl`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${c.stippleScaleWithLineWidth?b.glsl`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:b.glsl`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `);c.stippleOffColorEnabled?a.fragment.code.add(b.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`):a.fragment.code.add(b.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}}else a.fragment.code.add(b.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)};Object.defineProperty(d,"__esModule",{value:!0})});