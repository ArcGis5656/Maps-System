// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../symbols ../../../intl/date ../../../renderers/support/numberUtils ../../../symbols/SimpleLineSymbol".split(" "),function(n,d,k,t,l,p,q){function m(a){return g.apply(this,arguments)}function g(){g=k._asyncToGenerator(function*(a){if(!("visualVariables"in a&&a.visualVariables))return null;a=a.visualVariables.find(e=>"color"===e.type);if(!a)return null;var b=null,c=null;if(a.stops){if(1===a.stops.length)return a.stops[0].color;
b=a.stops[0].value;c=a.stops[a.stops.length-1].value}b+=(c-b)/2;({getColor:c}=yield new Promise((e,f)=>n(["../../../renderers/visualVariables/support/visualVariableUtils"],e,f)));return c(a,b)});return g.apply(this,arguments)}function h(){h=k._asyncToGenerator(function*(a,b){const c=a.trailWidth||1;a=b||(yield m(a))||a.color;return new q({cap:"butt",color:a,width:c})});return h.apply(this,arguments)}const r=l.convertDateFormatToIntlOptions("short-date");d.RGB_IMG_SOURCE=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII\x3d",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII\x3d","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII\x3d"];d.SPECIAL_CHARS_GREATER_THAN="\x3e";d.SPECIAL_CHARS_LESS_THAN="\x3c";d.createStopLabel=function(a,
b,c,e){let f="";0===b?f="\x3c ":b===c&&(f="\x3e ");b=null;b=e?l.formatDate(a,r):p.format(a);return f+b};d.getMedianColor=m;d.getSymbolForFlowRenderer=function(a,b){return h.apply(this,arguments)};Object.defineProperty(d,"__esModule",{value:!0})});