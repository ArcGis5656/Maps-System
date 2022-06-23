/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"../core/lang.js";import"../core/accessorSupport/decorators/property.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{B as o}from"./BitmapTileContainer.js";const r=r=>{let i=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new o(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var e;this.container.removeChild(this._bitmapView),null==(e=this._bitmapView)||e.removeAllChildren()}};return i=e([t("esri.views.2d.layers.BitmapTileLayerView2D")],i),i};function i(e,t,o,r){if(o.level===r.level)return t;const i=e.tileInfo.size,s=e.getTileResolution(o.level),a=e.getTileResolution(r.level);let l=e.getLODInfoAt(r.level);const c=l.getXForColumn(r.col),m=l.getYForRow(r.row);l=e.getLODInfoAt(o.level);const h=l.getXForColumn(o.col),u=l.getYForRow(o.row),p=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/i[0],d=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/i[1],g=Math.round(p*((c-h)/s)),w=Math.round(d*(-(m-u)/s)),f=Math.round(p*i[0]*(a/s)),v=Math.round(d*i[1]*(a/s)),T=n(i);return T.getContext("2d").drawImage(t,g,w,f,v,0,0,i[0],i[1]),T}function n(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{r as B,n as c,i as r};
