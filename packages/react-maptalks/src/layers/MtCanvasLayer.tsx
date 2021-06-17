import { forwardRef, useEffect, useState } from 'react';
import { CanvasLayer, CanvasLayerOptions } from 'maptalks';
import { bindParentRef, useElementEvent, useElementProps, useElementVisible, useMap } from "@react-maptalks/core";
import { Handler } from "../reactMaptalks";

interface MtCanvasLayerProps extends CanvasLayerOptions {
  id: string;
  onReady?: (canvasLayer: CanvasLayer) => void,
  onIdchange?: Handler;
}

const defaultProps: Partial<MtCanvasLayerProps> = {
  visible: true
}

const MtCanvasLayer = forwardRef<CanvasLayer, MtCanvasLayerProps>((props, ref) => {
  const { map } = useMap();
  const [layer, setLayer] = useState<CanvasLayer>();
  useElementVisible(props?.visible, layer);
  useElementEvent(props, layer);
  useElementProps(props);

  useEffect(() => {
    if (!props.id) throw new Error('must provide id for canvasLayer');

    if (layer || map.getLayer(props.id)) return;
    const canvasLayer = new CanvasLayer(props.id, props);

    canvasLayer.addTo(map);
    setLayer(canvasLayer);
    bindParentRef(ref, canvasLayer);
    props?.onReady?.(canvasLayer);

    return () => {
      canvasLayer.remove();
    }
  }, [map]);

  return null
});

MtCanvasLayer.defaultProps = defaultProps;
MtCanvasLayer.displayName = 'MtCanvasLayer';

export { CanvasLayerOptions, MtCanvasLayer };
