import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash.isequal';

/**
 * Custom hook wrapping `useSelector` and lodash's deep comparison function `isEqual`.
 * @param {Function} selector Selector function, ideally from `reselect`.
 * @returns {Function}
 */
const useDeepSelector = selector => useSelector(selector, isEqual);

/**
 * Custom hook wrapping `useMemo`, `useSelector` and lodash's deep comparison function `isEqual`.
 * @param {function} selector Selector function, ideally from `reselect`.
 */
export const useMemoDeepSelector = selector =>
  useMemo(useSelector(selector, isEqual), [selector]);

export default useDeepSelector;
