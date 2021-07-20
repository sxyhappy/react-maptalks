import { Map } from '../Map';
import { Control, ControlPosition } from './Control';
import { Symbol } from '../Symbol';

export interface OverviewOptions {
  position?: ControlPosition;
  level?: number;
  maximize?: boolean;
  size?: [number, number];
  symbol?: Symbol;
  containerClass?: string;
  buttonClass?: string;
}

export declare class Overview extends Control {
  constructor(options: OverviewOptions);

  buildOn(map: Map): HTMLElement;
  maxmize(): this;
  minimize(): this;
  getOverviewMap(): Map;
}
