import { Polygon, PolygonOptions } from './Polygon';
import { Coordinate } from '../Coordinate';

export type RectangleOptions = PolygonOptions

export declare class Rectangle extends Polygon {
  constructor(coordinates: number[] | Coordinate, width: number, height: number, options?: RectangleOptions);

  // @ts-ignore
  getCoordinates(): Coordinate;
  setCoordinates(): this;
  getWidth(): number;
  setWidth(width: number): this;
  getHeight(): number;
  setHeight(height: number): this;
  getShell(): Coordinate[];
  getHoles(): null;
}
