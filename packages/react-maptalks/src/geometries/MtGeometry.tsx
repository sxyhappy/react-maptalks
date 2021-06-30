import { FC } from "react";
import { GeometryOptions, Geometry } from 'maptalks';
import { createGeometry, pick, useGeometry, useLayer, useMount, GeometryProps, Ready } from '@react-maptalks/core';

interface MtGeometryProps extends GeometryOptions, Ready<Geometry>, GeometryProps {
  profile: Record<string, any>;
}

const defaultProps: Partial<MtGeometryProps> = {
  visible: true,
  editable: false
}

const MtGeometryWrapper: FC<MtGeometryProps> = (props) => {
  const { children, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;
    const options = pick(rest, ['visible', 'editable', 'interactive', 'cursor', 'measure', 'draggable', 'dragShadow', 'dragOnAxis', 'zIndex'])
    props.profile.options = { ...props.profile.options, ...options };
    const geom = Geometry.fromJSON(props.profile);
    if (!layer) throw new Error('must provide vector layer parent for geometry');

    setGeometry(geom);
    geom.addTo(layer);
    props?.onReady?.(geom);
  })

  return (
    <>{geometry ? children: null}</>
  )
}

MtGeometryWrapper.displayName = 'Geometry'
MtGeometryWrapper.defaultProps = defaultProps;

const MtGeometry = createGeometry(MtGeometryWrapper);

export { MtGeometryProps, MtGeometry }
