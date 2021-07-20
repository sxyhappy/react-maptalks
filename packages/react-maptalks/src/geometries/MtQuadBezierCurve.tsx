import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { QuadBezierCurve, QuadBezierCurveOptions, Coordinate } from 'maptalks';

interface MtQuadBezierCurveProps extends QuadBezierCurveOptions, GeometryProps, Ready<QuadBezierCurve> {
  coordinates: Coordinate[] | number[][],
}

const defaultProps: Partial<MtQuadBezierCurveProps> = {
  visible: true,
  infoVisible: false
}

const MtQuadBezierCurveComp: FC<MtQuadBezierCurveProps> = (props) => {
  const { children, coordinates, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for QuadBezierCurve');
    const quadBezierCurve = new QuadBezierCurve(coordinates, rest);

    setGeometry(quadBezierCurve);
    quadBezierCurve.addTo(layer);
    props?.onReady?.(quadBezierCurve);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtQuadBezierCurveComp.displayName = 'MtArcCurve';
MtQuadBezierCurveComp.defaultProps = defaultProps;

const MtQuadBezierCurve = createGeometry(MtQuadBezierCurveComp);

export { MtQuadBezierCurve, MtQuadBezierCurveProps };
