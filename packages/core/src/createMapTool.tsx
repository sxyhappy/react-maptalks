import {
  createContext,
  Dispatch,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { MapTool } from 'maptalks';

import { useElementEvent, useElementProps, usePrevious } from './hooks';
import { bindParentRef } from './utils';
import { MapToolProps } from './core';

export interface MapToolContextProps<T extends MapTool> {
  mapTool?: T,
  setMapTool: Dispatch<SetStateAction<T | undefined>>
}

export const mapToolContext = createContext<MapToolContextProps<any> | null>(null);
const MapToolProvider = mapToolContext.Provider;

export function useMapTool<T extends MapTool>(): MapToolContextProps<T> {
  const context = useContext<MapToolContextProps<T> | null>(mapToolContext);

  if (!context) {
    throw new Error('no mapTool context provide')
  }

  return context;
}

export function createMapTool<P extends MapToolProps, T extends MapTool>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  const Wrapper = forwardRef<T, P>((props, ref) => {
    const [mapTool, setMapTool] = useState<T>();
    const preMapTool = usePrevious(mapTool);

    useElementEvent(props, mapTool);
    useElementProps(props);

    useEffect(() => {
      if (mapTool && mapTool !== preMapTool) {
        bindParentRef(ref, mapTool)
      }
    }, [mapTool, ref]);

    useEffect(() => {
      if (!mapTool) return;

      if (props.enable) {
        mapTool.enable()
      } else {
        mapTool.disable();
      }

    }, [mapTool, props.enable])

    return (
      <MapToolProvider value={{mapTool, setMapTool}}>
        <Component {...props} />
      </MapToolProvider>
    )
  });

  Wrapper.displayName = 'MapToolHoc';

  return Wrapper;
}
