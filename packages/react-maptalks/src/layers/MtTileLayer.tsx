import { FC } from 'react';
import { TileLayer, TileLayerOptions } from 'maptalks';
import { useMap, createLayer, useLayer, useMount, Handler, Ready } from '@react-maptalks/core';

interface MtTileLayerOptions extends TileLayerOptions, Ready<TileLayer> {
  id: string;
  onClear?: Handler
  onIdchange?: Handler
}

const defaultProps: Partial<MtTileLayerOptions> = {
  visible: true,
  opacity: 1,
}

const MtTileLayerComp: FC<MtTileLayerOptions> = (props) => {
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

MtTileLayerComp.defaultProps = defaultProps;
MtTileLayerComp.displayName = 'MtTileLayer';

const MtTileLayer = createLayer(MtTileLayerComp)

export { MtTileLayer, MtTileLayerOptions };
