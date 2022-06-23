// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a,d){return a.layerType&&"ArcGISFeatureLayer"===a.layerType?a.featureCollectionType===d?!0:!1:!1}b.isMapNotesLayer=function(a){return c(a,"notes")};b.isRouteLayer=function(a){return c(a,"route")};Object.defineProperty(b,"__esModule",{value:!0})});