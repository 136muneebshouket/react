// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
// import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyM9uIwlYVwHBMzhmqVBEusIuffD9m1XQ",
  authDomain: "hacathon-40c9b.firebaseapp.com",
  projectId: "hacathon-40c9b",
  storageBucket: "hacathon-40c9b.appspot.com",
  messagingSenderId: "111157802655",
  appId: "1:111157802655:web:779c6d11b6947147bc94aa",
  measurementId: "G-XQW20Z4JT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { firestore, auth, storage }