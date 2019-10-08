import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from './sign-in.component';

describe('SignIn component', () => {
  let wrapper;
  let mockEmailSignInStart;
  let mockGoogleSignInStart;

  beforeEach(() => {
    mockEmailSignInStart = jest.fn();
    mockGoogleSignInStart = jest.fn();

    const mockProps = { mockEmailSignInStart, mockGoogleSignInStart };
    wrapper = shallow(<SignIn {...mockProps} />);
  });

  it('should render SignIn Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an email and password input elements with value and handleChange props', () => {
    const emailInput = wrapper.find('FormInput').at(0);
    const passwordInput = wrapper.find('FormInput').at(1);
    expect(emailInput.props()).toHaveProperty('value', '');
    expect(passwordInput.props()).toHaveProperty('value', '');
    expect(emailInput.props()).toHaveProperty(
      'handleChange',
      expect.any(Function)
    );
    expect(passwordInput.props()).toHaveProperty(
      'handleChange',
      expect.any(Function)
    );
  });

  it('should have onSubmit prop attached to form element', () => {
    expect(wrapper.find('#form').props()).toHaveProperty(
      'onSubmit',
      expect.any(Function)
    );
  });
});
