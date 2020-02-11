import ShopActionTypes from './shop.types';
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync,
} from './shop.actions';

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} = ShopActionTypes;

describe('fetchCollectionsStart action', () => {
  it('should create the fetchCollectionsStart action', () => {
    expect(fetchCollectionsStart().type).toEqual(FETCH_COLLECTIONS_START);
  });
});

describe('fetchCollectionsSuccess action', () => {
  it('should create the fetchCollectionsSucess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1,
      },
    };

    const action = fetchCollectionsSuccess(mockCollectionsMap);

    expect(action.type).toEqual(FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionsFailure('errored');

    expect(action.type).toEqual(FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});

describe('fetchCollectionsStartAsync', () => {
  it('should create the fetchCollectionsStartAsync action', async () => {
    const mockActionCreator = fetchCollectionsStartAsync();
    const mockDispatch = jest.fn();
    await mockActionCreator(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
  });
});
