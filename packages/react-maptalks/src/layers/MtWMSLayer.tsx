import { FC } from 'react';
import { WMSTileLayerOptions, WMSTileLayer } from 'maptalks';
import { useMap, useLayer, useMount, createLayer } from '@react-maptalks/core';

import { Handler } from '../reactMaptalks';

interface MtWMSLayerProps extends WMSTileLayerOptions {
  id: string;
  onReady: (wmsTileLayer: WMSTileLayer) => void;
  onClear: Handler;
  onIdchange: Handler;
}

const defaultProps: Partial<MtWMSLayerProps> = {
  visible: true,
  opacity: 1
}

const MtWMSTileLayerWrapper: FC<MtWMSLayerProps> = (props) => {
  const { map } = useMap();
  const { layer, setLayer } = useLayer<WMSTileLayer>();

  useMount(() => {
    if (!props.id) throw new Error('must provide id for wmsLayer');

    if (layer || map.getLayer(props.id)) return;
    const wmsLayer = new WMSTileLayer(props.id, props);
    wmsLayer.addTo(map);
    setLayer(wmsLayer);
    props?.onReady?.(wmsLayer);
  });

  return null;
};

MtWMSTileLayerWrapper.defaultProps = defaultProps;
MtWMSTileLayerWrapper.displayName = 'MtWMSTileLayer';

const MtWMSTileLayer = createLayer(MtWMSTileLayerWrapper);

export { MtWMSTileLayer, MtWMSLayerProps };
