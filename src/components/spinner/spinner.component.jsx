import React from 'react';
import SpringSpinner from '@bit/bondz.react-epic-spinners.spring-spinner';

import { SpinnerOverlay } from './spinner.styles';

export const Spinner = ({ color = '#212121', size = 70 }) => (
  <SpinnerOverlay>
    <SpringSpinner color={color} size={size} />
  </SpinnerOverlay>
);

export default Spinner;
