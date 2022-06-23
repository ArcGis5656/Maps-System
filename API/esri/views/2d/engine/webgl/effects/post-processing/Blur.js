// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../VertexStream","../../../../../webgl/enums","../../../../../webgl/FramebufferObject"],function(n,t,e,u){const v=[1,0],w=[0,1];let x=function(){function p(){this._blurFBO=null;this._size=[0,0];this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",
fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}var k=p.prototype;k.dispose=function(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)};k.draw=function(a,f,b){const {context:c}=a,{type:d,radius:g}=b;0!==g&&(this._createOrResizeResources(a),this._quad||(this._quad=new t(c,[-1,-1,1,-1,-1,1,1,1])),b=this._quad,b.bind(),"blur"===d?this._gaussianBlur(a,f,g):this._radialBlur(a,f),b.unbind())};k._gaussianBlur=function(a,f,b){const {context:c,state:d,painter:g,pixelRatio:l}=
a;var {size:h}=d;const {materialManager:m}=g,q=this._quad;h=[Math.round(l*h[0]),Math.round(l*h[1])];const r=this._blurFBO;a=m.getProgram(a,this._programDesc.gaussianBlur,[{name:"radius",value:Math.ceil(b)}]);c.useProgram(a);c.setBlendingEnabled(!1);c.bindFramebuffer(r);c.bindTexture(f.colorTexture,4);a.setUniform1i("u_colorTexture",4);a.setUniform2fv("u_texSize",h);a.setUniform2fv("u_direction",v);a.setUniform1f("u_sigma",b);q.draw();c.bindFramebuffer(f);c.setStencilWriteMask(0);c.setStencilTestEnabled(!1);
c.setDepthWriteEnabled(!1);c.setDepthTestEnabled(!1);c.bindTexture(r.colorTexture,5);a.setUniform1i("u_colorTexture",5);a.setUniform2fv("u_direction",w);q.draw();c.setBlendingEnabled(!0);c.setBlendFunction(e.BlendFactor.ONE,e.BlendFactor.ONE_MINUS_SRC_ALPHA);c.setStencilTestEnabled(!0)};k._radialBlur=function(a,f){const {context:b,painter:c}=a,{materialManager:d}=c,g=this._programDesc,l=this._quad,h=this._blurFBO;b.bindFramebuffer(h);const m=d.getProgram(a,g.radialBlur);b.useProgram(m);b.setBlendingEnabled(!1);
b.bindTexture(f.colorTexture,4);m.setUniform1i("u_colorTexture",4);l.draw();b.bindFramebuffer(f);b.setStencilWriteMask(0);b.setStencilTestEnabled(!1);b.setDepthWriteEnabled(!1);b.setDepthTestEnabled(!1);b.setBlendingEnabled(!0);a=d.getProgram(a,g.blit);b.useProgram(a);b.bindTexture(h.colorTexture,5);a.setUniform1i("u_texture",5);b.setBlendFunction(e.BlendFactor.ONE,e.BlendFactor.ONE_MINUS_SRC_ALPHA);l.draw()};k._createOrResizeResources=function(a){const {context:f,state:b,pixelRatio:c}=a;var {size:d}=
b;a=Math.round(c*d[0]);d=Math.round(c*d[1]);this._blurFBO&&this._size[0]===a&&this._size[1]===d||(this._size[0]=a,this._size[1]=d,this._blurFBO?this._blurFBO.resize(a,d):this._blurFBO=new u.FramebufferObject(f,{colorTarget:e.TargetType.TEXTURE,depthStencilTarget:e.DepthStencilTargetType.NONE,width:a,height:d},{target:e.TextureType.TEXTURE_2D,pixelFormat:e.PixelFormat.RGBA,internalFormat:e.PixelFormat.RGBA,dataType:e.PixelType.UNSIGNED_BYTE,wrapMode:e.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:e.TextureSamplingMode.LINEAR,
flipped:!1,width:a,height:d}))};return p}();n.Blur=x;Object.defineProperty(n,"__esModule",{value:!0})});