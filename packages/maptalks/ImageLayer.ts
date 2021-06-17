import { Layer, LayerOptions } from "./Layer";
import { Renderer } from "./Renderer";

export interface ImageLayerImg {
  url: string;
  extent: [number, number, number, number],
  opacity: number;
}

export interface ImageLayerOptions extends LayerOptions {
  crossOrigin?: string;
  renderer?: Renderer;
}

export declare class ImageLayer extends Layer {
  constructor(id: string, images: ImageLayerImg[], options?: ImageLayerOptions);
}
