import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { Coordinate, Rectangle, RectangleOptions } from 'maptalks';

interface MtRectangleProps extends RectangleOptions, GeometryProps, Ready<Rectangle> {
  coordinates: Coordinate | number[];
  width: number;
  height: number;
}

const defaultProps: Partial<MtRectangleProps> = {
  visible: true,
  infoVisible: false
}

const MtRectangleWrapper: FC<MtRectangleProps> = (props) => {
  const { children, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for polygon');
    const polygon = new Rectangle(rest.coordinates, rest.width, rest.height, rest);

    setGeometry(polygon);
    polygon.addTo(layer);
    props?.onReady?.(polygon);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtRectangleWrapper.displayName = 'MtRectangle';
MtRectangleWrapper.defaultProps = defaultProps;

const MtRectangle = createGeometry(MtRectangleWrapper);

export { MtRectangle, MtRectangleProps };
