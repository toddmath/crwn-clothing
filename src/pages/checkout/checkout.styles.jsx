import styled from 'styled-components/macro';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;

  button {
    margin-left: auto;
    margin-top: 5rem;
  }

  @media screen and (max-width: 55rem) {
    width: 90%;
  }
`;

export const CheckOutHeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 2rem;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 55rem) {
    width: 22%;

    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  font-size: 3.6rem;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  font-size: 2.4rem;
  color: red;
`;
