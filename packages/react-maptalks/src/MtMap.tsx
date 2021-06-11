import { useEffect, useRef, useState, forwardRef } from "react";
import { Map, MapOptions } from "maptalks";
import { MapContextProvider, omit, useElementEvent, useElementProps, useParentRef } from "@react-maptalks/core";

interface MtMapProps extends MapOptions {
  onReady?: (map: Map) => void;
  onSpatialreferencechange?: Handler;
  onBaselayerchangestart?: Handler;
  onBaselayerchangeend?: Handler;
  onSetbaselayer?: Handler;
  onBaselayerload?: Handler;
  onBaselayerremove?: Handler;
  onAddlayer?: Handler;
  onRemovelayer?: Handler;
  onResize?: Handler;
  onMovestart?: Handler;
  onMoving?: Handler;
  onMoveend?: Handler;
  onDragrotatestart?: Handler;
  onDragrotating?: Handler;
  onDragrotateend?: Handler;
  onAnimating?: Handler;
  onAnimateinterrupted?: Handler;
  onAnimateend?: Handler;
  onAnimatestart?: Handler;
  onPitchend?: Handler;
  onMousedown?: Handler;
  onMouseup?: Handler;
  onMouseover?: Handler;
  onMouseout?: Handler;
  onMouseenter?: Handler;
  onMouseleave?: Handler;
  onMousemove?: Handler;
  onClick?: Handler;
  onDblclick?: Handler;
  onContextmenu?: Handler;
  onKeypress?: Handler;
  onTouchstart?: Handler;
  onTouchmove?: Handler;
  onTouchend?: Handler;
  onFullscreenstart?: Handler;
  onFullscreenend?: Handler;
  onCancelfullscreen?: Handler;
  onViewchange?: Handler;
  onZoomstart?: Handler;
}

const defaultProps: Partial<MtMapProps> = {
  center: undefined,
  zoom: undefined,
  maxExtent: undefined,
  spatialReference: undefined,
  baseLayer: undefined,
  maxZoom: undefined,
  minZoom: undefined,
  bearing: undefined,
  pitch: undefined,
}

const MtMap = forwardRef<Map, MtMapProps>(({children, ...props}, ref) => {
  const eleRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MtMapProps>()
  const [map, setMap] = useState<Map | undefined>();
  useElementProps(props, map);
  useElementEvent(props, map);
  useParentRef(ref, map);

  mapRef.current = props;

  useEffect(() => {
    if (eleRef.current && !map) {
      const map = new Map(eleRef.current, omit(props, ['onReady']));

      setMap(map);
      mapRef.current?.onReady?.(map);
    }

    return () => {
      map?.remove();
    }
  }, [])


  return (
    <div ref={eleRef} style={{height: '100%', width: '100%'}}>
      { map ? <MapContextProvider value={{map}}>{ children }</MapContextProvider> : null }
    </div>
  )
})

MtMap.defaultProps = defaultProps;

export { MtMap, MtMapProps }
