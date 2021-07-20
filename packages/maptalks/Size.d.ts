import { Point } from './Point';

export declare class Size {
  public width: number;
  public height: number;

  constructor(width: number, height: number);

  copy(): Size;
  add(size: Size): Size;
  equals(size: Size): boolean;
  multi(ratio: number): Size;
  toPoint(): Point;
  toArray(): number[];
  toJSON(): Record<string, unknown>
}
