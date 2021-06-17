import { useEffect } from "react";

export function useElementVisible<T>(visible = true, element?: T): void {
  useEffect(() => {
    if (!element) return;

    if (visible) {
      (element as any)?.show?.();
    } else {
      (element as any)?.hide?.();
    }
  }, [visible, element])
}
