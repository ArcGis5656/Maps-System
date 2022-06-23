/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import"../../geometry.js";import t from"../../core/Error.js";import{c as e}from"../../chunks/unitUtils.js";import{t as s,s as n,W as i}from"../../chunks/geodesicConstants.js";import r from"../Polyline.js";import o from"../Polygon.js";import a from"../Point.js";import c from"../SpatialReference.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../Geometry.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"./webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"./jsonUtils.js";import"../../chunks/extentUtils.js";import"../../chunks/projectionEllipsoid.js";function p(t){if(!t)return null;if(t.isGeographic&&t.wkid){const e=n[t.wkid];if(e)return e}if(t.wkt){const e=function(t){const e=i.exec(t);if(!e||2!==e.length)return null;const s=e[1].split(",");if(!s||s.length<3)return null;const n=parseFloat(s[1]),r=parseFloat(s[2]);if(isNaN(n)||isNaN(r))return null;return{a:n,f:0===r?0:1/r}}(t.wkt);if(e)return e}return null}function h(t){const e=p(t||c.WGS84);if(function(t){return"b"in t&&"eSq"in t&&"radius"in t}(e))return e;const s=e.a*(1-e.f);return Object.assign(e,{b:s,eSq:1-(s/e.a)**2,radius:(2*e.a+s)/3,densificationRatio:1e4/((2*e.a+s)/3)})}function u(t){return t<0?t+360:t}function l(t,e,n){const{a:i,eSq:r}=h(n),o=Math.sqrt(r),a=Math.sin(e[1]*s),c=i*e[0]*s;let p;if(r>0){p=i*((1-r)*(a/(1-r*(a*a))-1/(2*o)*Math.log((1-o*a)/(1+o*a))))*.5}else p=i*a;return t[0]=c,t[1]=p,t}function f(t){return null!==p(t)}function m(s,n="square-meters"){if(s.some((t=>!f(t.spatialReference))))throw new t("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const i=[];for(let t=0;t<s.length;t++){const e=s[t],n=e.spatialReference,{radius:r,densificationRatio:o}=h(n),a=r*o;i.push(g(e,a))}const r=[],o=[0,0],a=[0,0];for(let t=0;t<i.length;t++){const{rings:s,spatialReference:c}=i[t];let p=0;for(let t=0;t<s.length;t++){const e=s[t];l(o,e[0],c),l(a,e[e.length-1],c);let n=a[0]*o[1]-o[0]*a[1];for(let t=0;t<e.length-1;t++)l(o,e[t+1],c),l(a,e[t],c),n+=a[0]*o[1]-o[0]*a[1];p+=n}p=e(p,"square-meters",n),r.push(p/-2)}return r}function d(s,n="meters"){if(!s)throw new t("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(s.some((t=>!f(t.spatialReference))))throw new t("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const i=[];for(let t=0;t<s.length;t++){const r=s[t],{spatialReference:o}=r,a="polyline"===r.type?r.paths:r.rings;let c=0;for(let t=0;t<a.length;t++){const e=a[t];let s=0;for(let t=1;t<e.length;t++){const n=e[t-1][0],i=e[t][0],r=e[t-1][1],a=e[t][1];if(r!==a||n!==i){const t={distance:null};j(t,[n,r],[i,a],o),s+=t.distance}}c+=s}c=e(c,"meters",n),i.push(c)}return i}function g(e,s){if("polyline"!==e.type&&"polygon"!==e.type)throw new t("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:n}=e;if(!f(n))throw new t("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const i="polyline"===e.type?e.paths:e.rings,a=[],c=[0,0],p={distance:null};for(const t of i){const e=[];a.push(e),e.push([t[0][0],t[0][1]]);let i,r,o=t[0][0],h=t[0][1];for(let a=0;a<t.length-1;a++){if(i=t[a+1][0],r=t[a+1][1],o===i&&h===r)continue;const u=[o,h];j(p,[o,h],[i,r],n);const{azimuth:l,distance:f}=p,m=f/s;if(m>1){for(let t=1;t<=m-1;t++){M(c,u,l,t*s,n),e.push(c.slice(0))}M(c,u,l,(f+Math.floor(m-1)*s)/2,n),e.push(c.slice(0))}M(c,u,l,f,n),e.push(c.slice(0)),o=c[0],h=c[1]}}return"polyline"===e.type?new r({paths:a,spatialReference:n}):new o({rings:a,spatialReference:n})}function M(t,e,n,i,r){const o=e[0],a=e[1],c=o*s,p=a*s,u=n*s,{a:l,b:f,f:m}=h(r),d=Math.sin(u),g=Math.cos(u),M=(1-m)*Math.tan(p),j=1/Math.sqrt(1+M*M),w=M*j,y=Math.atan2(M,g),k=j*d,R=k*k,v=1-R,b=v*(l*l-f*f)/(f*f),z=1+b/16384*(4096+b*(b*(320-175*b)-768)),q=b/1024*(256+b*(b*(74-47*b)-128));let S,x,A,U,N=i/(f*z),P=2*Math.PI;for(;Math.abs(N-P)>1e-12;)A=Math.cos(2*y+N),S=Math.sin(N),x=Math.cos(N),U=q*S*(A+q/4*(x*(2*A*A-1)-q/6*A*(4*S*S-3)*(4*A*A-3))),P=N,N=i/(f*z)+U;const E=w*S-j*x*g,G=Math.atan2(w*x+j*S*g,(1-m)*Math.sqrt(R+E*E)),F=Math.atan2(S*d,j*x-w*S*g),O=m/16*v*(4+m*(4-3*v)),T=G/s,W=(c+(F-(1-O)*m*k*(N+O*S*(A+O*x*(2*A*A-1)))))/s;return t[0]=W,t[1]=T,t}function j(t,e,n,i){const r=e[0]*s,o=e[1]*s,a=n[0]*s,c=n[1]*s,{a:p,b:u,f:l,radius:f}=h(i),m=a-r,d=Math.atan((1-l)*Math.tan(o)),g=Math.atan((1-l)*Math.tan(c)),M=Math.sin(d),j=Math.cos(d),w=Math.sin(g),y=Math.cos(g);let k,R,v,b,z,q,S,x,A,U,N=1e3,P=m;do{if(S=Math.sin(P),x=Math.cos(P),v=Math.sqrt(y*S*(y*S)+(j*w-M*y*x)*(j*w-M*y*x)),0===v)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;z=M*w+j*y*x,q=Math.atan2(v,z),A=j*y*S/v,R=1-A*A,b=z-2*M*w/R,isNaN(b)&&(b=0),U=l/16*R*(4+l*(4-3*R)),k=P,P=m+(1-U)*l*A*(q+U*v*(b+U*z*(2*b*b-1)))}while(Math.abs(P-k)>1e-12&&--N>0);if(0===N){const e=f,n=Math.acos(Math.sin(o)*Math.sin(c)+Math.cos(o)*Math.cos(c)*Math.cos(a-r))*e,i=a-r,p=Math.sin(i)*Math.cos(c),h=Math.cos(o)*Math.sin(c)-Math.sin(o)*Math.cos(c)*Math.cos(i),u=Math.atan2(p,h);return t.azimuth=u/s,t.distance=n,t.reverseAzimuth=void 0,t}const E=R*(p*p-u*u)/(u*u),G=E/1024*(256+E*(E*(74-47*E)-128)),F=u*(1+E/16384*(4096+E*(E*(320-175*E)-768)))*(q-G*v*(b+G/4*(z*(2*b*b-1)-G/6*b*(4*v*v-3)*(4*b*b-3)))),O=Math.atan2(y*Math.sin(P),j*w-M*y*Math.cos(P)),T=Math.atan2(j*Math.sin(P),j*w*Math.cos(P)-M*y);return t.azimuth=O/s,t.distance=F,t.reverseAzimuth=T/s,t}function w(s,n,i="meters"){if(!s||!n)throw new t("geodesic-distance:missing-parameters","one or both input parameters are missing");if(!s.spatialReference||!n.spatialReference)throw new t("geodesic-distance:invalid-parameters","one or both input points do not have a spatial reference");if(!s.spatialReference.equals(n.spatialReference))throw new t("geodesic-distance:invalid-parameters","spatial references of input parameters do not match");const{spatialReference:r}=s;if(!f(r))throw new t("geodesic-distance:not-supported","input geometry spatial reference is not supported");if(s.equals(n))return{distance:0,azimuth:0,reverseAzimuth:0};const o={distance:null};return j(o,[s.x,s.y],[n.x,n.y],r),o.distance=e(o.distance,"meters",i),o.azimuth=u(o.azimuth),o.reverseAzimuth=u(o.reverseAzimuth),o}function y(e,s,n){if(!e||null==s||null==n)throw new t("point-from-distance:missing-parameters","one or more input parameters are missing or undefined");if(n<0||n>360)throw new t("point-from-distance:-of-bounds","azimuth is restricted to angles between, and including, 0° to 360° degrees");if(!e.spatialReference)throw new t("point-from-distance:missing-spatial-reference","the input point must have a spatial reference");const{spatialReference:i}=e;if(!f(i))throw new t("geodesic-distance:not-supported","input geometry spatial reference is not supported");const r=[0,0];return M(r,[e.x,e.y],n,s,i),new a({x:r[0],y:r[1],spatialReference:i})}export{M as directGeodeticSolver,m as geodesicAreas,g as geodesicDensify,w as geodesicDistance,d as geodesicLengths,j as inverseGeodeticSolver,f as isSupported,y as pointFromDistance};
