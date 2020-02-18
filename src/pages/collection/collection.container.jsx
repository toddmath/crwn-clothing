import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionPage from './collection.component';
import WithSpinnerContainer from '../../components/with-spinner/with-spinner.container';

const makeMapStateToProps = () => {
  const selectIsCollectionsLoaded = makeSelectIsCollectionsLoaded();
  return createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state),
  });
};

export default WithSpinnerContainer(CollectionPage, makeMapStateToProps);
