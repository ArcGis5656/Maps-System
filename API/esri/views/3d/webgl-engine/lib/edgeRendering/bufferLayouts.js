// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout","../VertexAttribute"],function(b,d,c,a){const f=c.newLayout().vec3f(a.VertexAttribute.POSITION).u16(a.VertexAttribute.COMPONENTINDEX).u16(a.VertexAttribute.U16PADDING),e=c.newLayout().vec2u8(a.VertexAttribute.SIDENESS);d=d.glLayout(e);c=c.newLayout().vec3f(a.VertexAttribute.POSITION0).vec3f(a.VertexAttribute.POSITION1).u16(a.VertexAttribute.COMPONENTINDEX).u8(a.VertexAttribute.VARIANTOFFSET,{glNormalized:!0}).u8(a.VertexAttribute.VARIANTSTROKE).u8(a.VertexAttribute.VARIANTEXTENSION,
{glNormalized:!0}).u8(a.VertexAttribute.U8PADDING,{glPadding:!0}).u16(a.VertexAttribute.U16PADDING,{glPadding:!0});const g=c.clone().vec3f(a.VertexAttribute.NORMAL),h=c.clone().vec3f(a.VertexAttribute.NORMALA).vec3f(a.VertexAttribute.NORMALB);a=new Map([[a.VertexAttribute.POSITION0,0],[a.VertexAttribute.POSITION1,1],[a.VertexAttribute.COMPONENTINDEX,2],[a.VertexAttribute.VARIANTOFFSET,3],[a.VertexAttribute.VARIANTSTROKE,4],[a.VertexAttribute.VARIANTEXTENSION,5],[a.VertexAttribute.NORMAL,6],[a.VertexAttribute.NORMALA,
6],[a.VertexAttribute.NORMALB,7],[a.VertexAttribute.SIDENESS,8]]);b.CommonInstancesLayout=c;b.EdgeInputBufferLayout=f;b.EdgeShaderAttributeLocations=a;b.RegularEdgeInstancesLayout=g;b.SilhouetteEdgeInstancesLayout=h;b.VertexLayout=e;b.glVertexLayout=d;Object.defineProperty(b,"__esModule",{value:!0})});