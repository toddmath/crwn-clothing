import styled from 'styled-components/macro';

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
