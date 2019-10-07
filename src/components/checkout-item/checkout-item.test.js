import React from 'react';
import { shallow } from 'enzyme';
import { CheckOutItem } from './checkout-item.component';

describe('CheckOutItem component', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();
    const mockProps = {
      cartItem: {
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2,
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
    };

    wrapper = shallow(<CheckOutItem {...mockProps} />);
  });

  it('should render CheckOutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call clearItem when remove button is clicked', () => {
    wrapper.find('.clear-item-button').simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  });

  it('should call addItem when right arrow is clicked', () => {
    wrapper.find('div.add-item').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should call removeItem when left arrow is clicked', () => {
    wrapper.find('div.remove-item').simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });
});
