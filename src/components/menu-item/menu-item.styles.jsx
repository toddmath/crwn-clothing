import styled from 'styled-components/macro';
import { animated as a } from 'react-spring';

import { media } from '../../helpers';

export const ContentContainer = styled(a.div)`
  box-sizing: border-box;
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  /* opacity: 0.7; */
  position: absolute;
  user-select: none;
  outline: none;
  /* transition: opacity 400ms ease-in; */
  ${media.tablet`
    height: 8rem;
    padding: 0 1.8rem;
  `}
  ${media.phablet`
    height: 7rem;
    padding: 0 1.2rem;
  `}
`;

export const ContentTitle = styled.span`
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.6rem;
  font-size: 2.2rem;
  color: #4a4a4a;
  ${media.tablet`font-size: 1.8rem;`}
  ${media.phablet`
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  `}
`;

/* CSS */
export const ContentSubTitle = styled.span`
  text-align: center;
  font-weight: lighter;
  font-size: 1.6rem;
  ${media.tablet`font-size: 1.5rem;`}
  ${media.phablet`font-size: 1.4rem;`}
`;

export const BackgroundImageContainer = styled(a.div)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${props => `url(${props.imageurl})`};
  /* perspective-origin: center;
  perspective: 100rem; */
`;

export const StyledBackgroundImage = styled.img`
  width: auto;
  height: auto;
  background-position: center;
  background-size: cover;
`;

export const MenuItemContainer = styled.div`
  height: 100%;
  min-width: 30%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid black;
  margin: 0;
  display: flex;
  perspective-origin: center;
  perspective: 700rem;
  &:hover {
    cursor: pointer;
  }
`;

/*
&:hover {
  cursor: pointer;
  & ${BackgroundImageContainer} {
    transform: scale(1.11);
    transition: transform 6.4s cubic-bezier(0.1, 0.26, 0.41, 0.87) 38ms;
  }
  & ${ContentContainer} {
    opacity: 1;
  }

  // *
  &:hover {
    cursor: pointer;
    & ${ContentContainer} {
      opacity: 1;
    }
  }
}
*/

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

/* CSS */
// export const MenuItemContainer = styled.div`
//   height: ${({ size }) => (size ? '38rem' : '24rem')};
//   min-width: 30%;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   border: 1px solid black;
//   margin: 0;
//   display: flex;

//   &:hover {
//     cursor: pointer;

//     & .background-image {
//       transform: scale(1.11);
//       transition: transform 6.4s cubic-bezier(0.1, 0.26, 0.41, 0.87) 38ms;
//     }

//     & .content {
//       opacity: 0.7;
//     }
//   }

//   @media screen and (max-width: 55rem) {
//     flex: ${({ size }) => (size ? '1 1 100%' : '1 1 auto')};
//     height: ${({ size }) => (size ? '26rem' : '20rem')};
//   }
// `;
