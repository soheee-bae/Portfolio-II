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
  apiKey: 'AIzaSyC41WwZHfrOPBa0lPiZtWOpE3ZVIwdX6zA',
  authDomain: 'portfolio23-84a31.firebaseapp.com',
  projectId: 'portfolio23-84a31',
  storageBucket: 'portfolio23-84a31.appspot.com',
  messagingSenderId: '567407014653',
  appId: '1:567407014653:web:5d6f64fe982ea4d7990494',
  measurementId: 'G-M1FK56GH6D'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const firebase = getFirestore(app);

export const storage = getStorage(app);
export const firestore = getFirestore(app);
