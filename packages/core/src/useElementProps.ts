import { useEffect } from "react";

import { usePrevious } from "./usePrevious";
import { compareObj } from "./utils/compareObj";
import { capitalLetter } from "./utils/capitalLetter";

export function useElementProps<T extends Record<string, unknown>, P>(props?: T, element?: P) {
  const prev = usePrevious<T>(props);

  useEffect(() => {
    if (element) {
      const differentKeys = compareObj(props || {}, prev || {});

      differentKeys.forEach(key => {
        if ((element as any)[`set${capitalLetter(key)}`] && (element as any)[`get${capitalLetter(key)}`]) {
          if (props?.[key] !== (element as any)[`get${capitalLetter(key)}`]()) {
            (element as any)[`set${capitalLetter(key)}`](props?.[key])
          }
        }
      })
    }
  }, [props]);

  return null;
}
