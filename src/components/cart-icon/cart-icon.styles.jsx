import styled from 'styled-components/macro';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

/* CSS */
export const CartContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

/* CSS */
export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 2.4rem;
  height: 2.4rem;
`;

/* CSS */
export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 1.2rem;
`;

// ItemCountContainer.displayName = 'ItemCountContainer';
