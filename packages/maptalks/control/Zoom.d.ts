import { Map } from '../Map';
import { Control, ControlPosition } from './Control';

export interface ZoomOptions {
  position?: ControlPosition;
  slider?: boolean;
  zoomLevel?: boolean;
}

export declare class Zoom extends Control {
  constructor(options: ZoomOptions);

  buildOn(map: Map): HTMLElement;
}
