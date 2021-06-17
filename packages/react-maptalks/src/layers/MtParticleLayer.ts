import { forwardRef, useEffect, useState } from 'react';
import { ParticleLayer, ParticleLayerOptions } from 'maptalks';
import { bindParentRef, useElementEvent, useElementProps, useElementVisible, useMap } from '@react-maptalks/core';

import { Handler } from "../reactMaptalks";

interface MtParticleLayerProps extends ParticleLayerOptions {
  id: string;
  onReady?: (tileLayer: ParticleLayer) => void;
  onIdchange?: Handler
}

const defaultProps: Partial<MtParticleLayerProps> = {
  visible: true
}

const MtParticleLayer = forwardRef<ParticleLayer, MtParticleLayerProps>((props, ref) => {
  const { map } = useMap();
  const [layer, setLayer] = useState<ParticleLayer>();
  useElementVisible(props.visible, layer);
  useElementEvent(props, layer);
  useElementProps(props)

  useEffect(() => {
    if (!props.id) throw new Error('must provide id for particleLayer');

    if (layer || map.getLayer(props.id)) return;
    const particleLayer = new ParticleLayer(props.id, props);

    particleLayer.addTo(map);
    setLayer(particleLayer);
    bindParentRef(ref, particleLayer);
    props?.onReady?.(particleLayer);

    return () => {
      particleLayer.remove();
    }
  }, [map])
  return null;
});

MtParticleLayer.defaultProps = defaultProps;

export { MtParticleLayer, MtParticleLayerProps }
