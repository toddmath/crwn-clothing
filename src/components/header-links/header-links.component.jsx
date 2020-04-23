import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDarkMode } from '../../hooks/useDarkMode';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle.component';
import { CartIcon } from '../index';
import { OptionsContainer, OptionNavLink } from './header-links.styles';

function HeaderLinks() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(signOutStart());
  const darkMode = useDarkMode(false);

  return (
    <OptionsContainer>
      <OptionNavLink title='Home' aria-label='Home' exact to='/'>
        Home
      </OptionNavLink>
      <OptionNavLink title='Shop' aria-label='Shop' to='/shop'>
        Shop
      </OptionNavLink>
      {currentUser ? (
        <OptionNavLink
          title='sign out'
          aria-label='sign out'
          as='div'
          to='/'
          onClick={handleSignOut}
        >
          Sign Out
        </OptionNavLink>
      ) : (
        <OptionNavLink title='sign in' aria-label='sign in' to='/signin'>
          Sign In
        </OptionNavLink>
      )}
      <DarkModeToggle
        onChange={darkMode.toggle}
        checked={darkMode.value}
        size={60}
      />
      <CartIcon />
    </OptionsContainer>
  );
}

export default HeaderLinks;
