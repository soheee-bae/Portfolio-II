// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBgWrcS16GKZPXTYNea8_b1edL3L9s8rdo',
  authDomain: 'soheebae-dev.firebaseapp.com',
  projectId: 'soheebae-dev',
  storageBucket: 'soheebae-dev.appspot.com',
  messagingSenderId: '725376164858',
  appId: '1:725376164858:web:54c4fe80d53f9f3efe7a43',
  measurementId: 'G-M5QC98QZE5'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firebase = getFirestore(app);

export const storage = getStorage(app);
export const firestore = getFirestore(app);
