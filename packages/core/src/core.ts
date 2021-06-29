import { Geometry, GeometryOptions, Layer, LayerOptions } from 'maptalks';

export type MapElement = Layer | Geometry;

export type MapElementOptions = LayerOptions | GeometryOptions;

export type Handler = (...args: any) => void;

export interface Ready<T> {
  onReady?: (element: T) => void;
}

export interface GeometryProps {
  infoVisible?: boolean;
  onMousedown?: Handler
  onMouseup?: Handler
  onMousemove?: Handler
  onClick?: Handler
  onDblclick?: Handler
  onContextmenu?: Handler
  onTouchstart?: Handler
  onTouchmove?: Handler
  onTouchend?: Handler
  onMouseenter?: Handler
  onMouseover?: Handler
  onMouseout?: Handler
  onIdchange?: Handler
  onPropertieschange?: Handler
  onShow?: Handler
  onHide?: Handler
  onZindexchange?: Handler
  onRemovestart?: Handler
  onRemoveend?: Handler
  onRemove?: Handler
  onShapechange?: Handler
  onPositionchange?: Handler
  onSymbolchange?: Handler
  onEditstart?: Handler
  onEditend?: Handler
  onRedoedit?: Handler
  onUndoedit?: Handler
  onCanceledit?: Handler
  onDragstart?: Handler
  onDragging?: Handler
  onDragend?: Handler
  onAnimateend?: Handler
  onAnimating?: Handler
  onAnimatestart?: Handler
}

