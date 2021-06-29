import { Map } from '../Map';
import { EventHandler, MapEvent } from "../MapEvent";
import { Geometry } from "../geometries/Geometry";

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

export declare class Layer implements MapEvent {
  static fromJSON(json: string): Layer;

  constructor(options: LayerOptions);

  on: EventHandler;
  addEventListener: EventHandler;
  once: EventHandler;
  off: EventHandler;
  removeEventListener: EventHandler;
  listens: EventHandler;
  copyEventListeners: (target: Record<string, unknown>) => this;
  fire: (eventType: string, param: any) => this;

  public load(): void;

  public getId(): string;

  public setId(id: string): this;

  public addTo(map: Map): this;

  public setIndex(zIndex: number): this;

  public getZIndex(): number;

  public getMinZoom(): number;

  public getMaxZoom(): number;

  public getOpacity(): number;

  public setOpacity(opacity: number): this;

  protected isCanvasRender(): boolean;

  public getMap(): Map;

  public getProjection(): Record<string, any>;

  public bringToFront(): this;

  public bringToBack(): this;

  public show(): this;

  public hide(): this;

  public isVisible(): boolean;

  public remove(): this;

  public getMask(): Geometry;

  public setMask(mask: Geometry): this;

  public removeMask(): this;

  protected onLoad(): boolean;

  public isLoaded(): boolean;
}
