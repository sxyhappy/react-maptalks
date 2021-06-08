import { Point } from "./Point";

export declare class Size {
  public width: number;
  public height: number;

  constructor(width: number, height: number);

  public copy(): Size;
  public add(size: Size): Size;
  public equals(size: Size): boolean;
  public multi(ratio: number): Size;
  public toPoint(): Point;
  public toArray(): number[];
  public toJSON(): Record<string, unknown>
}
