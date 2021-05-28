import { FC, useEffect, useRef, useState } from "react";
import { Map, MapOptions } from "maptalks";
import { MapContextProvider } from "@react-maptalks/core";

export type MtMap = MapOptions

export const MtMap: FC<MtMap> = ({children, ...rest}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (ref.current && !map) {
      const map = new Map(ref.current, rest);

      setMap(map)
    }

    return () => {
      map?.remove();
    }
  }, [ref, rest])

  return (
    <div ref={ref} style={{height: '100%', width: '100%'}}>
      { map ? <MapContextProvider value={{map}}>{ children }</MapContextProvider> : null }
    </div>
  )
}
