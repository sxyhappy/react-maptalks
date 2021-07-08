import { Layer, LayerOptions } from "./Layer";
import { SpatialReference } from "../SpatialReference";

export interface TileLayerOptions extends LayerOptions {
  urlTemplate?: string;
  subdomains?: string[] | number[];
  spatialReference?: SpatialReference;
  tileSize?: [number, number];
  offset?: [number, number];
}

export declare class TileLayer extends Layer {
  constructor(id: string | number, options?: TileLayerOptions);
}
