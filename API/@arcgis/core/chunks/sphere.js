/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{b as t}from"../core/lang.js";import{L as n}from"./Logger.js";import{d as r,l as s,i as e,n as o,a,b as i,e as c,m as u,j as f,f as g,u as l,v as m,h,o as p,w as d,s as j}from"./mathUtils.js";import{e as y}from"./mat4.js";import{c as M,f as A}from"./vec4f64.js";import{a as b}from"./ray.js";import{s as R,a as v}from"./vectorStacks.js";var S;function w(t,n,s){const e=r(t,n)/r(t,t);return c(s,t,e)}function x(t,n){return r(t,n)/s(t)}function P(t,n){const o=r(t,n)/(s(t)*s(n));return-e(o)}function Z(t,n,s){o(_,t),o(C,n);const i=r(_,C),c=e(i),u=a(_,_,C);return r(u,s)<0?2*Math.PI-c:c}!function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(S||(S={}));const _=i(),C=i(),L=n.getLogger("esri.geometry.support.sphere");function X(){return M()}function Y(t,n=X()){return u(n,t)}function k(t,n){return A(t[0],t[1],t[2],n)}function q(t){return t}function E(t){t[0]=t[1]=t[2]=t[3]=0}function O(t){return t}function T(t){return Array.isArray(t)?t[3]:t}function z(t){return Array.isArray(t)?t:Q}function I(t,n,r,s){return A(t,n,r,s)}function U(n,r,s){if(t(r))return!1;const{origin:e,direction:o}=r,a=V;a[0]=e[0]-n[0],a[1]=e[1]-n[1],a[2]=e[2]-n[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],c=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),u=c*c-4*i*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-n[3]*n[3]);if(u<0)return!1;const f=Math.sqrt(u);let g=(-c-f)/(2*i);const l=(-c+f)/(2*i);return(g<0||l<g&&l>0)&&(g=l),!(g<0)&&(s&&(s[0]=e[0]+o[0]*g,s[1]=e[1]+o[1]*g,s[2]=e[2]+o[2]*g),!0)}const V=i();function B(t,n){return U(t,n,null)}function D(t,n,r){const e=R.get(),o=v.get();a(e,n.origin,n.direction);const i=T(t);a(r,e,n.origin),c(r,r,1/s(r)*i);const u=H(t,n.origin),f=P(n.origin,r);return y(o,f+u,e),m(r,r,o),r}function F(t,n,r){const e=h(R.get(),n,z(t)),o=c(R.get(),e,t[3]/s(e));return g(r,o,z(t))}function G(t,n){const r=h(R.get(),n,z(t)),s=p(r),e=t[3]*t[3];return Math.sqrt(Math.abs(s-e))}function H(t,n){const r=h(R.get(),n,z(t)),o=s(r),a=T(t),i=a+Math.abs(a-o);return e(a/i)}const J=i();function K(t,n,r,s){const e=h(J,n,z(t));switch(r){case S.X:{const t=d(e,J)[2];return j(s,-Math.sin(t),Math.cos(t),0)}case S.Y:{const t=d(e,J),n=t[1],r=t[2],o=Math.sin(n);return j(s,-o*Math.cos(r),-o*Math.sin(r),Math.cos(n))}case S.Z:return o(s,e);default:return}}function N(t,n){const r=h(W,n,z(t));return s(r)-t[3]}const Q=i(),W=i(),$=Object.freeze({__proto__:null,create:X,copy:Y,fromCenterAndRadius:k,wrap:q,clear:E,fromRadius:O,getRadius:T,getCenter:z,fromValues:I,elevate:function(t,n,r){return t!==r&&f(r,t),r[3]=t[3]+n,r},setExtent:function(t,n,r){return L.error("sphere.setExtent is not yet supported"),t===r?r:Y(t,r)},intersectRay:U,intersectsRay:B,intersectRayClosestSilhouette:function(t,n,r){if(U(t,n,r))return r;const e=D(t,n,R.get());return g(r,n.origin,c(R.get(),n.direction,l(n.origin,e)/s(n.direction))),r},closestPointOnSilhouette:D,closestPoint:function(t,n,r){return U(t,n,r)?r:(b(n,z(t),r),F(t,r,r))},projectPoint:F,distanceToSilhouette:G,angleToSilhouette:H,axisAt:K,altitudeAt:N,setAltitudeAt:function(t,n,r,s){const e=N(t,n),o=K(t,n,S.Z,W),a=c(W,o,r-e);return g(s,n,a)}});export{S as A,Z as a,P as b,X as c,E as d,Y as e,I as f,z as g,U as h,B as i,k as j,D as k,O as l,G as m,T as n,w as o,x as p,$ as s,q as w};