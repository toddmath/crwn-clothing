import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import {
  CheckoutPageContainer,
  CheckOutHeaderContainer,
  HeaderBlock,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';

const CheckOutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckOutHeaderContainer>
      <HeaderBlock>
        <span>PRODUCT</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>DESCRIPTION</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>QUANTITY</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>PRICE</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>REMOVE</span>
      </HeaderBlock>
    </CheckOutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL ${total}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following for test credit card payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
