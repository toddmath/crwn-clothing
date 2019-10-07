import React from 'react';
import { shallow } from 'enzyme';
import WithSpinner from './with-spinner.component';
// import Spinner from '../spinner/spinner.component';

describe('WithSpinner HOC', () => {
  const TestComponent = () => <div className='test' />;
  const WrappedComponent = WithSpinner(TestComponent);

  describe('if loading is true', () => {
    it('should render Spinner component', () => {
      const wrapper = shallow(<WrappedComponent isLoading />);
      expect(wrapper.exists('Spinner')).toBe(true);
    });

    it('should not render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading />);
      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe('if loading is false', () => {
    it('should render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);
      expect(wrapper.exists(TestComponent)).toBe(true);
    });

    it('should render component passed with its own props', () => {
      const ownProps = {
        name: 'testing123',
        email: 'test@gmail.com',
      };
      const mockProps = {
        isLoading: false,
        ownProps,
      };
      const NewTestComponent = () => <div {...ownProps} />;
      const WrappedComponent = WithSpinner(NewTestComponent);
      const wrapper = shallow(<WrappedComponent {...mockProps} />);
      expect(wrapper.exists(NewTestComponent)).toBe(true);
      expect(wrapper.find('NewTestComponent').prop('ownProps')).toStrictEqual({
        name: 'testing123',
        email: 'test@gmail.com',
      });
    });

    it('should not render Spinner', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);
      expect(wrapper.exists('Spinner')).toBe(false);
    });
  });
});
