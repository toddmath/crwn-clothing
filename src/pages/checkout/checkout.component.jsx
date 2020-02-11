import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CheckOutItem, StripeCheckoutButton } from '../../components';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  TotalContainer,
  WarningContainer,
  CheckOutTable,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  PayContainer,
} from './checkout.styles';

const headers = ['product', 'description', 'quantity', 'price', 'remove'];

export const CheckOutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckOutTable>
      <TableHeader>
        <TableRow scope='row'>
          {headers.map(text => (
            <TableHead key={text}>{text}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map(cartItem => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </TableBody>
    </CheckOutTable>
    <PayContainer>
      <TotalContainer>
        <span>total ${total}</span>
      </TotalContainer>
      <WarningContainer>
        *Please use the following for test credit card payments*
        <br />
        VISA: <span>4242 4242 4242 4242</span>
        <br />
        MASTERCARD: <span>5555 5555 5555 4444</span>
        <br />
        Exp: Any Future Date, CVV: Any 3 Digits
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </PayContainer>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
