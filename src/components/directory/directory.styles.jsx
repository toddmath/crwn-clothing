import styled from 'styled-components/macro';

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 7.5vh);
  grid-gap: 1rem;
  height: 100%;
  overflow-y: hidden;

  @media screen and (max-width: 30em) {
    grid-template-rows: repeat(10, 7.7vh);
  }
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

  @media screen and (max-width: 55em) {
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
  }
`;

// export const DirectoryMenuContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   max-height: calc(100vh - 5rem);
// `;

// const Container = styled(
//   posed.div({
//     enter: { staggerChildren: 50 },
//     exit: { staggerChildren: 20, staggerDirection: -1 },
//   })
// )`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const SlideIn = styled(
//   posed.div({
//     enter: { x: 0, opacity: 1 },
//     exit: { x: 50, opacity: 0 },
//   })
// )`
//   ${props => `
//   height: ${props.size ? '38rem' : '24rem'};
//   min-width: 30%;
//   flex: 1 1 auto;
//   display: flex;
//   margin: 0.75rem 0;
//   overflow: hidden;

//   &:first-child {
//     margin-right: 0.75rem;
//   }

//   &:last-child {
//     margin-left: 0.75rem;
//   }

//   @media screen and (max-width: 55rem) {
//     flex: ${props.size ? '1 1 100%' : '1 1 auto'};
//     height: ${props.size ? '26rem' : '20rem'};
//     margin: ${props.size ? '0.6rem 0 0 0' : '0.1rem'};

//     &:last-child {
//       margin: ${props.size ? '0.6rem 0 0 0' : '0.1rem 0'};
//     }
//   }
//   `}
// `;
