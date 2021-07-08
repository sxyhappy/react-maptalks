import { Geometry, GeometryOptions } from './Geometry';

export interface PathOptions extends GeometryOptions {
  smoothness?: number;
  enableSimplify?: boolean;
  simplifyTolerance?: number;
  enableClip?: boolean;
  symbol?: Record<string, any>;
}

export declare abstract class Path extends Geometry {
  public animateShow(options?: {  duration : 2000, easing : 'linear' }, fn?: (frame?: any, currentCoord?: any) => void)
}
