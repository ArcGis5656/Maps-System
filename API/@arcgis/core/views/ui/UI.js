/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{b as i,e,i as o}from"../../chunks/domUtils.js";import{E as n}from"../../chunks/Evented.js";import s from"../../core/Handles.js";import{watch as r,initial as d}from"../../core/reactiveUtils.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{cast as p}from"../../core/accessorSupport/decorators/cast.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import l from"../../core/Accessor.js";import{i as h}from"../../chunks/widgetUtils.js";import"../../chunks/Logger.js";import{a as u}from"../../chunks/widgetThemeUtils.js";import"../../chunks/handleUtils.js";import"../../core/Collection.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/tracking.js";import"../../chunks/utils.js";import"../../chunks/get.js";import"../../chunks/metadata.js";import"../../chunks/deprecate.js";import"../../chunks/watch.js";const m="esri-component";let g=class extends l{constructor(){super(...arguments),this.widget=null}destroy(){this.widget&&this.widget.destroy(),this.node=null}get id(){return this.get("widget.id")||this.get("node.id")}set node(t){const i=this._get("node");t!==i&&(t&&t.classList.add(m),i&&i.classList.remove(m),this._set("node",t))}castNode(t){return t?"string"==typeof t||function(t){return t&&"nodeType"in t}(t)?(this._set("widget",null),i(t)):(function(t){return t&&"function"==typeof t.render}(t)&&!t.domNode&&(t.domNode=document.createElement("div")),this._set("widget",t),t.domNode):(this._set("widget",null),null)}};t([a({dependsOn:[]})],g.prototype,"id",null),t([a()],g.prototype,"node",null),t([p("node")],g.prototype,"castNode",null),t([a({readOnly:!0})],g.prototype,"widget",void 0),g=t([c("esri.views.ui.Component")],g);const f=g,_={left:0,top:0,bottom:0,right:0},y={bottom:30,top:15,right:15,left:15},v="esri-ui",C="esri-ui-corner",j="esri-ui-inner-container",w="esri-ui-manual-container",k="esri-ui-corner-container",L="esri-ui-top-left",P="esri-ui-top-right",b="esri-ui-bottom-left",x="esri-ui-bottom-right";function N(t){const i=t,e="object"==typeof i&&null!==i&&Object.getPrototypeOf(i);return(null===e||e===Object.prototype)&&("component"in i||"index"in i||"position"in i)?t:null}function T(t,{top:i,bottom:e,left:o,right:n}){t.style.top=i,t.style.bottom=e,t.style.left=o,t.style.right=n}let A=class extends n.EventedAccessor{constructor(t){super(t),this._cornerNameToContainerLookup={},this._positionNameToContainerLookup={},this._components=new Array,this._componentToKey=new Map,this._handles=new s,this.view=null,this._applyViewPadding=()=>{const t=this.container;t&&T(t,this._toPxPosition(this._getViewPadding()))},this._applyUIPadding=()=>{const t=this._innerContainer;t&&T(t,this._toPxPosition(this.padding))},this._initContainers()}initialize(){this._handles.add([r((()=>{var t;return[null==(t=this.view)?void 0:t.padding,this.container]}),this._applyViewPadding,d),r((()=>this.padding),this._applyUIPadding,d)])}destroy(){this.container=null;for(const t of this._components)t.destroy();this._components.length=0,this._handles.destroy(),this._componentToKey.clear()}set container(t){const i=this._get("container");t!==i&&(t&&(t.classList.add(v),t.classList.add(u()),this._attachContainers(t)),i&&(i.classList.remove(v),T(i,{top:"",bottom:"",left:"",right:""}),e(i)),this._set("container",t))}get height(){const t=this.get("view.height")||0;if(0===t)return t;const i=this._getViewPadding(),e=i.top+i.bottom;return Math.max(t-e,0)}get padding(){return this._get("padding")}set padding(t){t?this._override("padding",t):this._clearOverride("padding")}castPadding(t){return"number"==typeof t?{bottom:t,top:t,right:t,left:t}:{...y,...t}}get width(){const t=this.get("view.width")||0;if(0===t)return t;const i=this._getViewPadding(),e=i.left+i.right;return Math.max(t-e,0)}add(t,i){let e,o;if(Array.isArray(t))return void t.forEach((t=>this.add(t,i)));const n=N(t);n&&({index:e,position:i,component:t,key:o}=n),i&&"object"==typeof i&&({index:e,key:o,position:i}=i),!t||i&&!this._isValidPosition(i)||this._add(t,i,e,o)}remove(t,i){if(!t)return;if(Array.isArray(t))return t.map((t=>this.remove(t,i)));const e=this._find(t);if(e){const o=this._componentToKey;if(o.has(t)&&o.get(t)!==i)return;const n=this._components.indexOf(e);return e.node.parentNode&&e.node.parentNode.removeChild(e.node),this._componentToKey.delete(t),this._components.splice(n,1)[0]}}empty(t){if(Array.isArray(t))return t.map((t=>this.empty(t))).reduce(((t,i)=>t.concat(i)));if("manual"===(t=t||"manual")){return Array.prototype.slice.call(this._manualContainer.children).filter((t=>!t.classList.contains(C))).map((t=>this.remove(t)))}return this._isValidPosition(t)?Array.prototype.slice.call(this._cornerNameToContainerLookup[t].children).map(this.remove,this):null}move(t,i){if(Array.isArray(t)&&t.forEach((t=>this.move(t,i))),!t)return;let e;const o=N(t)||N(i);if(o&&(e=o.index,i=o.position,t=o.component||t),i&&!this._isValidPosition(i))return;const n=this.remove(t);n&&this.add(n,{position:i,index:e})}find(t){if(!t)return null;const i=this._findById(t);return i&&(i.widget||i.node)}getPosition(t){for(const i in this._positionNameToContainerLookup){if(this._positionNameToContainerLookup[i].contains(t))return i}return null}_add(t,i,e,o){t instanceof f||(t=new f({node:t})),this._place({component:t,position:i,index:e}),this._components.push(t),o&&this._componentToKey.set(t,o)}_find(t){return t?t instanceof f?this._findByComponent(t):"string"==typeof t?this._findById(t):this._findByNode(t.domNode||t):null}_getViewPadding(){return this.get("view.padding")||_}_attachContainers(t){t.appendChild(this._innerContainer),t.appendChild(this._manualContainer)}_initContainers(){const t=document.createElement("div");t.classList.add(j),t.classList.add(k);const i=document.createElement("div");i.classList.add(j),i.classList.add(w);const e=document.createElement("div");e.classList.add(L),e.classList.add(C),t.appendChild(e);const o=document.createElement("div");o.classList.add(P),o.classList.add(C),t.appendChild(o);const n=document.createElement("div");n.classList.add(b),n.classList.add(C),t.appendChild(n);const s=document.createElement("div");s.classList.add(x),s.classList.add(C),t.appendChild(s),this._innerContainer=t,this._manualContainer=i;const r=h();this._cornerNameToContainerLookup={"top-left":e,"top-right":o,"bottom-left":n,"bottom-right":s,"top-leading":r?o:e,"top-trailing":r?e:o,"bottom-leading":r?s:n,"bottom-trailing":r?n:s},this._positionNameToContainerLookup={manual:i,...this._cornerNameToContainerLookup}}_isValidPosition(t){return!!this._positionNameToContainerLookup[t]}_place(t){const i=t.component,e=t.position||"manual",n=t.index,s=this._positionNameToContainerLookup[e],r=n>-1;var d;if((d=i.widget)&&!d._started&&"function"==typeof d.postMixInProperties&&"function"==typeof d.buildRendering&&"function"==typeof d.postCreate&&"function"==typeof d.startup&&i.widget.startup(),!r)return void s.appendChild(i.node);const a=Array.prototype.slice.call(s.children);if(0===n)return void(s.firstChild?o(i.node,s.firstChild):s.appendChild(i.node));n>=a.length?s.appendChild(i.node):o(i.node,a[n])}_toPxPosition(t){return{top:this._toPxUnit(t.top),left:this._toPxUnit(t.left),right:this._toPxUnit(t.right),bottom:this._toPxUnit(t.bottom)}}_toPxUnit(t){return 0===t?"0":t+"px"}_findByComponent(t){let i,e=null;return this._components.some((o=>(i=o===t,i&&(e=o),i))),e}_findById(t){let i,e=null;return this._components.some((o=>(i=o.id===t,i&&(e=o),i))),e}_findByNode(t){let i,e=null;return this._components.some((o=>(i=o.node===t,i&&(e=o),i))),e}};t([a()],A.prototype,"container",null),t([a()],A.prototype,"height",null),t([a({value:y})],A.prototype,"padding",null),t([p("padding")],A.prototype,"castPadding",null),t([a()],A.prototype,"view",void 0),t([a()],A.prototype,"width",null),A=t([c("esri.views.ui.UI")],A);const U=A;export{f as C,U as default};