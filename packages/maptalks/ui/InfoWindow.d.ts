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

  setContent(content: string | HTMLElement): this;
  getContent(): string | HTMLElement;
  setTitle(title: string | HTMLElement): this;
  getTitle(): string | HTMLElement;
  getTransformOrigin(): Point;
}
