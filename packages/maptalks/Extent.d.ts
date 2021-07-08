import { Coordinate } from './Coordinate';
import { Point } from './Point';
import { Size } from './Size';

export declare class Extent {
  constructor(xmin: number, ymin: number, xmax: number, ymax: number);
  constructor(extent: { xmin: number; ymin: number; xmax: number; ymax: number });
  constructor(leftTop: Coordinate, rightBottom: Coordinate);

  public add(p: Coordinate | Point): Extent;
  public sub(p: Coordinate | Point): Extent;
  public substract(p: Coordinate | Point): Extent;
  public round(): Extent;
  public getMin(): Coordinate;
  public getMax(): Coordinate;
  public getCenter(): Coordinate;
  public isValid(): boolean;
  public equals(ext: Extent): boolean;
  public intersects(ext: Extent): boolean;
  public within(ext: Extent): boolean;
  public contains(coordinate: Coordinate): boolean;
  public getWidth(): number;
  public getHeight(): number;
  public getSize(): Size;
  public combine(ext: Extent): Extent;
  public intersection(ext: Extent): Extent;
  public expand(distance: Size | number): Extent;
  public toJSON(): Record<string, unknown>;
  public toArray(): Coordinate[];
  public copy(): Extent;
  public convertTo(fn: (coordinate: Coordinate) => Coordinate): Extent;
}
