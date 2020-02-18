import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import { media } from '../../helpers/media';

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.tablet`width: 80%;`}
`;

export const OptionNavLink = styled(NavLink)`
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  border: 1px solid transparent;
  box-sizing: content-box;
  transition: all 330ms cubic-bezier(0.15, 0.27, 0.41, 0.88) 60ms;
  font-size: 1.8rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  &.active {
    border: 1px solid #777;
  }
`;
