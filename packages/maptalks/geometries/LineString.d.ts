import { Coordinate } from '../Coordinate';
import { ArrowPlacement } from './ArrowPlacement';
import { Extent } from '../Extent';
import { Path, PathOptions } from './Path';

export type LineStringCoordinates = Coordinate[] | number[][];

export interface LineStringOptions extends PathOptions {
  arrowStyle?: string | number[];
  arrowPlacement?: ArrowPlacement;
}

export declare class LineString extends Path {
  constructor(coordinates: LineStringCoordinates, options?: LineStringOptions);
  public setCoordinates(coordinates: LineStringCoordinates): this;
  public getCoordinates(): LineStringCoordinates;
  public getCenterInExtent(extent: Extent): Coordinate;
}
