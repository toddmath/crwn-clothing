import { call, put } from 'redux-saga/effects';

import { createRootSaga, createTakeLatest } from '../helpers/saga.helpers';
import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

const { FETCH_COLLECTIONS_START } = ShopActionTypes;

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export const fetchCollectionsStart = createTakeLatest(
  FETCH_COLLECTIONS_START,
  fetchCollectionsAsync
);

/* root shop Saga */
export const shopSagas = createRootSaga([fetchCollectionsStart]);
