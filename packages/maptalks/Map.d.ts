import { Coordinate } from './Coordinate'
import { Layer } from './layers';
import { SpatialReference } from './SpatialReference';
import { Extent } from './Extent';
import { Renderer } from './Renderer';
import { PointExtent } from './PointExtent';
import { Point } from './Point';
import { Size } from './Size';
import { MapEvent } from './Eventable';
import { Geometry } from './geometries';
import { Control } from './control';
import { mixins } from './mixins';
import { Renderable } from './Renderable';

export interface MapView {
  zoom: number;
  center: [number, number] | Coordinate;
  pitch: number;
  bearing: number;
}

export interface MapOptions {
  center?: [number, number] | Coordinate;
  zoom?: number;
  bearing?: number,
  pitch?: number,
  spatialReference?: SpatialReference;
  baseLayer?: Layer;
  layers?: Layer[];
  centerCross?: boolean;
  seamlessZoom?: boolean;
  zoomInCenter?: boolean;
  zoomOrigin?: number;
  zoomAnimation?: boolean;
  zoomAnimationDuration?: number;
  panAnimation?: boolean;
  panAnimationDuration?: number;
  zoomable?: boolean;
  enableInfoWindow?: boolean;
  hitDetect?: boolean;
  hitDetectLimit?: number;
  fpsOnInteracting?: number;
  layerCanvasLimitOnInteracting?: number;
  maxZoom?: number | null;
  minZoom?: number | null;
  maxExtent?: Extent | null;
  fixCenterOnResize?: boolean;
  maxPitch?: number;
  maxVisualPitch?: number;
  viewHistory?: boolean;
  viewHistoryCount?: number;
  draggable?: boolean;
  dragPan?: boolean;
  dragRotate?: boolean;
  dragPitch?: boolean;
  dragRotatePitch?: boolean;
  touchGesture?: boolean;
  touchZoom?: boolean;
  touchRotate?: boolean;
  touchPitch?: boolean;
  touchZoomRotate?: boolean;
  doubleClickZoom?: boolean;
  scrollWheelZoom?: boolean;
  geometryEvents?: boolean;
  control?: boolean;
  attribution?: boolean;
  zoomControl?: boolean;
  scaleControl?: boolean;
  overviewControl?: boolean;
  fog?: boolean;
  fogColor?: [number, number, number];
  renderer?: Renderer;
  devicePixelRatio?: number;
}

export declare class Map extends mixins(MapEvent, Point, Renderable) {
  constructor(container: HTMLElement | string, options: MapOptions);

  remove(): this;
  isLoaded(): boolean;
  getContainer(): HTMLElement;
  getSpatialReference(): SpatialReference;
  setSpatialReference(): this;
  getProjection(): Record<any, unknown>;
  getFullExtent(): Extent;
  setCursor(): this;
  resetCursor(): this;
  getCenter(): Coordinate;
  setCenter(): this;
  getSize(): number;
  getContainerExtent(): PointExtent
  getExtent(): Extent;
  getProjExtent(): Extent;
  getPrjExtent(): Extent;
  getMaxExtent(): Extent;
  setMaxExtent(ext: Extent): this;
  getZoom(): number;
  getZoomForScale(scale: number, fromZoom: number, isFraction: boolean): number;
  setZoom(zoom: number, options: { animation: boolean }): this;
  getMaxZoom(): number;
  setMaxZoom(zoom: number): number;
  getMinZoom(): number;
  setMinZoom(zoom: number): this;
  getMaxNativeZoom(): number;
  getGLZoom(): number;
  getGLScale(zoom?: number): number;
  zoomIn(): this;
  zoomOut(): this;
  isZooming(): boolean;
  isInteracting(): boolean;
  setCenterAndZoom(center: number, zoom: number): this;
  getFitZoom(ext: Extent, isFraction: boolean): number;
  getView(): Record<string, any>;
  setView(options: MapView): this;
  getResolution(zoom: number): number;
  getScale(zoom: number): number;
  fitExtent(ext: Extent, zoomOffset: number): this;
  getBaseLayer(): Layer;
  setBaseLayer(layer: Layer): this;
  removeBaseLayer(): this;
  getLayers(fn: (layer: Layer) => boolean): Layer[];
  getLayer(id: string): Layer | null | undefined;
  addLayer(layer: Layer): this;
  removeLayer(layer: string | string[] | Layer | Layer[]): this;
  sortLayers(layers: Layer[]): this;
  toDataURL(options?: { mimeType?: string, save?: boolean, fileName ?: string }): string;
  containerPointToViewPoint(containerPoint: Point, out?: Point): Point;
  viewPointToContainerPoint(viewPoint: Point, out?: Point): Point;
  checkSize(): this;
  locate(coordinate: Coordinate, dx: number, dy: number): Coordinate;
  getMainPanel(): HTMLElement;
  getPanels(): Record<string, unknown>;
  isRemoved(): boolean;
  isMoving(): boolean;
  getDevicePixelRatio(): number;
  offsetPlatform(): Point;
  getViewPoint(): Point;
  coordinateToPoint(coordinate: Coordinate, zoom?: number, out?: number): Point;
  pointToCoordinate(point: Point, zoom: number, out?: Coordinate): Coordinate;
  coordinateToViewPoint(coordinate: Coordinate, out?: Point): Point;
  viewPointToCoordinate(viewPoint: Point, out?: Coordinate): Coordinate;
  coordinateToContainerPoint(viewPoint: Point, out?: Coordinate): Coordinate;
  coordinateToContainerPoint(zoom?: number, out?: number): Point;
  containerPointToCoordinate(out?: Coordinate): Coordinate;
  containerToExtent(containerExtent: PointExtent): Extent;
  distanceToPixel(xDist: number, yDist: number): Size;
  distanceToPoint(xDist: number, yDist: number, zoom: number): Point;
  pixelToDistance(width: number, height: number): number;
  pointToDistance(xDist: number, yDist: number, zoom: number): Point;
  locateByPoint(coordinate: number, px: number, py: number): Coordinate;
  animateTo(view: MapView, options: { easing: string, duration: number }, fn: (frame: any) => void): this;
  isAnimating(): boolean;
  getFov(): number;
  setFov(fob: number): this;
  getBearing(): number;
  setBearing(bearing: number): number;
  getPitch(): number;
  setPitch(pitch: number): this;
  isFullScreen(): boolean;
  requestFullScreen(): this;
  cancelFullScreen(): this;
  panTo(coordinate: Coordinate, options?: { animation?: boolean, duration?: number }): this;
  panBy(point: Point, options?: { animation?: boolean, duration?: number }): this;
  toJSON(options?: { baseLayer?: boolean | any, clipExtent?: boolean | Extent, layers?: any }): JSON;
  computeLength(coord1: number[] | Coordinate, coord2: number[] | Coordinate): number;
  computeGeometryLength(geometry: Geometry): number;
  computeGeometryArea(geometry: Geometry): number;
  identify(opts?: {
    coordinate: Coordinate,
    layers: Layer[],
    filter?: (...argument: any) => boolean;
    count?: number,
    tolerance?: number,
    includeInternals?: boolean,
    includeInvisible?: boolean
  }, cbk?: (...argument: any) => void): this;
  zoomToPreviousView(): MapView;
  hasPreviousView(): boolean;
  zoomToNextView(): MapView;
  hasNextView(): boolean;
  getViewHistory(): Record<any, any>[];
  addControl(control: Control): this;
  removeControl(control: Control): this;
  config(conf: Record<string, any>): this;
}

