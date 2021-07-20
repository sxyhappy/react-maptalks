import { MapEvent } from '../Eventable';
import { Coordinate } from '../Coordinate';
import { Layer } from '../layers';
import { Map } from '../Map';
import { PointExtent } from '../PointExtent';
import { Size } from '../Size';
import { Point } from '../Point';
import { InfoWindow } from '../ui';
import { mixins } from '../mixins';
import { Menuable } from '../ui/Menuable';
import { JSONAble } from '../JSONAble';

export interface GeometryOptions {
  id?: string;
  visible?: boolean;
  editable?: boolean;
  interactive?: boolean;
  cursor?: string;
  measure?: string;
  draggable: boolean;
  dragShadow?: boolean;
  dragOnAxis?: boolean;
  zIndex?: number;
}

export declare abstract class Geometry extends mixins(MapEvent, Menuable, JSONAble) {
  static fromJSON(json: Record<string, any>): Geometry;
  getFirstCoordinate(): Coordinate;
  getLastCoordinate(): Coordinate;
  addTo(layer: Layer): this;
  getLayer(): Layer;
  getMap(): Map;
  getId(): string;
  setId(id: string): this;
  getProperties(): Record<string, any>;
  setProperties(properties: Record<string, any>): this;
  getType(): string;
  getSymbol(): symbol;
  setSymbol(symbol: symbol): this;
  updateSymbol(properties: Record<string, any>): this;
  getCenter(): Coordinate;
  getExtent(): PointExtent;
  getContainerExtent(): PointExtent;
  getSize(): Size;
  containsPoint(point: Point | Coordinate, t?: number): boolean;
  show(): this;
  hide(): this;
  isVisible(): boolean;
  getZIndex(): number;
  setZIndex(zIndex: number): this;
  setZIndexSilently(zIndex: number): this;
  bringToFront(): this;
  bringToBack(): this;
  translate(x: number, y: number): this;
  flash(interval?: number, count?: number, cb?: () => void, context?: any): this;
  copy(): this;
  remove(): this;
  toGeoJSONGeometry(): Record<string, any>;
  toGeoJSON(option?: {geometry?: boolean, properties?: boolean}): Record<string, any>;
  toJSON(options?: {geometry?: boolean, properties?: boolean, options?: boolean, symbol?: boolean, infoWindow?: boolean}): Record<string, any>;
  getLength(): number;
  getArea(): number;
  rotate(angle: number, pivot?: Coordinate): this;
  startEdit(options?: {
    symbol?: symbol,
    fixAspectRatio?: boolean,
    centerHandleSymbol?: symbol,
    vertexHandleSymbol?: symbol,
    newVertexHandleSymbol?: symbol,
    removeVertexOn?: Record<string, any>,
  }): this;
  endEdit(): this;
  redoEdit(): this;
  undoEdit(): this;
  cancelEdit(): this;
  isEditing(): boolean;
  isDragging(): boolean;
  animate(styles: Record<string, any>, options?: {duration?: number, startTime?: number, easing?: string, repeat?: boolean}, step?: () => void): any;
  setInfoWindow(options: Record<string, any>): this;
  getInfoWindow(): InfoWindow;
  openInfoWindow(coordinate?: Coordinate): this;
  closeInfoWindow(): this;
  removeInfoWindow(): this;
}
