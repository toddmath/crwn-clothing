import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import CartItem from '../cart-item/cart-item.component';
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
  const [cartHidden, toggleCartHidden] = useCartDropDown();
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();

  const handleClick = e => {
    if (e) e.preventDefault();
    history.push('/checkout');
    toggleCartHidden(hidden => !hidden);
  };

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
