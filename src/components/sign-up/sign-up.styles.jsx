import styled from 'styled-components/macro';

/* CSS */
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;

  @media screen and (max-width: 30em) {
    margin: 1rem;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 1rem 0;
  font-size: 2.6rem;
  font-weight: 600;
  text-align: center;
`;

export const SignUpSubTitle = styled.span`
  font-size: 2rem;
  text-align: center;
`;
