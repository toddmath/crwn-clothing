/* eslint-disable no-param-reassign */
import produce from 'immer';

import ShopActionTypes from './shop.types';

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} = ShopActionTypes;

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      draft.isFetching = true;
      return draft;
    case FETCH_COLLECTIONS_SUCCESS:
      draft.isFetching = false;
      draft.collections = action.payload;
      return draft;
    case FETCH_COLLECTIONS_FAILURE:
      draft.isFetching = false;
      draft.errorMessage = action.payload;
      return draft;
    default:
      return draft;
  }
});

// const shopReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ShopActionTypes.FETCH_COLLECTIONS_START:
//       return {
//         ...state,
//         isFetching: true,
//       };

//     case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
//       return {
//         ...state,
//         isFetching: false,
//         collections: action.payload,
//       };

//     case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
//       return {
//         ...state,
//         isFetching: false,
//         errorMessage: action.payload,
//       };

//     default:
//       return state;
//   }
// };

export default shopReducer;
