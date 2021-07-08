import { TileLayer, TileLayerOptions } from "./TileLayer";

export interface WMSTileLayerOptions extends TileLayerOptions {
  crs?: string,
  layers?: string,
  styles?: string,
  version?: string,
  format?: string,
  transparent?: boolean,
  uppercase?: boolean
}

export declare class WMSTileLayer extends TileLayer {
  constructor(id: string, options?: WMSTileLayerOptions);
}
