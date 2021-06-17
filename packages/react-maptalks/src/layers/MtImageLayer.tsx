import { forwardRef, useEffect, useState } from 'react';
import { ImageLayerOptions, ImageLayer, ImageLayerImg } from 'maptalks';
import { bindParentRef, useElementEvent, useElementProps, useElementVisible, useMap } from '@react-maptalks/core';

interface MtImageLayerProps extends ImageLayerOptions {
  id: string;
  images: ImageLayerImg[];
  onReady?: (imageLayer: ImageLayer) => void;
}

const defaultProps: Partial<MtImageLayerProps> = {
  visible: true,
  images: []
}

const MtImageLayer = forwardRef<ImageLayer, MtImageLayerProps>((props, ref) => {
  const { map } = useMap();
  const [layer, setLayer] = useState<ImageLayer>();
  useElementVisible(props.visible, layer);
  useElementEvent(props, layer);
  useElementProps(props);

  useEffect(() => {
    if (!props.id) throw new Error('must provide id for imageLayer');

    if (layer || map.getLayer(props.id)) return;
    const imageLayer = new ImageLayer(props.id, props.images, props);

    imageLayer.addTo(map);
    setLayer(imageLayer);
    bindParentRef(ref, imageLayer);
    props?.onReady?.(imageLayer);

    return () => {
      imageLayer.remove();
    }
  }, [map]);

  return null;
})

MtImageLayer.defaultProps = defaultProps;
MtImageLayer.displayName = 'MtImageLayer';

export { MtImageLayerProps, MtImageLayer };
