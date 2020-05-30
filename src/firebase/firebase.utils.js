import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAl-kA049wk5GnfEGEjkZg0FfTIu2Jf1go",
  authDomain: "garden-shop-a1979.firebaseapp.com",
  databaseURL: "https://garden-shop-a1979.firebaseio.com",
  projectId: "garden-shop-a1979",
  storageBucket: "garden-shop-a1979.appspot.com",
  messagingSenderId: "228931713753",
  appId: "1:228931713753:web:25c63e22ba45bfc9229cc8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
