import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionNavLink,
} from './header.styles';

import Crown from '../../icons/crown';

export const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer
      title='Crown Clothing Home'
      aria-label='Crown Clothing Home'
      to='/'
    >
      <Crown className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionNavLink title='Home' aria-label='Home' exact to='/'>
        HOME
      </OptionNavLink>
      <OptionNavLink title='Shop' aria-label='Shop' to='/shop'>
        SHOP
      </OptionNavLink>
      {currentUser ? (
        <OptionNavLink
          title='sign out'
          aria-label='sign out'
          as='div'
          to='/'
          onClick={signOutStart}
        >
          SIGN OUT
        </OptionNavLink>
      ) : (
        <OptionNavLink title='sign in' aria-label='sign in' to='/signin'>
          SIGN IN
        </OptionNavLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropDown />}
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.exact({
    id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string,
  }),
  hidden: PropTypes.bool.isRequired,
  signOutStart: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = {
  signOutStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
