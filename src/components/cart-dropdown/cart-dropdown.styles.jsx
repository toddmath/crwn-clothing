import styled from 'styled-components/macro';

import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  /* position: absolute; */
  width: 24rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  /* top: 9rem;
  right: 4rem; */
  z-index: 5;
`;

export const CartDropDownButton = styled(CustomButton)`
  text-transform: uppercase;
  margin-top: auto;
  font-size: 1.8rem;
  line-height: 4.5rem;
  font-weight: 500;
  letter-spacing: 0.38rem;
`;

export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`;

export const CartItemsContainer = styled.div`
  height: 25rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scrollbar-width: thin;

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(80, 80, 80, 0.65);
    border-radius: 10px;
    outline: 1px solid slategrey;

    &:hover {
      background-color: rgba(80, 80, 80, 0.9);
    }

    &:active {
      background-color: rgba(80, 80, 80, 1);
    }
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
