// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./basicInterfaces","../../../webgl/enums"],function(b,c,a){const e={func:a.CompareFunction.LESS},f={function:{func:a.CompareFunction.ALWAYS,ref:c.StencilBits.OutlineVisualElementMask,mask:c.StencilBits.OutlineVisualElementMask},operation:{fail:a.StencilOperation.KEEP,zFail:a.StencilOperation.KEEP,zPass:a.StencilOperation.ZERO}},g={function:{func:a.CompareFunction.ALWAYS,ref:c.StencilBits.OutlineVisualElementMask,mask:c.StencilBits.OutlineVisualElementMask},operation:{fail:a.StencilOperation.KEEP,
zFail:a.StencilOperation.KEEP,zPass:a.StencilOperation.REPLACE}},h={function:{func:a.CompareFunction.EQUAL,ref:c.StencilBits.OutlineVisualElementMask,mask:c.StencilBits.OutlineVisualElementMask},operation:{fail:a.StencilOperation.KEEP,zFail:a.StencilOperation.KEEP,zPass:a.StencilOperation.KEEP}};c={function:{func:a.CompareFunction.NOTEQUAL,ref:c.StencilBits.OutlineVisualElementMask,mask:c.StencilBits.OutlineVisualElementMask},operation:{fail:a.StencilOperation.KEEP,zFail:a.StencilOperation.KEEP,zPass:a.StencilOperation.KEEP}};
b.depthCompareAlways={func:a.CompareFunction.ALWAYS};b.depthCompareLess=e;b.renderWhenBitIsNotSet=d=>({function:{func:a.CompareFunction.NOTEQUAL,ref:d,mask:d},operation:{fail:a.StencilOperation.KEEP,zFail:a.StencilOperation.KEEP,zPass:a.StencilOperation.KEEP}});b.replaceBitWhenDepthTestPasses=d=>({function:{func:a.CompareFunction.ALWAYS,ref:d,mask:d},operation:{fail:a.StencilOperation.KEEP,zFail:a.StencilOperation.KEEP,zPass:a.StencilOperation.REPLACE}});b.stencilBaseAllZerosParams=f;b.stencilToolMaskBaseParams=
g;b.stencilToolMaskOccluderParams=h;b.stencilToolTransparentOccluderParams=c;b.stencilWriteMaskOff={mask:0};b.stencilWriteMaskOn={mask:255};Object.defineProperty(b,"__esModule",{value:!0})});