import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
      alert(
        `<h4>You must enter a valid email address and password, Error ${error.message}</h4>`
      );
    }
  };

  // handleChange = event => {
  //   const { value, name } = event.target;

  //   this.setState({ [name]: value });
  // };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email password</span>

      <form onSubmit={() => handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={setEmail(email)}
          label='email'
          required
          autoComplete='username'
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={setPassword(password)}
          label='password'
          required
          autoComplete='current-password'
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {' '}
            Sign in with Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
