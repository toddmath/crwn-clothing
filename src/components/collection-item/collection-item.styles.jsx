import styled from 'styled-components/macro';
import posed from 'react-pose';

import CustomButton from '../custom-button/custom-button.component';

import { media, mixins } from '../../helpers';

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
  ${media.tablet`top: 70%;`}
  ${media.phablet`top: 75%;`}
`;

export const CollectionItemContainer = styled.div`
  min-width: 22vw;
  width: 100%;
  height: 38rem;
  position: relative;
  ${mixins.flexCenter};
  flex-direction: column;
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
  ${media.giant`
    height: 35rem;
  `}
  ${media.tablet`
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
  `}
  ${media.phablet`
    min-width: 90vw;
    width: 100%;
    min-height: 90vw;
    height: 100%;
  `}
`;

export const AddButton = styled(CustomButton)`
  width: 100%;
  z-index: 3;
  display: none;
  font-weight: 700;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  ${media.phablet`font-size: 2rem;`}
`;

export const NameContainer = styled.span`
  width: 100%;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
