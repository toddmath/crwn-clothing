import React, { useEffect, lazy, Suspense } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useScrollToOnMount } from '../../hooks';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { Spinner, ErrorBoundary } from '../../components';
import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

export function ShopPage() {
  useScrollToOnMount();
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path={path}>
            <CollectionsOverviewContainer />
          </Route>
          <Route exact path={`${path}/:collectionId`}>
            <CollectionPageContainer />
          </Route>
        </Suspense>
      </ErrorBoundary>
    </ShopPageContainer>
  );
}

export default ShopPage;
