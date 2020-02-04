import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from './spinner.component';

describe('Spinner Component', () => {
  // let mockColor;
  // let mockSize;
  const color = '#212121';
  const size = 70;
  const mockProps = { size, color };

  it('should pass prop size to SpringSpinner component', () => {
    const wrapper = shallow(<Spinner {...mockProps} />);
    expect(wrapper.find('SpringSpinner').prop('size')).toBe(size);
  });

  it('should pass prop color to SpringSpinner component', () => {
    const wrapper = shallow(<Spinner {...mockProps} />);
    expect(wrapper.find('SpringSpinner').prop('color')).toBe(color);
  });
});
