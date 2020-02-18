import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash.isequal';

/**
 * Custom hook wrapping `useSelector` and lodash's deep comparison function `isEqual`.
 * @param {function} selector Selector function, ideally from `reselect`.
 */
export default function useDeepSelector(selector) {
  return useSelector(selector, isEqual);
}

/**
 * Custom hook wrapping `useMemo`, `useSelector` and lodash's deep comparison function `isEqual`.
 * @param {function} selector Selector function, ideally from `reselect`.
 */
export function useMemoDeepSelector(selector) {
  return useMemo(useSelector(selector, isEqual), [selector]);
}
