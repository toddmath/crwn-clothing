import styled from 'styled-components/macro';
import CustomButton from '../custom-button/custom-button.component';

/* CSS */
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  transition: all 330ms cubic-bezier(0.15, 0.48, 0.56, 0.98) 38ms !important;

  &:hover,
  &:focus {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    /* width: 46vw; */
    /* width: calc(50% - 10px); */
    max-width: 100%;
    width: 45vw;

    &:hover,
    &:focus {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
        display: flex;
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 90vw;
    margin-bottom: 15px;
  }
`;

/* CSS */
export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.65;
  position: absolute;
  top: 255px;
  display: none;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

AddButton.displayName = 'AddButton';

/* CSS */
export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  @media screen and (max-width: 400px) {
    margin-bottom: 2px;
  }
`;

BackgroundImage.displayName = 'BackgroundImage';

/* CSS */
export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

/* CSS */
export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

NameContainer.displayName = 'NameContainer';

/* CSS */
export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';
