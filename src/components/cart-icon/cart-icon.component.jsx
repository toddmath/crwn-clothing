import React, { memo } from 'react';
import { useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { useCartDropDown } from '../../context/cart-dropdown.context';

import {
  Box,
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from './cart-icon.styles';

export const CartIcon = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartHidden, toggleCartHidden] = useCartDropDown();
  const itemCount = useSelector(selectCartItemsCount);

  const toggleHidden = evt => {
    if (evt) evt.preventDefault();
    toggleCartHidden(hidden => !hidden);
  };

  return (
    <Box className='box'>
      <CartContainer onClick={toggleHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
      </CartContainer>
    </Box>
  );
};

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });
// const mapDispatchToProps = {
//   toggleCartHidden,
// };
// CartIcon.whyDidYouRender = {
//   logOnDifferentValues: true,
//   customName: 'CartIcon',
// };
// export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

export default memo(CartIcon);
