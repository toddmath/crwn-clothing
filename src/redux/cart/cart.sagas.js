import { put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import CartActionTypes from './cart.types';
import UserActionTypes from '../user/user.types';
import {
  createRootSaga,
  createTakeLatest,
  createTakeLeading,
} from '../helpers/saga.helpers';

const { SIGN_OUT_SUCCESS, SIGN_IN_SUCCESS } = UserActionTypes;
const { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART } = CartActionTypes;

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.error(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  try {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
  } catch (error) {
    // throw Error(`[saga] checkCartFromFirebase: ${error.message}`);
    console.warn(error.message);
  }
}

export const onSignOutSuccess = createTakeLatest(
  SIGN_OUT_SUCCESS,
  clearCartOnSignOut
);

export const onUserSignIn = createTakeLeading(
  SIGN_IN_SUCCESS,
  checkCartFromFirebase
);

const cartChangeActions = [ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART];
export const onCartChange = createTakeLatest(
  cartChangeActions,
  updateCartInFirebase
);

export const cartSagas = createRootSaga([
  onSignOutSuccess,
  onCartChange,
  onUserSignIn,
]);
