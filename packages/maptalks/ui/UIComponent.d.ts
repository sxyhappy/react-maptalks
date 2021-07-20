import { MapEvent } from '../Eventable';
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
  addTo(owner: Map | Geometry): this;
  getMap(): Map;
  show(coordinate?: Coordinate): this;
  hide(): this;
  isVisible(): boolean;
  remove(): this;
  getSize(): Size;
}
