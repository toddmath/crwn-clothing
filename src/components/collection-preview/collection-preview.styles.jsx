import styled from 'styled-components/macro';

/* CSS */
export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 55em) {
    align-items: center;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22vw, 1fr));
  grid-template-rows: minmax(35rem, 1fr);
  row-gap: 3rem;
  column-gap: 1rem;

  @media screen and (max-width: 55em) {
    grid-template-columns: repeat(2, minmax(44vw, 1fr));
    grid-template-rows: minmax(44vw, 1fr);
    grid-gap: 2rem;
  }

  @media screen and (max-width: 30em) {
    grid-template-columns: minmax(90vw, 1fr);
    grid-template-rows: minmax(90vw, 1fr);
  }
`;

export const TitleContainer = styled.div`
  display: inline-block;
  align-self: center;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  color: #333;
  display: inline-block;
  text-transform: uppercase;
  font-size: 4.2rem;
  font-weight: 600;
  letter-spacing: 2.8rem;
  margin-bottom: 0 auto 3rem;
  cursor: pointer;

  @media screen and (max-width: 55em) {
    font-size: 4.2rem;
    letter-spacing: 2.4rem;
  }

  @media screen and (max-width: 30em) {
    font-size: 3.8rem;
    letter-spacing: 1.6rem;
  }
`;

// TitleContainer.displayName = 'TitleContainer';

// export const PreviewContainer = styled.div`
//   display: flex;
//   justify-content: space-between;

//   @media screen and (max-width: 55em) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 1rem;
//   }

//   @media screen and (max-width: 30em) {
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-gap: unset;
//   }
// `;
