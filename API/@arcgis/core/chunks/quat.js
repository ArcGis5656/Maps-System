/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{z as s,d as t,a as n,A as a,n as o,b as c,q as r,m as i,B as u}from"./mathUtils.js";import{E as h}from"./common.js";function M(s,t,n){n*=.5;const a=Math.sin(n);return s[0]=a*t[0],s[1]=a*t[1],s[2]=a*t[2],s[3]=Math.cos(n),s}function e(s,t){const n=2*Math.acos(t[3]),a=Math.sin(n/2);return a>h?(s[0]=t[0]/a,s[1]=t[1]/a,s[2]=t[2]/a):(s[0]=1,s[1]=0,s[2]=0),n}function f(s,t,n){const a=t[0],o=t[1],c=t[2],r=t[3],i=n[0],u=n[1],h=n[2],M=n[3];return s[0]=a*M+r*i+o*h-c*u,s[1]=o*M+r*u+c*i-a*h,s[2]=c*M+r*h+a*u-o*i,s[3]=r*M-a*i-o*u-c*h,s}function m(s,t){const n=t[0],a=t[1],o=t[2],c=t[3],r=n*n+a*a+o*o+c*c,i=r?1/r:0;return s[0]=-n*i,s[1]=-a*i,s[2]=-o*i,s[3]=c*i,s}function p(s,t){return s[0]=-t[0],s[1]=-t[1],s[2]=-t[2],s[3]=t[3],s}function j(s,t,n,a){const o=.5*Math.PI/180;t*=o,n*=o,a*=o;const c=Math.sin(t),r=Math.cos(t),i=Math.sin(n),u=Math.cos(n),h=Math.sin(a),M=Math.cos(a);return s[0]=c*u*M-r*i*h,s[1]=r*i*M+c*u*h,s[2]=r*u*h-c*i*M,s[3]=r*u*M+c*i*h,s}const I=i,P=u,b=s;function d(s,c,r){const i=t(c,r);return i<-.999999?(n(g,l,c),a(g)<1e-6&&n(g,q,c),o(g,g),M(s,g,Math.PI),s):i>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(n(g,c,r),s[0]=g[0],s[1]=g[1],s[2]=g[2],s[3]=1+i,P(s,s))}const g=c(),l=r(1,0,0),q=r(0,1,0);export{I as a,p as c,b as e,j as f,e as g,m as i,f as m,d as r,M as s};