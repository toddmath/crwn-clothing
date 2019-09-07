import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckOutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>PRODUCT</span>
      </div>
      <div className='header-block'>
        <span>DESCRIPTION</span>
      </div>
      <div className='header-block'>
        <span>QUANTITY</span>
      </div>
      <div className='header-block'>
        <span>PRICE</span>
      </div>
      <div className='header-block'>
        <span>REMOVE</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>
      <span>TOTAL ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
