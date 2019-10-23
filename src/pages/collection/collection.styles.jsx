import styled from 'styled-components/macro';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 55rem) {
    align-items: center;
  }
`;

export const CollectionTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  color: #333;
  display: inline-block;
  font-size: 4.2rem;
  font-weight: 600;
  letter-spacing: 2.8rem;
  text-transform: uppercase;
  margin: 0 auto 3rem;
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

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  & > div {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 55rem) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 30rem) {
    grid-template-columns: 1fr;
    grid-gap: unset;
  }
`;
