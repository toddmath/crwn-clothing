import styled from 'styled-components';

/* CSS */
export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 400px) {
    margin: 10px;
    width: 300px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
