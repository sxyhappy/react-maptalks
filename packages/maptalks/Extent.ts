import { Coordinate } from "./Coordinate";

export declare class Extent {
  constructor(xmin: number, ymin: number, xmax: number, ymax: number);
  constructor(extent: { xmin: number; ymin: number; xmax: number; ymax: number });
  constructor(leftTop: Coordinate, rightBottom: Coordinate)
}
