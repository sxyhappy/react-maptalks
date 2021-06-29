import { FC, useEffect } from 'react';
import { Geometry, VectorLayer, VectorLayerOptions } from 'maptalks';
import { createLayer, useLayer, useMap, useMount, Handler, Ready } from '@react-maptalks/core';

interface MtVectorLayerOptions extends VectorLayerOptions, Ready<VectorLayer> {
  id: string;
  geometries?: Geometry | Geometry[];
  onSetstyle?: Handler;
  onRemovestyle?: Handler;
  onAddgeo?: Handler;
  onRemovegeo?: Handler;
  onClear?: Handler;
  onIdchange?: Handler;
}

const defaultProps: Partial<MtVectorLayerOptions> = {
  opacity: 1,
}

const MtVectorLayerWrapper: FC<MtVectorLayerOptions> = (props) => {
  const { map } = useMap();
  const { layer, setLayer } = useLayer<VectorLayer>();

  useMount(() => {
    if (!props.id) throw new Error('must provide id for vectorLayer');
    if (layer || map.getLayer(props.id)) return;

    const vectorLayer = new VectorLayer(props.id, props.geometries, props);
    vectorLayer.addTo(map);
    setLayer(vectorLayer);
    props?.onReady?.(vectorLayer);
  });

  useEffect(() => {
    if (!layer || !props.geometries) return;

    if (JSON.stringify(props.geometries) !== JSON.stringify(layer.getGeometries())) {
      layer.addGeometry(props.geometries);
    }

  }, [props.geometries, layer]);

  return (
    <>
      { layer ? props.children : null }
    </>
  )
};

MtVectorLayerWrapper.defaultProps = defaultProps;
MtVectorLayerWrapper.displayName = 'MtVectorLayer';

const MtVectorLayer = createLayer(MtVectorLayerWrapper);

export { MtVectorLayer, MtVectorLayerOptions };
