import React from 'react';
import renderer from 'react-test-renderer';
import {
  MenuItemContainer,
  BackgroundImageContainer,
} from './menu-item.styles';

describe('should render menu-item styled components', () => {
  describe('MenuItemContainer styled-component', () => {
    const tree = renderer.create(<MenuItemContainer />).toJSON();

    it('should render MenuItemContainer without props', () => {
      expect(tree).toMatchSnapshot();
    });

    it('should have a height of 24rem', () => {
      expect(tree).toHaveStyleRule('height', '24rem');
    });
  });

  describe('MenuItemContainer styled-component with size prop', () => {
    const tree = renderer.create(<MenuItemContainer size />).toJSON();

    it('should render MenuItemContainer with size prop', () => {
      expect(tree).toMatchSnapshot();
    });

    it('should have a height of 38rem', () => {
      expect(tree).toHaveStyleRule('height', '38rem');
    });
  });

  describe('BackgroundImageContainer styled-component', () => {
    const tree = renderer.create(<BackgroundImageContainer />).toJSON();

    it('should render BackgroundImageContainer without props', () => {
      expect(tree).toMatchSnapshot();
    });

    it('should have a background-image url undefined', () => {
      expect(tree).toHaveStyleRule('background-image', 'url(undefined)');
    });
  });

  describe('BackgroundImageContainer styled-component with imageUrl prop', () => {
    const tree = renderer
      .create(
        <BackgroundImageContainer imageUrl='http://example.com/testimage.jpeg' />
      )
      .toJSON();

    it('should render BackgroundImage with imageUrl prop', () => {
      expect(tree).toMatchSnapshot();
    });

    it('should have a background-image url style rule equal to imageUrl prop', () => {
      expect(tree).toHaveStyleRule(
        'background-image',
        'url(http://example.com/testimage.jpeg)'
      );
    });
  });
});
