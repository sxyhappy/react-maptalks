import { FC, useEffect } from "react";
import { TileLayer, TileLayerOptions } from 'maptalks';
import { useMap } from "@react-maptalks/core";

export interface MtTileLayerOptions extends TileLayerOptions {
  id: string | number;
}

export const MtTileLayer: FC<MtTileLayerOptions> = (props) => {
  const { map } = useMap()

  useEffect(() => {
    const tileLayer = new TileLayer(props.id, props);

    tileLayer.addTo(map)
  }, [map])

  return null
};
