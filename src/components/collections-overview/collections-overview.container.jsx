import { createMakeMapStateToProps } from '../../redux/helpers/selector.helpers';

import { makeSelectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import CollectionsOverview from './collections-overview.component';
import WithSpinnerContainer from '../with-spinner/with-spinner.container';

const makeMapStateToProps = createMakeMapStateToProps(
  makeSelectIsCollectionFetching,
  'isLoading'
);

export default WithSpinnerContainer(CollectionsOverview, makeMapStateToProps);
