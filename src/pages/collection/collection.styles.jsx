import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 126em;
  margin: 0 auto;
  ${media.giant`
    margin: 0 3rem;
    max-width: unset;
  `}
  ${media.tablet`
    align-items: center;
  `}
  ${media.phablet`
    margin: 0 2rem;
  `}
`;

export const CollectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.colors.h2};
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
  grid-template-columns: repeat(auto-fit, minmax(20vw, auto));
  grid-template-rows: minmax(38rem, 1fr);
  gap: 2rem;
  ${media.giant`
    grid-template-rows: minmax(35rem, 1fr);
    row-gap: 3rem;
    column-gap: 2rem;
  `}
  ${media.tablet`
    grid-template-columns: repeat(2, minmax(44vw, 1fr));
    grid-template-rows: minmax(44vw, 1fr);
    grid-gap: 2rem;
  `}
  ${media.phablet`
    grid-template-columns: minmax(90vw, 1fr);
    grid-template-rows: minmax(90vw, 1fr);
  `}
`;
