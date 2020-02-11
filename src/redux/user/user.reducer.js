/* eslint-disable no-param-reassign */
import produce from 'immer';

import UserActionTypes from './user.types';

const {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
} = UserActionTypes;

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      draft.currentUser = action.payload;
      draft.error = null;
      return draft;
    case SIGN_OUT_SUCCESS:
      draft.currentUser = null;
      draft.error = null;
      return draft;
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_UP_FAILURE:
      draft.error = action.payload;
      return draft;
    default:
      return draft;
  }
});

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case UserActionTypes.SIGN_IN_SUCCESS:
//       return {
//         ...state,
//         currentUser: action.payload,
//         error: null,
//       };
//     case UserActionTypes.SIGN_OUT_SUCCESS:
//       return {
//         ...state,
//         currentUser: null,
//         error: null,
//       };
//     case UserActionTypes.SIGN_IN_FAILURE:
//     case UserActionTypes.SIGN_OUT_FAILURE:
//     case UserActionTypes.SIGN_UP_FAILURE:
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default userReducer;
