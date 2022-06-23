// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../../../lib/basicInterfaces"],function(b,a,c){b.DiscardOrAdjustAlpha=function(e,f){const d=e.fragment;switch(f.alphaDiscardMode){case c.AlphaDiscardMode.Blend:d.code.add(a.glsl`
        #define discardOrAdjustAlpha(color) { if (color.a < ${a.glsl.float(.001)}) { discard; } }
      `);break;case c.AlphaDiscardMode.Opaque:d.code.add(a.glsl`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case c.AlphaDiscardMode.Mask:d.uniforms.add("textureAlphaCutoff","float");d.code.add(a.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case c.AlphaDiscardMode.MaskBlend:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(a.glsl`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}};b.defaultMaskAlphaCutoff=.1;b.symbolAlphaCutoff=.001;Object.defineProperty(b,
"__esModule",{value:!0})});