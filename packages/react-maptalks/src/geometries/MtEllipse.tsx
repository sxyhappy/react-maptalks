import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { Coordinate, Ellipse, EllipseOptions } from 'maptalks';

interface MtEllipseProps extends EllipseOptions, GeometryProps, Ready<Ellipse> {
  center: number[] | Coordinate,
  width: number;
  height: number;
}

const defaultProps: Partial<MtEllipseProps> = {
  visible: true,
  infoVisible: false
}

const MtEllipseWrapper: FC<MtEllipseProps> = (props) => {
  const { children, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for ellipse');
    const circle = new Ellipse(rest.center, rest.width, rest.height, rest);

    setGeometry(circle);
    circle.addTo(layer);
    props?.onReady?.(circle);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtEllipseWrapper.displayName = 'MtEllipse';
MtEllipseWrapper.defaultProps = defaultProps;

const MtEllipse = createGeometry(MtEllipseWrapper);

export { MtEllipse, MtEllipseProps };
