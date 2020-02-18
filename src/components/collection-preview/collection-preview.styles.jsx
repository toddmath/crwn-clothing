import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.giant`
    margin: 0;
    max-width: unset;
  `}
  ${media.tablet`align-items: center;`}
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-rows: minmax(38rem, 1fr);
  grid-gap: 2rem;
  grid-auto-flow: dense;
  justify-items: stretch;
  align-items: stretch;
  ${media.giant`
    grid-template-rows: minmax(35rem, 1fr);
    row-gap: 2rem;
    column-gap: 1rem;
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

export const TitleContainer = styled.div`
  display: inline-block;
  align-self: center;
`;

export const Title = styled.h1`
  font-family: 'Open Sans Condensed', 'system-ui', sans-serif;
  color: #333;
  display: inline-block;
  text-transform: uppercase;
  font-size: 4.6rem;
  font-weight: 600;
  letter-spacing: 2.8rem;
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
