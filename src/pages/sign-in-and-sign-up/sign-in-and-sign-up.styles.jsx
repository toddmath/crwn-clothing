import styled from 'styled-components/macro';

/* CSS */
export const SignInAndSignUpContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const SignInAndSignUpInnerContainer = styled.div`
  display: flex;
  width: 110rem;
  justify-content: space-around;
  margin: 0 auto;

  @media screen and (max-width: 60em) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child {
      margin-bottom: 5rem;
    }
  }
`;
