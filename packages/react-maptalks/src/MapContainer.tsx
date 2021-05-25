import { FC, useEffect, useRef } from "react";
import { Map, TileLayer } from "maptalks";

export interface MapProps {
  center: [number, number]
}

export const MapContainer: FC<MapProps> = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new Map(ref.current, {
        center: [-0.113049,51.49856],
        zoom: 14,
        baseLayer: new TileLayer('base', {
          urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          subdomains: ['a','b','c','d'],
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        })
      });
    }
  }, [ref])

  return (
    <div ref={ref}>Hello World</div>
  )
}
