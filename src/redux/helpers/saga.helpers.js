/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
import {
  all,
  call,
  take,
  fork,
  takeLatest,
  takeEvery,
  takeLeading,
} from 'redux-saga/effects';

/**
 * Factory function that takes an array of `saga's` and returns a root `saga`
 * @param {SagaIterator} sagas Array of Redux `saga's` to yield an all wrap around.
 * @returns {Generator} Root Redux generator `saga` function.
 */
export function createRootSaga(sagas) {
  return function*() {
    const runner = [];

    for (const saga of sagas) {
      runner.push(call(saga));
    }

    yield all(runner);
  };
}

/**
 * Factory function that returns a generator `saga` function that wraps a
 * call to yield `takeLatest`
 * @param {Action.type} actionType Redux action type.
 * @param {ActionCreator} actionCreator Redux action creator.
 * @returns {Generator} Redux generator `saga` function.
 */
export function createTakeLatest(actionType, actionCreator) {
  return function*() {
    yield takeLatest(actionType, actionCreator);
  };
}

/**
 * Factory function that returns a generator `saga` function that wraps a
 * call to yield `teakeEvery`
 * @param {Action.type} actionType Redux action type.
 * @param {ActionCreator} actionCreator Redux action creator.
 * @returns {Generator} Redux generator `saga` function.
 */
export function createTakeEvery(actionType, actionCreator) {
  return function*() {
    yield takeEvery(actionType, actionCreator);
  };
}

export function createTakeLeading(actionType, actionCreator) {
  return function*() {
    yield takeLeading(actionType, actionCreator);
  };
}

export function createListener(actionType, forkFunc) {
  return function*() {
    while (true) {
      const taker = take(actionType.type || actionType);
      yield fork(forkFunc, taker);
    }
  };
}
