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
} from 'react';
import { Geometry, GeometryOptions } from 'maptalks';

import { useBindElement, useGeometryProps } from './hooks';
import { GeometryProps } from './core';

export interface GeometryContextProps<T extends Geometry> {
  geometry?: T,
  setGeometry: Dispatch<SetStateAction<T | undefined>>
}

export const geometryContext = createContext<GeometryContextProps<any> | null>(null);
const GeometryProvider = geometryContext.Provider;

export function useGeometry<T extends Geometry>(): GeometryContextProps<T> {
  const context = useContext<GeometryContextProps<T> | null>(geometryContext);

  if (!context) {
    throw new Error('no geometry context provide')
  }

  return context;
}

export function createGeometry<P extends GeometryOptions & GeometryProps, T extends Geometry>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  const Wrapper = forwardRef<T, P>((props, ref) => {
    const [geometry, setGeometry] = useBindElement<T>(props, ref);
    useGeometryProps(props, geometry);

    return (
      <GeometryProvider value={{geometry, setGeometry}}>
        <Component {...props} />
      </GeometryProvider>
    )
  });

  Wrapper.displayName = 'GeometryHoc';

  return Wrapper;
}
