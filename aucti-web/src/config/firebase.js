import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDxDJuEkr5AEB2JCJw9-6v9O1pbGD30dBA",
  authDomain: "auctiweb.firebaseapp.com",
  databaseURL: "https://auctiweb-default-rtdb.firebaseio.com",
  projectId: "auctiweb",
  storageBucket: "auctiweb.appspot.com",
  messagingSenderId: "797580451115",
  appId: "1:797580451115:web:3e2f5d6e0e1972a6dab96e",
  measurementId: "G-4DE6QT4G67",
});

const auth = firebase.auth();

const firestore = firebase.firestore();

export { firebase, auth, firestore };
