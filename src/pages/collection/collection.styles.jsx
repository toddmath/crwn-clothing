import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`align-items: center;`}
`;

export const CollectionTitle = styled.h2`
  font-family: 'Open Sans Condensed', 'system-ui', sans-serif;
  color: #333;
  display: inline-block;
  font-size: 4.6rem;
  font-weight: 600;
  letter-spacing: 2.8rem;
  text-transform: uppercase;
  margin: 0 auto 3rem;
  cursor: pointer;
  ${media.tablet`
    font-size: 4.2rem;
    letter-spacing: 2.4rem;
  `}
  ${media.phablet`
    font-size: 3.8rem;
    letter-spacing: 1.6rem;
  `}
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  & > div {
    margin-bottom: 3rem;
  }
  ${media.tablet`
    grid-template-columns: repeat(2, minmax(44vw, 1fr));
    grid-template-rows: minmax(44vw, 1fr);
    grid-gap: 2rem;
  `}
  ${media.phablet`
    grid-template-columns: minmax(90vw, 1fr);
    grid-template-rows: minmax(90vw, 1fr);
    row-gap: 2rem;
  `}
`;
