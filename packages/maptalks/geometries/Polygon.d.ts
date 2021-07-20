import { Coordinate } from '../Coordinate';
import { Path, PathOptions } from './Path';
import { Extent } from '../Extent';

export type PolygonCoordinates = number[][] | number[][][] | Coordinate[] | Coordinate[][];

export type PolygonOptions = PathOptions

export declare class Polygon extends Path {
  constructor(coordinates: PolygonCoordinates, options?: PolygonOptions);
  setCoordinates(coordinates: PolygonCoordinates): this;
  getCoordinates(): PolygonCoordinates;
  getCenterInExtent(extent: Extent): Coordinate;
  getShell(): Coordinate[];
  getHoles(): Coordinate[][];
  hasHoles(): boolean;
}
