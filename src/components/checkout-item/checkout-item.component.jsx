import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import {
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TableRow,
  TableCell,
  TableHeadCol,
} from './checkout-item.styles';

export const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const remove = () => removeItem(cartItem);
  const add = () => addItem(cartItem);
  const clear = () => clearItem(cartItem);

  return (
    <TableRow>
      <TableHeadCol scope='col' colspan='1'>
        <ImageContainer>
          <img src={imageUrl} alt={name} />
        </ImageContainer>
      </TableHeadCol>
      <TableCell>
        <TextContainer>{name}</TextContainer>
      </TableCell>
      <TableCell>
        <QuantityContainer>
          <div className='remove-item' onClick={remove}>
            &#10094;
          </div>
          <span>{quantity}</span>
          <div className='add-item' onClick={add}>
            &#10095;
          </div>
        </QuantityContainer>
      </TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        <RemoveButtonContainer className='clear-item-button' onClick={clear}>
          &#10005;
        </RemoveButtonContainer>
      </TableCell>
    </TableRow>
  );
};

CheckOutItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  cartItem: PropTypes.exact({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  clearItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

CheckOutItem.whyDidYouRender = false;

// const mapDispatchToProps = dispatch => ({
//   clearItem: item => dispatch(clearItemFromCart(item)),
//   addItem: item => dispatch(addItem(item)),
//   removeItem: item => dispatch(removeItem(item)),
// });

const mapDispatchToProps = {
  clearItem: item => clearItemFromCart(item),
  addItem: item => addItem(item),
  removeItem: item => removeItem(item),
};

export default connect(null, mapDispatchToProps)(CheckOutItem);
