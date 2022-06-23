// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../intl ../../../../core/Accessor ../../../../core/Handles ../../../../core/mathUtils ../../../../core/maybe ../../../../core/quantityFormatUtils ../../../../core/quantityUtils ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../core/unitUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec2 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4f32 ../interfaces ./interfaces ../support/viewUtils ../../interactive/visualElements/LabelVisualElement ../../interactive/visualElements/LineVisualElement ../../interactive/visualElements/MeasurementArrowVisualElement ../../interactive/visualElements/RightAngleQuadVisualElement ../../interactive/visualElements/support/Segment ../../webgl-engine/lib/Material ../../webgl-engine/materials/lineStippleUtils ../../../../intl/locale ../../../../intl/messages".split(" "),
function(e,C,m,ha,Q,R,K,g,u,H,v,z,L,M,p,ia,ja,ka,S,N,O,A,T,U,k,I,B,D,V,W,y,E,J,X,Y){e.State=void 0;(function(w){w[w.Pending=0]="Pending";w[w.Ready=1]="Ready";w[w.Destroyed=2]="Destroyed"})(e.State||(e.State={}));e.DirectLineMeasurementVisualization=function(w){function F(a){a=w.call(this,a)||this;a._params={...Z};a._handles=new R;a._segmentVisualElement=null;a._triangleVisualElement=null;a._rightAngleQuad=null;a._projectedGeodesicLine=null;a._geodesicStartHint=null;a._geodesicEndHint=null;a._segmentLabel=
null;a._verticalLabel=null;a._horizontalLabel=null;a._startPosition=A.create();a._endPosition=A.create();a._cornerPosition=A.create();a._startPositionAtSeaLevel=A.create();a._endPositionAtSeaLevel=A.create();a._state=e.State.Pending;a._triangleOrientationOverride=null;a.messages=null;a.loadingMessages=!0;a.visualElementOrientation=k.VisualElementOrientation.Auto;a.triangleCollapseRatioThreshold=.03;return a}C._inheritsLoose(F,w);var r=F.prototype;r.initialize=function(){this._handles.add(M.whenOnce(this.view,
"ready",()=>this._initialize(),!0))};r._initialize=function(){var a=this;switch(this._state){case e.State.Ready:throw Error("invalid state");case e.State.Destroyed:return}const b=this._params,c={attached:!0,view:this.view};this._segmentVisualElement=new V.MeasurementArrowVisualElement({...c,geometry:null,renderOccluded:E.RenderOccludedFlag.OccludeAndTransparent});this._triangleVisualElement=new D.LineVisualElement({...c,width:b.triangleLineWidth,color:b.triangleColor,renderOccluded:E.RenderOccludedFlag.OccludeAndTransparent});
this._rightAngleQuad=new W.RightAngleQuadVisualElement({...c,color:G,renderOccluded:E.RenderOccludedFlag.OccludeAndTransparent});const f={...c,polygonOffset:!0,renderOccluded:E.RenderOccludedFlag.OccludeAndTransparent};this._projectedGeodesicLine=new D.LineVisualElement({...f,width:b.geodesicProjectionLineWidth,color:b.geodesicProjectionLineColor,stipplePattern:J.createStipplePatternSimple(b.guideStippleLengthPixels)});this._geodesicStartHint=new D.LineVisualElement({...f,width:b.guideLineWidth,color:b.geodesicProjectionLineColor,
stipplePattern:J.createStipplePatternSimple(b.guideStippleLengthPixels)});this._geodesicEndHint=new D.LineVisualElement({...f,width:b.guideLineWidth,color:b.geodesicProjectionLineColor,stipplePattern:J.createStipplePatternSimple(b.guideStippleLengthPixels)});this._segmentLabel=new B.LabelVisualElement({...c,fontSize:b.direcLabelFontSize});this._verticalLabel=new B.LabelVisualElement({...c,fontSize:b.verticalLabelFontSize});this._horizontalLabel=new B.LabelVisualElement({...c,fontSize:b.horizontalLabelFontSize});
this._handles.add([v.watch(()=>{const {elevationAlignedStartPoint:d,elevationAlignedEndPoint:h}=this.analysisView,q=this.view;return{view:q,camera:q.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:d,elevationAlignedEndPoint:h,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},d=>this._updateGeometryAndViewMode(d),v.syncAndInitial),v.watch(()=>({visible:this.visible,viewMode:this.viewMode}),
d=>this._updateVisualElementVisibility(d),v.syncAndInitial),v.watch(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),d=>this._updateLabelText(d),v.syncAndInitial),v.watch(()=>({visible:this.visible,viewMode:this.viewMode,state:this._state}),d=>this._updateLabelVisibility(d),v.syncAndInitial),v.watch(()=>this._measurementArrowStripeLength,d=>this._updateSegmentStripeLength(d),v.syncAndInitial),X.onLocaleChange(C._asyncToGenerator(function*(){return a._updateMessageBundle()}))]);
this._state=e.State.Ready;this._updateMessageBundle()};r.destroy=function(){this._state!==e.State.Destroyed&&(this._handles=g.destroyMaybe(this._handles),this._segmentVisualElement=g.destroyMaybe(this._segmentVisualElement),this._triangleVisualElement=g.destroyMaybe(this._triangleVisualElement),this._rightAngleQuad=g.destroyMaybe(this._rightAngleQuad),this._projectedGeodesicLine=g.destroyMaybe(this._projectedGeodesicLine),this._geodesicStartHint=g.destroyMaybe(this._geodesicStartHint),this._geodesicEndHint=
g.destroyMaybe(this._geodesicEndHint),this._segmentLabel=g.destroyMaybe(this._segmentLabel),this._verticalLabel=g.destroyMaybe(this._verticalLabel),this._horizontalLabel=g.destroyMaybe(this._horizontalLabel),this.set("view",null),this._state=e.State.Destroyed)};r.whenReady=function(){var a=C._asyncToGenerator(function*(){yield M.whenOnce(this,"ready")});return function(){return a.apply(this,arguments)}}();r._updateVisualElementVisibility=function({visible:a,viewMode:b}){this._segmentVisualElement.visible=
!1;this._triangleVisualElement.visible=!1;this._rightAngleQuad.visible=!1;this._projectedGeodesicLine.visible=!1;this._geodesicStartHint.visible=!1;this._geodesicEndHint.visible=!1;if(a)switch(b){case k.ViewMode.Direct:this._segmentVisualElement.visible=!0;break;case k.ViewMode.Triangle:this._segmentVisualElement.visible=!0;this._triangleVisualElement.visible=!0;this._rightAngleQuad.visible=!0;break;case k.ViewMode.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=
!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}};r._updateGeometryAndViewMode=function({view:a,camera:b,viewMode:c,elevationAlignedStartPoint:f,elevationAlignedEndPoint:d,orientation:h,visualizedMeasurement:q,stripeLength:l}){const n=a.renderCoordsHelper;if(!(g.isNone(f)||g.isNone(d)||f.equals(d))){var t=this._startPosition,x=this._endPosition;n.toRenderCoords(f,t);n.toRenderCoords(d,x);f=h===k.VisualElementOrientation.AboveSegment?1:-1;d=n.getAltitude(x);var aa=n.getAltitude(t);
d=f*(d-aa);0>d&&(t=this._endPosition,x=this._startPosition);q="geodesic"===q?new y.GeodesicSegment(this._startPosition,this._endPosition,n.spatialReference):new y.EuclideanSegment(this._startPosition,this._endPosition);this._segmentVisualElement.geometry=q;this._updateSegmentStripeLength(l);switch(c){case k.ViewMode.Direct:this._updateSegment(q,h);break;case k.ViewMode.Triangle:this._updateSegmentAndTriangle({view:a,camera:b,segment:q,orientation:h,startPosition:t,endPosition:x,deltaSign:f,altitudeDelta:d});
break;case k.ViewMode.ProjectedGeodesic:this._updateSegmentAndProjection({view:a,orientation:h,startPosition:t,endPosition:x})}}};r._updateSegment=function(a,b){this._segmentLabel.anchor=b===k.VisualElementOrientation.AboveSegment?"top":"bottom";this._segmentLabel.geometry={type:"segment",segment:a,sampleLocation:"center"}};r._updateSegmentAndTriangle=function({view:{renderCoordsHelper:a},camera:b,segment:c,orientation:f,startPosition:d,endPosition:h,deltaSign:q,altitudeDelta:l}){const n=this._cornerPosition;
a.worldUpAtPosition(d,n);O.scale(n,n,q*Math.abs(l));O.add(n,n,d);this._triangleVisualElement.geometry=[[[d[0],d[1],d[2]],[n[0],n[1],n[2]],[h[0],h[1],h[2]]]];this._rightAngleQuad.geometry={previous:d,center:n,next:h};a=new y.EuclideanSegment(d,n);q=new y.EuclideanSegment(n,h);l=ba;var t=ca;b.projectToRenderScreen(n,l);b.projectToRenderScreen(h,t);l={segment:"bottom",horizontal:"top",vertical:l[0]<t[0]?"left":"right"};{const x=da;t=ea;I.screenSpaceTangent(d,n,x,b);I.screenSpaceTangent(d,h,t,b);N.dot(x,
t)>=P?l.segment=Math.sign(x[1])===Math.sign(t[1])?B.mirrorPosition(l.vertical):l.vertical:(d=fa,I.screenSpaceTangent(n,h,d,b),N.dot(d,t)>=P&&(l.segment=Math.sign(d[0])===Math.sign(t[0])?B.mirrorPosition(l.horizontal):l.horizontal))}f===k.VisualElementOrientation.BelowSegment&&(l.segment="top"===l.segment?"bottom":"top",l.horizontal="top"===l.horizontal?"bottom":"top",l.vertical="top"===l.vertical?"bottom":"top");b=l;this._segmentLabel.anchor=b.segment;this._segmentLabel.geometry={type:"segment",segment:c,
sampleLocation:"center"};this._verticalLabel.geometry={type:"segment",segment:a,sampleLocation:"center"};this._verticalLabel.anchor=b.vertical;this._horizontalLabel.geometry={type:"segment",segment:q,sampleLocation:"center"};this._horizontalLabel.anchor=b.horizontal};r._updateSegmentAndProjection=function({view:{renderCoordsHelper:a},orientation:b,startPosition:c,endPosition:f}){a.setAltitude(this._startPositionAtSeaLevel,0,c);a.setAltitude(this._endPositionAtSeaLevel,0,f);a=new y.GeodesicSegment(this._startPositionAtSeaLevel,
this._endPositionAtSeaLevel,a.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(a);this._geodesicStartHint.setGeometryFromSegment(new y.EuclideanSegment(this._startPositionAtSeaLevel,c));this._geodesicEndHint.setGeometryFromSegment(new y.EuclideanSegment(this._endPositionAtSeaLevel,f));this._segmentLabel.geometry={type:"segment",segment:a,sampleLocation:"center"};this._segmentLabel.anchor=b===k.VisualElementOrientation.AboveSegment?"top":"bottom"};r._updateLabelText=function({text:a,
visualizedMeasurement:b}){g.isSome(a)?(this._segmentLabel.text="euclidean"===b?a.euclideanDistance:a.geodesicDistance,this._horizontalLabel.text=a.horizontalDistance,this._verticalLabel.text=a.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null);this.notifyChange("labels")};r._updateLabelVisibility=function({state:a,visible:b,viewMode:c}){if(a===e.State.Ready){a=this._segmentLabel;var f=this._horizontalLabel,d=this._verticalLabel;a.visible=
!1;f.visible=!1;d.visible=!1;if(b)switch(c){case k.ViewMode.Direct:a.visible=!0;break;case k.ViewMode.Triangle:a.visible=!0;f.visible=!0;d.visible=!0;break;case k.ViewMode.ProjectedGeodesic:a.visible=!0}}};r._updateSegmentStripeLength=function(a){const b=this._segmentVisualElement;g.isSome(a)?(b.stripeLength=a,b.stripesEnabled=!0):b.stripesEnabled=!1};r._requiresGeodesicGuideAt=function(a){var b=this.view;if(null==b||!b.state)return!1;const c=b.renderCoordsHelper;b=b.state.camera.computeScreenPixelSizeAt(a);
return 10<=c.getAltitude(a)/b};r._updateMessageBundle=function(){this.loadingMessages=!0;Y.fetchMessageBundle("esri/core/t9n/Units").then(a=>{this.messages=a}).finally(()=>{this.loadingMessages=!1})};C._createClass(F,[{key:"ready",get:function(){return this._state===e.State.Ready}},{key:"visible",get:function(){return this.analysisView.visible}},{key:"viewMode",get:function(){const {elevationAlignedStartPoint:a,elevationAlignedEndPoint:b}=this.analysisView;if(g.isNone(a)||g.isNone(b)||a.equals(b))return k.ViewMode.None;
var c=this.analysisView.result;if(g.isNone(c))return k.ViewMode.Direct;if("geodesic"===c.mode)return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?k.ViewMode.ProjectedGeodesic:k.ViewMode.Direct;const {verticalDistance:f,horizontalDistance:d}=c;c=f.value;const h=d.value;return Math.min(c/h,h/c)<this.triangleCollapseRatioThreshold?k.ViewMode.Direct:k.ViewMode.Triangle}},{key:"actualVisualizedMeasurement",get:function(){if(g.isNone(this.analysisView.result))switch(this.analysisView.measurementMode){default:return"euclidean";
case U.MeasurementMode.Geodesic:return"geodesic"}return this.analysisView.result.mode}},{key:"allowVisualElementsOrientationChange",get:function(){return g.isNone(this._triangleOrientationOverride)},set:function(a){g.isNone(this._triangleOrientationOverride)!==a&&(g.isNone(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}},{key:"labels",get:function(){return{direct:this._segmentLabel,horizontal:"geodesic"===
this.actualVisualizedMeasurement?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}},{key:"testData",get:function(){var a;return{labels:this.labels,stripeLength:null==(a=this._segmentVisualElement)?void 0:a.stripeLength}}},{key:"_labelsText",get:function(){if(this._state!==e.State.Ready)return null;const a=this.messages;var b=this.analysisView.result;if(g.isNone(b)||g.isNone(a))return null;const {directDistance:c,horizontalDistance:f,verticalDistance:d,geodesicDistance:h}=b;b=
this.analysisView.unit;const q=l=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...l});switch(b){case "metric":return q({euclideanDistance:c&&u.formatMetricLength(a,c),geodesicDistance:h&&u.formatMetricLength(a,h),horizontalDistance:f&&u.formatMetricLength(a,f),verticalDistance:d&&u.formatMetricVerticalLength(a,d)});case "imperial":return q({euclideanDistance:c&&u.formatImperialLength(a,c),geodesicDistance:h&&u.formatImperialLength(a,h),horizontalDistance:f&&
u.formatImperialLength(a,f),verticalDistance:d&&u.formatImperialVerticalLength(a,d)});default:return q({euclideanDistance:c&&u.formatDecimal(a,c,b),geodesicDistance:h&&u.formatDecimal(a,h,b),horizontalDistance:f&&u.formatDecimal(a,f,b),verticalDistance:d&&u.formatDecimal(a,d,b)})}}},{key:"_actualVisualElementsOrientation",get:function(){if(g.isSome(this._triangleOrientationOverride))return this._triangleOrientationOverride;const a=this.visualElementOrientation;return a===k.VisualElementOrientation.Auto?
this.view.state.camera.aboveGround?k.VisualElementOrientation.AboveSegment:k.VisualElementOrientation.BelowSegment:a}},{key:"_measurementArrowStripeLength",get:function(){const {result:a,unit:b}=this.analysisView;if(g.isNone(a))return null;var c=null;c=a.directDistance;switch(b){case "metric":c=c&&H.toUnit(c,"meters");break;case "imperial":c=c&&H.toUnit(c,L.preferredImperialLengthUnit(c.value,c.unit));break;default:c=c&&H.toUnit(c,b)}return g.isNone(c)?null:K.nextHighestPowerOfTen(c.value/30)*L.convertUnit(1,
c.unit,"meters")}}]);return F}(Q);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_state",void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_triangleOrientationOverride",void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"messages",void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"view",void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"analysis",
void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"analysisView",void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"ready",null);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"loadingMessages",void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"visible",null);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"viewMode",null);m.__decorate([p.property()],
e.DirectLineMeasurementVisualization.prototype,"actualVisualizedMeasurement",null);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"visualElementOrientation",void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"triangleCollapseRatioThreshold",void 0);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"allowVisualElementsOrientationChange",null);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,
"labels",null);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"testData",null);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_labelsText",null);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_actualVisualElementsOrientation",null);m.__decorate([p.property()],e.DirectLineMeasurementVisualization.prototype,"_measurementArrowStripeLength",null);e.DirectLineMeasurementVisualization=m.__decorate([S.subclass("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],
e.DirectLineMeasurementVisualization);const G=T.fromValues(1,.5,0,.75),Z={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,triangleColor:G,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,
1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:G,guideLineWidth:2,guideLineColor:G,guideStippleLengthPixels:6,labelDistance:25,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},P=Math.cos(K.deg2rad(12)),ba=z.createRenderScreenPointArray3(),ca=z.createRenderScreenPointArray3(),da=z.createRenderScreenPointArray(),ea=z.createRenderScreenPointArray(),fa=z.createRenderScreenPointArray();Object.defineProperty(e,"__esModule",
{value:!0})});