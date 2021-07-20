import { Curve, CurveOptions } from './Curve';
import { Coordinate } from '../Coordinate';

export type CubicBezierCurveOptions = CurveOptions

export declare class CubicBezierCurve extends Curve {
  constructor(coordinates: Coordinate[] | number[][], options: CubicBezierCurveOptions);
}
