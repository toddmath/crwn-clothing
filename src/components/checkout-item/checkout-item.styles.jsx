import styled from 'styled-components/macro';

/* CSS */
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;

  @media screen and (max-width: 55em) {
    font-size: 1.8rem;
  }
`;

/* CSS */
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

/* CSS */
export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 55em) {
    width: 22%;
  }
`;

/* CSS */
export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 1rem;
  }

  div {
    cursor: pointer;
  }
`;

/* CSS */
export const RemoveButtonContainer = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`;
