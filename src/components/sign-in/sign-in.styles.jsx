import styled from 'styled-components/macro';

/* CSS */
export const SignInContainer = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 30rem) {
    margin: 1rem;
  }
`;

export const SignInTitle = styled.h2`
  margin: 1rem 0;
  font-size: 2.6rem;
  font-weight: 600;
  text-align: center;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (max-width: 30rem) {
    margin: 1rem;
    width: 30rem;
  }
`;

export const SignInSubTitle = styled.span`
  font-size: 2rem;
  text-align: center;
`;
