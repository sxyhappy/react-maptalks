import { useEffect, useRef } from 'react';

export const useUnmount = (fn: () => void): void => {
  const fnRef = useRef(fn);

  useEffect(() => {
    return () => {
      fnRef.current();
    }
  }, [])
}
