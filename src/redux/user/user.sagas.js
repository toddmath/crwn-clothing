import { put, call } from 'redux-saga/effects';

import { createRootSaga, createTakeLatest } from '../helpers/saga.helpers';
import UserActionTypes from './user.types';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} = UserActionTypes;

function* getSnapshotFromUserAuth(userAuth, otherData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, otherData);
    const userSnapshot = yield userRef.get();
    const { createdAt, ...normalizedUser } = userSnapshot.data();
    yield put(signInSuccess({ id: userSnapshot.id, ...normalizedUser }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    // if (!userAuth) return;
    if (userAuth) {
      yield getSnapshotFromUserAuth(userAuth);
    }
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

const onGoogleSignInStart = createTakeLatest(
  GOOGLE_SIGN_IN_START,
  signInWithGoogle
);
const onEmailSignInStart = createTakeLatest(
  EMAIL_SIGN_IN_START,
  signInWithEmail
);
const onCheckUserSession = createTakeLatest(
  CHECK_USER_SESSION,
  isUserAuthenticated
);
const onSignOutStart = createTakeLatest(SIGN_OUT_START, signOut);
const onSignUpStart = createTakeLatest(SIGN_UP_START, signUp);
const onSignUpSuccess = createTakeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);

const sagas = [
  onGoogleSignInStart,
  onEmailSignInStart,
  isUserAuthenticated,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess,
];

const userSagas = createRootSaga(sagas);

export {
  getSnapshotFromUserAuth,
  signInWithGoogle,
  signInWithEmail,
  isUserAuthenticated,
  signOut,
  signUp,
  signInAfterSignUp,
  onGoogleSignInStart,
  onEmailSignInStart,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess,
  userSagas,
};
