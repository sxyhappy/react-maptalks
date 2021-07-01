import { Geometry, GeometryOptions, Layer, LayerOptions, ui, control } from 'maptalks';

export type MapElement = Layer | Geometry | ui.UIComponent | control.Control;

export type MapElementOptions = LayerOptions | GeometryOptions | UIComponentProps | ControlProps;

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

export interface UIComponentProps extends ui.UIComponentOptions {
  visible?: boolean;
}

export interface ControlProps {
  visible?: boolean;
  onAdd?: Handler
  onRemove?: Handler
  onPositionchange?: Handler
}

