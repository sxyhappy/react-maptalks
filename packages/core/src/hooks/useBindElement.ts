import { Dispatch, ForwardedRef, SetStateAction, useEffect, useState } from 'react';
import { usePrevious } from './usePrevious';
import { useElementVisible } from './useElementVisible';
import { useElementEvent } from './useElementEvent';
import { useElementProps } from './useElementProps';
import { bindParentRef } from '../utils';
import { useUnmount } from './useUnmount';
import { MapElement, MapElementOptions } from '../core';

export function useBindElement<T extends MapElement>(props: MapElementOptions, ref: ForwardedRef<T>): [T | undefined, Dispatch<SetStateAction<T | undefined>>]  {
  const [element, setElement] = useState<T>();
  const preElement = usePrevious(element);
  useElementVisible(props?.visible ?? true, element);
  useElementEvent(props, element);
  useElementProps(props);

  useEffect(() => {
    if (element !== preElement) {
      bindParentRef(ref, element)
    }
  }, [element, ref]);

  useUnmount(() => {
    element?.remove();
  })

  return [element, setElement];
}
