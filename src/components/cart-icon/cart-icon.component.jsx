import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { animated as a, useSpring } from 'react-spring';
// import { createStructuredSelector } from 'reselect';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { useCartDropDown } from '../../context/cart-dropdown.context';

import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from './cart-icon.styles';

export const CartIcon = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartHidden, toggleCartHidden] = useCartDropDown();
  const itemCount = useSelector(selectCartItemsCount);
  const [state, toggle] = useState(true);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 200 },
  });

  const toggleHidden = evt => {
    if (evt) evt.preventDefault();
    toggleCartHidden(hidden => !hidden);
  };

  return (
    <a.div
      style={{
        transform: x
          .interpolate({
            range: [0, 0.55, 1.1, 0.65, 1, 0.75, 1.25, 1],
            output: [1, 0.55, 1.1, 0.65, 1, 0.75, 1.25, 1],
          })
          .interpolate(x => `scale(${x})`),
      }}
      onClick={() => toggle(!state)}
    >
      <CartContainer onClick={toggleHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
      </CartContainer>
    </a.div>
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
