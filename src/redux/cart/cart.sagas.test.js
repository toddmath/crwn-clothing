import { takeLatest, put, all } from 'redux-saga/effects';
import tester from 'k-redux-saga-tester';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';
import {
  clearCartOnSignOut,
  onSignOutSuccess,
  checkCartFromFirebase,
  onUserSignIn,
  onCartChange,
  updateCartInFirebase,
  cartSagas,
} from './cart.sagas';
import { getUserCartRef } from '../../firebase/firebase.utils';
import CartActionTypes from './cart.types';

describe('on signout success saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });
});

describe('clear cart on signout saga', () => {
  it('should fire clearCart', () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});

describe('check cart from firebase', () => {
  it('should fire getUserCartRef, calling with passed in user argument', () => {
    const mockUserID = { id: 'testing123123' };
    const mockUser = { payload: mockUserID };
    const generator = checkCartFromFirebase(mockUser);
    expect(generator.next().value).toEqual(getUserCartRef(mockUser.id));
  });
});

describe('on user sign in', () => {
  it('should fire UserActionType.SIGN_IN_SUCCESS, checkCartFromFirebase', () => {
    const generator = onUserSignIn();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase)
    );
  });
});

describe('on cart change', () => {
  it('should call cart actions', () => {
    const generator = onCartChange();
    const mockActions = [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ];
    const mockNext = takeLatest(mockActions, updateCartInFirebase);
    expect(generator.next().value).toEqual(mockNext);
  });
});

describe('cartSaga snapshot', () => {
  it('should match snapshot', () => {
    const caller = tester(cartSagas);
    // const mockCalls = all([
    //   call(onSignOutSuccess),
    //   call(onCartChange),
    //   call(onUserSignIn),
    // ]);
    const mocks = {
      call: [
        () => [
          takeLatest(CartActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut()),
          takeLatest(
            [
              CartActionTypes.ADD_ITEM,
              CartActionTypes.REMOVE_ITEM,
              CartActionTypes.CLEAR_ITEM_FROM_CART,
            ],
            updateCartInFirebase
          ),
          takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut),
        ],
      ],
    };
    expect(caller(all(mocks))).toMatchSnapshot();
  });
});
