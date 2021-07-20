import { Layer, LayerOptions } from "./Layer";

export interface CanvasLayerOptions extends LayerOptions {
  doubleBuffer?: boolean;
  animation?: boolean;
  fps?: number
}

export declare class CanvasLayer extends Layer {
  constructor(id: string, options?: CanvasLayerOptions);

  prepareToDraw(context: CanvasRenderingContext2D): Record<any, any>[];
  draw(context: CanvasRenderingContext2D): void;
  redraw(): this;
  play(): this;
  pause(): this;
  isPlaying(): boolean;
  clearCanvas(): this;
  requestMapToRender(): this;
  completeRender(): this;
  onCanvasCreate(): this;
  onZoomStart(param: Record<string, any>): void;
  onZooming(param: Record<string, any>): void;
  onZoomEnd(param: Record<string, any>): void;
  onMoveStart(param: Record<string, any>): void;
  onMoving(param: Record<string, any>): void;
  onMoveEnd(param: Record<string, any>): void;
  onResize(param: Record<string, any>): void;
  doubleBuffer(bufferContext: CanvasRenderingContext2D, context: CanvasRenderingContext2D): void;
}
