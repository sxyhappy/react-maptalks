import { EventHandler, MapEvent } from '../MapEvent';
import { Coordinate } from '../Coordinate';
import { Layer } from '../layers';
import { Map } from '../Map';
import { PointExtent } from '../PointExtent';
import { Size } from '../Size';
import { Point } from '../Point';
import { InfoWindow } from '../ui';

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

export declare class Geometry implements MapEvent {
  static fromJSON(json: Record<string, any>): Geometry;
  public getFirstCoordinate(): Coordinate;
  public getLastCoordinate(): Coordinate;
  public addTo(layer: Layer): this;
  public getLayer(): Layer;
  public getMap(): Map;
  public getId(): string;
  public setId(id: string): this;
  public getProperties(): Record<string, any>;
  public setProperties(properties: Record<string, any>): this;
  public getType(): string;
  public getSymbol(): Record<string, any>;
  public setSymbol(symbol: Record<string, any>): this;
  public updateSymbol(properties: Record<string, any>): this;
  public getCenter(): Coordinate;
  public getExtent(): PointExtent;
  public getContainerExtent(): PointExtent;
  public getSize(): Size;
  public containsPoint(point: Point | Coordinate, t?: number): boolean;
  public show(): this;
  public hide(): this;
  public isVisible(): boolean;
  public getZIndex(): number;
  public setZIndex(zIndex: number): this;
  public setZIndexSilently(zIndex: number): this;
  public bringToFront(): this;
  public bringToBack(): this;
  public translate(x: number, y: number): this;
  public flash(interval?: number, count?: number, cb?: () => void, context?: any): this;
  public copy(): this;
  public remove(): this;
  public toGeoJSONGeometry(): Record<string, any>;
  public toGeoJSON(option?: {geometry?: boolean, properties?: boolean}): Record<string, any>;
  public toJSON(options?: {geometry?: boolean, properties?: boolean, options?: boolean, symbol?: boolean, infoWindow?: boolean}): Record<string, any>;
  public getLength(): number;
  public getArea(): number;
  public rotate(angle: number, pivot?: Coordinate): this;
  public startEdit(options?: {
    symbol?: Record<string, any>,
    fixAspectRatio?: boolean,
    centerHandleSymbol?: Record<string, any>,
    vertexHandleSymbol?: Record<string, any>,
    newVertexHandleSymbol?: Record<string, any>,
    removeVertexOn?: Record<string, any>,
  }): this;
  public endEdit(): this;
  public redoEdit(): this;
  public undoEdit(): this;
  public cancelEdit(): this;
  public isEditing(): boolean;
  public isDragging(): boolean;
  public animate(styles: Record<string, any>, options?: {duration?: number, startTime?: number, easing?: string, repeat?: boolean}, step?: () => void): any;
  public setInfoWindow(options: Record<string, any>): this;
  public getInfoWindow(): InfoWindow;
  public openInfoWindow(coordinate?: Coordinate): this;
  public closeInfoWindow(): this;
  public removeInfoWindow(): this;

  on: EventHandler;
  addEventListener: EventHandler;
  once: EventHandler;
  off: EventHandler;
  removeEventListener: EventHandler;
  listens: EventHandler;
  copyEventListeners: (target: Record<string, unknown>) => this;
  fire: (eventType: string, param: any) => this;
}
