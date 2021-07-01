import { FC } from 'react';
import { ControlProps, createControl, omit, Ready, useControl, useMap, useMount } from '@react-maptalks/core';
import { control } from 'maptalks';

interface MtZoomProps extends control.ZoomOptions, ControlProps, Ready<control.Zoom> {
}

const defaultProps: Partial<MtZoomProps> = {
  visible: true,
}

const MtZoomInstance: FC<MtZoomProps> = (props) => {
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

MtZoomInstance.displayName = 'MtZoom';
MtZoomInstance.defaultProps = defaultProps;

const MtZoom = createControl(MtZoomInstance);

export { MtZoom, MtZoomProps };
