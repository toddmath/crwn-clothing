import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle, SignUpSubTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCreds, setUserCreds] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCreds;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle> I do not have an account </SignUpTitle>{' '}
      <SignUpSubTitle> Sign up with your email and password </SignUpSubTitle>{' '}
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          aria-label='Display Name'
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          aria-label='Email'
          autoComplete='username'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          aria-label='Password'
          autoComplete='new-password'
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          aria-label='Confirm Password'
          autoComplete='new-password'
        />
        <CustomButton type='submit'> SIGN UP </CustomButton>
      </form>
    </SignUpContainer>
  );
};

SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   signUpStart: userCreds => dispatch(signUpStart(userCreds)),
// });

const mapDispatchToProps = {
  signUpStart,
};

export default connect(null, mapDispatchToProps)(SignUp);
