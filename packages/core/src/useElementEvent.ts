import { useEffect, useMemo } from "react";

import { getPropsEvent, isEmpty, isEqual } from './utils';
import { usePrevious } from "./usePrevious";

export function useElementEvent<T extends Record<string, any>, P>(props: T, element: P) {
  const eventMap = useMemo(() => getPropsEvent(props), [props]);
  const prevEventMap = usePrevious(eventMap);

  useEffect(() => {
    if (!isEmpty(eventMap) && element) {
      for (let key in eventMap) {
        (element as any).addEventListener(key, eventMap[key]);
      }
    }

    return () => {
      if (element) {
        for (let key in eventMap) {
          (element as any).removeEventListener(key, eventMap[key]);
        }
      }
    }
  }, [isEqual(eventMap, prevEventMap), element])
}
