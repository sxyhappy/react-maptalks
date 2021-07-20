import { FC } from 'react';
import { WMSTileLayerOptions, WMSTileLayer } from 'maptalks';
import { useMap, useLayer, useMount, createLayer, Handler, Ready } from '@react-maptalks/core';

interface MtWMSLayerProps extends WMSTileLayerOptions, Ready<WMSTileLayer> {
  id: string;
  onClear: Handler;
  onIdchange: Handler;
}

const defaultProps: Partial<MtWMSLayerProps> = {
  visible: true,
  opacity: 1
}

const MtWMSTileLayerComp: FC<MtWMSLayerProps> = (props) => {
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

MtWMSTileLayerComp.defaultProps = defaultProps;
MtWMSTileLayerComp.displayName = 'MtWMSTileLayer';

const MtWMSTileLayer = createLayer(MtWMSTileLayerComp);

export { MtWMSTileLayer, MtWMSLayerProps };
