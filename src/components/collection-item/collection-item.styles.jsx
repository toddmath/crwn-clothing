import styled from 'styled-components/macro';
import posed from 'react-pose';

import CustomButton from '../custom-button/custom-button.component';

/* CSS */
export const CollectionItemContainer = styled.div`
  max-width: 28vw;
  min-width: 22vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  justify-content: space-between;
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

  @media screen and (max-width: 55em) {
    /* width: 46vw; */
    /* width: calc(50% - 10px); */
    width: 100%;
    min-width: 44vw;
    max-width: 50vw;
    min-height: 44vw;
    height: 100%;

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

  @media screen and (max-width: 30em) {
    min-width: 90vw;
    width: 100%;
    min-height: 90vw;
    height: 100%;
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
  top: 25.5rem;
  display: none;
  font-weight: 600;

  @media screen and (max-width: 55em) {
    display: block;
    min-width: unset;
    padding: 0 1rem;
  }
`;

AddButton.displayName = 'AddButton';

/* CSS */
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImage.displayName = 'BackgroundImage';

/* CSS */
export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;

  @media screen and (max-width: 30em) {
    font-size: 2rem;
  }
`;

/* CSS */
export const NameContainer = styled.span`
  width: 100%;
`;

NameContainer.displayName = 'NameContainer';

/* CSS */
export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';

export const Box = styled(
  posed.div({
    pressable: true,
    hoverable: true,
    init: {
      scale: 1,
      opacity: 0.75,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    hover: {
      scale: 1.125,
      opacity: 0.9,
      boxShadow: '0px 0.5rem 1rem rgba(0,0,0,0.2)',
    },
    press: {
      scale: 0.9,
      opacity: 0.8,
      boxShadow: '0px 0.2rem 0.5rem rgba(0,0,0,0.1)',
    },
  })
)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25.5rem;
  width: 80%;
  outline: none;
  margin: auto;
  padding: auto;
  font-weight: 700;

  @media screen and (max-width: 55em) {
    top: 70%;
  }

  @media screen and (max-width: 30em) {
    top: 75%;
  }
`;

// export const CollectionItemContainer = styled.div`
//   width: 22vw;
//   max-width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 35rem;
//   align-items: center;
//   position: relative;
//   transition: all 330ms cubic-bezier(0.15, 0.48, 0.56, 0.98) 38ms !important;

//   &:hover,
//   &:focus {
//     .image {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }

//   @media screen and (max-width: 55em) {
//     /* width: 46vw; */
//     /* width: calc(50% - 10px); */
//     width: 100%;
//     width: 45vw;

//     &:hover,
//     &:focus {
//       .image {
//         opacity: unset;
//       }

//       button {
//         opacity: unset;
//         display: flex;
//       }
//     }
//   }

//   @media screen and (max-width: 55em) {
//     margin-bottom: 1.5rem;
//   }

//   @media screen and (max-width: 30em) {
//     width: 90vw;
//     margin-bottom: 1.5rem;
//   }
// `;

// export const BackgroundImage = styled.div`
//   width: 100%;
//   height: 95%;
//   background-size: cover;
//   background-position: center;
//   margin-bottom: 0.5rem;
//   background-image: ${({ imageUrl }) => `url(${imageUrl})`};

//   @media screen and (max-width: 30em) {
//     margin-bottom: 0.2rem;
//   }
// `;

// export const CollectionFooterContainer = styled.div`
//   width: 100%;
//   height: 5%;
//   display: flex;
//   justify-content: space-between;
//   font-size: 1.8rem;

//   @media screen and (max-width: 30em) {
//     font-size: 2rem;
//   }
// `;
