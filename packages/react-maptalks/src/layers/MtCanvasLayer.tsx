import { FC } from 'react';
import { CanvasLayer, CanvasLayerOptions } from 'maptalks';
import { createLayer, useLayer, useMap, useMount } from "@react-maptalks/core";

import { Handler } from "../reactMaptalks";

interface MtCanvasLayerProps extends CanvasLayerOptions {
  id: string;
  onReady?: (canvasLayer: CanvasLayer) => void,
  onIdchange?: Handler;
}

const defaultProps: Partial<MtCanvasLayerProps> = {
  visible: true
}

const MtCanvasLayerWrapper: FC<MtCanvasLayerProps> = (props) => {
  const { map } = useMap();
  const { layer, setLayer } = useLayer<CanvasLayer>();

  useMount(() => {
    if (!props.id) throw new Error('must provide id for canvasLayer');

    if (layer || map.getLayer(props.id)) return;
    const canvasLayer = new CanvasLayer(props.id, props);

    canvasLayer.addTo(map);
    setLayer(canvasLayer);
    props?.onReady?.(canvasLayer);
  });

  return null
};

MtCanvasLayerWrapper.defaultProps = defaultProps;
MtCanvasLayerWrapper.displayName = 'MtCanvasLayer';

const MtCanvasLayer = createLayer(MtCanvasLayerWrapper);

export { MtCanvasLayer, CanvasLayerOptions };
