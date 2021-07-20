import { Geometry, GeometryOptions } from './Geometry';
import { Symbol } from '../Symbol';

export interface PathOptions extends GeometryOptions {
  smoothness?: number;
  enableSimplify?: boolean;
  simplifyTolerance?: number;
  enableClip?: boolean;
  symbol?: Symbol;
}

export declare abstract class Path extends Geometry {
  animateShow(options?: {  duration : 2000, easing : 'linear' }, fn?: (frame?: any, currentCoord?: any) => void)
}
