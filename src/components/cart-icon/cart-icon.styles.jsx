import styled from 'styled-components/macro';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

/* CSS */
export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

/* CSS */
export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

/* CSS */
export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

// ItemCountContainer.displayName = 'ItemCountContainer';
