import { Layer, LayerOptions } from "./Layer";
import { Geometry } from "./Geometry";
import { Extent } from "./Extent";
import { GeometryCollection } from "./GeometryCollection";

export interface fitViewOptions {
  easing: string;
  duration: number;
  step: Function
}

export interface OverlayLayerOptions extends LayerOptions {

}

export declare class OverlayLayer extends Layer {
  public getGeometryById(id: string | number): Geometry;
  public getGeometries(filter?: Function, context?: Record<string, any>): Geometry[];
  public getFirstGeometry(): Geometry[];
  public getLastGeometry(): Geometry[];
  public getCount(): number;
  public getExtent(): Extent;
  public forEach(fn: Function, context?: Record<string, any>): this;
  public filter(fn: Function, context?: Record<string, any>): GeometryCollection;
  public isEmpty(): boolean;
  public addGeometry(geometries: Geometry | Geometry[], fitView?: boolean | fitViewOptions): this;
  public getGeoMinZIndex(): number;
  public getGeoMaxZIndex(): number;
  public removeGeometry(geometries: string | string[] | Geometry | Geometry[]): this;
  public clear(): this;
  public getStyle(): Record<string, any> | Record<string, any>[];
  public setStyle(style: Record<string, any> | Record<string, any>[]): this;
  public removeStyle(): this;
}
