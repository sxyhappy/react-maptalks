import { FC } from 'react';
import { CanvasLayer, CanvasLayerOptions } from 'maptalks';
import { createLayer, useLayer, useMap, useMount, Handler, Ready } from "@react-maptalks/core";

interface MtCanvasLayerProps extends CanvasLayerOptions, Ready<CanvasLayer> {
  id: string;
  onIdchange?: Handler;
}

const defaultProps: Partial<MtCanvasLayerProps> = {
  visible: true
}

const MtCanvasLayerComp: FC<MtCanvasLayerProps> = (props) => {
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

MtCanvasLayerComp.defaultProps = defaultProps;
MtCanvasLayerComp.displayName = 'MtCanvasLayer';

const MtCanvasLayer = createLayer(MtCanvasLayerComp);

export { MtCanvasLayer, CanvasLayerOptions };
