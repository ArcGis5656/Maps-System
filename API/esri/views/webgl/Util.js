// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/maybe","./enums"],function(k,r,q,a){function m(b){return b[0].stride}function n(b){switch(b){case a.PixelFormat.ALPHA:case a.PixelFormat.LUMINANCE:case a.PixelFormat.RED:case a.PixelFormat.RED_INTEGER:case a.SizedPixelFormat.R8:case a.SizedPixelFormat.R8I:case a.SizedPixelFormat.R8UI:case a.SizedPixelFormat.R8_SNORM:case a.RenderbufferFormat.STENCIL_INDEX8:return 1;case a.PixelFormat.LUMINANCE_ALPHA:case a.PixelFormat.RG:case a.PixelFormat.RG_INTEGER:case a.SizedPixelFormat.RGBA4:case a.SizedPixelFormat.R16F:case a.SizedPixelFormat.R16I:case a.SizedPixelFormat.R16UI:case a.SizedPixelFormat.RG8:case a.SizedPixelFormat.RG8I:case a.SizedPixelFormat.RG8UI:case a.SizedPixelFormat.RG8_SNORM:case a.SizedPixelFormat.RGB565:case a.SizedPixelFormat.RGB5_A1:case a.RenderbufferFormat.DEPTH_COMPONENT16:return 2;
case a.PixelFormat.DEPTH_COMPONENT:case a.PixelFormat.RGB:case a.PixelFormat.RGB_INTEGER:case a.SizedPixelFormat.RGB8:case a.SizedPixelFormat.RGB8I:case a.SizedPixelFormat.RGB8UI:case a.SizedPixelFormat.RGB8_SNORM:case a.SizedPixelFormat.SRGB8:case a.RenderbufferFormat.DEPTH_COMPONENT24:return 3;case a.PixelFormat.DEPTH_STENCIL:case a.PixelFormat.RGBA:case a.PixelFormat.RGBA_INTEGER:case a.SizedPixelFormat.RGBA8:case a.SizedPixelFormat.R32F:case a.SizedPixelFormat.R11F_G11F_B10F:case a.SizedPixelFormat.RG16F:case a.SizedPixelFormat.R32I:case a.SizedPixelFormat.R32UI:case a.SizedPixelFormat.RG16I:case a.SizedPixelFormat.RG16UI:case a.SizedPixelFormat.RGBA8I:case a.SizedPixelFormat.RGBA8UI:case a.SizedPixelFormat.RGBA8_SNORM:case a.SizedPixelFormat.SRGB8_ALPHA8:case a.SizedPixelFormat.RGB9_E5:case a.SizedPixelFormat.RGB10_A2UI:case a.SizedPixelFormat.RGB10_A2:case a.RenderbufferFormat.DEPTH_STENCIL:case a.RenderbufferFormat.DEPTH_COMPONENT32F:case a.RenderbufferFormat.DEPTH24_STENCIL8:return 4;
case a.RenderbufferFormat.DEPTH32F_STENCIL8:return 5;case a.SizedPixelFormat.RGB16F:case a.SizedPixelFormat.RGB16I:case a.SizedPixelFormat.RGB16UI:return 6;case a.SizedPixelFormat.RG32F:case a.SizedPixelFormat.RG32I:case a.SizedPixelFormat.RG32UI:case a.SizedPixelFormat.RGBA16F:case a.SizedPixelFormat.RGBA16I:case a.SizedPixelFormat.RGBA16UI:return 8;case a.SizedPixelFormat.RGB32F:case a.SizedPixelFormat.RGB32I:case a.SizedPixelFormat.RGB32UI:return 12;case a.SizedPixelFormat.RGBA32F:case a.SizedPixelFormat.RGBA32I:case a.SizedPixelFormat.RGBA32UI:return 16;
case a.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT:case a.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case a.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT3_EXT:case a.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case a.CompressedTextureFormat.COMPRESSED_R11_EAC:case a.CompressedTextureFormat.COMPRESSED_SIGNED_R11_EAC:case a.CompressedTextureFormat.COMPRESSED_RGB8_ETC2:case a.CompressedTextureFormat.COMPRESSED_SRGB8_ETC2:case a.CompressedTextureFormat.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case a.CompressedTextureFormat.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;
case a.CompressedTextureFormat.COMPRESSED_RG11_EAC:case a.CompressedTextureFormat.COMPRESSED_SIGNED_RG11_EAC:case a.CompressedTextureFormat.COMPRESSED_RGBA8_ETC2_EAC:case a.CompressedTextureFormat.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function p(b){if(q.isNone(b))return 0;if("descriptor"in b)return b.glName?p(b.descriptor):0;const h=b.internalFormat||"pixelFormat"in b&&b.pixelFormat;if(!h)return 0;const f="hasMipmap"in b&&b.hasMipmap?1.3:1;b=b.width*b.height;return n(h)*b*f}k.bindVertexBufferLayout=
function(b,h,f,c,l=0){const g=b.gl,e=b.capabilities.instancing;b.bindBuffer(f);for(const d of c)if(b=h.get(d.name),void 0===b&&console.error(`There is no location for vertex attribute '${d.name}' defined.`),f=l*d.stride,4>=d.count)g.vertexAttribPointer(b,d.count,d.type,d.normalized,d.stride,d.offset+f),g.enableVertexAttribArray(b),0<d.divisor&&e&&e.vertexAttribDivisor(b,d.divisor);else if(9===d.count)for(c=0;3>c;c++)g.vertexAttribPointer(b+c,3,d.type,d.normalized,d.stride,d.offset+12*c+f),g.enableVertexAttribArray(b+
c),0<d.divisor&&e&&e.vertexAttribDivisor(b+c,d.divisor);else if(16===d.count)for(c=0;4>c;c++)g.vertexAttribPointer(b+c,4,d.type,d.normalized,d.stride,d.offset+16*c+f),g.enableVertexAttribArray(b+c),0<d.divisor&&e&&e.vertexAttribDivisor(b+c,d.divisor);else console.error("Unsupported vertex attribute element count: "+d.count)};k.getBytesPerElementFormat=n;k.getErrorString=function(b){b=b.gl;switch(b.getError()){case b.NO_ERROR:return null;case b.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";
case b.INVALID_VALUE:return"A numeric argument is out of range";case b.INVALID_OPERATION:return"The specified command is not allowed for the current state";case b.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case b.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case b.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"};k.getGpuMemoryUsage=p;k.getStride=m;k.unbindVertexBufferLayout=function(b,h,f,c){const l=
b.gl,g=b.capabilities.instancing;b.bindBuffer(f);for(const e of c)if(f=h.get(e.name),4>=e.count)l.disableVertexAttribArray(f),e.divisor&&0<e.divisor&&g&&g.vertexAttribDivisor(f,0);else if(9===e.count)for(c=0;3>c;c++)l.disableVertexAttribArray(f+c),e.divisor&&0<e.divisor&&g&&g.vertexAttribDivisor(f+c,0);else if(16===e.count)for(c=0;4>c;c++)l.disableVertexAttribArray(f+c),e.divisor&&0<e.divisor&&g&&g.vertexAttribDivisor(f+c,0);else console.error("Unsupported vertex attribute element count: "+e.count);
b.unbindBuffer(a.BufferType.ARRAY_BUFFER)};k.vertexCount=function(b,h){return b.vertexBuffers[h].size/m(b.layout[h])};Object.defineProperty(k,"__esModule",{value:!0})});