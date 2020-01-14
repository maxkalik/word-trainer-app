import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAc9dGadPjZQhQnve-MzSM74JN0f-2MORQ',
  authDomain: 'word-trainer-app.firebaseapp.com',
  databaseURL: 'https://word-trainer-app.firebaseio.com',
  projectId: 'word-trainer-app',
  storageBucket: 'word-trainer-app.appspot.com',
  messagingSenderId: '438366542533',
  appId: '1:438366542533:web:48b2f8031a2d9366502eac'
};
firebase.initializeApp(firebaseConfig);

export default firebase;
