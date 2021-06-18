import { forwardRef, useEffect, useState } from "react";
import { ThreeLayer } from "maptalks.three";
import { CanvasLayerOptions } from 'maptalks';
import { bindParentRef, useElementEvent, useElementProps, useElementVisible, useMap } from "@react-maptalks/core";

interface MtThreeLayerProps extends CanvasLayerOptions {
  id: string;
  onReady?: (layer: ThreeLayer) => void;
  prepareToDraw(...args: any[]): void;
}

const defaultProps: Partial<MtThreeLayerProps> = {
  visible: true,
};

const MtThreeLayer = forwardRef<ThreeLayer, MtThreeLayerProps>((props, ref) => {
  const { map } = useMap();
  const [layer, setLayer] = useState<ThreeLayer>();
  useElementVisible(props?.visible, layer);
  useElementEvent(props, layer);
  useElementProps(props);

  useEffect(() => {
    if (!props.id) throw new Error('must provide id for ThreeLayer');
    if (layer || map.getLayer(props.id)) return;

    const threeLayer = new ThreeLayer(props.id, props);
    threeLayer.addTo(map);

    setLayer(threeLayer);
    bindParentRef(ref, threeLayer);
    props?.onReady?.(threeLayer);

    return () => {
      threeLayer.remove();
    }

  }, []);

  return null;
});

MtThreeLayer.defaultProps = defaultProps;
MtThreeLayer.displayName = 'MtThreeLayer';

export { MtThreeLayer, MtThreeLayerProps };
