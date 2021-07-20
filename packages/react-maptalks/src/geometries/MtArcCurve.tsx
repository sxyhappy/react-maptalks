import { FC } from 'react';
import { createGeometry, GeometryProps, Ready, useGeometry, useLayer, useMount } from '@react-maptalks/core';
import { ArcCurve, ArcCurveOptions, Coordinate } from 'maptalks';

interface MtArcCurveProps extends ArcCurveOptions, GeometryProps, Ready<ArcCurve> {
  coordinates: Coordinate[] | number[][],
}

const defaultProps: Partial<MtArcCurveProps> = {
  visible: true,
  infoVisible: false
}

const MtArcCurveComp: FC<MtArcCurveProps> = (props) => {
  const { children, coordinates, ...rest } = props;
  const { geometry, setGeometry } = useGeometry();
  const { layer } = useLayer();

  useMount(() => {
    if (geometry) return;

    if (!layer) throw new Error('must provide vector layer parent for ArcCurve');
    const arcCurve = new ArcCurve(coordinates, rest);

    setGeometry(arcCurve);
    arcCurve.addTo(layer);
    props?.onReady?.(arcCurve);
  })

  return (
    <>{ geometry ? children: null }</>
  )
}

MtArcCurveComp.displayName = 'MtArcCurve';
MtArcCurveComp.defaultProps = defaultProps;

const MtArcCurve = createGeometry(MtArcCurveComp);

export { MtArcCurve, MtArcCurveProps };
