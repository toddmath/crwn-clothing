import { createSelector } from 'reselect';
// import createDeepEqualSelector from '../deep-equal.selector';

const selectUser = state => state.user;

// * Normal Compare Version
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

// * Deep Equal Compare Version
// export const selectCurrentUser = createDeepEqualSelector(
//   [selectUser],
//   user => user.currentUser
// );
