import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDarkMode } from '../../hooks/useDarkMode';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import DarkModeToggle from '../dark-mode-toggle/dark-mode-toggle.component';
import { CartIcon } from '../index';
import { Nav, NavList, NavItem, OptionNavLink } from './header-links.styles';

function HeaderLinks() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(signOutStart());
  const { toggle, value } = useDarkMode(false);

  return (
    <Nav>
      <NavList>
        <NavItem>
          <OptionNavLink title='Home' aria-label='Home' exact to='/'>
            Home
          </OptionNavLink>
        </NavItem>
        <NavItem>
          <OptionNavLink title='Shop' aria-label='Shop' to='/shop'>
            Shop
          </OptionNavLink>
        </NavItem>
        <NavItem>
          {currentUser ? (
            <OptionNavLink
              title='sign out'
              aria-label='sign out'
              as='a'
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
        </NavItem>
        <NavItem>
          <DarkModeToggle onChange={toggle} checked={value} />
        </NavItem>
        <NavItem>
          <CartIcon />
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default HeaderLinks;
