import { useEffect } from 'react';
import { Layer } from 'maptalks';

export type Element = Layer;

export function useElementVisible<T extends Element>(visible = true, element?: T): void {
  useEffect(() => {
    if (!element) return;

    if (visible) {
      element?.show?.();
    } else {
      element?.hide?.();
    }
  }, [visible, element])
}
