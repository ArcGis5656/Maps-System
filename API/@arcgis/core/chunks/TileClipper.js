/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{g as i}from"./assets.js";import{h as t}from"../core/lang.js";import{k as s}from"./definitions.js";import{P as h,G as e}from"./Geometry.js";import{b as n}from"./GeometryUtils2.js";let l=null,a=null;async function x(){return l||(l=async function(){const s=t("esri-csp-restrictions")?await import("./libtess-asm.js").then((i=>i.l)):await import("./libtess.js").then((i=>i.l));a=await s.load({locateFile:()=>i("esri/core/libs/libtess/libtess.wasm")})}()),l}function o(i,t){const s=Math.max(i.length,128e3);return a.triangulate(i,t,s)}class y{constructor(i,t,s){this.ratio=i,this.x=t,this.y=s}}class r{constructor(i,t,h,e=8,n=8){this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=e,this.pixelMargin=n,this.tileSize=s*e,this.dz=i,this.yPos=t,this.xPos=h}setPixelMargin(i){i!==this.pixelMargin&&(this.pixelMargin=i,this.setExtent(this._extent))}setExtent(i){this._extent=i,this.finalRatio=this.tileSize/i*(1<<this.dz);let t=this.pixelRatio*this.pixelMargin;t/=this.finalRatio;const s=i>>this.dz;t>s&&(t=s),this.margin=t,this.xmin=s*this.xPos-t,this.ymin=s*this.yPos-t,this.xmax=this.xmin+s+2*t,this.ymax=this.ymin+s+2*t}reset(i){this.type=i,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(i,t){this._pushLine(),this._prevIsIn=this._isIn(i,t),this._moveTo(i,t,this._prevIsIn),this._prevPt=new h(i,t),this._firstPt=new h(i,t),this._dist=0}lineTo(i,t){const s=this._isIn(i,t),e=new h(i,t),n=h.distance(this._prevPt,e);let l,a,x,o,r,m,p,u;if(s)this._prevIsIn?this._lineTo(i,t,!0):(l=this._prevPt,a=e,x=this._intersect(a,l),this.start=this._dist+n*(1-this._r),this._lineTo(x.x,x.y,!0),this._lineTo(a.x,a.y,!0));else if(this._prevIsIn)a=this._prevPt,l=e,x=this._intersect(a,l),this._lineTo(x.x,x.y,!0),this._lineTo(l.x,l.y,!1);else{const i=this._prevPt,t=e;if(i.x<=this.xmin&&t.x<=this.xmin||i.x>=this.xmax&&t.x>=this.xmax||i.y<=this.ymin&&t.y<=this.ymin||i.y>=this.ymax&&t.y>=this.ymax)this._lineTo(t.x,t.y,!1);else{const s=[];if((i.x<this.xmin&&t.x>this.xmin||i.x>this.xmin&&t.x<this.xmin)&&(o=(this.xmin-i.x)/(t.x-i.x),u=i.y+o*(t.y-i.y),u<=this.ymin?m=!1:u>=this.ymax?m=!0:s.push(new y(o,this.xmin,u))),(i.x<this.xmax&&t.x>this.xmax||i.x>this.xmax&&t.x<this.xmax)&&(o=(this.xmax-i.x)/(t.x-i.x),u=i.y+o*(t.y-i.y),u<=this.ymin?m=!1:u>=this.ymax?m=!0:s.push(new y(o,this.xmax,u))),(i.y<this.ymin&&t.y>this.ymin||i.y>this.ymin&&t.y<this.ymin)&&(o=(this.ymin-i.y)/(t.y-i.y),p=i.x+o*(t.x-i.x),p<=this.xmin?r=!1:p>=this.xmax?r=!0:s.push(new y(o,p,this.ymin))),(i.y<this.ymax&&t.y>this.ymax||i.y>this.ymax&&t.y<this.ymax)&&(o=(this.ymax-i.y)/(t.y-i.y),p=i.x+o*(t.x-i.x),p<=this.xmin?r=!1:p>=this.xmax?r=!0:s.push(new y(o,p,this.ymax))),0===s.length)r?m?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):m?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(s.length>1&&s[0].ratio>s[1].ratio)this.start=this._dist+n*s[1].ratio,this._lineTo(s[1].x,s[1].y,!0),this._lineTo(s[0].x,s[0].y,!0);else{this.start=this._dist+n*s[0].ratio;for(let i=0;i<s.length;i++)this._lineTo(s[i].x,s[i].y,!0)}this._lineTo(t.x,t.y,!1)}}this._dist+=n,this._prevIsIn=s,this._prevPt=e}close(){if(this.line.length>2){const i=this._firstPt,t=this._prevPt;i.x===t.x&&i.y===t.y||this.lineTo(i.x,i.y);const s=this.line;let h=s.length;for(;h>=4&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y);)s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y,--h}}result(i=!0){return this._pushLine(),0===this.lines.length?null:(this.type===e.Polygon&&i&&u.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(this.type!==e.LineString)throw new Error("Only valid for lines");this._pushLine();const i=this.lines,t=i.length;if(0===t)return null;const s=[];for(let h=0;h<t;h++)s.push({line:i[h],start:this.starts[h]||0});return s}_isIn(i,t){return i>=this.xmin&&i<=this.xmax&&t>=this.ymin&&t<=this.ymax}_intersect(i,t){let s,e,n;if(t.x>=this.xmin&&t.x<=this.xmax)e=t.y<=this.ymin?this.ymin:this.ymax,n=(e-i.y)/(t.y-i.y),s=i.x+n*(t.x-i.x);else if(t.y>=this.ymin&&t.y<=this.ymax)s=t.x<=this.xmin?this.xmin:this.xmax,n=(s-i.x)/(t.x-i.x),e=i.y+n*(t.y-i.y);else{e=t.y<=this.ymin?this.ymin:this.ymax,s=t.x<=this.xmin?this.xmin:this.xmax;const h=(s-i.x)/(t.x-i.x),l=(e-i.y)/(t.y-i.y);h<l?(n=h,e=i.y+h*(t.y-i.y)):(n=l,s=i.x+l*(t.x-i.x))}return this._r=n,new h(s,e)}_pushLine(){this.line&&(this.type===e.Point?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===e.LineString?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===e.Polygon&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(i,t,s){this.type!==e.Polygon?s&&(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new h(i,t))):(s||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.push(new h(i,t)),this._is_h=!1,this._is_v=!1)}_lineTo(i,t,s){let n,l;if(this.type!==e.Polygon)if(s){if(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(n=this.line[this.line.length-1],n.equals(i,t)))return;this.line.push(new h(i,t))}else this.line&&this.line.length>0&&this._pushLine();else if(s||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),t<this.ymin&&(t=this.ymin),t>this.ymax&&(t=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),t=Math.round((t-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){n=this.line[this.line.length-1];const s=n.x===i,e=n.y===t;if(s&&e)return;this._is_h&&s||this._is_v&&e?(n.x=i,n.y=t,l=this.line[this.line.length-2],l.x===i&&l.y===t?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(l=this.line[this.line.length-2],this._is_h=l.x===i,this._is_v=l.y===t)):(this._is_h=l.x===i,this._is_v=l.y===t)):(this.line.push(new h(i,t)),this._is_h=s,this._is_v=e)}else this.line.push(new h(i,t))}}class m{setExtent(i){this._ratio=4096===i?1:4096/i}get validateTessellation(){return this._ratio<1}reset(i){this.lines=[],this.line=null}moveTo(i,t){this.line&&this.lines.push(this.line),this.line=[];const s=this._ratio;this.line.push(new h(i*s,t*s))}lineTo(i,t){const s=this._ratio;this.line.push(new h(i*s,t*s))}close(){const i=this.line;i&&!i[0].isEqual(i[i.length-1])&&i.push(i[0])}result(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}var p;!function(i){i[i.sideLeft=0]="sideLeft",i[i.sideRight=1]="sideRight",i[i.sideTop=2]="sideTop",i[i.sideBottom=3]="sideBottom"}(p||(p={}));class u{static simplify(i,t,s){if(!s)return;const h=-t,e=i+t,n=-t,l=i+t,a=[],x=[],o=s.length;for(let i=0;i<o;++i){const t=s[i];if(!t||t.length<2)continue;let o,y=t[0];const r=t.length;for(let s=1;s<r;++s)o=t[s],y.x===o.x&&(y.x<=h&&(y.y>o.y?(a.push(i),a.push(s),a.push(p.sideLeft),a.push(-1)):(x.push(i),x.push(s),x.push(p.sideLeft),x.push(-1))),y.x>=e&&(y.y<o.y?(a.push(i),a.push(s),a.push(p.sideRight),a.push(-1)):(x.push(i),x.push(s),x.push(p.sideRight),x.push(-1)))),y.y===o.y&&(y.y<=n&&(y.x<o.x?(a.push(i),a.push(s),a.push(p.sideTop),a.push(-1)):(x.push(i),x.push(s),x.push(p.sideTop),x.push(-1))),y.y>=l&&(y.x>o.x?(a.push(i),a.push(s),a.push(p.sideBottom),a.push(-1)):(x.push(i),x.push(s),x.push(p.sideBottom),x.push(-1)))),y=o}if(0===a.length||0===x.length)return;u.fillParent(s,x,a),u.fillParent(s,a,x);const y=[];u.calcDeltas(y,x,a),u.calcDeltas(y,a,x),u.addDeltas(y,s)}static fillParent(i,t,s){const h=s.length,e=t.length;for(let l=0;l<e;l+=4){const e=t[l],a=t[l+1],x=t[l+2],o=i[e][a-1],y=i[e][a];let r=8092,m=-1;for(let t=0;t<h;t+=4){if(s[t+2]!==x)continue;const h=s[t],e=s[t+1],l=i[h][e-1],a=i[h][e];switch(x){case p.sideLeft:case p.sideRight:if(n(o.y,l.y,a.y)&&n(y.y,l.y,a.y)){const i=Math.abs(a.y-l.y);i<r&&(r=i,m=t)}break;case p.sideTop:case p.sideBottom:if(n(o.x,l.x,a.x)&&n(y.x,l.x,a.x)){const i=Math.abs(a.x-l.x);i<r&&(r=i,m=t)}}}t[l+3]=m}}static calcDeltas(i,t,s){const h=t.length;for(let e=0;e<h;e+=4){const h=[],n=u.calcDelta(e,t,s,h);i.push(t[e]),i.push(t[e+1]),i.push(t[e+2]),i.push(n)}}static calcDelta(i,t,s,h){const e=t[i+3];if(-1===e)return 0;const n=h.length;return n>1&&h[n-2]===e?0:(h.push(e),u.calcDelta(e,s,t,h)+1)}static addDeltas(i,t){const s=i.length;let h=0;for(let t=0;t<s;t+=4){const s=i[t+3];s>h&&(h=s)}for(let e=0;e<s;e+=4){const s=t[i[e]],n=i[e+1],l=h-i[e+3];switch(i[e+2]){case p.sideLeft:s[n-1].x-=l,s[n].x-=l,1===n&&(s[s.length-1].x-=l),n===s.length-1&&(s[0].x-=l);break;case p.sideRight:s[n-1].x+=l,s[n].x+=l,1===n&&(s[s.length-1].x+=l),n===s.length-1&&(s[0].x+=l);break;case p.sideTop:s[n-1].y-=l,s[n].y-=l,1===n&&(s[s.length-1].y-=l),n===s.length-1&&(s[0].y-=l);break;case p.sideBottom:s[n-1].y+=l,s[n].y+=l,1===n&&(s[s.length-1].y+=l),n===s.length-1&&(s[0].y+=l)}}}}export{m as S,r as T,x as l,o as t};