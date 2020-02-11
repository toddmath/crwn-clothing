import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const SignInContainer = styled.div`
  width: 100%;
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  ${media.phablet`margin: 1rem;`}
`;

export const SignInTitle = styled.h2`
  margin: 1rem 0;
  font-size: 2.6rem;
  font-weight: 600;
  text-align: center;
`;

export const ButtonsBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`;
