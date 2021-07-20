import { FC } from 'react';
import { ControlProps, createControl, omit, Ready, useControl, useMap, useMount } from '@react-maptalks/core';
import { control } from 'maptalks';

interface MtZoomProps extends control.ZoomOptions, ControlProps, Ready<control.Zoom> {
}

const defaultProps: Partial<MtZoomProps> = {
  visible: true,
}

const MtZoomComp: FC<MtZoomProps> = (props) => {
  const { map } = useMap();
  const { control: controlElement, setControl } = useControl();

  useMount(() => {
    if (controlElement) return;

    const zoom = new control.Zoom(omit(props, ['children']));

    zoom.addTo(map);
    setControl(zoom);
    props.onReady?.(zoom);
  })

  return null;
}

MtZoomComp.displayName = 'MtZoom';
MtZoomComp.defaultProps = defaultProps;

const MtZoom = createControl(MtZoomComp);

export { MtZoom, MtZoomProps };
