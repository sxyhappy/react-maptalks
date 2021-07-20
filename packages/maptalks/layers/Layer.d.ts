import { Map } from '../Map';
import { MapEvent } from "../Eventable";
import { Geometry } from "../geometries";

export interface LayerOptions {
  attribution?: string;
  minZoom?: number;
  maxZoom?: number;
  visible?: boolean;
  opacity?: number;
  zIndex?: number;
  hitDetect?: boolean;
  renderer?: 'canvas' | 'gl';
  globalCompositeOperation?: string;
  debugOutline?: string;
  cssFilter?: string;
  forceRenderOnMoving?: boolean;
  forceRenderOnZooming?: boolean;
  forceRenderOnRotating?: boolean;
}

export declare abstract class Layer extends MapEvent {
  static fromJSON(json: string): Layer;

  load(): void;
  getId(): string;
  setId(id: string): this;
  addTo(map: Map): this;
  setIndex(zIndex: number): this;
  getZIndex(): number;
  getMinZoom(): number;
  getMaxZoom(): number;
  getOpacity(): number;
  setOpacity(opacity: number): this;
  protected isCanvasRender(): boolean;
  public getMap(): Map;
  getProjection(): Record<string, any>;
  bringToFront(): this;
  bringToBack(): this;
  show(): this;
  hide(): this;
  isVisible(): boolean;
  remove(): this;
  getMask(): Geometry;
  setMask(mask: Geometry): this;
  removeMask(): this;
  protected onLoad(): boolean;
  isLoaded(): boolean;
}
