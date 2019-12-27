import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
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
