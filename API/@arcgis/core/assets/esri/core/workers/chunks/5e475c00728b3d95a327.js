"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5194],{75194:(e,n,t)=>{t.r(n),t.d(n,{hydratedAdapter:()=>c});var a=t(21801),o=t(84069),s=t(91597),i=t(44567),r=t(92896);t(76506),t(40642),t(71552),t(34250),t(92143),t(31450),t(91306),t(60474),t(66396),t(22723),t(86656),t(60991),t(17533),t(6540),t(73796),t(74673),t(21972),t(23639),t(91055),t(19657),t(6906),t(50406),t(97714),t(60947),t(2906),t(35132),t(89623),t(86787),t(98380);const c={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){const a=e.hasZ(n),o=e.hasM(n),i=new s.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(i.z=e.getPointZ(n)),o&&(i.m=e.getPointM(n)),i.cache._geVersion=n,i},exportPolygon:function(e,n,t){const a=new i.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){const a=new r.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){const a=new o.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){const o=e.hasZ(n),s=e.hasM(n),i=new a.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(o){const t=e.getZExtent(n);i.zmin=t.vmin,i.zmax=t.vmax}if(s){const t=e.getMExtent(n);i.mmin=t.vmin,i.mmax=t.vmax}return i.cache._geVersion=n,i}}}}]);