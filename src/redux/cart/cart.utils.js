/**
 * Simple helper function to add items to cart.
 * @param {array} cartItems Array of cartItems to search.
 * @param {object} cartItemToAdd Single new item to add to the cart.
 * @returns {array} New cart with added item.
 */
function addItemToCart(cartItems, cartItemToAdd) {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

/**
 * Simple helper function to remove an item from cart.
 * @param {array} cartItems Array of cartItems to remove from.
 * @param {object} cartItemToAdd Single new item to remove from the cart.
 * @returns {array} Updated cart without removed item.
 */
function removeItemFromCart(cartItems, cartItemToRemove) {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
}

export { addItemToCart, removeItemFromCart };
