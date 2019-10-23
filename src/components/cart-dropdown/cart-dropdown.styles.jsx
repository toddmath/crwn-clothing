import styled from 'styled-components/macro';
import CustomButton from '../custom-button/custom-button.component';

/* CSS */
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 4rem;
  z-index: 5;
`;

/* CSS */
export const CartDropDownButton = styled(CustomButton)`
  margin-top: auto;
`;

/* CSS */
export const EmptyMessageContainer = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`;

/* CSS */
export const CartItemsContainer = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
