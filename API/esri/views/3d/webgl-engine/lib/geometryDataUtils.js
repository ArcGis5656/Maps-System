// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3","../../../../chunks/vec3f64","../../../../geometry/support/triangle"],function(t,c,v,z){let r=(()=>{const a=new Uint32Array(131072);for(let b=0;b<a.length;++b)a[b]=b;return a})();const y=new Uint16Array([0]),w=(()=>{const a=new Uint16Array(65536);for(let b=0;b<a.length;++b)a[b]=b;return a})(),d=v.create(),q=v.create(),x=v.create(),m=v.create();t.computeAttachmentOriginLines=function(a,b,e,n){if(!a)return!1;const {size:f,data:g}=a;c.set(n,0,0,0);c.set(m,
0,0,0);let k=a=0;const h=b?b.length-1:g.length/f-1;e=h+(e?2:0);for(let u=0;u<e;u+=2){var p=u<h?u:h,l=u<h?u+1:0;p=(b?b[p]:p)*f;l=(b?b[l]:l)*f;d[0]=g[p+0];d[1]=g[p+1];d[2]=g[p+2];q[0]=g[l+0];q[1]=g[l+1];q[2]=g[l+2];c.scale(d,c.add(d,d,q),.5);l=c.dist(d,q);0<l?(c.add(n,n,c.scale(d,d,l)),a+=l):(c.add(m,m,d),k++)}return 0!==a?(c.scale(n,n,1/a),!0):0!==k?(c.scale(n,m,1/k),!0):!1};t.computeAttachmentOriginPoints=function(a,b,e){if(!a||!b)return!1;const {size:n,data:f}=a;c.set(e,0,0,0);a=-1;let g=0;for(let k=
0;k<b.length;k++){const h=b[k]*n;a!==h&&(e[0]+=f[h+0],e[1]+=f[h+1],e[2]+=f[h+2],g++);a=h}1<g&&c.scale(e,e,1/g);return 0<g};t.computeAttachmentOriginTriangles=function(a,b,e){if(!a)return!1;const {size:n,data:f}=a;c.set(e,0,0,0);c.set(m,0,0,0);let g=a=0;for(let h=0;h<b.length-2;h+=3){var k=b[h+0]*n;const p=b[h+1]*n,l=b[h+2]*n;c.set(d,f[k+0],f[k+1],f[k+2]);c.set(q,f[p+0],f[p+1],f[p+2]);c.set(x,f[l+0],f[l+1],f[l+2]);(k=z.areaPoints3d(d,q,x))?(c.add(d,d,q),c.add(d,d,x),c.scale(d,d,1/3*k),c.add(e,e,d),
a+=k):(c.add(m,m,d),c.add(m,m,q),c.add(m,m,x),g+=3)}return 0===g&&0===a?!1:0!==a?(c.scale(e,e,1/a),!0):0!==g?(c.scale(e,m,1/g),!0):!1};t.generateDefaultIndexArray=function(a){if(1===a)return y;if(a<w.length)return new Uint16Array(w.buffer,0,a);if(a>r.length){r=new Uint32Array(Math.max(2*r.length,a));for(let b=0;b<r.length;b++)r[b]=b}return new Uint32Array(r.buffer,0,a)};t.generateIndexArray=function(a){if(1===a)return new Uint16Array(y);if(a<w.length)return new Uint16Array(w.slice(0,a));if(a>r.length){a=
new Uint32Array(a);for(let b=0;b<a.length;b++)a[b]=b;return a}return new Uint32Array(r.slice(0,a))};Object.defineProperty(t,"__esModule",{value:!0})});