import { Map } from '../Map';
import { Control, ControlPosition } from './Control';

export interface OverviewOptions {
  position?: ControlPosition;
  level?: number;
  maximize?: boolean;
  size?: [number, number];
  symbol?: Record<string, unknown>;
  containerClass?: string;
  buttonClass?: string;
}

export declare class Overview extends Control {
  constructor(options: OverviewOptions);

  public buildOn(map: Map): HTMLElement;
  public maxmize(): this;
  public minimize(): this;
  public getOverviewMap(): Map;
}
