import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyALoylSNy-hdn7S_kcW5nLUMB__ruME94s",
  authDomain: "cs554finalproject-f9eae.firebaseapp.com",
  databaseURL: "https://cs554finalproject-f9eae.firebaseio.com",
  projectId: "cs554finalproject-f9eae",
  storageBucket: "cs554finalproject-f9eae.appspot.com",
  messagingSenderId: "168033697154",
  appId: "1:168033697154:web:f071e15a57af28f461239b",
});

export default firebaseApp;
