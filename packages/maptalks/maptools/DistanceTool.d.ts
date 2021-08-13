import { MapTool } from './MapTool';
import { Layer } from '../layers';
import { Language } from './language';
import { Symbol } from '../Symbol';

export interface DistanceToolOptions {
  once?: boolean;
  language?: Language;
  metric?: boolean;
  imperial?: boolean;
  symbol?: Symbol;
  vertexSymbol?: Symbol;
  labelOptions?: Record<string, any>;
}

export declare class DistanceTool extends MapTool {
  constructor(options?: DistanceToolOptions);

  clear(): this;
  getMeasureLayers(): Layer[];
  getLastMeasure(): number;
}
