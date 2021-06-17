import { forwardRef, useEffect, useState } from 'react';
import { Geometry, VectorLayer, VectorLayerOptions } from 'maptalks';
import { useElementEvent, useElementProps, useElementVisible, useMap, useParentRef } from '@react-maptalks/core';
import { Handler } from "../reactMaptalks";

interface MtVectorLayerOptions extends VectorLayerOptions {
  id: string;
  geometries?: Geometry | Geometry[];
  onReady?: (vectorLayer: VectorLayer) => void;
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

const MtVectorLayer = forwardRef<VectorLayer, MtVectorLayerOptions>((props, ref) => {
  const [layer, setLayer] = useState<VectorLayer>();
  const { map } = useMap();

  useParentRef(ref, layer);
  useElementEvent(props, layer);
  useElementVisible(props.visible, layer);
  useElementProps(props, layer);

  useEffect(() => {
    if (!props.id) throw new Error('must provide id for vectorLayer');

    const vectorLayer = new VectorLayer(props.id, props.geometries, props);
    vectorLayer.addTo(map);
    setLayer(vectorLayer);
    props?.onReady?.(vectorLayer);

    return () => {
      vectorLayer.remove();
    }
  }, [map]);

  useEffect(() => {
    if (!layer || !props.geometries) return;

    if (JSON.stringify(props.geometries) !== JSON.stringify(layer.getGeometries())) {
      layer.addGeometry(props.geometries);
    }

  }, [props.geometries, layer]);

  return (
    <>
      { props.children }
    </>
  )
})

MtVectorLayer.defaultProps = defaultProps;

export { MtVectorLayer, MtVectorLayerOptions };
