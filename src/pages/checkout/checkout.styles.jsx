import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const CheckoutPageContainer = styled.div`
  width: 60%;
  min-height: 80vh;
  margin: 5rem auto 0;
  display: block;

  button {
    margin-left: auto;
    margin-top: 5rem;
  }

  ${media.tablet`width: 90%;`}
`;

export const CheckOutTable = styled.table`
  display: table;
  text-align: center;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  border-bottom: 1px solid darkgrey;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1rem 0;
  width: 100%;
`;

export const TableRow = styled.tr`
  padding: 0;
  margin: 0 auto;
  border-bottom: 1px solid darkgrey;
`;

export const TableHead = styled.th`
  text-align: center;
  font-weight: 300;
  font-size: 2.4rem;

  &:first-child {
    text-align: left;
    width: 25%;
    padding-left: 1.5rem;
  }

  &:last-child {
    text-align: right;
    padding-right: 1.5rem;
  }

  ${media.tablet`
    font-size: 2.2rem;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  `}
  ${media.phablet`font-size: 2rem;`}
`;
export const TableBody = styled.tbody``;

export const PayContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CheckOutHeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 2rem;
`;

export const HeaderBlock = styled.div`
  display: inline-block;
  text-transform: uppercase;
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
