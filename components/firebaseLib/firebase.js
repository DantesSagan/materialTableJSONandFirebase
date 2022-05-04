// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { seedDatabse } from './seedDatabase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAR72jT_7u-2EN6bfM_VN7xtMolbqTZRMM',
  authDomain: 'fir-9-introducing.firebaseapp.com',
  projectId: 'fir-9-introducing',
  storageBucket: 'fir-9-introducing.appspot.com',
  messagingSenderId: '223055550669',
  appId: '1:223055550669:web:2347ded09c026c51f43184',
};

// Initialize Firebase
export const firebaseLib = firebase.initializeApp(firebaseConfig);
export const { FieldValue } = getFirestore(firebaseLib);
