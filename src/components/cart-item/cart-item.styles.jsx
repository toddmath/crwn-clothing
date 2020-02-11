import styled from 'styled-components/macro';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1rem;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

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
