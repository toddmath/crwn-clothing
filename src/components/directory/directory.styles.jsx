import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const DirectoryMenuContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 7.5vh);
  gap: 1rem;
  height: 100%;
  overflow-y: hidden;
  ${media.phablet`grid-template-rows: repeat(10, 7.7vh);`}
  place-items: stretch stretch;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const DirectoryMenuItem = styled.li`
  &:nth-child(-n + 3) {
    grid-column: span 4;
    grid-row: span 4;
  }
  &:nth-child(n + 4) {
    grid-column: span 6;
    grid-row: 5 / -1;
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
      grid-column: 7 / -1;
      grid-row: 4 / span 4;
    }
    &:nth-child(n + 5) {
      grid-column: 1 / -1;
      grid-row: 8 / -1;
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
