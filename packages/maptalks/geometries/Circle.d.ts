import { Polygon, PolygonOptions } from './Polygon';
import { Coordinate } from '../Coordinate';

export declare interface CircleOptions extends PolygonOptions {
  numberOfShellPoints?: number;
}

export declare class Circle extends Polygon {
  constructor(center: number[] | Coordinate, radius: number, options?: CircleOptions);
  public getRadius(): number;
  public setRadius(radius: number): this;
  public getShell(): Coordinate[];
  // @ts-ignore
  public getHoles(): null;
}
