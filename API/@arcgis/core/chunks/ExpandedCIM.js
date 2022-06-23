/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{a as e}from"./enums4.js";import{c as t}from"./MaterialKey.js";const a={marker:e.MARKER,fill:e.FILL,line:e.LINE,text:e.TEXT};class l{constructor(e,l,s,i){const r={minScale:null==l?void 0:l.minScale,maxScale:null==l?void 0:l.maxScale},n=function(e){if(!e.minScale&&!e.maxScale)return"";return e.minScale+"-"+e.maxScale}(r);this.layers=e,this.data=l,this.hash=this._createHash()+n,this.rendererKey=s;const c={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:s};for(const l of e){const e=a[l.type];l.materialKey=t(e,c),l.maxVVSize=i,l.scaleInfo=r,l.templateHash+=n}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}export{l as E};
