/* eslint-disable prefer-template */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components/macro';

// import SpringSpinner from '@bit/bondz.react-epic-spinners.spring-spinner';
import { SpinnerOverlay, Spring } from './spinner.styles';

const SimpleSpringSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => (
  <Spring
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`spring-spinner${className ? ' ' + className : ''}`}
    style={style}
    {...props}
  >
    <div className='spring-spinner-part top'>
      <div className='spring-spinner-rotator' />
    </div>
    <div className='spring-spinner-part bottom'>
      <div className='spring-spinner-rotator' />
    </div>
  </Spring>
);

SimpleSpringSpinner.propTypes = {
  size: PropTypes.number,
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape(PropTypes.any),
};

SimpleSpringSpinner.defaultProps = {
  size: 70,
  color: '#212121',
  animationDuration: 3000,
  className: '',
};

const SpringSpinner = memo(SimpleSpringSpinner);

export const Spinner = ({
  color = '#212121',
  size = 20,
  animationDuration,
}) => (
  <SpinnerOverlay>
    <SpringSpinner
      size={size}
      color={color}
      animationDuration={animationDuration}
    />
  </SpinnerOverlay>
);

Spinner.propTypes = {
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
};

Spinner.defaultProps = {
  color: '#212121',
  size: 20,
  animationDuration: 2000,
};

export default memo(Spinner);
