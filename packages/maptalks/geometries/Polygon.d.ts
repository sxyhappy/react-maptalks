import { Coordinate } from '../Coordinate';
import { Path, PathOptions } from './Path';
import { Extent } from '../Extent';

export type PolygonCoordinates = number[][] | number[][][] | Coordinate[] | Coordinate[][];

export interface PolygonOptions extends PathOptions {
}

export declare class Polygon extends Path {
  constructor(coordinates: PolygonCoordinates, options?: PolygonOptions);
  public setCoordinates(coordinates: PolygonCoordinates): this;
  public getCoordinates(): PolygonCoordinates;
  public getCenterInExtent(extent: Extent): Coordinate;
  public getShell(): Coordinate[];
  public getHoles(): Coordinate[][];
  public hasHoles(): boolean;
}
