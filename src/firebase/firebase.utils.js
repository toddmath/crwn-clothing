/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import 'firebase/performance';

export const config = {
  apiKey: 'AIzaSyATNX2F21SsC33XuBZDOGyJwT1UgvCTPUg',
  authDomain: 'crwn-db-409fe.firebaseapp.com',
  databaseURL: 'https://crwn-db-409fe.firebaseio.com',
  projectId: 'crwn-db-409fe',
  storageBucket: 'crwn-db.appspot.com',
  messagingSenderId: '717530139246',
  appId: '1:717530139246:web:0fd962b63d08668f75347f',
};

firebase.initializeApp(config);

// firebase.firestore().enablePersistence();
// const perf = firebase.performance();

const auth = firebase.auth();
const firestore = firebase.firestore();

async function createUserProfileDocument(userAuth, additionalData) {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    // const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef; // eslint-disable-line consistent-return
}

async function getUserCartRef(userId) {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = await firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  }
  return snapShot.docs[0].ref;
}

async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  const collectionRef = await firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

const toLow = str => String(str).toLowerCase();
const clean = url => encodeURI(toLow(url));

const mapCollections = array => {
  return array.docs.map(doc => {
    const { title, items } = doc.data();
    const { id } = doc;
    return {
      routeName: clean(title),
      id,
      title,
      items,
    };
  });
};

const toHashMap = array =>
  array.reduce((acc, collection) => {
    const { title } = collection;
    acc[toLow(title)] = collection;
    return acc;
  }, {});

function convertCollectionsSnapshotToMap(collections) {
  // const transformedCollection = collections.docs.map(doc => {
  //   const { title, items } = doc.data();
  //   return {
  //     routeName: clean(title),
  //     id: doc.id,
  //     title,
  //     items,
  //   };
  // });

  return toHashMap(mapCollections(collections));
}

/**
 * Helper function that attaches an eventListener onto firebase sign-in and sign-out events.
 * @returns {Promise} A promise that resolves when `onAuthStateChange` event triggers.
 */
function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export {
  auth,
  firestore,
  createUserProfileDocument,
  getUserCartRef,
  addCollectionAndDocuments,
  convertCollectionsSnapshotToMap,
  getCurrentUser,
  googleProvider,
  signInWithGoogle,
};

export default firebase;
