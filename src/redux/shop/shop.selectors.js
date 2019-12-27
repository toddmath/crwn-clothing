import { createSelector } from 'reselect';
// import createDeepEqualSelector from '../deep-equal.selector';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// * Normal Compare Version
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// * Deep Equal Compare Version
// export const selectCollectionsForPreview = createDeepEqualSelector(
//   [selectCollections],
//   collections =>
//     collections ? Object.keys(collections).map(key => collections[key]) : []
// );

// * Normal Compare Version
export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

// * Deep Equal Compare Version
// export const selectCollection = collectionUrlParam =>
//   createDeepEqualSelector([selectCollections], collections =>
//     collections ? collections[collectionUrlParam] : null
//   );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
