import { ForwardedRef, useEffect } from "react";

export function useParentRef<T>(ref: ForwardedRef<T>, element?: T) {
  useEffect(() => {
    if (!element) return;

    if (typeof ref === 'function') {
      ref(element)
    } else if (ref) {
      ref.current = element;
    }
  }, [ref, element])
}
