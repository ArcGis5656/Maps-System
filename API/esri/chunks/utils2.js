// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(c,e){c.ComboboxChildSelector="CALCITE-COMBOBOX-ITEM, CALCITE-COMBOBOX-ITEM-GROUP";c.ComboboxDefaultPlacement="bottom-leading";c.ComboboxItem="CALCITE-COMBOBOX-ITEM";c.ComboboxItemGroup="CALCITE-COMBOBOX-ITEM-GROUP";c.TEXT={removeTag:"Remove tag"};c.getAncestors=function(a){var b,d;a=null===(b=a.parentElement)||void 0===b?void 0:b.closest("CALCITE-COMBOBOX-ITEM, CALCITE-COMBOBOX-ITEM-GROUP");b=null===(d=null===a||void 0===a?void 0:a.parentElement)||void 0===d?void 0:
d.closest("CALCITE-COMBOBOX-ITEM, CALCITE-COMBOBOX-ITEM-GROUP");return[a,b].filter(f=>f)};c.getDepth=function(a){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",a,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength};c.getItemAncestors=function(a){var b;return(null===(b=a.ancestors)||void 0===b?void 0:b.filter(d=>"CALCITE-COMBOBOX-ITEM"===d.nodeName))||[]};c.getItemChildren=function(a){return e.nodeListToArray(a.querySelectorAll("calcite-combobox-item"))};
c.hasActiveChildren=function(a){return 0<e.nodeListToArray(a.querySelectorAll("calcite-combobox-item")).filter(b=>b.selected).length}});