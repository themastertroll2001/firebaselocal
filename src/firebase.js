// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC3sf-u5_vXxd4zgeIX1XKVn0OWpFN-WUE",
  authDomain: "loginphoto-f715d.firebaseapp.com",
  databaseURL: "https://loginphoto-f715d-default-rtdb.firebaseio.com",
  projectId: "loginphoto-f715d",
  storageBucket: "loginphoto-f715d.appspot.com",
  messagingSenderId: "519061328593",
  appId: "1:519061328593:web:91c1f9f8a6cafb825b6bf0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, projectStorage, projectFirestore, timestamp };

