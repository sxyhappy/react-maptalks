import { FC } from 'react';
import { ParticleLayer, ParticleLayerOptions } from 'maptalks';
import { createLayer, useLayer, useMap, useMount, Handler, Ready } from '@react-maptalks/core';

interface MtParticleLayerProps extends ParticleLayerOptions, Ready<ParticleLayer> {
  id: string;
  onIdchange?: Handler;
}

const defaultProps: Partial<MtParticleLayerProps> = {
  visible: true
}

const MtParticleLayerComp: FC<MtParticleLayerProps> = (props) => {
  const { map } = useMap();
  const { layer, setLayer } = useLayer();

  useMount(() => {
    if (!props.id) throw new Error('must provide id for particleLayer');

    if (layer || map.getLayer(props.id)) return;
    const particleLayer = new ParticleLayer(props.id, props);

    particleLayer.addTo(map);
    setLayer(particleLayer);
    props?.onReady?.(particleLayer);
  });

  return null;
};

MtParticleLayerComp.defaultProps = defaultProps;
MtParticleLayerComp.displayName = 'MtParticleLayer';

const MtParticleLayer = createLayer(MtParticleLayerComp);

export { MtParticleLayer, MtParticleLayerProps };
