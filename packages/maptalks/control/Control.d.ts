import { Map } from '../Map';
import { Point } from '../Point';

export type ControlPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | Record<string, any>;

export declare abstract class Control {
  public addTo(map: Map): this;
  public update(): this;
  public getMap(): Map;
  public getPosition(): Record<string, any>;
  public setPosition(position: ControlPosition): this;
  public getContainerPoint(): Point;
  public getContainer(): HTMLElement;
  public getDOM(): HTMLElement;
  public show(): this;
  public hide(): this;
  public isVisible(): boolean;
  public remove(): this;
}
