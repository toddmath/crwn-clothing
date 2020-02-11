import React, { useState, useCallback } from 'react';
import styled from 'styled-components/macro'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
import { FormInput, CustomButton } from '../index';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  ButtonsBarContainer,
  SignInTitle,
} from './sign-in.styles';

export const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCreds, setUserCreds] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCreds;

  const handleSubmit = async event => {
    event.preventDefault();
    await emailSignInStart(email, password);
  };

  const handleCreds = useCallback(
    e => setUserCreds({ ...userCreds, [e.target.name]: e.target.value }),
    [userCreds]
  );

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span
        css={`
          font-size: 2rem;
        `}
      >
        Sign in with your email and password
      </span>

      <form id='form' onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleCreds}
          label='Email'
          aria-label='Email'
          autoComplete='username'
          data-testid='email-input'
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleCreds}
          label='Password'
          aria-label='Password'
          autoComplete='current-password'
          data-testid='password-input'
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Google Sign In
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

SignIn.propTypes = {
  emailSignInStart: PropTypes.func.isRequired,
  googleSignInStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  googleSignInStart,
  emailSignInStart: (email, password) => emailSignInStart({ email, password }),
};

export default connect(null, mapDispatchToProps)(SignIn);
