import { Polygon, PolygonOptions } from './Polygon';
import { Coordinate } from '../Coordinate';

export interface RectangleOptions extends PolygonOptions {
}

export declare class Rectangle extends Polygon {
  constructor(coordinates: number[] | Coordinate, width: number, height: number, options?: RectangleOptions);

  // @ts-ignore
  public getCoordinates(): Coordinate;
  public setCoordinates(): this;
  public getWidth(): number;
  public setWidth(width: number): this;
  public getHeight(): number;
  public setHeight(height: number): this;
  public getShell(): Coordinate[];
  // @ts-ignore
  public getHoles(): null;
}
