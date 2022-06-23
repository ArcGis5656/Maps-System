/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{H as t,c as e,h as i,p as o}from"../widgets/Widget.js";import{c as n,d as a}from"./color-picker-swatch.js";import{f as l}from"./dom.js";import{d as r}from"./icon.js";import{d as s}from"./input.js";import{d as c}from"./progress.js";import{c as h}from"./math.js";import{d}from"./button.js";import{d as u}from"./loader.js";import{d as m}from"./tab.js";import{d as p}from"./tab-nav.js";import{d as f}from"./tab-title.js";import{d as g}from"./tabs.js";import{d as v,c as C}from"./debounce.js";import"./tslib.es6.js";import"../intl.js";import"./number.js";import"./jsonMap.js";import"./object.js";import"../core/lang.js";import"./locale.js";import"./Logger.js";import"../config.js";import"./string.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./assets.js";import"./deprecate.js";import"./domUtils.js";import"./Evented.js";import"../core/Accessor.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./tracking.js";import"./ensureType.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Handles.js";import"../core/Collection.js";import"./shared.js";import"./Promise.js";import"../core/reactiveUtils.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./widgetThemeUtils.js";import"./guid.js";import"./observers.js";import"./label.js";import"./form.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */function b(t){const{r:e,g:i,b:o}=t;return`#${e.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}${o.toString(16).padStart(2,"0")}`.toLowerCase()}const w=/^[0-9A-F]$/i,S=/^#[0-9A-F]{3}$/i,x=/^#[0-9A-F]{6}$/i;function y(t){return k(t)||F(t)}function k(t){return t&&4===t.length&&S.test(t)}function F(t){return t&&7===t.length&&x.test(t)}function A(t){return(t=t.toLowerCase()).startsWith("#")||(t=`#${t}`),k(t)?b(D(t)):t}function D(t){if(!y(t))return null;if(3===(t=t.replace("#","")).length){const[e,i,o]=t.split("");return{r:parseInt(`${e}${e}`,16),g:parseInt(`${i}${i}`,16),b:parseInt(`${o}${o}`,16)}}return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}const j={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},H={RGB:"rgb",RGBA:"rgba",HSL:"hsl",HSLA:"hsla",HSV:"hsv",HSVA:"hsva"};function I(t){if("string"==typeof t){if(t.startsWith("#")){const{length:e}=t;if(4===e||7===e)return j.HEX;if(5===e||9===e)return j.HEXA}if(t.startsWith("rgba("))return j.RGBA_CSS;if(t.startsWith("rgb("))return j.RGB_CSS;if(t.startsWith("hsl("))return j.HSL_CSS;if(t.startsWith("hsla("))return j.HSLA_CSS}if("object"==typeof t){if(E(t,"r","g","b"))return E(t,"a")?H.RGBA:H.RGB;if(E(t,"h","s","l"))return E(t,"a")?H.HSLA:H.HSL;if(E(t,"h","s","v"))return E(t,"a")?H.HSVA:H.HSV}return null}function E(t,...e){return e.every((e=>e&&t&&`${e}`in t))}function T(t,e){return(null==t?void 0:t.rgbNumber())===(null==e?void 0:e.rgbNumber())}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const M="container",R="control-section",L="color-hex-options",_="section",$="header",P="control",B="section--split",N="color-mode-container",U="color-mode",V="channels",K="channel",G="saved-colors",O="saved-colors-section",W="save-color",z="delete-color",X="saved-colors-buttons",q="header--hex",J="color-field-and-slider",Y="color-field-and-slider--interactive",Q="color-field-and-slider-wrap",Z="scope",tt="scope--hue",et="scope--color-field",it="saved-color",ot=n("#007AC2"),nt={r:255,g:255,b:255},at={h:360,s:100,v:100},lt="B",rt="Blue",st="Delete color",ct="G",ht="Green",dt="H",ut="HSV",mt="Hex",pt="Hue",ft="No color",gt="R",vt="Red",Ct="RGB",bt="S",wt="Saturation",St="Save color",xt="Saved",yt="V",kt="Value",Ft={s:{slider:{height:10,width:160},colorField:{height:80,width:160},thumb:{radius:8}},m:{slider:{height:14,width:272},colorField:{height:150,width:272},thumb:{radius:10}},l:{slider:{height:16,width:464},colorField:{height:200,width:464},thumb:{radius:12}}},At="container",Dt="preview",jt="input",Ht=n();let It=class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerHexInputChange=e(this,"calciteColorPickerHexInputChange",7),this.allowEmpty=!1,this.intlHex=mt,this.intlNoColor=ft,this.scale="m",this.value=A(Ht.hex()),this.onCalciteInputBlur=()=>{const t=this.inputNode,e=t.value,i=`#${e}`;this.allowEmpty&&!e||y(i)&&F(i)||(t.value=this.allowEmpty&&!this.internalColor?"":this.formatForInternalInput(b(this.internalColor.object())))},this.onInputChange=()=>{const t=this.inputNode.value;let e;if(t){const i=t;if(!D(`#${i}`))return;e=A(i)}else this.allowEmpty&&(e=null);this.value=e,this.calciteColorPickerHexInputChange.emit()},this.internalColor=Ht,this.previousNonNullValue=this.value,this.storeInputRef=t=>{this.inputNode=t}}connectedCallback(){const{allowEmpty:t,value:e}=this;if(e){const t=A(e);y(t)&&(this.internalColor=n(t),this.value=t)}else t&&(this.internalColor=null,this.value=null)}handleValueChange(t,e){if(t){const e=A(t);if(y(e)){const{internalColor:t}=this,i=!t||e!==A(t.hex());return this.internalColor=n(e),this.previousNonNullValue=e,this.value=e,void(i&&this.calciteColorPickerHexInputChange.emit())}}else if(this.allowEmpty)return this.internalColor=null,this.value=null,void this.calciteColorPickerHexInputChange.emit();this.value=e}onInputKeyDown(t){const{altKey:e,ctrlKey:i,metaKey:o,shiftKey:n}=t,{internalColor:a,value:l}=this,r=t.key;if("Tab"===r||"Enter"===r)return void this.onInputChange();if("ArrowDown"===r||"ArrowUp"===r){if(!l)return this.value=this.previousNonNullValue,void t.preventDefault();const e="ArrowUp"===r?1:-1,i=n?10:1;return this.value=A(this.nudgeRGBChannels(a,i*e).hex()),void t.preventDefault()}const s=e||i||o,c=1===r.length,h=w.test(r);!c||s||h||t.preventDefault()}render(){const{intlHex:t,value:e}=this,o=this.formatForInternalInput(e);return i("div",{class:At},i("calcite-input",{class:jt,label:t,maxLength:6,onCalciteInputBlur:this.onCalciteInputBlur,onCalciteInputChange:this.onInputChange,prefixText:"#",ref:this.storeInputRef,scale:this.scale,value:o}),o?i("calcite-color-picker-swatch",{active:!0,class:Dt,color:`#${o}`,scale:this.scale}):null)}async setFocus(){l(this.inputNode)}formatForInternalInput(t){return t?t.replace("#",""):""}nudgeRGBChannels(t,e){return n.rgb(t.array().map((t=>t+e)))}get el(){return this}static get watchers(){return{value:["handleValueChange"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}.container{display:inline-grid;width:100%;-ms-flex-align:center;align-items:center;grid-template-columns:1fr auto}.preview{grid-column:2/3;pointer-events:none;margin-top:0px;margin-bottom:0px;margin-left:0.25rem;margin-right:0.25rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;z-index:1}.preview,.input{grid-row:1}.input{grid-column:1/3;width:100%;text-transform:uppercase}"}};function Et(){if("undefined"==typeof customElements)return;["calcite-color-picker-hex-input","calcite-color-picker-swatch","calcite-icon","calcite-input","calcite-progress"].forEach((t=>{switch(t){case"calcite-color-picker-hex-input":customElements.get(t)||customElements.define(t,It);break;case"calcite-color-picker-swatch":customElements.get(t)||a();break;case"calcite-icon":customElements.get(t)||r();break;case"calcite-input":customElements.get(t)||s();break;case"calcite-progress":customElements.get(t)||c()}}))}It=o(It,[1,"calcite-color-picker-hex-input",{allowEmpty:[4,"allow-empty"],intlHex:[1,"intl-hex"],intlNoColor:[1,"intl-no-color"],scale:[513],value:[1537],internalColor:[32],setFocus:[64]},[[2,"keydown","onInputKeyDown"]]]),Et();const Tt=A(ot.hex());let Mt=class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteColorPickerChange=e(this,"calciteColorPickerChange",7),this.calciteColorPickerInput=e(this,"calciteColorPickerInput",7),this.allowEmpty=!1,this.appearance="default",this.color=ot,this.format="auto",this.hideHex=!1,this.hideChannels=!1,this.hideSaved=!1,this.intlB=lt,this.intlBlue=rt,this.intlDeleteColor=st,this.intlG=ct,this.intlGreen=ht,this.intlH=dt,this.intlHsv=ut,this.intlHex=mt,this.intlHue=pt,this.intlNoColor=ft,this.intlR=gt,this.intlRed=vt,this.intlRgb=Ct,this.intlS=bt,this.intlSaturation=wt,this.intlSaveColor=St,this.intlSaved=xt,this.intlV=yt,this.intlValue=kt,this.scale="m",this.value=Tt,this.colorFieldAndSliderHovered=!1,this.hueThumbState="idle",this.internalColorUpdateContext=null,this.mode=j.HEX,this.shiftKeyChannelAdjustment=0,this.sliderThumbState="idle",this.colorFieldAndSliderInteractive=!1,this.channelMode="rgb",this.channels=this.toChannels(ot),this.dimensions=Ft.m,this.savedColors=[],this.handleTabActivate=t=>{this.channelMode=t.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)},this.handleColorFieldScopeKeyDown=t=>{const e=t.key,i={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};i[e]&&(t.preventDefault(),this.scopeOrientation="ArrowDown"===e||"ArrowUp"===e?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+i[e].x||0,this.colorFieldScopeTop+i[e].y||0,!1))},this.handleHueScopeKeyDown=t=>{const e=t.shiftKey?10:1,i=t.key,o={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(o[i]){t.preventDefault();const n=o[i]*e,a=this.baseColorFieldColor.hue(),l=this.baseColorFieldColor.hue(a+n);this.internalColorSet(l,!1)}},this.handleHexInputChange=t=>{t.stopPropagation();const{allowEmpty:e,color:i}=this,o=t.target.value;if(e&&!o)return void this.internalColorSet(null);o!==(i&&A(i.hex()))&&this.internalColorSet(n(o))},this.handleSavedColorSelect=t=>{const e=t.currentTarget;this.internalColorSet(n(e.color))},this.handleChannelInput=t=>{const e=t.currentTarget,i=t.detail.nativeEvent.target,o=Number(e.getAttribute("data-channel-index")),n="rgb"===this.channelMode?nt[Object.keys(nt)[o]]:at[Object.keys(at)[o]];let a;if(this.allowEmpty&&!e.value)a="";else{const t=Number(e.value)+this.shiftKeyChannelAdjustment;a=h(t,0,n).toString()}e.value=a,i.value=a},this.handleChannelChange=t=>{const e=t.currentTarget,i=Number(e.getAttribute("data-channel-index")),o=[...this.channels];if(this.allowEmpty&&!e.value)return this.channels=[null,null,null],void this.internalColorSet(null);o[i]=Number(e.value),this.updateColorFromChannels(o)},this.handleSavedColorKeyDown=t=>{" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),t.stopPropagation(),this.handleSavedColorSelect(t))},this.handleColorFieldAndSliderMouseLeave=()=>{this.colorFieldAndSliderInteractive=!1,this.colorFieldAndSliderHovered=!1,"drag"!==this.sliderThumbState&&"drag"!==this.hueThumbState&&(this.hueThumbState="idle",this.sliderThumbState="idle",this.drawColorFieldAndSlider())},this.handleColorFieldAndSliderMouseDown=t=>{const{offsetX:e,offsetY:i}=t,o=this.getCanvasRegion(i);"color-field"===o?(this.hueThumbState="drag",this.captureColorFieldColor(e,i)):"slider"===o&&(this.sliderThumbState="drag",this.captureHueSliderColor(e)),t.preventDefault(),document.addEventListener("mousemove",this.globalMouseMoveHandler),document.addEventListener("mouseup",this.globalMouseUpHandler,{once:!0}),this.activeColorFieldAndSliderRect=this.fieldAndSliderRenderingContext.canvas.getBoundingClientRect()},this.globalMouseUpHandler=()=>{const t="drag"===this.sliderThumbState||"drag"===this.hueThumbState;this.hueThumbState="idle",this.sliderThumbState="idle",this.activeColorFieldAndSliderRect=null,this.drawColorFieldAndSlider(),t&&this.calciteColorPickerChange.emit()},this.globalMouseMoveHandler=t=>{const{el:e,dimensions:i}=this,o="drag"===this.sliderThumbState,n="drag"===this.hueThumbState;if(!e.isConnected||!o&&!n)return;let a,l;const r=this.activeColorFieldAndSliderRect,{clientX:s,clientY:c}=t;if(this.colorFieldAndSliderHovered)a=s-r.x,l=c-r.y;else{const t=i.colorField.width,e=i.colorField.height,o=i.slider.height;a=s<r.x+t&&s>r.x?s-r.x:s<r.x?0:t,l=c<r.y+e+o&&c>r.y?c-r.y:c<r.y?0:e+o}n?this.captureColorFieldColor(a,l,!1):this.captureHueSliderColor(a)},this.handleColorFieldAndSliderMouseEnterOrMove=({offsetX:t,offsetY:e})=>{const{dimensions:{colorField:i,slider:o,thumb:n}}=this;this.colorFieldAndSliderInteractive=e<=i.height+o.height,this.colorFieldAndSliderHovered=!0;const a=this.getCanvasRegion(e);if("color-field"===a){const o=this.hueThumbState,a=this.baseColorFieldColor.hsv(),l=Math.round(a.saturationv()/(at.s/i.width)),r=Math.round(i.height-a.value()/(at.v/i.height)),s=this.containsPoint(t,e,l,r,n.radius);let c=!1;"idle"===o&&s?(this.hueThumbState="hover",c=!0):"hover"!==o||s||(this.hueThumbState="idle",c=!0),"drag"!==this.hueThumbState&&c&&this.drawColorFieldAndSlider()}else if("slider"===a){const a=this.baseColorFieldColor.hsv().saturationv(100).value(100),l=this.sliderThumbState,r=Math.round(a.hue()/(360/o.width)),s=Math.round((o.height+this.getSliderCapSpacing())/2)+i.height,c=this.containsPoint(t,e,r,s,n.radius);let h=!1;"idle"===l&&c?(this.sliderThumbState="hover",h=!0):"hover"!==l||c||(this.sliderThumbState="idle",h=!0),"drag"!==this.sliderThumbState&&h&&this.drawColorFieldAndSlider()}},this.storeColorFieldScope=t=>{this.colorFieldScopeNode=t},this.renderChannelsTabTitle=t=>{const{channelMode:e,intlRgb:o,intlHsv:n}=this,a="rgb"===t?o:n;return i("calcite-tab-title",{active:t===e,class:U,"data-color-mode":t,key:t,onCalciteTabsActivate:this.handleTabActivate},a)},this.renderChannelsTab=t=>{const{channelMode:e,channels:o,intlB:n,intlBlue:a,intlG:l,intlGreen:r,intlH:s,intlHue:c,intlR:h,intlRed:d,intlS:u,intlSaturation:m,intlV:p,intlValue:f}=this,g="rgb"===t,v=g?[h,l,n]:[s,u,p],C=g?[d,r,a]:[c,m,f];return i("calcite-tab",{active:t===e,class:P,key:t},i("div",{class:V},o.map(((t,e)=>this.renderChannel(t,e,v[e],C[e])))))},this.renderChannel=(t,e,o,n)=>i("calcite-input",{class:K,"data-channel-index":e,label:n,numberButtonType:"none",onCalciteInputChange:this.handleChannelChange,onCalciteInputInput:this.handleChannelInput,prefixText:o,scale:"l"===this.scale?"m":"s",type:"number",value:null==t?void 0:t.toString()}),this.deleteColor=()=>{const t=this.color.hex();if(!(this.savedColors.indexOf(t)>-1))return;const e=this.savedColors.filter((e=>e!==t));this.savedColors=e;const i=`calcite-color-${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(e))},this.saveColor=()=>{const t=this.color.hex();if(this.savedColors.indexOf(t)>-1)return;const e=[...this.savedColors,t];this.savedColors=e;const i=`calcite-color-${this.storageId}`;this.storageId&&localStorage.setItem(i,JSON.stringify(e))},this.drawColorFieldAndSlider=function(t,e,i){var o=!0,n=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return C(i)&&(o="leading"in i?!!i.leading:o,n="trailing"in i?!!i.trailing:n),v(t,e,{leading:o,maxWait:e,trailing:n})}((()=>{this.fieldAndSliderRenderingContext&&(this.drawColorField(),this.drawHueSlider())}),16),this.captureColorFieldColor=(t,e,i=!0)=>{const{dimensions:{colorField:{height:o,width:n}}}=this,a=Math.round(at.s/n*t),l=Math.round(at.v/o*(o-e));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(a).value(l),i)},this.initColorFieldAndSlider=t=>{this.fieldAndSliderRenderingContext=t.getContext("2d"),this.setCanvasContextSize(t,{width:this.dimensions.colorField.width,height:this.dimensions.colorField.height+this.dimensions.slider.height+2*this.getSliderCapSpacing()}),this.drawColorFieldAndSlider()}}handleColorChange(t,e){this.drawColorFieldAndSlider(),this.updateChannelsFromColor(t),this.previousColor=e,this.internalColorUpdateContext||(this.value=this.toValue(t))}handleFormatChange(t){this.setMode(t),this.value=this.toValue(this.color)}handleScaleChange(t="m"){this.updateDimensions(t)}handleValueChange(t,e){const{allowEmpty:i,format:o}=this;let a=!1;if(!i||t){const i=I(t);if(!i||"auto"!==o&&i!==o)return this.showIncompatibleColorWarning(t,o),void(this.value=e);a=this.mode!==i,this.setMode(i)}const l="drag"===this.sliderThumbState||"drag"===this.hueThumbState;if(this.internalColorUpdateContext){if("initial"===this.internalColorUpdateContext)return;return this.calciteColorPickerInput.emit(),void(l||this.calciteColorPickerChange.emit())}const r=i&&!t?null:n(t),s=!T(r,this.color);(a||s)&&(this.color=r,this.calciteColorPickerInput.emit(),l||this.calciteColorPickerChange.emit())}get baseColorFieldColor(){return this.color||this.previousColor||ot}handleChannelKeyUpOrDown(t){this.shiftKeyChannelAdjustment=0;const e=t.key;if("ArrowUp"!==e&&"ArrowDown"!==e||!t.composedPath().some((t=>{var e;return null===(e=t.classList)||void 0===e?void 0:e.contains(K)})))return;const{shiftKey:i}=t;if(t.preventDefault(),!this.color)return this.internalColorSet(this.previousColor),void t.stopPropagation();this.shiftKeyChannelAdjustment="ArrowUp"===e&&i?9:"ArrowDown"===e&&i?-9:0}async setFocus(){return l(this.colorFieldScopeNode)}componentWillLoad(){const{allowEmpty:t,color:e,format:i,value:o}=this,a=t&&!o,l=I(o),r=a||"auto"===i&&l||i===l,s=a?null:r?n(o):e;r||this.showIncompatibleColorWarning(o,i),this.setMode(i),this.internalColorSet(s,!1,"initial"),this.updateDimensions(this.scale);const c=`calcite-color-${this.storageId}`;this.storageId&&localStorage.getItem(c)&&(this.savedColors=JSON.parse(localStorage.getItem(c)))}disconnectedCallback(){document.removeEventListener("mousemove",this.globalMouseMoveHandler),document.removeEventListener("mouseup",this.globalMouseUpHandler)}render(){const{allowEmpty:t,color:e,intlDeleteColor:o,hideHex:n,hideChannels:a,hideSaved:l,intlHex:r,intlSaved:s,intlSaveColor:c,savedColors:h,scale:d}=this,u=e?e.hex():null,m="l"===d?"m":"s",{colorFieldAndSliderInteractive:p,colorFieldScopeTop:f,colorFieldScopeLeft:g,hueScopeLeft:v,hueScopeTop:C,scopeOrientation:b,dimensions:{colorField:{height:w,width:S},slider:{height:x}}}=this,y=null!=C?C:x/2+w,k=null!=v?v:S*ot.hue()/at.h,F=null===e,A="vertical"===b;return i("div",{class:M},i("div",{class:Q},i("canvas",{class:{[J]:!0,[Y]:p},onMouseDown:this.handleColorFieldAndSliderMouseDown,onMouseEnter:this.handleColorFieldAndSliderMouseEnterOrMove,onMouseLeave:this.handleColorFieldAndSliderMouseLeave,onMouseMove:this.handleColorFieldAndSliderMouseEnterOrMove,ref:this.initColorFieldAndSlider}),i("div",{"aria-label":A?this.intlValue:this.intlSaturation,"aria-valuemax":A?at.v:at.s,"aria-valuemin":"0","aria-valuenow":(A?null==e?void 0:e.saturationv():null==e?void 0:e.value())||"0",class:{[Z]:!0,[et]:!0},onKeyDown:this.handleColorFieldScopeKeyDown,ref:this.storeColorFieldScope,role:"slider",style:{top:`${f||0}px`,left:`${g||0}px`},tabindex:"0"}),i("div",{"aria-label":this.intlHue,"aria-valuemax":at.h,"aria-valuemin":"0","aria-valuenow":(null==e?void 0:e.round().hue())||ot.round().hue(),class:{[Z]:!0,[tt]:!0},onKeyDown:this.handleHueScopeKeyDown,role:"slider",style:{top:`${y}px`,left:`${k}px`},tabindex:"0"})),n&&a?null:i("div",{class:{[R]:!0,[_]:!0}},n?null:i("div",{class:L},i("span",{class:{[$]:!0,[q]:!0}},r),i("calcite-color-picker-hex-input",{allowEmpty:t,class:P,onCalciteColorPickerHexInputChange:this.handleHexInputChange,scale:m,value:u})),a?null:i("calcite-tabs",{class:{[N]:!0,[B]:!0},scale:m},i("calcite-tab-nav",{slot:"tab-nav"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv"))),l?null:i("div",{class:{[O]:!0,[_]:!0}},i("div",{class:$},i("label",null,s),i("div",{class:X},i("calcite-button",{appearance:"transparent",class:z,color:"neutral",disabled:F,iconStart:"minus",label:o,onClick:this.deleteColor,scale:m,type:"button"}),i("calcite-button",{appearance:"transparent",class:W,color:"neutral",disabled:F,iconStart:"plus",label:c,onClick:this.saveColor,scale:m,type:"button"}))),h.length>0?i("div",{class:G},[...h.map((t=>i("calcite-color-picker-swatch",{active:u===t,class:it,color:t,key:t,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:d,tabIndex:0})))]):null))}showIncompatibleColorWarning(t,e){console.warn(`ignoring color value (${t}) as it is not compatible with the current format (${e})`)}setMode(t){this.mode="auto"===t?this.mode:t}captureHueSliderColor(t){const{dimensions:{slider:{width:e}}}=this,i=360/e*t;this.internalColorSet(this.baseColorFieldColor.hue(i),!1)}getCanvasRegion(t){const{dimensions:{colorField:{height:e},slider:{height:i}}}=this;return t<=e?"color-field":t<=e+i?"slider":"none"}internalColorSet(t,e=!0,i="internal"){e&&T(t,this.color)||(this.internalColorUpdateContext=i,this.color=t,this.value=this.toValue(t),this.internalColorUpdateContext=null)}toValue(t,e=this.mode){if(!t)return null;if(e.includes("hex"))return A(t.round().hex());if(e.includes("-css"))return t[e.replace("-css","").replace("a","")]().round().string();const i=t[e]().round().object();return e.endsWith("a")&&(i.a=i.alpha,delete i.alpha),i}getSliderCapSpacing(){const{dimensions:{slider:{height:t},thumb:{radius:e}}}=this;return 2*e-t}updateDimensions(t="m"){this.dimensions=Ft[t]}drawColorField(){const t=this.fieldAndSliderRenderingContext,{dimensions:{colorField:{height:e,width:i}}}=this;t.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).string(),t.fillRect(0,0,i,e);const o=t.createLinearGradient(0,0,i,0);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=o,t.fillRect(0,0,i,e);const n=t.createLinearGradient(0,0,0,e);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=n,t.fillRect(0,0,i,e),this.drawActiveColorFieldColor()}setCanvasContextSize(t,{height:e,width:i}){const o=window.devicePixelRatio||1;t.width=i*o,t.height=e*o,t.style.height=`${e}px`,t.style.width=`${i}px`;t.getContext("2d").scale(o,o)}containsPoint(t,e,i,o,n){return Math.pow(t-i,2)+Math.pow(e-o,2)<=Math.pow(n,2)}drawActiveColorFieldColor(){const{color:t}=this;if(!t)return;const e=t.hsv(),{dimensions:{colorField:{height:i,width:o},thumb:{radius:n}}}=this,a=e.saturationv()/(at.s/o),l=i-e.value()/(at.v/i);requestAnimationFrame((()=>{this.colorFieldScopeLeft=a,this.colorFieldScopeTop=l})),this.drawThumb(this.fieldAndSliderRenderingContext,n,a,l,e,this.hueThumbState)}drawThumb(t,e,i,o,n,a){const l=2*Math.PI;t.beginPath(),t.arc(i,o,e,0,l),t.shadowBlur="hover"===a?32:16,t.shadowColor=`rgba(0, 0, 0, ${"drag"===a?.32:.16})`,t.fillStyle="#fff",t.fill(),t.beginPath(),t.arc(i,o,e-3,0,l),t.shadowBlur=0,t.shadowColor="transparent",t.fillStyle=n.rgb().string(),t.fill()}drawActiveHueSliderColor(){const{color:t}=this;if(!t)return;const e=t.hsv().saturationv(100).value(100),{dimensions:{colorField:{height:i},slider:{height:o,width:n},thumb:{radius:a}}}=this,l=e.hue()/(360/n),r=o/2+i;requestAnimationFrame((()=>{this.hueScopeLeft=l,this.hueScopeTop=r})),this.drawThumb(this.fieldAndSliderRenderingContext,a,l,r,e,this.sliderThumbState)}drawHueSlider(){const t=this.fieldAndSliderRenderingContext,{dimensions:{colorField:{height:e},slider:{height:i,width:o}}}=this,a=t.createLinearGradient(0,0,o,0),l=["red","yellow","lime","cyan","blue","magenta","red"],r=1/(l.length-1);let s=0;l.forEach((t=>{a.addColorStop(s,n(t).string()),s+=r})),t.fillStyle=a,t.clearRect(0,e,o,i+2*this.getSliderCapSpacing()),t.fillRect(0,e,o,i),this.drawActiveHueSliderColor()}updateColorFromChannels(t){this.internalColorSet(n(t,this.channelMode))}updateChannelsFromColor(t){this.channels=t?this.toChannels(t):[null,null,null]}toChannels(t){const{channelMode:e}=this;return t[e]().array().map((t=>Math.floor(t)))}get el(){return this}static get watchers(){return{color:["handleColorChange"],format:["handleFormatChange"],scale:["handleScaleChange"],value:["handleValueChange"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .container{width:160px}:host([scale=s]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(20px, 1fr))}:host([scale=s]) .channels{-ms-flex-direction:column;flex-direction:column}:host([scale=s]) .channel{width:100%;margin-bottom:4px}:host([scale=s]) .channel:last-child{margin-bottom:0}:host([scale=m]) .container{width:272px}:host([scale=l]) .header{padding-bottom:0px}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{width:464px}:host([scale=l]) .color-field-and-slider{margin-bottom:-20px}:host([scale=l]) .section{padding:0 16px 16px}:host([scale=l]) .section:first-of-type{padding-top:16px}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(28px, 1fr));grid-gap:12px;padding-top:16px}:host([scale=l]) .control-section{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:baseline;align-items:baseline}:host([scale=l]) .control-section>:nth-child(2){-webkit-margin-start:12px;margin-inline-start:12px}:host([scale=l]) .color-hex-options{display:-ms-flexbox;display:flex;-ms-flex-negative:1;flex-shrink:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;min-height:98px;width:160px}:host([scale=l]) .color-mode-container{-ms-flex-negative:3;flex-shrink:3}:host([appearance=minimal]) .container{border:none}.container{background-color:var(--calcite-ui-foreground-1);display:inline-block;border:1px solid var(--calcite-ui-border-1)}.color-field-and-slider-wrap{position:relative}.scope{pointer-events:none;position:absolute;margin-bottom:0px;margin-right:0px;height:0.5rem;width:0.5rem;padding:0px;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;margin-top:-0.25rem;margin-left:-0.25rem;outline-offset:10px}.scope:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:12px}.color-field-and-slider{margin-bottom:-16px}.color-field-and-slider--interactive{cursor:pointer}.control-section{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.section{padding:0 12px 12px}.section:first-of-type{padding-top:12px}.color-hex-options,.section--split{-ms-flex-positive:1;flex-grow:1}.header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:0.25rem;color:var(--calcite-ui-text-1)}.header--hex,.color-mode-container{padding-top:12px}.channels{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.channel{width:31%}.saved-colors{padding-top:12px;display:grid;grid-template-columns:repeat(auto-fill, minmax(24px, 1fr));grid-gap:8px;width:100%}.saved-colors-buttons{display:-ms-flexbox;display:flex}.saved-color{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.saved-color:hover{-webkit-transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}"}};function Rt(){if("undefined"==typeof customElements)return;["calcite-color-picker","calcite-button","calcite-color-picker-hex-input","calcite-color-picker-swatch","calcite-icon","calcite-input","calcite-loader","calcite-progress","calcite-tab","calcite-tab-nav","calcite-tab-title","calcite-tabs"].forEach((t=>{switch(t){case"calcite-color-picker":customElements.get(t)||customElements.define(t,Mt);break;case"calcite-button":customElements.get(t)||d();break;case"calcite-color-picker-hex-input":customElements.get(t)||Et();break;case"calcite-color-picker-swatch":customElements.get(t)||a();break;case"calcite-icon":customElements.get(t)||r();break;case"calcite-input":customElements.get(t)||s();break;case"calcite-loader":customElements.get(t)||u();break;case"calcite-progress":customElements.get(t)||c();break;case"calcite-tab":customElements.get(t)||m();break;case"calcite-tab-nav":customElements.get(t)||p();break;case"calcite-tab-title":customElements.get(t)||f();break;case"calcite-tabs":customElements.get(t)||g()}}))}Mt=o(Mt,[1,"calcite-color-picker",{allowEmpty:[4,"allow-empty"],appearance:[513],color:[1040],format:[1],hideHex:[4,"hide-hex"],hideChannels:[4,"hide-channels"],hideSaved:[4,"hide-saved"],intlB:[1,"intl-b"],intlBlue:[1,"intl-blue"],intlDeleteColor:[1,"intl-delete-color"],intlG:[1,"intl-g"],intlGreen:[1,"intl-green"],intlH:[1,"intl-h"],intlHsv:[1,"intl-hsv"],intlHex:[1,"intl-hex"],intlHue:[1,"intl-hue"],intlNoColor:[1,"intl-no-color"],intlR:[1,"intl-r"],intlRed:[1,"intl-red"],intlRgb:[1,"intl-rgb"],intlS:[1,"intl-s"],intlSaturation:[1,"intl-saturation"],intlSaveColor:[1,"intl-save-color"],intlSaved:[1,"intl-saved"],intlV:[1,"intl-v"],intlValue:[1,"intl-value"],scale:[513],storageId:[1,"storage-id"],value:[1025],colorFieldAndSliderInteractive:[32],channelMode:[32],channels:[32],dimensions:[32],savedColors:[32],colorFieldScopeTop:[32],colorFieldScopeLeft:[32],scopeOrientation:[32],hueScopeLeft:[32],hueScopeTop:[32],setFocus:[64]},[[2,"keydown","handleChannelKeyUpOrDown"],[2,"keyup","handleChannelKeyUpOrDown"]]]),Rt();const Lt=Mt,_t=Rt;export{Lt as CalciteColorPicker,_t as defineCustomElement};
