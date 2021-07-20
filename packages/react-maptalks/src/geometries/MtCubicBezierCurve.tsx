import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { CubicBezierCurve, CubicBezierCurveOptions, Coordinate } from 'maptalks';

interface MtCubicBezierCurveProps extends CubicBezierCurveOptions, GeometryProps, Ready<CubicBezierCurve> {
  coordinates: Coordinate[] | number[][],
}

const defaultProps: Partial<MtCubicBezierCurveProps> = {
  visible: true,
  infoVisible: false
}

const MtCubicBezierCurveComp: FC<MtCubicBezierCurveProps> = (props) => {
  const { children, coordinates, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for CubicBezierCurve');
    const cubicBezierCurve = new CubicBezierCurve(coordinates, rest);

    setGeometry(cubicBezierCurve);
    cubicBezierCurve.addTo(layer);
    props?.onReady?.(cubicBezierCurve);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtCubicBezierCurveComp.displayName = 'MtArcCurve';
MtCubicBezierCurveComp.defaultProps = defaultProps;

const MtCubicBezierCurve = createGeometry(MtCubicBezierCurveComp);

export { MtCubicBezierCurve, MtCubicBezierCurveProps };
