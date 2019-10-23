import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

/* CSS */
export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* CSS */
export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

/* CSS */
export const ErrorImageText = styled.h2`
  font-size: 2.8rem;
  color: #2f8e89;
`;

export const StyledLink = styled(Link)`
  font-size: 2.2rem;
  color: black;
  text-decoration: none;
`;
