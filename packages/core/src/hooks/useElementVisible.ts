import { useEffect } from 'react';
import { MapElement } from "../core";

export function useElementVisible<T extends MapElement>(visible = true, element?: T): void {
  useEffect(() => {
    if (!element) return;

    if (visible) {
      element?.show?.();
    } else {
      element?.hide?.();
    }
  }, [visible, element])
}
