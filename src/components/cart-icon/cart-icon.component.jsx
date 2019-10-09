import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import posed from 'react-pose';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from './cart-icon.styles';

const Box = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.75 },
});

export const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <Box className='box'>
      <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
      </CartContainer>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
