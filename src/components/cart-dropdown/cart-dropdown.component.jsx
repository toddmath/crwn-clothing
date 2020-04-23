import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useCartDropDown } from '../../context/cart-dropdown.context';

import { CartItem } from '../index';
import {
  CartDropDownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';

export const CartDropdown = () => {
  // eslint-disable-next-line no-unused-vars
  const [showCart, toggleCartHidden] = useCartDropDown();
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();

  const handleClick = evt => {
    if (evt) evt.preventDefault();
    history.push('/checkout');
    toggleCartHidden(hidden => !hidden);
  };

  if (!showCart) return null;

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CartDropDownButton onClick={handleClick}>checkout</CartDropDownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
