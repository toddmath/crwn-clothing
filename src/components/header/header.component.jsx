import React from 'react';

import { useCartDropDown } from '../../context/cart-dropdown.context';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import HeaderLinks from '../header-links/header-links.component';
import HeaderLogo from '../header-logo/header-logo.component';
import { HeaderContainer } from './header.styles';

export const Header = () => {
  const [hidden] = useCartDropDown();

  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderLinks />
      {hidden && <CartDropDown />}
    </HeaderContainer>
  );
};

export default Header;
