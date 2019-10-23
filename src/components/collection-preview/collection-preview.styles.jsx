import styled from 'styled-components/macro';

/* CSS */
export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 55rem) {
    align-items: center;
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

  @media screen and (max-width: 55rem) {
    font-size: 4.2rem;
    letter-spacing: 2.4rem;
  }

  @media screen and (max-width: 30rem) {
    font-size: 3.8rem;
    letter-spacing: 1.6rem;
  }
`;

// TitleContainer.displayName = 'TitleContainer';

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 55rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 30rem) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: unset;
  }
`;
