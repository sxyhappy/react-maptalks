import { Map } from './Map';
import { Event } from "./Event";
import { Geometry } from "./Geometry";

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

export declare class Layer implements Event {
  static fromJSON(json: string): Layer;

  constructor(options: LayerOptions);

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

  addEventListener(eventsOn: string, handler: () => void, context: any): void;

  listens(eventsOn: string, handler: () => void, context: any): void;

  off(eventsOn: string, handler: () => void, context: any): void;

  on(eventsOn: string, handler: () => void, context: any): void;

  once(eventsOn: string, handler: () => void, context: any): void;

  removeEventListener(eventsOn: string, handler: () => void, context: any): void;
}
