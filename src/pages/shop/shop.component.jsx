import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, useRouteMatch } from 'react-router-dom';

import { Spinner, ScrollToTopOnMount } from '../../components';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
// import ErrorBoundary from '../../components/error-boundary/error-boundary.component';
import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.component')
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

export const ShopPage = ({ fetchCollectionsStart }) => {
  const { path } = useRouteMatch();

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <ScrollToTopOnMount />
      <Suspense fallback={<Spinner />}>
        <Route exact path={path}>
          <CollectionsOverviewContainer />
        </Route>
        <Route
          path={`${path}/:collectionId`}
          component={CollectionPageContainer}
          key='collection'
        />
      </Suspense>
    </ShopPageContainer>
  );
};

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
// });

const mapDispatchToProps = {
  fetchCollectionsStart,
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
