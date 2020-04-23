/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  StyledLink,
} from './error-boundary.styles';

class ErrorBoundary extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     hasErrored: false,
  //   };
  // }
  state = { hasErrored: false };

  static getDerivedStateFromError(error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    if (error) {
      console.error(`[${error.name}]: ${error.message}`);
      // console.log(`[ERROR] ${error.name}: ${error.message}`);
    }
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
          <ErrorImageText>Caution! This Page is Cordoned Off</ErrorImageText>
          <StyledLink to='/'>Go back to the homepage</StyledLink>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
