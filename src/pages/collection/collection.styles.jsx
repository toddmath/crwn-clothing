import styled from 'styled-components/macro';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  cursor: pointer;
  text-transform: lowercase;
  &::first-letter {
    font-variant: small-caps;
    font-size: 58px;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-gap: unset;
  }
`;
