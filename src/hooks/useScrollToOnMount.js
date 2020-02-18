import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const isBrowser = typeof window !== `undefined`;

export const useIsomorphicLayoutEffect = isBrowser
  ? useLayoutEffect
  : useEffect;

/**
 * Custom react hook that allows you to scroll the window to specified coordinates on mount.
 * @param {object} coords
 * @param {number} [coords.x=0] X position to scroll to on mount.
 * @param {number} [coords.y=0] Y position to scroll to on mount.
 */
export default function useScrollToOnMount({ x = 0, y = 0 } = {}) {
  const { pathname } = useLocation();

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(x, y);
  }, [pathname, x, y]);

  return null;
}
