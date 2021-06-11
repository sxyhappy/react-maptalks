import { OverlayLayer, OverlayLayerOptions } from "./OverlayLayer";
import { Coordinate } from "./Coordinate";
import { Geometry } from "./Geometry";
import { Extent } from "./Extent";

export interface VectorLayerOptions extends OverlayLayerOptions {
  id: string;
  style?: Record<string, any>
  debug?: boolean;
  enableSimplify?: boolean;
  cursor?: string;
  geometryEvents?: boolean;
  defaultIconSize?: boolean;
  enableAltitude?: boolean;
  altitudeProperty?: boolean;
  drawAltitude?: boolean;
  altitude?: number;
  drawImmediate?: boolean;
}

export declare class VectorLayer extends OverlayLayer {
  constructor(id: string, geometries?: Geometry | Geometry[], options?: VectorLayerOptions);

  public identify(coordinate: Coordinate, options?: { tolerance?: number;  count?: number}): Geometry[];
  public toJSON(options?: { geometries?: Record<string, any>, clipExtent?: Extent }): Record<string, any>;
}
