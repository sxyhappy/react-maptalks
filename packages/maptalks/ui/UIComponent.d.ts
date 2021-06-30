import { MapEvent } from '../MapEvent';
import { Geometry } from '../geometries';
import { Map } from '../Map';
import { Size } from '../Size';
import { Coordinate } from '../Coordinate';

export interface UIComponentOptions {
  eventsPropagation?: boolean;
  eventsToStop?: boolean;
  dx?: number;
  dy?: number;
  autoPan?: boolean;
  autoPanDuration?: boolean;
  single?: boolean;
  animation?: boolean;
  animationDuration?: number;
  pitchWithMap?: boolean;
  rotateWithMap?: boolean;
}

export declare class UIComponent implements MapEvent {
  public addTo(owner: Map | Geometry): this;
  public getMap(): Map;
  public show(coordinate?: Coordinate): this;
  public hide(): this;
  public isVisible(): boolean;
  public remove(): this;
  public getSize(): Size;

  addEventListener(eventsOn: string, handler: (...args: any) => void, context: any): void;
  copyEventListeners(target: Record<string, unknown>): this;
  fire(eventType: string, param: any): this;
  listens(eventsOn: string, handler: (...args: any) => void, context: any): void;
  off(eventsOn: string, handler: (...args: any) => void, context: any): void;
  on(eventsOn: string, handler: (...args: any) => void, context: any): void;
  once(eventsOn: string, handler: (...args: any) => void, context: any): void;
  removeEventListener(eventsOn: string, handler: (...args: any) => void, context: any): void;
}
