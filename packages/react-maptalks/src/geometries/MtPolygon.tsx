import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { Polygon, PolygonCoordinates, PolygonOptions } from 'maptalks';

interface MtPolygonProps extends PolygonOptions, GeometryProps, Ready<Polygon> {
  coordinates: PolygonCoordinates
}

const defaultProps: Partial<MtPolygonProps> = {
  visible: true,
  infoVisible: false
}

const MtPolygonComp: FC<MtPolygonProps> = (props) => {
  const { children, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for polygon');
    const polygon = new Polygon(rest.coordinates, rest);

    setGeometry(polygon);
    polygon.addTo(layer);
    props?.onReady?.(polygon);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtPolygonComp.displayName = 'MtPolygon';
MtPolygonComp.defaultProps = defaultProps;

const MtPolygon = createGeometry(MtPolygonComp);

export { MtPolygon, MtPolygonProps };
