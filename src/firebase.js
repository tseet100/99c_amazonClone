import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDXSin1c4_t8lPPiKNyll4ytZlns88r2GI',
  authDomain: 'ecom8-26530.firebaseapp.com',
  databaseURL: 'https://ecom8-26530.firebaseio.com',
  projectId: 'ecom8-26530',
  storageBucket: 'ecom8-26530.appspot.com',
  messagingSenderId: '839490855450',
  appId: '1:839490855450:web:d416bcdbea6fc23ef127a3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
