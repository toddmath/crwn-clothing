import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 7.5vh);
  grid-gap: 1rem;
  height: 100%;
  overflow-y: hidden;
  ${media.phablet`grid-template-rows: repeat(10, 7.7vh);`}
`;

export const DirectoryMenuItem = styled.div`
  &:nth-child(-n + 3) {
    grid-column: span 4;
    grid-row: span 4;
  }
  &:nth-child(n + 4) {
    grid-column: span 6;
    grid-row: span 6;
  }
  ${media.tablet`
    &:first-child {
      grid-column: span 6;
      grid-row: span 4;
    }
    &:nth-child(2) {
      grid-column: span 6;
      grid-row: span 3;
    }
    &:nth-child(3) {
      grid-column: span 6;
      grid-row: span 3;
    }
    &:nth-child(4) {
      grid-column: 7 / 13;
      grid-row: 4 / 8;
    }
    &:nth-child(n + 5) {
      grid-column: span 12;
      grid-row: span 6;
    }
  `}
`;
/* @media screen and (max-width: 55em) {
    &:first-child {
      grid-column: span 6;
      grid-row: span 4;
    }

    &:nth-child(2) {
      grid-column: span 6;
      grid-row: span 3;
    }

    &:nth-child(3) {
      grid-column: span 6;
      grid-row: span 3;
    }

    &:nth-child(4) {
      grid-column: 7 / 13;
      grid-row: 4 / 8;
    }

    &:nth-child(n + 5) {
      grid-column: span 12;
      grid-row: span - 3;
    }
  } */
