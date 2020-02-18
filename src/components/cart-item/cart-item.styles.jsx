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
  justify-content: flex-start;
  padding: 1rem 2rem 1rem 1rem;
`;

export const ItemDetailName = styled.span`
  font-size: 1.6rem;
  letter-spacing: 0.003rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;

export const ItemDetailPrice = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6;
  width: 100%;
  text-align: center;
`;
