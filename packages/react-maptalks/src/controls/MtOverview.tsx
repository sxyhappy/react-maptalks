import { FC } from 'react';
import { ControlProps, createControl, omit, Ready, useControl, useMap, useMount } from '@react-maptalks/core';
import { control } from 'maptalks';

interface MtOverviewProps extends control.OverviewOptions, ControlProps, Ready<control.Zoom> {
}

const defaultProps: Partial<MtOverviewProps> = {
  visible: true
}

const MtOverviewInstance: FC<MtOverviewProps> = (props) => {
  const { map } = useMap();
  const { control: controlElement, setControl } = useControl();

  useMount(() => {
    if (controlElement) return;

    const zoom = new control.Overview(omit(props, ['children']));

    zoom.addTo(map);
    setControl(zoom);
    props.onReady?.(zoom);
  })

  return null;
}

MtOverviewInstance.displayName = 'MtOverview';
MtOverviewInstance.defaultProps = defaultProps;

const MtOverview = createControl(MtOverviewInstance);

export { MtOverview, MtOverviewProps };
