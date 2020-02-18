import React from 'react';

import { Crown } from '../../icons';
import { LogoContainer } from './header-logo.styles';

const HeaderLogo = () => (
  <LogoContainer
    title='Crown Clothing Home'
    aria-label='Crown Clothing Home'
    to='/'
  >
    <Crown className='logo' />
  </LogoContainer>
);

export default HeaderLogo;
