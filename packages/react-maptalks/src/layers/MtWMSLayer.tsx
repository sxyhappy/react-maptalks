import { forwardRef, useEffect, useState } from 'react';
import { WMSTileLayerOptions, WMSTileLayer } from 'maptalks';
import { useElementEvent, useElementProps, useElementVisible, useMap, bindParentRef } from '@react-maptalks/core';
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

const MtWMSTileLayer = forwardRef<WMSTileLayer, MtWMSLayerProps>((props, ref) => {
  const [layer, setLayer] = useState<WMSTileLayer>();
  const { map } = useMap();
  useElementProps(props, layer);
  useElementVisible(props.visible, layer);
  useElementEvent(props, layer);

  useEffect(() => {
    if (!props.id) throw new Error('must provide id for wmsLayer');

    const wmsLayer = new WMSTileLayer(props.id, props);
    wmsLayer.addTo(map);
    setLayer(wmsLayer);
    bindParentRef(ref, layer);
    props?.onReady?.(wmsLayer);

    return () => {
      wmsLayer.remove();
    }

  }, [map]);

  return null;
});

MtWMSTileLayer.defaultProps = defaultProps;
MtWMSTileLayer.displayName = 'MtWMSTileLayer';

export { MtWMSTileLayer, MtWMSLayerProps };
