import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUpPage from './sign-in-and-sign-up.component';

it('should render SignInAndSignUpPage', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});
