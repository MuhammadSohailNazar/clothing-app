import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBWo77hE4woXw-tUYt7kI3a9SL9nlByWx8",
  authDomain: "clothing-db-560b4.firebaseapp.com",
  projectId: "clothing-db-560b4",
  storageBucket: "clothing-db-560b4.appspot.com",
  messagingSenderId: "998560775965",
  appId: "1:998560775965:web:a5955355a3636d3cf5ebf4",
  measurementId: "G-H8GRWXTYY9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
