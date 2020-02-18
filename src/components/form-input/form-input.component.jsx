import React, { memo, useRef } from 'react';
import t from 'prop-types';

import {
  StyledInput,
  FormInputLabel,
  GroupContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ref, ...props }) => {
  const inputRef = useRef();
  const setFocus = () => inputRef.current.focus();

  return (
    <GroupContainer>
      <StyledInput
        data-testid='form-input'
        ref={inputRef}
        onChange={handleChange}
        onMouseEnter={setFocus}
        aria-required='true'
        required
        {...props}
      />
      {label && (
        <FormInputLabel className={props.value?.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

FormInput.propTypes = {
  handleChange: t.func,
  label: t.string,
  ref: t.number,
  value: t.string,
};

export default memo(FormInput);
