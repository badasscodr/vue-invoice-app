import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDkt_Byt22Un8llrI1Vyg9yPnVb9eP2py8",
  authDomain: "invoiceapp-b86ea.firebaseapp.com",
  projectId: "invoiceapp-b86ea",
  storageBucket: "invoiceapp-b86ea.appspot.com",
  messagingSenderId: "647767218800",
  appId: "1:647767218800:web:dc651532dcc46d65a0f2b5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

firebase.firestore()
  .enablePersistence()
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

export default db;