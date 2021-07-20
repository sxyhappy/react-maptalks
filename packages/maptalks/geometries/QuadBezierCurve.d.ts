import { Curve, CurveOptions } from './Curve';
import { Coordinate } from '../Coordinate';

export type QuadBezierCurveOptions = CurveOptions

export declare class QuadBezierCurve extends Curve {
  constructor(coordinates: Coordinate[] | number[][], options: QuadBezierCurveOptions);
}
