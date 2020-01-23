import styled from 'styled-components/macro';

import posed from 'react-pose';

export const Box = styled(
  posed.div({
    pressable: true,
    hoverable: false,
    init: {
      scale: 1,
    },
    press: {
      scale: 0.925,
    },
  })
)`
  height: 9rem;
  width: 14rem;
  padding: 0 2.5rem;
  display: block;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media screen and (max-width: 55rem) {
    height: 8rem;
    width: 12rem;
    padding: 0 1.8rem;
  }

  @media screen and (max-width: 30rem) {
    height: 7rem;
    width: 11rem;
    padding: 0 1.2rem;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: row;
  justify-content: center;
`;

export const ContentTitle = styled.span`
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.6rem;
  font-size: 2.2rem;
  color: #4a4a4a;

  @media screen and (max-width: 55rem) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  }
`;

/* CSS */
export const ContentSubTitle = styled.span`
  text-align: center;
  font-weight: lighter;
  font-size: 1.6rem;

  @media screen and (max-width: 55rem) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.4rem;
  }
`;

/* CSS */
export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '38rem' : '24rem')};
  min-width: 30%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid black;
  margin: 0 0.75rem 1.5rem;
  display: flex;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.11);
      transition: transform 6.4s cubic-bezier(0.1, 0.26, 0.41, 0.87) 38ms;
    }

    & .content {
      opacity: 0.7;
    }
  }

  &:first-child {
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }

  @media screen and (max-width: 55rem) {
    flex: ${({ size }) => (size ? '1 1 100%' : '1 1 auto')};
    height: ${({ size }) => (size ? '26rem' : '20rem')};
    margin: 0;
    width: 100%;
  }

  @media screen and (max-width: 30rem) {
    margin: 0;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const StyledBackgroundImage = styled.img`
  width: auto;
  height: auto;
  background-position: center;
  background-size: cover;
`;

// export const ContentContainer = styled.div`
//   height: 9rem;
//   padding: 0 2.5rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   background-color: white;
//   opacity: 0.7;
//   position: absolute;

//   @media screen and (max-width: 55rem) {
//     height: 8rem;
//     padding: 0 1.8rem;
//   }

//   @media screen and (max-width: 30rem) {
//     height: 7rem;
//     padding: 0 1.2rem;
//   }
// `;

/* CSS */
// export const ContentTitle = styled.span`
//   font-weight: bold;
//   margin-bottom: 0.6rem;
//   font-size: 2.2rem;
//   color: #4a4a4a;

//   @media screen and (max-width: 55rem) {
//     font-size: 1.8rem;
//   }

//   @media screen and (max-width: 30rem) {
//     font-size: 1.6rem;
//     margin-bottom: 0.4rem;
//   }
// `;

// /* CSS */
// export const ContentSubTitle = styled.span`
//   font-weight: lighter;
//   font-size: 1.6rem;

//   @media screen and (max-width: 55rem) {
//     font-size: 1.5rem;
//   }

//   @media screen and (max-width: 30rem) {
//     font-size: 1.4rem;
//   }
// `;
