import { ForwardedRef, useEffect } from "react";
import { usePrevious } from "./usePrevious";

export function useParentRef<T>(ref: ForwardedRef<T>, element?: T) {
  const preElement = usePrevious(element);

  useEffect(() => {
    if (!element || element === preElement) return;

    if (typeof ref === 'function') {
      ref(element)
    } else if (ref) {
      ref.current = element;
    }
  }, [ref, element])
}
