import styled from 'styled-components/macro';
import posed from 'react-pose';
import CustomButton from '../custom-button/custom-button.component';

export const Box = styled(
  posed.div({
    pressable: true,
    hoverable: true,
    init: {
      scale: 1,
      opacity: 0.75,
      fontWeight: 700,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    hover: {
      scale: 1.125,
      opacity: 0.9,
      fontWeight: 900,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    },
    press: {
      scale: 0.9,
      opacity: 0.8,
      fontWeight: 800,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    },
  })
)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 255px;
  width: 80%;
  outline: none;
  margin: auto;
  padding: auto;
`;

/* CSS */
export const CollectionItemContainer = styled.div`
  width: 22vw;
  max-width: 100%;
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
    width: 100%;
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

export const AddButton = styled(CustomButton)`
  width: 100%;
  z-index: 3;
  display: none;
  font-weight: 700;
`;

/* CSS */
export const AddButton2 = styled(CustomButton)`
  width: 80%;
  opacity: 0.65;
  position: absolute;
  top: 255px;
  display: none;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    display: block;
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
