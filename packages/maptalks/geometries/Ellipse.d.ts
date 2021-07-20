import { Polygon, PolygonOptions } from './Polygon';
import { Coordinate } from '../Coordinate';

export interface EllipseOptions extends PolygonOptions {
  numberOfShellPoints?: number;
}

export declare class Ellipse extends Polygon {
  constructor(center: number[] | Coordinate, width: number, height: number, options?: EllipseOptions);
}
