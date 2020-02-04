/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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
};

export const getUserCartRef = async userId => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  }
  return snapShot.docs[0].ref;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

const makeLow = str => String(str).toLowerCase();
const makeClean = url => encodeURI(makeLow(url));

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: makeClean(title),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[makeLow(collection.title)] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

const auth = firebase.auth();
const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export { auth, firestore, googleProvider, signInWithGoogle };

export default firebase;
