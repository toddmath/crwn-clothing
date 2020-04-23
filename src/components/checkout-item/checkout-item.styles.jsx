import styled from 'styled-components/macro';

import { media } from '../../helpers';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;
  ${media.tablet`
    font-size: 1.8rem;
  `}
`;

export const TableRow = styled.tr`
  width: 100%;
  padding: 0;
  margin: 1rem 0;
  text-align: center;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  font-size: 2rem;
  align-items: center;
  ${media.tablet`
    font-size: 1.8rem;
  `}
`;

export const TableCell = styled.td`
  width: auto;
  margin: 0;
  padding: 0;
  min-height: 10rem;
  height: auto;
  text-align: center;
  &:first-child {
    text-align: left;
    width: 25%;
    padding-left: 0.5rem;
  }
  &:last-child {
    text-align: right;
    padding-right: 1.5rem;
  }
`;

export const TableHeadCol = styled.th`
  width: auto;
  min-height: 10rem;
  height: auto;
`;

export const ImageContainer = styled.div`
  width: auto;
  margin: 0;
  min-height: 100%;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  padding: 1rem 0;
  ${media.desktop`padding: 0.5rem 0;`}
  ${media.tablet`padding: 0.25rem 0;`}
  ${media.phone`padding: 0;`}
`;

export const TextContainer = styled.span`
  display: inline-block;
  text-align: center;
`;

export const QuantityContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    cursor: pointer;
    user-select: none;
  }
`;

export const QuantityButton = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const Quantity = styled.span`
  margin: 0 1rem;
`;

export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  text-align: right;
  display: inline-block;
  padding-right: 2.5rem;
  user-select: none;
  ${media.tablet`padding-right: 1.5rem;`}
  ${media.phablet`padding-right: 0;`}
`;
