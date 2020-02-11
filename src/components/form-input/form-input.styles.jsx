import styled, { css } from 'styled-components/macro';

const subColor = 'rgba(82, 82, 82, 0.86)';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -1.4rem;
  font-size: 1.4rem;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 4.5rem 0;
`;

export const StyledInput = styled.input`
  background: none;
  background-color: white;
  color: #212121;
  font-size: 1.8rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 2.5rem 0;

  &:focus {
    outline: none;

    ~ label {
      ${shrinkLabelStyles};
    }
  }

  &[type='password'] {
    letter-spacing: 0.7rem;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1.7rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 1rem;
  transition: all 220ms cubic-bezier(0.15, 0.48, 0.56, 0.98);

  &.shrink {
    ${shrinkLabelStyles};
  }
`;
