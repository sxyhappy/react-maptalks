import { useEffect } from 'react';
import { MapElement } from '../core';

export function useElementVisible<T extends MapElement>(visible: boolean, element?: T): void {
  useEffect(() => {
    if (!element) return;
    if (visible && !element.isVisible()) {
      element?.show?.();
    }

    if (!visible && element.isVisible()) {
      element?.hide?.();
    }
  }, [visible, element])
}
