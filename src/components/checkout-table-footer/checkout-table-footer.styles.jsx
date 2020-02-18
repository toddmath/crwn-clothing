import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const PayContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  margin-left: auto;
  font-size: 3.6rem;
  text-transform: uppercase;
`;

export const WarningContainer = styled.div`
  text-align: center;
  font-size: 2.4rem;
  color: red;
  margin-top: 3rem;
  ${media.desktop`
    margin-top: 2rem;
    font-size: 2.2rem;
  `}
  ${media.tablet`
    margin-top: 1.8rem;
  `}
  ${media.phablet`font-size: 1.8rem;`}

  span {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    font-weight: 400;
    font-size: 2.8rem;
    letter-spacing: -0.2rem;
    word-spacing: -0.35rem;
  }
`;
