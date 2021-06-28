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
  useState
} from 'react';
import { Layer, LayerOptions } from 'maptalks';

import { bindParentRef } from './utils';
import { useElementEvent, useElementProps, useElementVisible, usePrevious, useUnmount } from './hooks';

export interface LayerContextProps<T extends Layer> {
  layer?: T,
  setLayer: Dispatch<SetStateAction<T | undefined>>
}

export const layerContext = createContext<LayerContextProps<any> | null>(null);
const LayerProvider = layerContext.Provider;

export function useLayer<T extends Layer>(): LayerContextProps<T> {
  const context = useContext<LayerContextProps<T> | null>(layerContext);

  if (!context) {
    throw new Error('no layer context provide')
  }

  return context;
}

export function createLayer<P extends LayerOptions, T extends Layer>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<Layer>> {
  const Wrapper = forwardRef<Layer, P>((props, ref) => {
    const [layer, setLayer] = useState<T>();
    const preLayer = usePrevious(layer);
    useElementVisible(props?.visible, layer);
    useElementEvent(props, layer);
    useElementProps(props);

    useEffect(() => {
      if (layer !== preLayer) {
        bindParentRef(ref, layer)
      }
    }, [layer, ref]);

    useUnmount(() => {
      layer?.remove();
    })

    return (
      <LayerProvider value={{layer, setLayer}}>
        <Component {...props} />
      </LayerProvider>
    )
  });

  Wrapper.displayName = 'LayerHoc';

  return Wrapper;
}
