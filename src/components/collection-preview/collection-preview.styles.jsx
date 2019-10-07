import styled from 'styled-components/macro';

/* CSS */
export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  display: inline-block !important;
  align-self: center;
`;

export const Title = styled.h1`
  display: inline-block !important;
  text-transform: lowercase;
  font-size: 38px;
  margin-bottom: 25px;
  cursor: pointer;
  &::first-letter {
    font-variant: small-caps;
    font-size: 58px;
  }
`;

// TitleContainer.displayName = 'TitleContainer';

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: unset;
  }
`;
