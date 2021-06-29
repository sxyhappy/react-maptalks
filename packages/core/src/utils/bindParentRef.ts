import { ForwardedRef } from 'react';

export function bindParentRef<T>(ref?: ForwardedRef<T>, element?: T): void {
  if (!element || !ref) return;

  if (typeof ref === 'function') {
    ref(element)
  } else if (ref) {
    ref.current = element;
  }
}
