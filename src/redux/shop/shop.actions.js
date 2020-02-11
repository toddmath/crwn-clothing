import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} = ShopActionTypes;

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => async dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  try {
    const snapShot = await collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
    dispatch(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    dispatch(fetchCollectionsFailure(error.message));
  }
  // collectionRef
  //   .get()
  //   .then(snapShot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch(error => dispatch(fetchCollectionsFailure(error.message)));
};
