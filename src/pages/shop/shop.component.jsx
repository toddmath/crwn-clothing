import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, useRouteMatch } from 'react-router-dom';

import { Spinner, ScrollToTopOnMount, ErrorBoundary } from '../../components';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
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
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path={path}>
            <CollectionsOverviewContainer />
          </Route>
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Route
            path={`${path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Suspense>
      </ErrorBoundary>
    </ShopPageContainer>
  );
};

const mapDispatchToProps = {
  fetchCollectionsStart,
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
