/* eslint-disable no-param-reassign */
import produce from 'immer';

import { createEnum } from '../../helpers';
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

const initialState = createEnum({
  hidden: true,
  cartItems: [],
});

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
      if (draft.cartItems?.length > 0) {
        draft.cartItems.push(action.payload);
      } else draft.cartItems = action.payload;
      return; // eslint-disable-line consistent-return
    default:
      return draft;
  }
});

export default cartReducer;
