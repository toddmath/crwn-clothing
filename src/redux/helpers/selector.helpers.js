import { createSelector, createStructuredSelector } from 'reselect';

export const uncurry = curriedFn => (...args) =>
  args.reduce((left, right) => left(right), curriedFn);

// const createCurrySelector = (...selectors, curriedFn) => (
//     createSelector(...selectors, uncurry(curriedFn))
// );

/**
 * Helper `createSelector` factory function that allows any amount of selectos to be
 * passed in Partial Application.
 * @param {Function} curriedFn Curried functiion to pass into and `uncurry` inside `createSelector`.
 * @returns {Selector} reselect `selector` function.
 * @example createPipeSelector(func)(selector1, ..., selectorN)
 * // or
 * const liftedFunc = createSelectorN(func)
 * const selA = liftedFunc(sel1, sel2)
 * const selB = liftedFunc(sel3, sel4)
 * const selC = liftedFunc(sel5, sel6)
 */
export const createPipeSelector = curriedFn => (...selectors) =>
  createSelector(...selectors, uncurry(curriedFn));

/**
 * Factory function that creates a new makeMapStateToProps Selector each time it's run for HOC's.
 * @param {Selector} selectorFunc - reselct selector function.
 * @param {string} propKey - Prop name to populate prop object with.
 */
export function createMakeMapStateToProps(selectorFunc, propKey) {
  const selector = selectorFunc();
  return createStructuredSelector({ [propKey]: selector });
}

export default createPipeSelector;
