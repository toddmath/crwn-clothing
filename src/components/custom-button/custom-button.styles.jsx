import styled, { css } from 'styled-components/macro';

/* CSS */
export const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;
  transition: all 330ms cubic-bezier(0.15, 0.48, 0.56, 0.98) 38ms;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.2rem;
    padding: auto 1rem;
    vertical-align: center;
  }
`;

const addButtonStyles = css`
  background-color: white;
  color: black;
  border: unset;

  @media screen and (max-width: 30rem) {
    font-size: 1.2rem;
    padding: auto 1rem;
    vertical-align: center;
  }
`;

/* CSS */
export const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: none;
  transition: all 330ms cubic-bezier(0.15, 0.48, 0.56, 0.98) 38ms;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.2rem;
    padding: auto 1rem;
    vertical-align: center;
  }
`;

/* CSS */
export const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: 1px solid #357ae8;
  letter-spacing: 0.1px;
  padding: 0 2rem;
  transition: all 330ms cubic-bezier(0.15, 0.48, 0.56, 0.98) 38ms;

  &:hover {
    background-color: #357ae8;
    border: 1px solid #4285f4;
  }

  @media screen and (max-width: 30rem) {
    font-size: 1.2rem;
    padding: auto 1rem;
    vertical-align: center;
  }
`;

export const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  if (props.regular) return addButtonStyles;
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

/* CSS */
export const CustomButtonContainer = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  line-height: 5rem;
  padding: 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  letter-spacing: 0.2px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
