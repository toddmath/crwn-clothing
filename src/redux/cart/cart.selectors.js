import { createSelector } from 'reselect';

import createDeepEqualSelector from '../deep-equal.selector';

const selectCart = state => state.cart;

const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

const selectCartItemsCount = createDeepEqualSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

const selectCartTotal = createDeepEqualSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

export {
  selectCartItems,
  selectCartHidden,
  selectCartItemsCount,
  selectCartTotal,
};
