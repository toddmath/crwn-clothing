import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { CheckOutItem } from '../index';

const CheckOutTableBody = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <tbody>
      {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </tbody>
  );
};

export default CheckOutTableBody;
