import React from 'react';
import { animated as a, useSpring } from 'react-spring';

import { useCartDropDown } from '../../context/cart-dropdown.context';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import HeaderLinks from '../header-links/header-links.component';
import HeaderLogo from '../header-logo/header-logo.component';
import { HeaderContainer } from './header.styles';

export function Header() {
  const [notHidden] = useCartDropDown();

  const props = useSpring({
    position: 'absolute',
    top: '9rem',
    right: '4rem',
    height: '35rem',
    width: '24rem',
    zIndex: '4',
    opacity: notHidden ? 1 : 0,
    display: notHidden ? 'block' : 'none',
  });

  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderLinks />
      <a.div style={props}>
        <CartDropDown />
      </a.div>
    </HeaderContainer>
  );
}

export default Header;

/*
const transitions = useTransition(notHidden, null, {
    from: {
      position: 'absolute',
      top: '9rem',
      right: '4rem',
      height: '35rem',
      width: '24rem',
      zIndex: '4',
      opacity: '0',
    },
    enter: { opacity: '1' },
    leave: { opacity: '0' },
  });


{notHidden &&
  transitions.map(
    ({ item, key, props }) =>
      item && (
        <a.div key={key} style={props}>
          <CartDropDown />
        </a.div>
      )
  )}
*/
