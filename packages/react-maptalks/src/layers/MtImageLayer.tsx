import { FC } from 'react';
import { ImageLayerOptions, ImageLayer, ImageLayerImg } from 'maptalks';
import { createLayer, useLayer, useMap, useMount, Ready } from '@react-maptalks/core';

interface MtImageLayerProps extends ImageLayerOptions, Ready<ImageLayer> {
  id: string;
  images: ImageLayerImg[];
}

const defaultProps: Partial<MtImageLayerProps> = {
  visible: true,
  images: []
}

const MtImageLayerComp: FC<MtImageLayerProps> = (props) => {
  const { map } = useMap();
  const { layer, setLayer } = useLayer<ImageLayer>();

  useMount(() => {
    if (!props.id) throw new Error('must provide id for imageLayer');

    if (layer || map.getLayer(props.id)) return;
    const imageLayer = new ImageLayer(props.id, props.images, props);

    imageLayer.addTo(map);
    setLayer(imageLayer);
    props?.onReady?.(imageLayer);
  });

  return null;
}

MtImageLayerComp.defaultProps = defaultProps;
MtImageLayerComp.displayName = 'MtImageLayer';

const MtImageLayer = createLayer(MtImageLayerComp);

export { MtImageLayer, MtImageLayerProps };
