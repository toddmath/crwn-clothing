import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

const mapCollectionKeys = colls => Object.keys(colls).map(key => colls[key]);

const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => (collections ? mapCollectionKeys(collections) : [])
);

const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  );

const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

const makeSelectIsCollectionFetching = () => {
  return createSelector([selectShop], shop => shop.isFetching);
};

const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);

const makeSelectIsCollectionsLoaded = () => {
  return createSelector([selectShop], shop => !!shop.collections);
};

export {
  selectCollections,
  selectCollectionsForPreview,
  selectCollection,
  selectIsCollectionFetching,
  makeSelectIsCollectionFetching,
  selectIsCollectionsLoaded,
  makeSelectIsCollectionsLoaded,
};
