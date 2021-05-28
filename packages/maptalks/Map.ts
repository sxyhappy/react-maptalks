import { Coordinate } from './Coordinate'
import { Layer } from "./Layer";
import { SpatialReference } from "./SpatialReference";
import { Extent } from "./Extent";
import { Renderer } from "./Renderer";

export interface MapOptions {
  center: [number, number] | Coordinate;
  zoom: number;
  spatialReference?: SpatialReference;
  baseLayer?: any;
  layers?: Layer[];
  centerCross?: boolean;
  seamlessZoom?: boolean;
  zoomInCenter?: boolean;
  zoomOrigin?: number;
  zoomAnimation?: boolean;
  zoomAnimationDuration?: number;
  panAnimation?: boolean;
  panAnimationDuration?: boolean;
  zoomable?: boolean;
  enableInfoWindow?: boolean;
  hitDetect?: boolean;
  hitDetectLimit?: boolean;
  fpsOnInteracting?: boolean;
  layerCanvasLimitOnInteracting?: boolean;
  maxZoom?: number;
  minZoom?: number;
  maxExtent?: Extent;
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

export declare class Map {
  constructor(el: string | HTMLElement, options?: MapOptions);

  public remove(): this;
}
