import React, { memo } from 'react';

import { SignIn, SignUp } from '../../components';

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
