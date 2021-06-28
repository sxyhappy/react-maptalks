import { FC } from 'react';
import { TileLayer, TileLayerOptions } from 'maptalks';
import { useMap, createLayer, useLayer, useMount } from '@react-maptalks/core';

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

const MtTileLayerWrapper: FC<MtTileLayerOptions> = (props) => {
  const { map } = useMap();
  const { layer, setLayer } = useLayer();

  useMount(() => {
    if (!props.id) throw new Error('must provide id for tileLayer');

    if (layer || map.getLayer(props.id)) return;
    const tileLayer = new TileLayer(props.id, props);

    tileLayer.addTo(map);
    setLayer(tileLayer);
    props?.onReady?.(tileLayer);
  });

  return null;
};

MtTileLayerWrapper.defaultProps = defaultProps;
MtTileLayerWrapper.displayName = 'MtTileLayer';

const MtTileLayer = createLayer(MtTileLayerWrapper)

export { MtTileLayer, MtTileLayerOptions };
