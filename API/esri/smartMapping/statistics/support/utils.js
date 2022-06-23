// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/maybe ../../../geometry/SpatialReference ../../../layers/support/fieldUtils ../../../statistics/utils ../../../support/arcadeOnDemand".split(" "),function(e,w,x,p,y,q,z,A){function n(){n=w._asyncToGenerator(function*(a,b){if(!b)return[];const c=a.field,d=a.valueExpression,h=a.normalizationType,B=a.normalizationField,C=a.normalizationTotal,r=[];a=a.viewInfoParams;let t=null,u=null;if(d){if(!k){const {arcadeUtils:m}=
yield A.loadArcade();k=m}t=k.createFunction(d);u=a&&k.getViewInfo({viewingMode:a.viewingMode,scale:a.scale,spatialReference:new y(a.spatialReference)})}b.forEach(m=>{var l=m.attributes;if(d){var f=k.createExecContext(m,u);f=k.executeFunction(t,f)}else l&&(f=l[c]);h&&isFinite(f)&&(l=l&&parseFloat(l[B]),f=z.getNormalizedValue(f,h,l,C));r.push(f)});return r});return n.apply(this,arguments)}function g(a,b){return new x(a,b)}function v(a,b){a=p.isSome(a)?a:"";p.isSome(b)&&b&&(a=a?"("+a+") AND ("+b+")":
b);return a}function D(a){const b=a.layer;return a.fields.filter(c=>!b.getField(c))}function E(a){const b=a.layer;return a.fields.filter(c=>{c=b.getFieldUsageInfo(c);return!c||!c.supportsStatistics})}let k=null;e.createError=g;e.getDataValues=function(a,b){return n.apply(this,arguments)};e.getRangeExpr=function(a,b,c){b=null!=b?a+" \x3e\x3d "+b:"";a=null!=c?a+" \x3c\x3d "+c:"";c="";return(c=b&&a?v(b,a):b||a)?"("+c+")":""};e.getSQLFilterForNormalization=function(a){const b=a.field,c=a.normalizationType;
a=a.normalizationField;let d;if("field"===c)d="(NOT "+a+" \x3d 0)";else if("log"===c||"natural-log"===c||"square-root"===c)d=`(${b} > 0)`;return d};e.mergeWhereClauses=v;e.verifyBasicFieldValidity=function(a,b,c){const d=D({layer:a,fields:b});if(d.length)return g(c,"Unknown fields: "+d.join(", ")+". You can only use fields defined in the layer schema");a=E({layer:a,fields:b});if(a.length)return g(c,"Unsupported fields: "+a.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true")};
e.verifyFieldType=function(a,b,c,d){let h=null;if(!b)h=g(c,"'field' is not defined in the layer schema");else if(b.name===a.objectIdField||-1===d.indexOf(b.type))h=g(c,"'field' should be one of these types: "+d.join(","));return h};e.verifyNumericField=function(a,b,c){let d;b?b.name!==a.objectIdField&&q.isNumericField(b)||(d=g(c,"'field' should be one of these numeric types: "+q.numericTypes.join(","))):d=g(c,"'field' is not defined in the layer schema");return d};Object.defineProperty(e,"__esModule",
{value:!0})});