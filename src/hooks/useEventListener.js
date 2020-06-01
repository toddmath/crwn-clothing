import { useLayoutEffect, useEffect } from 'react';

import useSavedRef from './useSavedRef';

const isBrowser = typeof window !== `undefined`;
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

/**
 * React custom hook that add's and removes an eventListener to provided element,
 * on provided eventName
 * @author Todd Matheson / https://github.com/toddmath
 * @param {string} eventName - The eventName to subscribe to
 * @param {React.MutableRefObject} handler
 * @param {HTMLElement} [element=window]
 */
export default function useEventListener(eventName, handler, element = window) {
  const savedHandler = useSavedRef(handler);

  const isSupported = e => e?.addEventListener;

  useIsomorphicLayoutEffect(() => {
    if (!isSupported(element)) return;

    const eventListener = event => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    // eslint-disable-next-line consistent-return
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
