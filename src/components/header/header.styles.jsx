import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  user-select: none;
  ${media.tablet`
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  `}
`;
