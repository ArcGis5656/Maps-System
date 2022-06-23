/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{a as t,O as n}from"./OptimizedFeature.js";import{isNumericField as o}from"../layers/support/fieldUtils.js";const r={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function i(e){return r[e]}function*s(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function l(e){for(const t of e)if(t.length>2)return!0;return!1}function u(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function f(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function a(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return d(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const o of t.coordinates)d(e,o,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const o of t.coordinates){y(e,o[0],n);for(let t=1;t<o.length;t++)p(e,o[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return m(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const o=t.coordinates;y(e,o[0],n);for(let t=1;t<o.length;t++)p(e,o[t],n);return e}(e,t,n)}}function y(e,t,n){const o=f(t);u(o)?d(e,o,n):g(e,o,n)}function p(e,t,n){const o=f(t);u(o)?g(e,o,n):d(e,o,n)}function d(e,t,n){for(const o of t)m(e,o,n);e.lengths.push(t.length)}function g(e,t,n){for(let o=t.length-1;o>=0;o--)m(e,t[o],n);e.lengths.push(t.length)}function m(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function h(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function w(t){if(!t)throw new e("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new e("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new e("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function P(e,t={}){const n=[],r=new Set,u=new Set;let f,a=!1,y=null,p=!1,{geometryType:d=null}=t,g=!1;for(const t of s(e)){const{geometry:e,properties:o,id:s}=t;if(!e||(d||(d=i(e.type)),i(e.type)===d)){if(!a){a=l(c(e))}if(p||(p=null!=s,p&&(f=typeof s,y=Object.keys(o).filter((e=>o[e]===s)))),p&&null!=s&&(y.length>1?y=y.filter((e=>o[e]===s)):1===y.length&&(y=o[y[0]]===s?y:[])),!g&&o){let e=!0;for(const t in o){if(r.has(t))continue;const i=o[t];if(null==i){e=!1,u.add(t);continue}const s=h(i);"unknown"!==s?(u.delete(t),r.add(t),n.push({name:t,alias:t,type:s})):u.add(t)}g=e}}}const m=y&&1===y.length&&y[0]||null;if(m)for(const e of n)if(e.name===m&&o(e)){e.type="esriFieldTypeOID";break}return{fields:n,geometryType:d,hasZ:a,objectIdFieldName:m,objectIdFieldType:f,unknownFields:Array.from(u)}}function b(e,o){return Array.from(function*(e,o={}){const{geometryType:r,objectIdField:s}=o;for(const l of e){var c;const{geometry:e,properties:u,id:f}=l;if(e&&i(e.type)!==r)continue;const y=u||{};let p=null!=(c=y[s])?c:null;s&&null!=f&&!y[s]&&(y[s]=p=f);const d=new t(e?a(new n,e,o):null,y,null,p);yield d}}(s(e),o))}export{b as c,i as g,P as i,w as v};
