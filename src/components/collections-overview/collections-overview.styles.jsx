import styled from 'styled-components/macro';
// import posed from 'react-pose';

export const CollectionsOverviewContainer = styled.div`
  display: grid;
  max-width: 100vw;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(1, 100%);
  row-gap: 4rem;
`;

export const CollectionPreviewContainer = styled.div`
  display: block;
  grid-column: span 1;
  margin: 0;
  padding: 0;
`;

// export const CollectionsOverviewContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Container = styled(
//   posed.div({
//     enter: { staggerChildren: 50 },
//     exit: { staggerChildren: 20, staggerDirection: -1 },
//   })
// )`
//   display: flex;
//   flex-direction: column;
// `;

// const SlideIn = styled(
//   posed.div({
//     enter: { x: 0, opacity: 1 },
//     exit: { x: 50, opacity: 0 },
//   })
// )`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 2rem;
//   justify-content: space-evenly;

//   @media screen and (max-width: 55em) {
//     align-items: center;
//   }
// `;
