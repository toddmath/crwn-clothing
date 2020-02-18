import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { media } from '../../helpers/media';

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
  ${media.tablet`
    width: 5rem;
    padding: 0;
  `}
`;
