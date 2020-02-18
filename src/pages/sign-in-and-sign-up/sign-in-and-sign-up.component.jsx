import React, { memo } from 'react';

import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/sign-in/sign-in.component';

import {
  SignInAndSignUpContainer,
  SignInContainer,
  SignUpContainer,
} from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignInContainer>
      <SignIn />
    </SignInContainer>
    <SignUpContainer>
      <SignUp />
    </SignUpContainer>
  </SignInAndSignUpContainer>
);

export default memo(SignInAndSignUpPage);
