"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4489],{52182:(e,t,n)=>{n.d(t,{a:()=>I,b:()=>N,c:()=>_,d:()=>z,e:()=>O,f:()=>g,g:()=>k,l:()=>d,p:()=>C,r:()=>u,s:()=>X}),n(74569);var r=n(60991),i=n(76506),o=n(53785),s=n(12381),a=n(1623),l=n(21801),f=n(91597),c=n(60947);function u(e,t,n){return!(0,a.Up)(e,t,n)}function p(e,t,n){const i=u(e,t,n);if(i&&!(0,a.kR)())throw new r.Z("rasterprojectionhelper-project","projection engine is not loaded");return i}const x=function(e,t,n,r=0){if(1===n[0])return[0,0];let i=1,o=-1,s=1,a=-1;for(let t=0;t<e.length;t+=2)isNaN(e[t])||(i=i>e[t]?e[t]:i,o=o>e[t]?o:e[t],s=s>e[t+1]?e[t+1]:s,a=a>e[t+1]?a:e[t+1]);const{cols:l,rows:f}=t,c=(o-i)/l/n[0],u=(a-s)/f/n[1],p=2*r;let x=0,h=!1,m=[0,0];for(let t=0;t<l-3;t++){for(let n=0;n<f-3;n++){const r=t*f*2+2*n,i=(e[r]+e[r+4]+e[r+4*f]+e[r+4*f+4])/4,o=(e[r+1]+e[r+5]+e[r+4*f+1]+e[r+4*f+5])/4,s=Math.abs((i-e[r+2*f+2])/c),a=Math.abs((o-e[r+2*f+3])/u);if(s+a>x&&(x=s+a,m=[s,a]),p&&x>p){h=!0;break}}if(h)break}return m},h={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},m=new Map,y=new Map;async function d(){if((0,a.kR)())return null;await(0,a.zD)()}function g(e,t,n,r=null){const s=e.spatialReference;if(s.equals(t))return e;p(s,t,r);const f=n.center,c=new l.Z({xmin:f.x-e.x/2,xmax:f.x+e.x/2,ymin:f.y-e.y/2,ymax:f.y+e.y/2,spatialReference:s}),u=(0,a.iV)(c,t,r);if((0,i.b)(u))return null;const x={x:u.xmax-u.xmin,y:u.ymax-u.ymin},h=k(t);if((0,i.i)(h)&&x.x>=h){const n=(0,o.g)(s)/(0,o.g)(t);x.x=e.x*n,x.y=e.y*n}return x}function w(e,t=.01){return(0,o.g)(e)?t/(0,o.g)(e):0}function C(e,t,n=null,r=!0){const o=e.spatialReference;if(o.equals(t))return e;p(o,t,n);const s=(0,a.iV)(e,t,n);if(!r||!s)return s;const l=G(o,!0),f=G(t,!0),c=w(o);return c&&(0,i.i)(l)&&(0,i.i)(f)&&(s.x>0&&Math.abs(e.x-l[0])<c?s.x-=f[1]-f[0]:s.x<0&&Math.abs(e.x-l[1])<c&&(s.x+=f[1]-f[0])),s}function v(e){const{inSR:t,outSR:n,datumTransformation:r,preferPE:o}=e;if(t.equals(n)){const{points:t}=P(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return function(e){const{cols:t,rows:n,xres:r,yres:i,usePixelCenter:o,inSR:s,outSR:l}=e;let{xmin:c,ymax:u}=e;o&&(c+=r/2,u-=i/2);const p=[],x=[],h=Math.max(t,n);for(let e=0;e<h;e++){const o=c+r*Math.min(t,e),h=u-i*Math.min(n,e),m=(0,a.iV)(new f.Z({x:o,y:h,spatialReference:s}),l);e<=t&&p.push(m.x),e<=n&&x.push(m.y)}const m=[];for(let e=0;e<t;e++)for(let t=0;t<n;t++)m.push([p[e],x[t]]);return m}(e);if(p(t,n,r)&&o){if(t.isGeographic)return R(e);const n=M(t);if((0,i.i)(n))return R(e)}return function(e){const{points:t}=P(e,null),n=t.map((t=>new f.Z(t[0],t[1],e.inSR)));return(0,a.iV)(n,e.outSR,e.datumTransformation).map((e=>e?[e.x,e.y]:[NaN,NaN]))}(e)}function R(e){const{inSR:t,outSR:n,datumTransformation:r}=e,o=M(t),{points:a,mask:l}=P(e,o);if(!t.isGeographic){const e=t.wkid?s.e.coordsys(t.wkid):s.e.fromString(t.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,t.wkt);s.g.projToGeog(e,a.length,a)}if((0,i.i)(r)&&r.steps.length&&r.steps.forEach((e=>{const t=e.wkid?s.e.geogtran(e.wkid):s.e.fromString(s.f.PE_TYPE_GEOGTRAN,e.wkt);s.h.geogToGeog(t,a.length,a,null,e.isInverse?s.f.PE_TRANSFORM_2_TO_1:s.f.PE_TRANSFORM_1_TO_2)})),!n.isGeographic){const e=M(n,!0),t=(0,i.i)(e)&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];!function(e,t){const[n,r]=t;for(let t=0;t<e.length;t++){const i=e[t][1];(i<n||i>r)&&(e[t]=[NaN,NaN])}}(a,t);const r=n.wkid?s.e.coordsys(n.wkid):s.e.fromString(n.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,n.wkt);s.g.geogToProj(r,a.length,a)}let f=a;if(l&&a.length!==l.length){f=[];for(let e=0,t=0;e<l.length;e++)l[e]?f.push(a[t++]):f.push([NaN,NaN])}return f}function M(e,t=!1){let n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),m.has(n)){const e=m.get(n);return t?null==e?void 0:e.gcs:null==e?void 0:e.pcs}const r=e.wkid?s.e.coordsys(e.wkid):s.e.fromString(e.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,e.wkt),i=b(r,w(e,1e-4)),o=b(r,0,!0);return m.set(n,{pcs:i,gcs:o}),t?o:i}function b(e,t=0,n=!1){const r=s.j.generate(e),i=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(null==i||!i.length)return null;let o=!1,a=i.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!a){if(a=i.find((e=>1===e.getInclusive()&&0===e.getKind())),!a)return null;o=!0}const l=r.isPannableRectangle(),f=a.getCoord();if(o)return{isEnvelope:o,isPannable:l,vertices:f,coef:null,bbox:[f[0][0]-t,f[0][1]-t,f[1][0]+t,f[1][1]+t]};let c=0;const u=[];let[p,x]=f[0],[h,m]=f[0];for(let e=0,t=f.length;e<t;e++){c++,c===t&&(c=0);const[n,r]=f[e],[i,o]=f[c];if(o===r)u.push([n,i,r,o,2]);else{const e=(i-n)/(o-r||1e-4),t=n-e*r;r<o?u.push([e,t,r,o,0]):u.push([e,t,o,r,1])}p=p<n?p:n,x=x<r?x:r,h=h>n?h:n,m=m>r?m:r}return{isEnvelope:!1,isPannable:l,vertices:f,coef:u,bbox:[p,x,h,m]}}function P(e,t){const n=[],{cols:r,rows:o,xres:s,yres:a,usePixelCenter:l}=e;let{xmin:f,ymax:c}=e;if(l&&(f+=s/2,c-=a/2),!(0,i.i)(t)){for(let e=0;e<r;e++)for(let t=0;t<o;t++)n.push([f+s*e,c-a*t]);return{points:n}}const u=new Uint8Array(r*o);if(t.isEnvelope){const{bbox:[e,i,l,p]}=t;for(let x=0,h=0;x<r;x++){const r=f+s*x,m=t.isPannable||r>=e&&r<=l;for(let e=0;e<o;e++,h++){const t=c-a*e;m&&t>=i&&t<=p&&(n.push([r,t]),u[h]=1)}}return{points:n,mask:u}}const{coef:p}=t,x=[];for(let e=0;e<o;e++){const t=c-a*e,n=[],r=[];for(let e=0;e<p.length;e++){const[i,o,s,a,l]=p[e];if(t===s&&s===a)n.push(i),n.push(o),r.push(2),r.push(2);else if(t>=s&&t<=a){const e=i*t+o;n.push(e),r.push(l)}}let i=n;if(n.length>2){let e=2===r[0]?0:r[0],t=n[0];i=[];for(let o=1;o<r.length;o++)2===r[o]&&o!==r.length-1||(r[o]!==e&&(i.push(0===e?Math.min(t,n[o-1]):Math.max(t,n[o-1])),e=r[o],t=n[o]),o===r.length-1&&i.push(0===r[o]?Math.min(t,n[o]):Math.max(t,n[o])));i.sort(((e,t)=>e-t))}else n[0]>n[1]&&(i=[n[1],n[0]]);x.push(i)}for(let e=0,t=0;e<r;e++){const r=f+s*e;for(let e=0;e<o;e++,t++){const i=c-a*e,o=x[e];if(2===o.length)r>=o[0]&&r<=o[1]&&(n.push([r,i]),u[t]=1);else if(o.length>2){let e=!1;for(let t=0;t<o.length;t+=2)if(r>=o[t]&&r<=o[t+1]){e=!0;break}e&&(n.push([r,i]),u[t]=1)}}}return{points:n,mask:u}}function S(e){const t=k(e[0].spatialReference);if(e.length<2||!(0,i.i)(t))return e[0];let{xmin:n,xmax:r,ymin:o,ymax:s}=e[0];for(let n=1;n<e.length;n++){const i=e[n];r=i.xmax+t*n,o=Math.min(o,i.ymin),s=Math.max(s,i.ymax)}return new l.Z({xmin:n,xmax:r,ymin:o,ymax:s,spatialReference:e[0].spatialReference})}function _(e,t,n=null,r=!0){if(e.spatialReference.equals(t))return e;const o=N(e),s=k(e.spatialReference,!0),a=k(t);if(0===o||(0,i.b)(s)||(0,i.b)(a))return T(e,t,n,r);const f=e.clone().normalize();if(1===f.length&&e.xmax<s&&e.xmax-s/2>w(e.spatialReference)){const{xmin:t,xmax:n}=e;for(let r=0;r<=o;r++){const i=0===r?t:-s/2,a=r===o?n-s*r:s/2;f[r]=new l.Z({xmin:i,xmax:a,ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference})}}return S(f.map((e=>T(e,t,n,r))).filter((e=>!!e)))}function T(e,t,n=null,r=!0,o=!0){const s=e.spatialReference;if(s.equals(t))return e;p(s,t,n);const l=(0,a.iV)(e,t,n);if(o&&t.isWebMercator&&l&&(l.ymax=Math.min(20037508.342787,l.ymax),l.ymin=Math.max(-20037508.342787,l.ymin),l.ymin>=l.ymax))return null;if(!r||!l)return l;const c=G(s,!0),u=G(t,!0);if((0,i.b)(c)||(0,i.b)(u))return l;const x=w(s,.001),h=w(s,500),m=w(t,.001);if(Math.abs(l.xmin-u[0])<m&&Math.abs(l.xmax-u[1])<m){const r=Math.abs(e.xmin-c[0]),i=Math.abs(c[1]-e.xmax);if(r<x&&i>h){l.xmin=u[0];const r=[];r.push(new f.Z(e.xmax,e.ymin,s)),r.push(new f.Z(e.xmax,(e.ymin+e.ymax)/2,s)),r.push(new f.Z(e.xmax,e.ymax,s));const i=r.map((e=>C(e,t,n))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));l.xmax=Math.max.apply(null,i)}if(i<x&&r>h){l.xmax=u[1];const r=[];r.push(new f.Z(e.xmin,e.ymin,s)),r.push(new f.Z(e.xmin,(e.ymin+e.ymax)/2,s)),r.push(new f.Z(e.xmin,e.ymax,s));const i=r.map((e=>C(e,t,n))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));l.xmin=Math.min.apply(null,i)}}else{const e=w(t,.001);Math.abs(l.xmin-u[0])<e&&(l.xmin=u[0]),Math.abs(l.xmax-u[1])<e&&(l.xmax=u[1])}return l}function k(e,t=!1){const n=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*h[e.wkid]||null}function G(e,t=!1){if(e.isGeographic)return[-180,180];const n=k(e,t);return(0,i.i)(n)?[-n/2,n/2]:null}function E(e,t,n,r){let i=(e-t)/n;return i-Math.floor(i)!=0?i=Math.floor(i):r&&(i-=1),i}function N(e,t=!1){const n=k(e.spatialReference);if(!(0,i.i)(n))return 0;const r=t?0:-n/2,o=w(e.spatialReference),s=!t&&Math.abs(e.xmax-n/2)<o?n/2:e.xmax,a=!t&&Math.abs(e.xmin+n/2)<o?-n/2:e.xmin;return E(s,r,n,!0)-E(a,r,n,!1)}function O(e){const t=e.storageInfo.origin.x,n=k(e.spatialReference,!0);if(!(0,i.i)(n))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const r=n/2,{nativePixelSize:o,storageInfo:s,extent:a}=e,{maximumPyramidLevel:l,blockWidth:f,pyramidScalingFactor:c}=s;let u=o.x;const p=[],x=(0,i.i)(e.transform)&&"gcs-shift"===e.transform.type,h=t+(x?0:r),m=x?n-t:r-t;for(let e=0;e<=l;e++){const e=(a.xmax-t)/u/f,n=e-Math.floor(e)==0?e:Math.ceil(e),r=m/u/f,i=r-Math.floor(r)==0?r:Math.ceil(r),o=Math.floor(h/u/f),s=Math.round(h/u)%f,l=(f-Math.round(m/u)%f)%f;p.push({resolutionX:u,blockWidth:f,datsetColumnCount:n,worldColumnCountFromOrigin:i,leftMargin:s,rightPadding:l,originColumnOffset:o}),u*=c}return{originX:t,halfWorldWidth:r,pyramidsInfo:p,hasGCSSShiftTransform:x}}function z(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[32,32],r=Z(e),o={cols:r.size[0]+1,rows:r.size[1]+1};const a=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let l=r.outofBoundPointCount===r.offsets.length/2||t&&a?[0,0]:x(r.offsets,o,n,4);const f=(l[0]+l[1])/2,p=e.projectedExtent.spatialReference,h=e.srcBufferExtent.spatialReference;if(t&&(a||f>4)&&(u(p,h,e.datumTransformation)&&(p.isGeographic||(0,i.i)(M(p))),n=[4,4],r=Z({...e,spacing:n}),o={cols:r.size[0]+1,rows:r.size[1]+1},l=x(r.offsets,o,n,4)),r.error=l,n[0]>1&&(r.coefficients=j(r.offsets,o,a)),e.includeGCSGrid&&!p.isGeographic&&!p.isWebMercator)if(h.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:n};else{const t=M(p);if((0,i.i)(t)&&!t.isEnvelope){const t=function(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt);let n;return y.has(t)?n=y.get(t):(n=(e.wkid?s.e.coordsys(e.wkid):s.e.fromString(s.f.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),y.set(t,n)),new c.Z({wkid:n})}(p),i=_(e.projectedExtent,t),{offsets:l}=Z({...e,srcBufferExtent:i,spacing:n}),f=j(l,o,a);r.gcsGrid={offsets:l,coefficients:f,spacing:n}}}return r}function Z(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:r,datumTransformation:o,rasterTransform:s}=e,a=t.spatialReference,l=n.spatialReference;p(a,l);const{xmin:c,ymin:u,xmax:x,ymax:h}=t,m=k(l),y=(0,i.i)(m)&&(e.hasWrapAround||"gcs-shift"===(null==s?void 0:s.type)),d=e.spacing||[32,32],g=d[0]*r.x,C=d[1]*r.y,R=1===d[0],M=Math.ceil((x-c)/g-.1/d[0])+(R?0:1),b=Math.ceil((h-u)/C-.1/d[1])+(R?0:1),P=v({cols:M,rows:b,xmin:c,ymax:h,xres:g,yres:C,inSR:a,outSR:l,datumTransformation:o,preferPE:d[0]<=4,usePixelCenter:R}),S=[];let _,T=0;const G=R?-1:NaN,{xmin:E,xmax:N,ymax:O,width:z,height:Z}=n,j=w(l,500);for(let e=0;e<M;e++){const t=[];for(let n=0;n<b;n++){let r=P[e*b+n];if(y&&r[0]>N&&r[0]>m/2-j&&(r[0]-=m),!r||isNaN(r[0])||isNaN(r[1]))S.push(G),S.push(G),t.push(null),T++;else{if(s){const e=s.inverseTransform(new f.Z({x:r[0],y:r[1],spatialReference:l}));r=[e.x,e.y]}t.push(r),e>0&&y&&_[n]&&r[0]<_[n][0]&&(r[0]+=m),S.push((r[0]-E)/z),S.push((O-r[1])/Z)}}_=t}return{offsets:S,error:null,coefficients:null,outofBoundPointCount:T,spacing:d,size:R?[M,b]:[M-1,b-1]}}function j(e,t,n){const{cols:r,rows:i}=t,o=new Float32Array((r-1)*(i-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let t=0;t<r-1;t++){for(let n=0;n<i-1;n++){let l=t*i*2+2*n;const f=e[l],c=e[l+1],u=e[l+2],p=e[l+3];l+=2*i;const x=e[l],h=e[l+1],m=e[l+2],y=e[l+3];let d=0,g=12*(n*(r-1)+t);for(let e=0;e<3;e++)o[g++]=s[d++]*f+s[d++]*u+s[d++]*m;d=0;for(let e=0;e<3;e++)o[g++]=s[d++]*c+s[d++]*p+s[d++]*y;d=0;for(let e=0;e<3;e++)o[g++]=a[d++]*f+a[d++]*x+a[d++]*m;d=0;for(let e=0;e<3;e++)o[g++]=a[d++]*c+a[d++]*h+a[d++]*y}if(n)for(let e=0;e<o.length;e++)isNaN(o[e])&&(o[e]=-1)}return o}function I(e){const t=e.clone().normalize();return 1===t.length?t[0]:S(t)}function X(e,t,n){const{storageInfo:r,pixelSize:o}=t;let s,a=!1;const{pyramidResolutions:l}=r;if((0,i.i)(l)&&l.length){const r=(e.x+e.y)/2,i=l[l.length-1],c=(i.x+i.y)/2,u=(o.x+o.y)/2;if(r<=u)s=0;else if(r>=c)s=l.length,a=r/c>8;else{let e,t=u;for(let i=1;i<=l.length;i++){if(e=(l[i-1].x+l[i-1].y)/2,r<=e){r===e?s=i:"down"===n?(s=i-1,a=r/t>8):s="up"===n||r-t>e-r||r/t>2?i:i-1;break}t=e}}const p=0===s?o:l[s-1];return{pyramidLevel:s,pyramidResolution:new f.Z({x:p.x,y:p.y,spatialReference:t.spatialReference}),excessiveReading:a}}const c=Math.log(e.x/o.x)/Math.LN2,u=Math.log(e.y/o.y)/Math.LN2,p=t.storageInfo.maximumPyramidLevel||0;s="down"===n?Math.floor(Math.min(c,u)):"up"===n?Math.ceil(Math.max(c,u)):Math.round((c+u)/2),s<0?s=0:s>p&&(a=s>p+3,s=p);const x=2**s;return{pyramidLevel:s,pyramidResolution:new f.Z({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:a}}},22572:(e,t,n)=>{n.d(t,{G:()=>m,P:()=>v,i:()=>b,r:()=>P});var r=n(29768),i=n(34250),o=(n(76506),n(91306),n(59465)),s=n(17533),a=n(74673),l=(n(92143),n(74569),n(97714)),f=n(2906),c=n(91597),u=n(21801);let p=class extends a.a{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};(0,r._)([(0,i.Cb)()],p.prototype,"affectsPixelSize",null),(0,r._)([(0,i.Cb)({json:{write:!0}})],p.prototype,"spatialReference",void 0),p=(0,r._)([(0,s.j)("esri.layers.support.rasterTransforms.BaseRasterTransform")],p);const x=p;let h=class extends x{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};(0,r._)([(0,o.e)({GCSShiftXform:"gcs-shift"})],h.prototype,"type",void 0),(0,r._)([(0,i.Cb)()],h.prototype,"tolerance",void 0),h=(0,r._)([(0,s.j)("esri.layers.support.rasterTransforms.GCSShiftTransform")],h);const m=h;let y=class extends x{constructor(){super(...arguments),this.type="identity"}};(0,r._)([(0,o.e)({IdentityXform:"identity"})],y.prototype,"type",void 0),y=(0,r._)([(0,s.j)("esri.layers.support.rasterTransforms.IdentityTransform")],y);const d=y;function g(e,t,n){const{x:r,y:i}=t;if(n<2)return{x:e[0]+r*e[2]+i*e[4],y:e[1]+r*e[3]+i*e[5]};if(2===n){const t=r*r,n=i*i,o=r*i;return{x:e[0]+r*e[2]+i*e[4]+t*e[6]+o*e[8]+n*e[10],y:e[1]+r*e[3]+i*e[5]+t*e[7]+o*e[9]+n*e[11]}}const o=r*r,s=i*i,a=r*i,l=o*r,f=o*i,c=r*s,u=i*s;return{x:e[0]+r*e[2]+i*e[4]+o*e[6]+a*e[8]+s*e[10]+l*e[12]+f*e[14]+c*e[16]+u*e[18],y:e[1]+r*e[3]+i*e[5]+o*e[7]+a*e[9]+s*e[11]+l*e[13]+f*e[15]+c*e[17]+u*e[19]}}function w(e,t,n){const{xmin:r,ymin:i,xmax:o,ymax:s,spatialReference:a}=t;let l=[];if(n<2)l.push({x:r,y:s}),l.push({x:o,y:s}),l.push({x:r,y:i}),l.push({x:o,y:i});else{let e=10;for(let t=0;t<e;t++)l.push({x:r,y:i+(s-i)*t/(e-1)}),l.push({x:o,y:i+(s-i)*t/(e-1)});e=8;for(let t=1;t<=e;t++)l.push({x:r+(o-r)*t/e,y:i}),l.push({x:r+(o-r)*t/e,y:s})}l=l.map((t=>g(e,t,n)));const f=l.map((e=>e.x)),c=l.map((e=>e.y));return new u.Z({xmin:Math.min.apply(null,f),xmax:Math.max.apply(null,f),ymin:Math.min.apply(null,c),ymax:Math.max.apply(null,c),spatialReference:a})}let C=class extends x{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,t){const{coeffX:n,coeffY:r}=t;if(null==n||!n.length||null==r||!r.length||n.length!==r.length)return null;const i=[];for(let e=0;e<n.length;e++)i.push(n[e]),i.push(r[e]);return i}writeForwardCoefficients(e,t,n){const r=[],i=[];for(let t=0;t<(null==e?void 0:e.length);t++)t%2==0?r.push(e[t]):i.push(e[t]);t.coeffX=r,t.coeffY=i}get inverseCoefficients(){let e=this._get("inverseCoefficients");const t=this._get("forwardCoefficients");return!e&&t&&this.polynomialOrder<2&&(e=function(e){const[t,n,r,i,o,s]=e,a=r*s-o*i,l=o*i-r*s;return[(o*n-t*s)/a,(r*n-t*i)/l,s/a,i/l,-o/a,-r/l]}(t)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,t){const{inverseCoeffX:n,inverseCoeffY:r}=t;if(null==n||!n.length||null==r||!r.length||n.length!==r.length)return null;const i=[];for(let e=0;e<n.length;e++)i.push(n[e]),i.push(r[e]);return i}writeInverseCoefficients(e,t,n){const r=[],i=[];for(let t=0;t<(null==e?void 0:e.length);t++)t%2==0?r.push(e[t]):i.push(e[t]);t.inverseCoeffX=r,t.inverseCoeffY=i}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const t=g(this.forwardCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return w(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const t=g(this.inverseCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return w(this.inverseCoefficients,e,this.polynomialOrder)}};(0,r._)([(0,i.Cb)({json:{write:!0}})],C.prototype,"polynomialOrder",void 0),(0,r._)([(0,i.Cb)()],C.prototype,"forwardCoefficients",void 0),(0,r._)([(0,l.r)("forwardCoefficients",["coeffX","coeffY"])],C.prototype,"readForwardCoefficients",null),(0,r._)([(0,f.w)("forwardCoefficients")],C.prototype,"writeForwardCoefficients",null),(0,r._)([(0,i.Cb)({json:{write:!0}})],C.prototype,"inverseCoefficients",null),(0,r._)([(0,l.r)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],C.prototype,"readInverseCoefficients",null),(0,r._)([(0,f.w)("inverseCoefficients")],C.prototype,"writeInverseCoefficients",null),(0,r._)([(0,i.Cb)()],C.prototype,"affectsPixelSize",null),(0,r._)([(0,o.e)({PolynomialXform:"polynomial"})],C.prototype,"type",void 0),C=(0,r._)([(0,s.j)("esri.layers.support.rasterTransforms.PolynomialTransform")],C);const v=C,R={GCSShiftXform:m,IdentityXform:d,PolynomialXform:v},M=Object.keys(R);function b(e){const t=null==e?void 0:e.type;return!e||M.includes(t)}function P(e){if(!(null==e?void 0:e.type))return null;const t=R[null==e?void 0:e.type];if(t){const n=new t;return n.read(e),n}return null}}}]);