import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { Coordinate, Marker, MarkerOptions } from 'maptalks';

interface MtMarkerProps extends MarkerOptions, GeometryProps, Ready<Marker> {
  coordinate: Coordinate
}

const defaultProps: Partial<MtMarkerProps> = {
  visible: true,
  infoVisible: false
}

const MtMarkerComp: FC<MtMarkerProps> = (props) => {
  const { children, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for geometry');
    const marker = new Marker(props.coordinate, rest);

    setGeometry(marker);
    marker.addTo(layer);
    props?.onReady?.(marker);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtMarkerComp.displayName = 'MtMarker';
MtMarkerComp.defaultProps = defaultProps;

const MtMarker = createGeometry(MtMarkerComp);

export { MtMarker, MtMarkerProps };
