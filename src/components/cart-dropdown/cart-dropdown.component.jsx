import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropDownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';

export const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  const handleClick = e => {
    if (e) e.preventDefault();
    history.push('/checkout');
    dispatch(toggleCartHidden());
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

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// export default withRouter(connect(mapStateToProps)(CartDropdown));
export default connect(mapStateToProps)(CartDropdown);
