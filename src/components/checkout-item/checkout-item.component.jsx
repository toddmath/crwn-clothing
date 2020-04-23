import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import {
  ImageContainer,
  StyledImage,
  TextContainer,
  QuantityContainer,
  QuantityButton,
  Quantity,
  RemoveButtonContainer,
  TableRow,
  TableCell,
  TableHeadCol,
} from './checkout-item.styles';

export const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeItem(cartItem));
  const add = () => dispatch(addItem(cartItem));
  const clear = () => dispatch(clearItemFromCart(cartItem));

  return (
    <TableRow>
      <TableHeadCol scope='col' colspan='1'>
        <ImageContainer>
          <StyledImage src={imageUrl} alt={name} />
        </ImageContainer>
      </TableHeadCol>
      <TableCell>
        <TextContainer>{name}</TextContainer>
      </TableCell>
      <TableCell>
        <QuantityContainer>
          <QuantityButton onClick={remove}>&#10094;</QuantityButton>
          <Quantity>{quantity}</Quantity>
          <QuantityButton onClick={add}>&#10095;</QuantityButton>
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
  cartItem: PropTypes.exact({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};

// const mapDispatchToProps = dispatch => ({
//   clearItem: item => dispatch(clearItemFromCart(item)),
//   addItem: item => dispatch(addItem(item)),
//   removeItem: item => dispatch(removeItem(item)),
// });

// const mapDispatchToProps = {
//   clearItem: item => clearItemFromCart(item),
//   addItem: item => addItem(item),
//   removeItem: item => removeItem(item),
// };

// export default connect(null, mapDispatchToProps)(CheckOutItem);

export default CheckOutItem;
