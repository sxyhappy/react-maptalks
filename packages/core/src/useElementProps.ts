import { useEffect } from "react";

import { usePrevious } from "./usePrevious";
import { compareObj, capitalOrLowerLetter } from "./utils";

export function useElementProps<T extends Record<string, any>, P>(props?: T, element?: P) {
  const prev = usePrevious<T>(props);

  useEffect(() => {
    if (element) {
      const differentKeys = compareObj(props || {}, prev || {});

      differentKeys.forEach(key => {
        if ((element as any)[`set${capitalOrLowerLetter(key)}`] && (element as any)[`get${capitalOrLowerLetter(key)}`]) {
          if (props?.[key] !== (element as any)[`get${capitalOrLowerLetter(key)}`]()) {
            (element as any)[`set${capitalOrLowerLetter(key)}`](props?.[key])
          }
        }
      })
    }
  }, [props]);

  return null;
}
