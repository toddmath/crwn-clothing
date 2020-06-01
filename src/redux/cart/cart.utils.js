const addExisitingCartItem = (cartItems, toAdd) =>
  cartItems.map(cartItem =>
    cartItem.id === toAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

const addNewCartItem = (cartItems, toAdd) => [
  ...cartItems,
  { ...toAdd, quantity: 1 },
];

const hasExisiting = (cartItems, { id: addId }) =>
  cartItems.find(({ id }) => id === addId);

/**
 * Helper function to add items to cart.
 * @param {object[]} cartItems Array of cartItems to search.
 * @param {object} toAdd Single new item to add to the cart.
 * @returns {array} New cart with added item.
 */
function addItemToCart(cartItems, toAdd) {
  return hasExisiting(cartItems, toAdd)
    ? addExisitingCartItem(cartItems, toAdd)
    : addNewCartItem(cartItems, toAdd);
}

const removeSingleCartItem = (cartItems, { id: rid }) =>
  cartItems.filter(({ id }) => id !== rid);

const removeMultiCartItem = (cartItems, { id: rid }) =>
  cartItems.map(cartItem =>
    cartItem.id === rid
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );

/**
 * Helper function to remove an item from cart.
 * @param {array} cartItems Array of cartItems to remove from.
 * @param {object} toRemove Single item to remove from the cart.
 * @returns {array} Updated cart without removed item.
 */
function removeItemFromCart(cartItems, toRemove) {
  return hasExisiting(cartItems, toRemove)?.quantity === 1
    ? removeSingleCartItem(cartItems, toRemove)
    : removeMultiCartItem(cartItems, toRemove);
}

export { addItemToCart, removeItemFromCart };
