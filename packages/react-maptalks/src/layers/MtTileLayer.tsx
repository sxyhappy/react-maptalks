import { forwardRef, useEffect, useState } from "react";
import { TileLayer, TileLayerOptions } from 'maptalks';
import { omit, useMap, useParentRef, useElementVisible, useElementEvent, useElementProps } from "@react-maptalks/core";

export interface MtTileLayerOptions extends TileLayerOptions {
  id: string | number;
  visible?: boolean;
  onReady?: (tileLayer: TileLayer) => void;
  clear?: Handler
  idchange?: Handler
}

const defaultProps: Partial<MtTileLayerOptions> = {
  visible: true
}

const MtTileLayer = forwardRef<TileLayer, MtTileLayerOptions>((props, ref) => {
  const { map } = useMap();
  const [tileLayer, setTileLayer] = useState<TileLayer>();
  useParentRef(ref, tileLayer);
  useElementVisible(props.visible as boolean, tileLayer);
  useElementEvent(props, tileLayer);
  useElementProps(props)

  useEffect(() => {
    if (!props.id) throw new Error('must provide id for tileLayer');
    const tileLayer = new TileLayer(props.id, omit(props, ['onReady', 'id']));

    tileLayer.addTo(map);
    setTileLayer(tileLayer);
    props?.onReady?.(tileLayer);

    return () => {
      tileLayer.remove();
    }
  }, [map])

  return null
});

MtTileLayer.defaultProps = defaultProps;

export { MtTileLayer }
