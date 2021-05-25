export declare class Coordinate {
  constructor(x: number, y: number);
  constructor(position: [number, number]);
  constructor(position: { x: number, y: number });

  static toNumberArrays(coordinates: Coordinate[]): [number, number][];
  static toCoordinates(coordinates: [number, number][]): Coordinate[]
}
