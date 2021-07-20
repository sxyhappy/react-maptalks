import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { LineString, LineStringCoordinates, LineStringOptions } from 'maptalks';

interface MtLineStringProps extends LineStringOptions, GeometryProps, Ready<LineString> {
  coordinates: LineStringCoordinates
}

const defaultProps: Partial<MtLineStringProps> = {
  visible: true,
  infoVisible: false
}

const MtLineStringComp: FC<MtLineStringProps> = (props) => {
  const { children, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for lineString');
    const lineString = new LineString(props.coordinates, rest);

    setGeometry(lineString);
    lineString.addTo(layer);
    props?.onReady?.(lineString);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtLineStringComp.displayName = 'MtLineString';
MtLineStringComp.defaultProps = defaultProps;

const MtLineString = createGeometry(MtLineStringComp);

export { MtLineString, MtLineStringProps };
