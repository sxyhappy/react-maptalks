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
import { control } from 'maptalks';

import { useBindElement } from './hooks';
import { ControlProps } from "./core";

export interface ControlContextProps<T extends control.Control> {
  control?: T,
  setControl: Dispatch<SetStateAction<T | undefined>>
}

export const controlContext = createContext<ControlContextProps<any> | null>(null);
const ControlProvider = controlContext.Provider;

export function useControl<T extends control.Control>(): ControlContextProps<T> {
  const context = useContext<ControlContextProps<T> | null>(controlContext);

  if (!context) {
    throw new Error('no control context provide')
  }

  return context;
}

export function createControl<P extends ControlProps, T extends control.Control>(Component: FC<P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  const Wrapper = forwardRef<T, P>((props, ref) => {
    const [control, setControl] = useBindElement<T>(props, ref);

    return (
      <ControlProvider value={{control, setControl}}>
        <Component {...props} />
      </ControlProvider>
    )
  });

  Wrapper.displayName = 'ControlHoc';

  return Wrapper;
}
