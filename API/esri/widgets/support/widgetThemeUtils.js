// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){function b(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function c(){return b().startsWith("dark")}a.getCalciteThemeClass=function(){return`calcite-theme-${c()?"dark":"light"}`};a.getThemeName=b;a.isDarkTheme=c;Object.defineProperty(a,"__esModule",{value:!0})});