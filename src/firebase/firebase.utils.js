import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// cSpell: disable
const config = {
  apiKey: 'AIzaSyATNX2F21SsC33XuBZDOGyJwT1UgvCTPUg',
  authDomain: 'crwn-db-409fe.firebaseapp.com',
  databaseURL: 'https://crwn-db-409fe.firebaseio.com',
  projectId: 'crwn-db-409fe',
  storageBucket: '',
  messagingSenderId: '717530139246',
  appId: '1:717530139246:web:0fd962b63d08668f75347f',
};
// cSpell: enable

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.warn('[Error]: creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
