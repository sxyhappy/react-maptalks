import { Geometry, GeometryOptions } from './Geometry';
import { Coordinate } from "../Coordinate";

export interface MarkerOptions extends GeometryOptions {
  properties?: Record<string, unknown>
}

export declare class Marker extends Geometry {
  constructor(coordinates: Coordinate | [number, number], option: MarkerOptions);
}
