import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import { media } from '../../helpers/media';

export const Nav = styled.nav`
  display: block;
  /* width: 50%; */
  width: auto;
  ${media.tablet`width: 70%;`}
  ${media.phablet`width: 90%;`}
`;

export const NavList = styled.ul`
  height: 100%;

  /* display: flex;
  align-items: center;
  list-style-type: none; */
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  /* align-content: center; */
  justify-content: center;
  align-items: center;
  justify-items: center;
  column-gap: 5px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  /* flex: 0 1 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%; */
  /* &:nth-child(n + 4) {
    flex: 0 0 12.5%;
    justify-self: flex-end;
    width: 12.5%;
  } */
  width: 100%;
  text-align: center;
  /* height: auto; */
`;

export const OptionNavLink = styled(NavLink)`
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  border: 1px solid transparent;
  box-sizing: border-box;
  transition: border 330ms cubic-bezier(0.15, 0.27, 0.41, 0.88);
  font-size: 1.8rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  /* width: auto; */
  &.active {
    border: 1px solid #777;
  }
`;
