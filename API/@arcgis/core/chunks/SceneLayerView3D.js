/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../Graphic.js";import{L as r}from"./Logger.js";import{i as s,b as i,m as o,x as p}from"../core/lang.js";import{initial as m}from"../core/reactiveUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{WhereClause as n}from"../core/sql/WhereClause.js";import j from"../layers/support/FeatureFilter.js";import u from"../rest/support/Query.js";import{I as d,c,F as y}from"./I3SMeshView3D.js";import{L as g}from"./LayerView3D.js";import{S as h,a as f,c as b,p as S,d as v}from"./SceneLayerView.js";import{I as w,a as I,b as F,c as U}from"./I3SQueryFeatureStore.js";import{d as C}from"./I3SNode.js";import{g as x,p as V}from"./I3SUtil.js";import{D}from"./DefinitionExpressionSceneLayerView.js";import{P as E}from"./PopupSceneLayerView.js";import{u as M}from"../views/SceneView.js";import{a as L}from"./floorFilterUtils.js";import{T as R}from"./Scheduler.js";import"../geometry.js";import"../geometry/Extent.js";import"./string.js";import"./object.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Collection.js";import"./Evented.js";import"./shared.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils3.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils4.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"./Loadable.js";import"./Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"./Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./_commonjsHelpers.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../rest/support/StatisticDefinition.js";import"./byteSizeEstimations.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"../core/watchUtils.js";import"./mat3.js";import"./mat3f32.js";import"./mat4.js";import"./mat4f64.js";import"../geometry/projection.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./I3SAttributeOverrides.js";import"../core/Handles.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"./vec4f64.js";import"./asyncUtils.js";import"./I3SBinaryReader.js";import"./VertexAttribute.js";import"./VisualVariables.glsl.js";import"./ShaderBuilder.js";import"./glUtil3D.js";import"./basicInterfaces.js";import"./Util.js";import"./vec2.js";import"./vec2f64.js";import"./Material.js";import"./ViewingMode.js";import"./utils2.js";import"./doublePrecisionUtils.js";import"./geometryDataUtils.js";import"./triangle.js";import"./vectorStacks.js";import"./quatf64.js";import"./lineSegment.js";import"./BufferView.js";import"./mat4f32.js";import"./enums.js";import"./Texture.js";import"./context-util.js";import"./VertexElementDescriptor.js";import"./VertexArrayObject.js";import"./vec3f32.js";import"./Texture2.js";import"./compilerUtils.js";import"./requestImageUtils.js";import"./FramebufferObject.js";import"./frustum.js";import"./ray.js";import"./plane.js";import"./sphere.js";import"./lineUtils.js";import"./triangulationUtils.js";import"./earcut.js";import"./deduplicate.js";import"./ElevationProvider.js";import"./DefaultBufferWriter.js";import"./mathUtils2.js";import"./RenderSlot.js";import"./InterleavedLayout.js";import"./types.js";import"./vec2f32.js";import"./NestedMap.js";import"./Camera.js";import"./glUtil.js";import"./OrderIndependentTransparency.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./ReadShadowMap.glsl.js";import"./MemCache.js";import"./heatmapUtils.js";import"./ScreenSpacePass.js";import"./Intersector.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./quat.js";import"./floatRGBA.js";import"./RenderGeometry.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./layerViewUtils.js";import"./featureQueryAll.js";import"./layerUtils.js";import"../layers/support/SceneModification.js";import"./persistable.js";import"./multiOriginJSONSupportUtils.js";import"./uuid.js";import"./visualVariableUtils.js";import"./sizeVariableUtils.js";import"./diffUtils.js";import"./Graphics3DScaleVisibility.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"./VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"../renderers/DotDensityRenderer.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../renderers/support/jsonUtils.js";import"../layers/Layer.js";import"./rendererConversion.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaultsJSON.js";import"./OptimizedFeature.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./PooledRBush.js";import"./quickselect.js";import"./WorkerHandle.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"./messages.js";import"./SceneLayerWorker.js";import"./attributeUtils.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./vec3.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./GLMaterialTexture.js";import"./VerticalOffset.glsl.js";import"./VertexColor.glsl.js";import"./pointUtils.js";import"./featureConversionUtils.js";import"./OptimizedFeatureSet.js";import"./utils6.js";import"./jsonUtils.js";import"./parser.js";import"./ItemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"./callExpressionWithFeature.js";import"./GeometryUtil.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./screenshotUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./ColorMaterial.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"../core/HandleOwner.js";import"../views/layers/LayerView.js";import"./QueryEngine.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./QueryEngineResult.js";import"./utils11.js";import"./generateRendererUtils.js";import"./projectionSupport.js";import"./json.js";import"./utils17.js";import"./QueryEngineCapabilities.js";import"./spatialQuerySupport.js";import"../layers/support/FieldsIndex.js";import"../rest/support/FeatureSet.js";import"./quatf32.js";import"./popupUtils.js";import"../Camera.js";import"../Ground.js";import"./loadAll.js";import"../Viewpoint.js";import"./domUtils.js";import"./iteratorUtils.js";import"./GraphicsCollection.js";import"./RenderCoordsHelper.js";import"./spatialReferenceSupport.js";import"./scaleUtils.js";import"./VoxelWasmManager.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./writeUtils.js";import"./CollectionFlattener.js";import"./basemapUtils.js";import"./TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./InputManager.js";import"./Queue.js";import"./IViewEvents.js";import"./interfaces.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./debugFlags.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"./DOMContainer.js";import"./projector.js";import"./widgetUtils.js";import"../widgets/Popup.js";import"./throttle.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./jsxWidgetSupport.js";import"./widgetThemeUtils.js";import"../widgets/Attachments.js";import"./unitFormatUtils.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"./messageBundle.js";import"./jsxFactory.js";import"../widgets/Feature/FeatureViewModel.js";import"./languageUtils.js";import"./datetime.js";import"./number3.js";import"../rest/support/RelationshipQuery.js";import"../tasks/QueryTask.js";import"./executeForTopCount.js";import"./utils5.js";import"./query.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./queryZScale.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"./executeQueryJSON.js";import"../tasks/Task.js";import"../layers/FeatureLayer.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/support/elements.js";import"./FeatureIndex.js";import"./APIKeyMixin.js";import"./ArcGISService.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"./OperationalLayer.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./OrderedLayer.js";import"./PortalLayer.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"./TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"./featureReductionUtils.js";import"../layers/support/FeatureReductionSelection.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/GeometryFieldsInfo.js";import"./labelingInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./versionUtils.js";import"./styleUtils2.js";import"../support/popupUtils.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"../widgets/Spinner/SpinnerViewModel.js";import"./AnchorElementViewModel.js";import"../widgets/Popup/PopupViewModel.js";import"../symbols/support/symbolUtils.js";import"./actions.js";import"./GoTo.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"./TerrainConst.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/Lighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/Environment.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./earthUtils.js";import"./ShadowCast.glsl.js";import"./CameraSpace.glsl.js";import"./viewpointUtils.js";import"./ray2.js";import"./RenderingContext.js";import"./Program.js";import"./ProgramCache.js";import"./DefaultVertexAttributeLayouts.js";import"./labelFormatUtils.js";import"./FeatureTileDescriptor3D.js";import"./vec4f32.js";import"./geometryServiceUtils.js";import"./project.js";import"../rest/support/ProjectParameters.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./terrainUtils.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./VectorTile.js";import"./enums3.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey.js";import"./tileUtils.js";import"../views/2d/ViewState.js";import"./mat2d.js";import"./mat2df32.js";import"./mat2df64.js";import"./EdgeProcessingWorker.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../widgets/Attribution.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";const P=r.getLogger("esri.views.3d.layers.SceneLayerView3D"),O=v();let _=class extends(d(D(E(g(h))))){constructor(){super(...arguments),this.type="scene-layer-3d",this.lodFactor=1,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null}get filter(){return s(this.viewFilter)?this.viewFilter.filter:null}set filter(t){!i(t)&&w.checkSupport(t)?s(this.viewFilter)?this.viewFilter.filter=t:this.viewFilter=new w({filter:t,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:t=>this._loadAsyncModule(t),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(t,e)=>this.addSqlFilter(t,e,this.logError)}):this.viewFilter=null}get requiredFields(){var t,e;return null!=(t=null==(e=this.fieldsHelper)?void 0:e.requiredFields)?t:[]}get floorFilterClause(){const t=L(this);return s(t)?n.create(t,this.layer.fieldsIndex):null}get excludeObjectIdsSorted(){const t=this.layer.excludeObjectIds;return t.length?t.toArray().sort(((t,e)=>t-e)):null}get lodCrossfadeinDuration(){var t,e;return null!=(t=null==(e=this.view)?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeinDuration)?t:0}get lodCrossfadeoutDuration(){var t,e;return null!=(t=null==(e=this.view)?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeoutDuration)?t:0}get lodCrossfadeUncoveredDuration(){var t,e;return null!=(t=null==(e=this.view)?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeUncoveredDuration)?t:0}initialize(){this.fieldsHelper=new f({layerView:this}),this.updatingHandles.add((()=>this.layer.rangeInfos),(t=>this._rangeInfosChanged(t)),m),this.updatingHandles.add((()=>this.layer.renderer),(t=>this.updatingHandles.addPromise(this._rendererChange(t))),m),this.updatingHandles.add((()=>[this.parsedDefinitionExpression,this.filter,this.floorFilterClause,this.excludeObjectIdsSorted,o(this.viewFilter,(t=>[t.parsedWhereClause,t.parsedGeometry,t.sortedObjectIds]))]),(()=>this._filterChange())),this.updatingHandles.add((()=>[this.filter,o(this.viewFilter,(t=>t.parsedGeometry))]),(()=>this._geometryFilterChange())),this.handles.add(this.layer.on("apply-edits",(t=>this.updatingHandles.addPromise(t.result)))),this.handles.add(this.layer.on("edits",(t=>this._handleEdits(t))))}destroy(){this.fieldsHelper=p(this.fieldsHelper)}_rangeInfosChanged(t){null!=t&&t.length>0&&P.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const t={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return s(this.filter)?this.filter.createQuery(t):new u(t)}queryExtent(t,e){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(t),null==e?void 0:e.signal)}queryFeatureCount(t,e){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(t),null==e?void 0:e.signal)}queryFeatures(t,e){return this._ensureQueryEngine().executeQuery(this._ensureQuery(t),null==e?void 0:e.signal).then((t=>{if(null==t||!t.features)return t;const e=this.layer;for(const r of t.features)r.layer=e,r.sourceLayer=e;return t}))}queryObjectIds(t,e){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(t),null==e?void 0:e.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const t=c(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new I({layerView:this,priority:R.FEATURE_QUERY_ENGINE,spatialIndex:new F({featureAdapter:new U({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:t}),forAllFeatures:(t,e)=>this._forAllFeatures(((e,r,s)=>t({id:e,index:r,meta:s})),e,y.ALL_IN_CLIPPING_AREA),getFeatureExtent:t,sourceSpatialReference:x(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(t){const e=this._highlights;if(t instanceof u){const{set:r,handle:s}=e.acquireSet();return this.queryObjectIds(t).then((t=>e.setFeatureIds(r,t))),s}return super.highlight(t)}createInteractiveEditSession(t){return b(this.attributeEditingContext,t)}_createLayerGraphic(t){const r=new e(null,null,t);return r.layer=this.layer,r.sourceLayer=this.layer,r}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}getFilters(){const t=super.getFilters(),e=this.excludeObjectIdsSorted;return s(e)&&t.push((t=>V(e,!1,t))),this.floorFilterClause&&this.addSqlFilter(t,this.floorFilterClause,this.logError),this.addSqlFilter(t,this.parsedDefinitionExpression,this.logError),s(this.viewFilter)&&this.viewFilter.addFilters(t,this.view,this._controller.crsIndex,this._collection),t}_ensureQuery(t){return this._addDefinitionExpressionToQuery(i(t)?this.createQuery():u.from(t))}get attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),forEachNode:t=>this._forAllNodes((e=>s(e)?t(e.node,e.featureIds):null)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this.attributeOverrides,getAttributeData:t=>this.getAttributeData(t),setAttributeData:(t,e)=>this.setAttributeData(t,e),clearMemCache:()=>this.clearMemCache()}}_handleEdits(t){S(this.attributeEditingContext,t)}get hasGeometryFilter(){const t=this.viewFilter;return s(t)&&s(t.parsedGeometry)}computeNodeFiltering(t){const e=this.viewFilter;return i(e)||e.isMBSGeoemtryVisible(t,this.view.spatialReference,this._controller.crsIndex)?C.Unmodified:C.Culled}};t([l({aliasOf:"layer"})],_.prototype,"i3slayer",void 0),t([l(M)],_.prototype,"updatingProgress",void 0),t([l({type:j})],_.prototype,"filter",null),t([l()],_.prototype,"viewFilter",void 0),t([l(O.requiredFields)],_.prototype,"requiredFields",null),t([l(O.availableFields)],_.prototype,"availableFields",void 0),t([l()],_.prototype,"fieldsHelper",void 0),t([l()],_.prototype,"floorFilterClause",null),t([l()],_.prototype,"excludeObjectIdsSorted",null),t([l({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],_.prototype,"lodFactor",void 0),t([l({readOnly:!0,aliasOf:"_controller.updatingProgress"})],_.prototype,"updatingProgressValue",void 0),_=t([a("esri.views.3d.layers.SceneLayerView3D")],_);const T=_;export{T as default};