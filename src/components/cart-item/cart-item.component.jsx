import React, { memo } from 'react';

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  ItemDetailName,
  ItemDetailPrice,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <ItemDetailName>{name}</ItemDetailName>
      <ItemDetailPrice>
        {quantity} x ${price}
      </ItemDetailPrice>
    </ItemDetailsContainer>
  </CartItemContainer>
);

CartItem.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'CartItem',
};

export default memo(CartItem);
