import React from 'react';

import { SignIn, SignUp } from '../../components';

import {
  SignInAndSignUpContainer,
  SignInAndSignUpInnerContainer,
} from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignInAndSignUpInnerContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpInnerContainer>
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
