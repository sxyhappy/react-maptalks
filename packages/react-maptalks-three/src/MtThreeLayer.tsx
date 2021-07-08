import { FC } from 'react';
import { ThreeLayer } from 'maptalks.three';
import { CanvasLayerOptions } from 'maptalks';
import { createLayer, Ready, useLayer, useMap, useMount } from '@react-maptalks/core';

interface MtThreeLayerProps extends CanvasLayerOptions, Ready<ThreeLayer> {
  id: string;
  prepareToDraw(...args: any[]): void;
}

const defaultProps: Partial<MtThreeLayerProps> = {
  visible: true,
};

const MtThreeLayerWrapper: FC<MtThreeLayerProps> = (props) => {
  const { map } = useMap();
  const { layer, setLayer } = useLayer<ThreeLayer>();

  useMount(() => {
    if (!props.id) throw new Error('must provide id for ThreeLayer');
    if (layer || map.getLayer(props.id)) return;

    const threeLayer = new ThreeLayer(props.id, props);
    threeLayer.addTo(map);

    setLayer(threeLayer);
    props?.onReady?.(threeLayer);
  });

  return null;
};

MtThreeLayerWrapper.defaultProps = defaultProps;
MtThreeLayerWrapper.displayName = 'MtThreeLayer';

const MtThreeLayer = createLayer(MtThreeLayerWrapper);

export { MtThreeLayer, MtThreeLayerProps };
