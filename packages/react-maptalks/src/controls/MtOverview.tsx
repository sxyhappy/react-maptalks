import { FC } from 'react';
import { ControlProps, createControl, omit, Ready, useControl, useMap, useMount } from '@react-maptalks/core';
import { control } from 'maptalks';

interface MtOverviewProps extends control.OverviewOptions, ControlProps, Ready<control.Zoom> {
}

const defaultProps: Partial<MtOverviewProps> = {
  visible: true
}

const MtOverviewComp: FC<MtOverviewProps> = (props) => {
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

MtOverviewComp.displayName = 'MtOverview';
MtOverviewComp.defaultProps = defaultProps;

const MtOverview = createControl(MtOverviewComp);

export { MtOverview, MtOverviewProps };
