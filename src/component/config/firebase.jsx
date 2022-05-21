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
  apiKey: "AIzaSyC2HOXR6u2Und0J47B6G1uGLqY3fDBSCvM",
  authDomain: "working-firebase-cbcc0.firebaseapp.com",
  projectId: "working-firebase-cbcc0",
  storageBucket: "working-firebase-cbcc0.appspot.com",
  messagingSenderId: "1073454262148",
  appId: "1:1073454262148:web:849906e1fc3e6f43929fd1",
  measurementId: "G-HZD6CNHTRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { firestore, auth, storage }