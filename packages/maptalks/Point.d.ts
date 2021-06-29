export declare class Point {
  constructor(x: number, y: number);
  constructor(num: [number, number]);
  constructor(num: { x: number, y: number });

  public closeTo(p: Point, delta: number): number;
  public mag(): number;
  public unit(): Point;
  public perp(): Point;
  public angleWith(p: Point): number;
  public rotate(a: number): Point;
}
