import { Map } from '../Map';
import { MapEvent } from '../Eventable';

export declare abstract class MapTool extends MapEvent {
  addTo(map: Map): this;
  getMap(): Map;
  enable(): this;
  disable(): this;
  isEnabled(): boolean;
}
