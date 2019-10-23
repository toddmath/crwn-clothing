import styled from 'styled-components/macro';

/* CSS */
export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1rem;
`;

/* CSS */
export const CartItemImage = styled.img`
  width: 30%;
`;

/* CSS */
export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
`;

export const ItemDetailName = styled.span`
  font-size: 1.4rem;
`;

export const ItemDetailPrice = styled.span`
  font-size: 1.2rem;
`;
