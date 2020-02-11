import CartActionTypes from './cart.types';
// import { createAction } from '../helpers/action.helpers';

const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
  SET_CART_FROM_FIREBASE,
} = CartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

// export const toggleCartHidden = createAction(TOGGLE_CART_HIDDEN);

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = item => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

// export const setCartFromFirebase = cartItems =>
//   createAction(SET_CART_FROM_FIREBASE, cartItems);

export const setCartFromFirebase = cartItems => ({
  type: SET_CART_FROM_FIREBASE,
  payload: cartItems,
});
