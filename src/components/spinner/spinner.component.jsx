import React from 'react';
import SpringSpinner from '@bit/bondz.react-epic-spinners.spring-spinner';

import { SpinnerOverlay } from './spinner.styles';

const Spinner = () => (
  <SpinnerOverlay>
    <SpringSpinner color='#212121' size={70} />
  </SpinnerOverlay>
);

export default Spinner;
