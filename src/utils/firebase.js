// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBM3XRagkFSD5Jz1XscFBsrQys9ixbdT5c',
  authDomain: 'hec-rn.firebaseapp.com',
  databaseURL: 'https://hec-rn-default-rtdb.firebaseio.com',
  projectId: 'hec-rn',
  storageBucket: 'hec-rn.appspot.com',
  messagingSenderId: '181882940280',
  appId: '1:181882940280:web:11c2cf89f8786f15b4f68d',
  measurementId: 'G-LERZN2NWVN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);
