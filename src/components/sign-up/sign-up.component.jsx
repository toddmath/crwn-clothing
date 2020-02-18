import React, { useState, useCallback } from 'react';
import styled from 'styled-components/macro'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { FormInput } from '../index';
import FormInput from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/user.actions';
import { SignUpContainer, SignUpTitle, SignUpButton } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCreds, setUserCreds] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCreds;

  const handleSubmit = async evt => {
    if (evt) evt.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    await signUpStart({ displayName, email, password });
  };

  const handleCreds = useCallback(
    e => setUserCreds({ ...userCreds, [e.target.name]: e.target.value }),
    [userCreds]
  );

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span
        css={`
          font-size: 2rem;
        `}
      >
        Sign up with your email and password
      </span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleCreds}
          label='Display Name'
          aria-label='Display Name'
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleCreds}
          label='Email'
          aria-label='Email'
          autoComplete='username'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleCreds}
          label='Password'
          aria-label='Password'
          autoComplete='new-password'
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleCreds}
          label='Confirm Password'
          aria-label='Confirm Password'
          autoComplete='new-password'
        />
        <SignUpButton type='submit'>Sign Up</SignUpButton>
      </form>
    </SignUpContainer>
  );
};

SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signUpStart,
};

export default connect(null, mapDispatchToProps)(SignUp);
