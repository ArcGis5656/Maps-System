// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/mat4","../../../../../geometry/support/buffer/BufferView","../../lib/Util","../../lib/VertexAttribute"],function(u,J,D,E,F){function K(m,c,a,d){const b=a.typedBuffer;a=a.typedBufferStride;const f=m.length;d*=a;for(let e=0;e<f;++e){const g=2*m[e];b[d]=c[g];b[d+1]=c[g+1];d+=a}}function G(m,c,a,d,b){const f=a.typedBuffer;a=a.typedBufferStride;const e=m.length;d*=a;if(null==b||1===b)for(b=0;b<e;++b){var g=3*m[b];f[d]=c[g];f[d+1]=c[g+1];f[d+2]=c[g+2];d+=a}else for(g=
0;g<e;++g){const k=3*m[g];for(let r=0;r<b;++r)f[d]=c[k],f[d+1]=c[k+1],f[d+2]=c[k+2],d+=a}}function L(m,c,a,d,b=1){const f=a.typedBuffer;a=a.typedBufferStride;const e=m.length;d*=a;if(1===b)for(b=0;b<e;++b){var g=4*m[b];f[d]=c[g];f[d+1]=c[g+1];f[d+2]=c[g+2];f[d+3]=c[g+3];d+=a}else for(g=0;g<e;++g){const k=4*m[g];for(let r=0;r<b;++r)f[d]=c[k],f[d+1]=c[k+1],f[d+2]=c[k+2],f[d+3]=c[k+3],d+=a}}function M(m,c,a,d,b,f=1){if(a){var e=d.typedBuffer;d=d.typedBufferStride;var g=m.length,k=a[0],r=a[1],w=a[2],
x=a[4],y=a[5],z=a[6],A=a[8],B=a[9],C=a[10],q=a[12],p=a[13];a=a[14];b*=d;if(1===f)for(f=0;f<g;++f){var h=3*m[f],l=c[h],n=c[h+1];h=c[h+2];e[b]=k*l+x*n+A*h+q;e[b+1]=r*l+y*n+B*h+p;e[b+2]=w*l+z*n+C*h+a;b+=d}else for(l=0;l<g;++l){n=3*m[l];var t=c[n],v=c[n+1];const H=c[n+2];n=k*t+x*v+A*H+q;h=r*t+y*v+B*H+p;t=w*t+z*v+C*H+a;for(v=0;v<f;++v)e[b]=n,e[b+1]=h,e[b+2]=t,b+=d}}else G(m,c,d,b,f)}function N(m,c,a,d,b,f=1){if(a){var e=d.typedBuffer;d=d.typedBufferStride;var g=m.length,k=a[0],r=a[1],w=a[2],x=a[4],y=a[5],
z=a[6],A=a[8],B=a[9],C=a[10];a=!J.isOrthoNormal(a);b*=d;if(1===f)for(f=0;f<g;++f){var q=3*m[f],p=c[q],h=c[q+1],l=c[q+2];q=k*p+x*h+A*l;var n=r*p+y*h+B*l;p=w*p+z*h+C*l;a&&(h=q*q+n*n+p*p,.999999>h&&1E-6<h&&(h=1/Math.sqrt(h),q*=h,n*=h,p*=h));e[b+0]=q;e[b+1]=n;e[b+2]=p;b+=d}else for(q=0;q<g;++q){n=3*m[q];h=c[n];l=c[n+1];const t=c[n+2];n=k*h+x*l+A*t;p=r*h+y*l+B*t;h=w*h+z*l+C*t;a&&(l=n*n+p*p+h*h,.999999>l&&1E-6<l&&(l=1/Math.sqrt(l),n*=l,p*=l,h*=l));for(l=0;l<f;++l)e[b+0]=n,e[b+1]=p,e[b+2]=h,b+=d}}else G(m,
c,d,b,f)}function O(m,c,a,d,b,f=1){if(a){var e=d.typedBuffer;d=d.typedBufferStride;var g=m.length,k=a[0],r=a[1],w=a[2],x=a[4],y=a[5],z=a[6],A=a[8],B=a[9],C=a[10];a=!J.isOrthoNormal(a);b*=d;if(1===f)for(f=0;f<g;++f){var q=4*m[f],p=c[q],h=c[q+1],l=c[q+2];q=c[q+3];var n=k*p+x*h+A*l,t=r*p+y*h+B*l;p=w*p+z*h+C*l;a&&(h=n*n+t*t+p*p,.999999>h&&1E-6<h&&(h=1/Math.sqrt(h),n*=h,t*=h,p*=h));e[b+0]=n;e[b+1]=t;e[b+2]=p;e[b+3]=q;b+=d}else for(q=0;q<g;++q){n=4*m[q];h=c[n];l=c[n+1];const v=c[n+2];n=c[n+3];t=k*h+x*l+
A*v;p=r*h+y*l+B*v;h=w*h+z*l+C*v;a&&(l=t*t+p*p+h*h,.999999>l&&1E-6<l&&(l=1/Math.sqrt(l),t*=l,p*=l,h*=l));for(l=0;l<f;++l)e[b+0]=t,e[b+1]=p,e[b+2]=h,e[b+3]=n,b+=d}}else L(m,c,d,b,f)}function I(m,c,a,d,b,f=1){const e=d.typedBuffer;d=d.typedBufferStride;const g=m.length;b*=d;if(1===f)if(4===a)for(f=0;f<g;++f)a=4*m[f],e[b]=c[a],e[b+1]=c[a+1],e[b+2]=c[a+2],e[b+3]=c[a+3],b+=d;else{if(3===a)for(f=0;f<g;++f)a=3*m[f],e[b]=c[a],e[b+1]=c[a+1],e[b+2]=c[a+2],e[b+3]=255,b+=d}else if(4===a)for(a=0;a<g;++a){var k=
4*m[a];for(var r=0;r<f;++r)e[b]=c[k],e[b+1]=c[k+1],e[b+2]=c[k+2],e[b+3]=c[k+3],b+=d}else if(3===a)for(a=0;a<g;++a)for(k=3*m[a],r=0;r<f;++r)e[b]=c[k],e[b+1]=c[k+1],e[b+2]=c[k+2],e[b+3]=255,b+=d}u.writeBufferFloat=function(m,c,a,d,b=1){const f=a.typedBuffer;a=a.typedBufferStride;const e=m.length;d*=a;if(1===b)for(b=0;b<e;++b)f[d]=c[m[b]],d+=a;else for(let g=0;g<e;++g){const k=c[m[g]];for(let r=0;r<b;r++)f[d]=k,d+=a}};u.writeBufferMat3f=function(m,c,a,d){const b=a.typedBuffer;a=a.typedBufferStride;const f=
m.length;d*=a;for(let e=0;e<f;++e){const g=9*m[e];for(let k=0;9>k;++k)b[d+k]=c[g+k];d+=a}};u.writeBufferMat4f=function(m,c,a,d){const b=a.typedBuffer;a=a.typedBufferStride;const f=m.length;d*=a;for(let e=0;e<f;++e){const g=16*m[e];for(let k=0;16>k;++k)b[d+k]=c[g+k];d+=a}};u.writeBufferVec2=K;u.writeBufferVec3=G;u.writeBufferVec4=L;u.writeColor=I;u.writeDefaultAttributes=function(m,c,a,d,b,f){for(const g of c.fieldNames){c=m.vertexAttributes.get(g);const k=m.indices.get(g);if(c&&k)switch(g){case F.VertexAttribute.POSITION:E.assert(3===
c.size);var e=b.getField(g,D.BufferViewVec3f);e&&M(k,c.data,a,e,f);break;case F.VertexAttribute.NORMAL:E.assert(3===c.size);(e=b.getField(g,D.BufferViewVec3f))&&N(k,c.data,d,e,f);break;case F.VertexAttribute.UV0:E.assert(2===c.size);(e=b.getField(g,D.BufferViewVec2f))&&K(k,c.data,e,f);break;case F.VertexAttribute.COLOR:E.assert(3===c.size||4===c.size);(e=b.getField(g,D.BufferViewVec4u8))&&I(k,c.data,c.size,e,f);break;case F.VertexAttribute.SYMBOLCOLOR:E.assert(3===c.size||4===c.size);(e=b.getField(g,
D.BufferViewVec4u8))&&I(k,c.data,c.size,e,f);break;case F.VertexAttribute.TANGENT:E.assert(4===c.size),(e=b.getField(g,D.BufferViewVec4f))&&O(k,c.data,d,e,f)}}};u.writeNormal=N;u.writePosition=M;u.writeTangent=O;Object.defineProperty(u,"__esModule",{value:!0})});