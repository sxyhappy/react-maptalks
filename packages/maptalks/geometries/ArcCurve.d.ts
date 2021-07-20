import { Curve, CurveOptions } from './Curve';
import { Coordinate } from '../Coordinate';

export interface ArcCurveOptions extends CurveOptions {
  arcDegree?: number;
}

export declare class ArcCurve extends Curve {
  constructor(coordinates: Coordinate[] | number[][], options: ArcCurveOptions);
}
