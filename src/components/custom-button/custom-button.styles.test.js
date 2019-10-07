import React from 'react';
// import styled from 'styled-components/macro';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import {
  buttonStyles,
  invertedButtonStyles,
  googleSignInStyles,
  getButtonStyles,
  CustomButtonContainer,
} from './custom-button.styles';

describe('custom-button styled components', () => {
  describe('Regular CustomButton styles (no props)', () => {
    const tree = renderer.create(<CustomButtonContainer />).toJSON();

    // it('should render regular CustomButtonContainer', () => {
    //   expect(tree).toMatchSnapshot();
    // });

    it('should have a black background-color', () => {
      expect(tree).toHaveStyleRule('background-color', 'black');
    });
  });

  describe('Inverted CustomButton styles', () => {
    const tree = renderer.create(<CustomButtonContainer inverted />).toJSON();

    // it('should render Inverted CustomButtonContainer', () => {
    //   expect(tree).toMatchSnapshot();
    // });

    it('should have a white background-color', () => {
      expect(tree).toHaveStyleRule('background-color', 'white');
    });
  });

  describe('isGoogleSignIn CustomButton styles', () => {
    const tree = renderer
      .create(<CustomButtonContainer isGoogleSignIn />)
      .toJSON();

    // it('should render isGoogleSignIn CustomButtonContainer', () => {
    //   expect(tree).toMatchSnapshot();
    // });

    it('should have a blue background-color', () => {
      expect(tree).toHaveStyleRule('background-color', '#4285f4');
    });
  });

  describe('getButtonStyles helper function', () => {
    it('should return googleSignInStyles when passed isGoogleSignIn prop', () => {
      const mockProps = { isGoogleSignIn: true };
      expect(getButtonStyles(mockProps)).toEqual(googleSignInStyles);
    });

    it('should return button styles when called without props', () => {
      expect(getButtonStyles({})).toEqual(buttonStyles);
    });

    it('should return invertedButtonStyles when passed inverted prop', () => {
      const mockProps = { inverted: true };
      expect(getButtonStyles(mockProps)).toEqual(invertedButtonStyles);
    });
  });
});
