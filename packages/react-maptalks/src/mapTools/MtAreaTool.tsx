import { FC } from 'react';
import { MapToolProps, useMap, useMount } from '@react-maptalks/core';
import { AreaTool, AreaToolOptions } from 'maptalks';
import { createMapTool, useMapTool } from '@react-maptalks/core';

interface MtAreaToolProps extends MapToolProps, AreaToolOptions {
}

const MtAreaToolComp: FC<MtAreaToolProps> = (props) => {
  const { map } = useMap();
  const { mapTool, setMapTool } = useMapTool<AreaTool>();

  useMount(() => {
    if (!mapTool) {
      const mapTool = new AreaTool(props);
      mapTool.addTo(map);
      setMapTool(mapTool);
    } else {
      return;
    }
  })

  return null;
}

MtAreaToolComp.displayName = 'MtAreaTool';

const MtAreaTool = createMapTool(MtAreaToolComp);

export { MtAreaTool, MtAreaToolProps }
