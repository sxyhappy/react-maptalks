import { MapTool } from './MapTool';
import { Layer } from '../layers';
import { Language } from './language';

export interface DistanceToolOptions {
  language?: Language;
  metric?: boolean;
  imperial?: boolean;
  symbol?: symbol;
  vertexSymbol?: symbol;
  labelOptions?: Record<string, any>;
}

export declare class DistanceTool extends MapTool {
  constructor(options?: DistanceToolOptions);

  clear(): this;
  getMeasureLayers(): Layer[];
  getLastMeasure(): number;
}
