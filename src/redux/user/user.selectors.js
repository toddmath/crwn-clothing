// import { createSelector } from 'reselect';
import createDeepEqualSelector from '../deep-equal.selector';

const selectUser = state => state.user;

// export const selectCurrentUser = createSelector(
//   [selectUser],
//   user => user.currentUser
// );

export const selectCurrentUser = createDeepEqualSelector(
  [selectUser],
  user => user.currentUser
);
