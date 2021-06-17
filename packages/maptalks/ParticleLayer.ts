import { CanvasLayer, CanvasLayerOptions } from "./CanvasLayer";

export interface ParticleLayerOptions extends CanvasLayerOptions {

}

export declare class ParticleLayer extends CanvasLayer {
  constructor(id: string, options: ParticleLayerOptions);

  public getParticles(t: number): void;
}
