import { FC } from 'react';
import { MapToolProps, useMap, useMount } from '@react-maptalks/core';
import { DistanceTool, DistanceToolOptions } from 'maptalks';
import { createMapTool, useMapTool } from '@react-maptalks/core';

interface MtDistanceToolProps extends MapToolProps, DistanceToolOptions {
}

const MtDistanceToolComp: FC<MtDistanceToolProps> = (props) => {
  const { map } = useMap();
  const { mapTool, setMapTool } = useMapTool<DistanceTool>();

  useMount(() => {
    if (!mapTool) {
      const mapTool = new DistanceTool(props);
      mapTool.addTo(map);
      setMapTool(mapTool);
    } else {
      return;
    }
  })

  return null;
}

MtDistanceToolComp.displayName = 'MtDistanceTool';

const MtDistanceTool = createMapTool(MtDistanceToolComp);

export { MtDistanceTool, MtDistanceToolProps }
