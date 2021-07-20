import { MapTool } from './MapTool';
import { Geometry } from '../geometries';

export type DrawToolMode = 'Point'
  | 'LineString'
  | 'Polygon'
  | 'Circle'
  | 'Ellipse'
  | 'Rectangle'
  | 'ArcCurve'
  | 'QuadBezierCurve'
  | 'CubicBezierCurve'
  | string;

export interface DrawToolOptions {
  mode?: DrawToolMode;
  symbol?: symbol;
  once?: boolean;
  autoPanAtEdge?: boolean;
}

export interface ModeAction {
  action: 'click' | 'mousedown' | 'clickDblclick';
  create: (...argument: any) => Geometry;
  update: (...argument: any) => void;
  generate: (...argument: any) => any;
}

export class DrawTool extends MapTool {
  constructor(options?: DrawToolOptions);

  static registerMode(name: string, modeAction: ModeAction): void;
  static getRegisterMode(): ModeAction;

  getMode(): DrawToolMode;
  setMode(mode: DrawToolMode): this;
  getSymbol(): symbol;
  setSymbol(symbol: symbol): this;
  getCurrentGeometry(): Geometry;
  undo(): this;
  redo(): this;
  endDraw(param?: any): this;
}
