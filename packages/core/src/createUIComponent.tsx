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
import { ui } from 'maptalks';

import { useBindElement } from './hooks';
import { UIComponentProps } from "./core";

export interface UIComponentContextProps<T extends ui.UIComponent> {
  uiComponent?: T,
  setUIComponent: Dispatch<SetStateAction<T | undefined>>
}

export const uiComponentContext = createContext<UIComponentContextProps<any> | null>(null);
const UIComponentProvider = uiComponentContext.Provider;

export function useUIComponent<T extends ui.UIComponent>(): UIComponentContextProps<T> {
  const context = useContext<UIComponentContextProps<T> | null>(uiComponentContext);

  if (!context) {
    throw new Error('no UIComponent context provide')
  }

  return context;
}

export function createUIComponent<P extends UIComponentProps, T extends ui.UIComponent>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  const Wrapper = forwardRef<T, P>((props, ref) => {
    const [uiComponent, setUIComponent] = useBindElement<T>(props, ref);

    return (
      <UIComponentProvider value={{uiComponent, setUIComponent}}>
        <Component {...props} />
      </UIComponentProvider>
    )
  });

  Wrapper.displayName = 'GeometryHoc';

  return Wrapper;
}
