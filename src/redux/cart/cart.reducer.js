/* eslint-disable no-param-reassign */
import produce from 'immer';

import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
  SET_CART_FROM_FIREBASE,
} = CartActionTypes;

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      draft.hidden = !draft.hidden;
      return draft;
    case ADD_ITEM:
      draft.cartItems = addItemToCart(draft.cartItems, action.payload);
      return draft;
    case REMOVE_ITEM:
      draft.cartItems = removeItemFromCart(draft.cartItems, action.payload);
      return draft;
    case CLEAR_ITEM_FROM_CART:
      draft.cartItems = draft.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      );
      return draft;
    case CLEAR_CART:
      draft.cartItems = [];
      return draft;
    case SET_CART_FROM_FIREBASE:
      if (draft.cartItems && draft.cartItems.length > 0) {
        draft.cartItems.push(action.payload);
      } else draft.cartItems = action.payload;
      return; // eslint-disable-line consistent-return
    default:
      return draft;
  }
});

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_CART_HIDDEN:
//       return { ...state, hidden: !state.hidden };
//     case ADD_ITEM:
//       return {
//         ...state,
//         cartItems: addItemToCart(state.cartItems, action.payload),
//       };
//     case REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: removeItemFromCart(state.cartItems, action.payload),
//       };
//     case CLEAR_ITEM_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           cartItem => cartItem.id !== action.payload.id
//         ),
//       };
//     case CLEAR_CART:
//       return {
//         ...state,
//         cartItems: [],
//       };
//     case SET_CART_FROM_FIREBASE:
//       return {
//         ...state,
//         cartItems: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default cartReducer;
