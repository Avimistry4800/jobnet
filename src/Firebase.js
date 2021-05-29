import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCh_LxwjpBfz7_nfEjvaTv70J43mDxqt_E",
    authDomain: "doctors-portal-410f3.firebaseapp.com",
    projectId: "doctors-portal-410f3",
    storageBucket: "doctors-portal-410f3.appspot.com",
    messagingSenderId: "812798097055",
    appId: "1:812798097055:web:1906053f98239e2c0a54aa"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();
export {db , auth};