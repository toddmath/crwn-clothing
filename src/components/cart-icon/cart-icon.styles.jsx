import styled from 'styled-components/macro';

// import { Shop } from 'grommet-icons';
import ShoppingBag from '../../icons/shopping-bag';

export const CartContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    isolation: auto;
    width: 4rem;
    height: 4rem;
  }
`;

export const ShoppingIcon = styled(ShoppingBag)`
  width: 100%;
  height: 100%;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1.2rem;
  font-weight: 800;
  bottom: 0.8rem;
`;
