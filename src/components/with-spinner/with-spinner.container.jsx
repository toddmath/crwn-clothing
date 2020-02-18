import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from './with-spinner.component';

const WithSpinnerContainer = (Component, makeMapStateToProps) =>
  compose(connect(makeMapStateToProps), WithSpinner)(Component);

export default WithSpinnerContainer;
