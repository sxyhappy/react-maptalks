import { Map } from '../Map';
import { Point } from '../Point';

export type ControlPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | Record<string, any>;

export declare abstract class Control {
  addTo(map: Map): this;
  update(): this;
  getMap(): Map;
  getPosition(): Record<string, any>;
  setPosition(position: ControlPosition): this;
  getContainerPoint(): Point;
  getContainer(): HTMLElement;
  getDOM(): HTMLElement;
  show(): this;
  hide(): this;
  isVisible(): boolean;
  remove(): this;
}
