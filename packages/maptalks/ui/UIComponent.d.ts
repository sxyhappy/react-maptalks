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

export declare abstract class UIComponent extends MapEvent {
  public addTo(owner: Map | Geometry): this;
  public getMap(): Map;
  public show(coordinate?: Coordinate): this;
  public hide(): this;
  public isVisible(): boolean;
  public remove(): this;
  public getSize(): Size;
}
