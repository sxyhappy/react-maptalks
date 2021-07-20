import { Coordinate } from './Coordinate';
import { Point } from './Point';
import { Size } from './Size';

export declare class Extent {
  constructor(xmin: number, ymin: number, xmax: number, ymax: number);
  constructor(extent: { xmin: number; ymin: number; xmax: number; ymax: number });
  constructor(leftTop: Coordinate, rightBottom: Coordinate);

  add(p: Coordinate | Point): Extent;
  sub(p: Coordinate | Point): Extent;
  substract(p: Coordinate | Point): Extent;
  round(): Extent;
  getMin(): Coordinate;
  getMax(): Coordinate;
  getCenter(): Coordinate;
  isValid(): boolean;
  equals(ext: Extent): boolean;
  intersects(ext: Extent): boolean;
  within(ext: Extent): boolean;
  contains(coordinate: Coordinate): boolean;
  getWidth(): number;
  getHeight(): number;
  getSize(): Size;
  combine(ext: Extent): Extent;
  intersection(ext: Extent): Extent;
  expand(distance: Size | number): Extent;
  toJSON(): Record<string, unknown>;
  toArray(): Coordinate[];
  copy(): Extent;
  convertTo(fn: (coordinate: Coordinate) => Coordinate): Extent;
}
