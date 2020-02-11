import styled from 'styled-components/macro';

import { CustomButton } from '../index';
import { media } from '../../helpers';

export const SignUpContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 32rem;
  flex-direction: column;
  text-align: center;
  ${media.phablet`margin: 1rem;`}
`;

export const SignUpTitle = styled.h2`
  margin: 1rem 0;
  font-size: 2.6rem;
  font-weight: 600;
`;

export const SignUpButton = styled(CustomButton)`
  margin: 0 auto;
`;
