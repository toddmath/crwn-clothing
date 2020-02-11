import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  StyledInput,
  FormInputLabel,
  GroupContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ref, ...props }) => {
  const inputRef = useRef();

  return (
    <GroupContainer>
      <StyledInput
        data-testid='form-input'
        ref={inputRef}
        onChange={handleChange}
        onMouseEnter={() => inputRef.current.focus()}
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
  handleChange: PropTypes.func,
  label: PropTypes.string,
  ref: PropTypes.number,
  value: PropTypes.string,
};

export default memo(FormInput);
