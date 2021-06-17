import { Layer, LayerOptions } from "./Layer";

export interface CanvasLayerOptions extends LayerOptions {
  doubleBuffer: boolean;
  animation: boolean;
  fps: number
}

export declare class CanvasLayer extends Layer {
  constructor(id: string, options: CanvasLayerOptions);

  public prepareToDraw(context: CanvasRenderingContext2D): Record<any, any>[];
  public draw(context: CanvasRenderingContext2D): void;
  public redraw(): this;
  public play(): this;
  public pause(): this;
  public isPlaying(): boolean;
  public clearCanvas(): this;
  public requestMapToRender(): this;
  public completeRender(): this;
  public onCanvasCreate(): this;
  public onZoomStart(param: Record<string, any>): void;
  public onZooming(param: Record<string, any>): void;
  public onZoomEnd(param: Record<string, any>): void;
  public onMoveStart(param: Record<string, any>): void;
  public onMoving(param: Record<string, any>): void;
  public onMoveEnd(param: Record<string, any>): void;
  public onResize(param: Record<string, any>): void;
  public doubleBuffer(bufferContext: CanvasRenderingContext2D, context: CanvasRenderingContext2D): void;
}
