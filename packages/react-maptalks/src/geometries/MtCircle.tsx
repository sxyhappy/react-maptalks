import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { Circle, CircleOptions, Coordinate } from 'maptalks';

interface MtCircleProps extends CircleOptions, GeometryProps, Ready<Circle> {
  center: number[] | Coordinate,
  radius: number;
}

const defaultProps: Partial<MtCircleProps> = {
  visible: true,
  infoVisible: false
}

const MtCircleComp: FC<MtCircleProps> = (props) => {
  const { children, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for circle');
    const circle = new Circle(rest.center, rest.radius, rest);

    setGeometry(circle);
    circle.addTo(layer);
    props?.onReady?.(circle);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtCircleComp.displayName = 'MtCircle';
MtCircleComp.defaultProps = defaultProps;

const MtCircle = createGeometry(MtCircleComp);

export { MtCircle, MtCircleProps };
