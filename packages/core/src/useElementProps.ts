import { useEffect } from "react";

import { usePrevious } from "./usePrevious";
import { compareObj, capitalOrLowerLetter } from "./utils";

export function useElementProps<T extends Record<string, any>, P>(props?: T, element?: P) {
  const prev = usePrevious<T>(props);

  useEffect(() => {
    if (!element) return;

    const differentKeys = compareObj(props || {}, prev || {});

    differentKeys.forEach(key => {
      const elementKey = capitalOrLowerLetter(key);
      const setKey = `set${elementKey}`;
      const getKey = `get${elementKey}`;

      if ((element as any)[setKey] && (element as any)[getKey]) {
        if (props?.[key] !== (element as any)[getKey]()) {
          (element as any)[setKey](props?.[key])
        }
      }
    })
  }, [props]);

  return null;
}
