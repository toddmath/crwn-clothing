import React from 'react';
import PropTypes from 'prop-types';

import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ref, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      data-testid='form-input'
      onChange={handleChange}
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

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  ref: PropTypes.number,
  value: PropTypes.string,
};

export default FormInput;
