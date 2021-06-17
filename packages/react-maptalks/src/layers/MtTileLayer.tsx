import { forwardRef, useEffect, useState } from 'react';
import { TileLayer, TileLayerOptions } from 'maptalks';
import { useMap, useElementVisible, useElementEvent, useElementProps, bindParentRef } from '@react-maptalks/core';
import { Handler } from '../reactMaptalks';

interface MtTileLayerOptions extends TileLayerOptions {
  id: string;
  onReady?: (tileLayer: TileLayer) => void;
  onClear?: Handler
  onIdchange?: Handler
}

const defaultProps: Partial<MtTileLayerOptions> = {
  visible: true,
  opacity: 1,
}

const MtTileLayer = forwardRef<TileLayer, MtTileLayerOptions>((props, ref) => {
  const { map } = useMap();
  const [layer, setLayer] = useState<TileLayer>();
  useElementVisible(props.visible, layer);
  useElementEvent(props, layer);
  useElementProps(props)

  useEffect(() => {
    if (!props.id) throw new Error('must provide id for tileLayer');

    if (layer || map.getLayer(props.id)) return;
    const tileLayer = new TileLayer(props.id, props);

    tileLayer.addTo(map);
    setLayer(tileLayer);
    bindParentRef(ref, tileLayer);
    props?.onReady?.(tileLayer);

    return () => {
      tileLayer.remove();
    }
  }, [map])

  return null
});

MtTileLayer.defaultProps = defaultProps;

export { MtTileLayer, MtTileLayerOptions };
