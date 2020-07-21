import { useCallback, useRef } from 'react';

function useHandle(callback?: Function) {
  const handle = useRef<Function>();
  handle.current = callback;
  return useCallback((...args: any[]) => {
    if (typeof handle.current === 'function') {
      return handle.current(...args);
    }
  }, []);
}

export default useHandle;
