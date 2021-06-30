import { UIComponent, UIComponentOptions } from './UIComponent';
import { Point } from '../Point';

export interface InfoWindowOptions extends UIComponentOptions {
  autoCloseOn?: boolean;
  autoOpenOn?: boolean;
  width?: number;
  minHeight?: number;
  custom?: boolean;
  title?: string;
  content?: string | HTMLElement;
}

export declare class InfoWindow extends UIComponent {
  constructor(options: InfoWindowOptions);

  public setContent(content: string | HTMLElement): this;
  public getContent(): string | HTMLElement;
  public setTitle(title: string | HTMLElement): this;
  public getTitle(): string | HTMLElement;
  public getTransformOrigin(): Point;
}
