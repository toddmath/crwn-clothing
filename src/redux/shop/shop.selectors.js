import { createSelector } from 'reselect';
import createDeepEqualSelector from '../deep-equal.selector';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// export const selectCollectionsForPreview = createSelector(
//   [selectCollections],
//   collections =>
//     collections ? Object.keys(collections).map(key => collections[key]) : []
// );

export const selectCollectionsForPreview = createDeepEqualSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// export const selectCollection = collectionUrlParam =>
//   createSelector(
//     [selectCollections],
//     collections => (collections ? collections[collectionUrlParam] : null)
//   );

export const selectCollection = collectionUrlParam =>
  createDeepEqualSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
