export declare class Point {
  constructor(x: number, y: number);
  constructor(num: [number, number]);
  constructor(num: { x: number, y: number });

  closeTo(p: Point, delta: number): number;
  mag(): number;
  unit(): Point;
  perp(): Point;
  angleWith(p: Point): number;
  rotate(a: number): Point;
}
