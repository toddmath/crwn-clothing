import React, { useEffect, lazy, Suspense } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useScrollToOnMount } from '../../hooks';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { Spinner, ErrorBoundary } from '../../components';
import { ShopPageContainer } from './shop.styles';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// const CollectionsOverviewContainer = lazy(() =>
//   import('../../components/collections-overview/collections-overview.container')
// );
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

export function ShopPage() {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  useScrollToOnMount();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Route exact path={path}>
        <CollectionsOverviewContainer />
      </Route>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path={`${path}/:collectionId`}>
            <CollectionPageContainer />
          </Route>
        </Suspense>
      </ErrorBoundary>
    </ShopPageContainer>
  );
}

export default ShopPage;
