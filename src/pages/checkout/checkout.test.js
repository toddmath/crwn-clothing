import React from 'react';
import { shallow } from 'enzyme';
import { CheckOutPage } from './checkout.component';

describe('CheckOutPage component', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      cartItems: [],
      total: 100,
    };
    wrapper = shallow(<CheckOutPage {...mockProps} />);
  });

  it('should render CheckOutPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
