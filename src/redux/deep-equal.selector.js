import { createSelectorCreator, defaultMemoize } from 'reselect';

import isEqual from 'lodash.isequal';

// custom createSelector using lodash.isEqual instead of ===
const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export default createDeepEqualSelector;
