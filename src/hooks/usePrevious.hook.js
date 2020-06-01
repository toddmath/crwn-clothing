import { useRef, useEffect } from 'react';

/**
 * Custom hook that populates a generic container whose current property is mutable
 * and can hold any value, similar to an instance property on a class
 * @param {*} value Any value you wish to persist across re-renders.
 */
export default function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
