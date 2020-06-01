import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const HeaderContainer = styled.header`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  user-select: none;
  ${media.tablet`
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  `}
`;
