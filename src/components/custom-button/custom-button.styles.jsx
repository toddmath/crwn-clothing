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

  @media screen and (max-width: 400px) {
    font-size: 12px;
    padding: auto 10px;
    vertical-align: center;
  }
`;

const addButtonStyles = css`
  background-color: white;
  color: black;
  border: unset;

  @media screen and (max-width: 400px) {
    font-size: 12px;
    padding: auto 10px;
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

  @media screen and (max-width: 400px) {
    font-size: 12px;
    padding: auto 10px;
    vertical-align: center;
  }
`;

/* CSS */
export const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: 1px solid #357ae8;
  letter-spacing: 0.1px;
  padding: 0 20px;
  transition: all 330ms cubic-bezier(0.15, 0.48, 0.56, 0.98) 38ms;

  &:hover {
    background-color: #357ae8;
    border: 1px solid #4285f4;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
    padding: auto 10px;
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
  min-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 0.2px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
