import { Coordinate } from './Coordinate'
import { Layer } from "./Layer";
import { SpatialReference } from "./SpatialReference";

export interface MapOptions {
  center?: [number, number] | Coordinate;
  zoom?: number;
  spatialReference?: SpatialReference;
  baseLayer?: any;
  layers?: Layer[];
}

export declare class Map {
  constructor(el: string | HTMLElement, options?: MapOptions);
}
