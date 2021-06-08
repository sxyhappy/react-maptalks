import { useEffect, useRef, useState, forwardRef } from "react";
import { Map, MapOptions } from "maptalks";
import { MapContextProvider, omit } from "@react-maptalks/core";
import { useElementProps } from "@react-maptalks/core";

export interface MtMapProps extends MapOptions {
  onReady?: (map: Map) => void
}

const defaultProps: Partial<MtMapProps> = {
  center: undefined,
  zoom: undefined,
  maxExtent: undefined,
  spatialReference: undefined,
  baseLayer: undefined,
  maxZoom: undefined,
  minZoom: undefined,
}

const MtMap = forwardRef<Map, MtMapProps>(({children, ...props}, ref) => {
  const eleRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MtMapProps>()
  const [map, setMap] = useState<Map | undefined>();
  useElementProps<MtMapProps, Map>(props, map);

  mapRef.current = props;

  useEffect(() => {
    if (eleRef.current && !map) {
      const map = new Map(eleRef.current, omit(props, ['onReady']));

      setMap(map);
      mapRef.current?.onReady?.(map);

      if (ref) {
        (ref as any).current = map;
      }
    }

    return () => {
      map?.remove();
    }
  }, [eleRef])


  return (
    <div ref={eleRef} style={{height: '100%', width: '100%'}}>
      { map ? <MapContextProvider value={{map}}>{ children }</MapContextProvider> : null }
    </div>
  )
})

MtMap.defaultProps = defaultProps;

export { MtMap }
