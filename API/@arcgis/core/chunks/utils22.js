/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{n as e}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const t="CALCITE-COMBOBOX-ITEM",o="CALCITE-COMBOBOX-ITEM-GROUP",n="CALCITE-COMBOBOX-ITEM, CALCITE-COMBOBOX-ITEM-GROUP",l="bottom-leading",a={removeTag:"Remove tag"};function c(e){var t,o;const l=null===(t=e.parentElement)||void 0===t?void 0:t.closest(n);return[l,null===(o=null==l?void 0:l.parentElement)||void 0===o?void 0:o.closest(n)].filter((e=>e))}function r(e){var t;return(null===(t=e.ancestors)||void 0===t?void 0:t.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName)))||[]}function s(t){return e(t.querySelectorAll("calcite-combobox-item"))}function i(t){return e(t.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function u(e){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{n as C,a as T,s as a,t as b,o as c,l as d,c as e,u as f,r as g,i as h};
