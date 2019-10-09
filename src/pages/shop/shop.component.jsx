import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
// import ErrorBoundary from '../../components/error-boundary/error-boundary.component';
import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.component')
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

export const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
          key={`${match.path}`}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          key='collection'
        />
      </Suspense>
    </ShopPageContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
