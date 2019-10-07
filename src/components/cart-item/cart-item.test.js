import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

describe('CartItem component', () => {
  let mockItem;
  let wrapper;

  beforeEach(() => {
    mockItem = {
      imageUrl: 'www.testImage.com',
      price: 10,
      name: 'hats',
      quantity: 2,
    };
    const mockProps = {
      item: mockItem,
    };

    wrapper = shallow(<CartItem {...mockProps} />);
  });

  it('should render CartItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
