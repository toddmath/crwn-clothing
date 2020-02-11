import styled from 'styled-components/macro';

import { media } from '../../helpers';

/* CSS */
export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  max-width: 110em;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(21, 4vh);
  grid-template-columns: repeat(2, minmax(38rem, 1fr));
  column-gap: 5rem;
  ${media.desktop`
    grid-template-columns: minmax(100%, 1fr);
    grid-template-rows: repeat(23, 4vh);
  `}
`;

export const SignInContainer = styled.div`
  grid-row: span 9;
  grid-column: span 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 1;
  max-width: 38rem;
  margin: 0 auto;
  ${media.desktop`
    max-width: 44rem;
  `}
`;

export const SignUpContainer = styled.div`
  grid-row: span 13;
  grid-column: span 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 1;
  max-width: 38rem;
  margin: 0 auto;
  ${media.desktop`
    max-width: 44rem;
    grid-row: 11;
  `}
`;

export const SignInAndSignUpInnerContainer = styled.div`
  display: flex;
  width: 110rem;
  justify-content: space-around;
  margin: 0 auto;
  ${media.desktop`
    flex-direction: column;
    width: unset;
    align-items: center;
    > :first-child {
      margin-bottom: 5rem;
    }
  `}
`;
