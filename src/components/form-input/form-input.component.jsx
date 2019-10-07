import React from 'react';
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
      {...props}
    />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
