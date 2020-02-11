import styled from 'styled-components/macro';

import { Shop } from 'grommet-icons';

export const CartContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    isolation: auto;
  }
`;

export const ShoppingIcon = styled(Shop)`
  width: 2.5rem;
  height: 2.5rem;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1.2rem;
  font-weight: 800;
  bottom: 1.1rem;
`;
