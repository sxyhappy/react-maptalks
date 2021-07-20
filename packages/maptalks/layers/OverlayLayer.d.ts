import { Layer, LayerOptions } from "./Layer";
import { Geometry } from "../geometries";
import { Extent } from "../Extent";
import { GeometryCollection } from "../GeometryCollection";

export interface fitViewOptions {
  easing?: string;
  duration?: number;
  step?: (...args: any) => void
}

export type OverlayLayerOptions = LayerOptions

export declare abstract class OverlayLayer extends Layer {
  getGeometryById(id: string | number): Geometry;
  getGeometries(filter?: (...args: any) => void, context?: Record<string, any>): Geometry[];
  getFirstGeometry(): Geometry[];
  getLastGeometry(): Geometry[];
  getCount(): number;
  getExtent(): Extent;
  forEach(fn: (...args: any) => void, context?: Record<string, any>): this;
  filter(fn: (...args: any) => void, context?: Record<string, any>): GeometryCollection;
  isEmpty(): boolean;
  addGeometry(geometries: Geometry | Geometry[], fitView?: boolean | fitViewOptions): this;
  getGeoMinZIndex(): number;
  getGeoMaxZIndex(): number;
  removeGeometry(geometries: string | string[] | Geometry | Geometry[]): this;
  clear(): this;
  getStyle(): Record<string, any> | Record<string, any>[];
  setStyle(style: Record<string, any> | Record<string, any>[]): this;
  removeStyle(): this;
}
