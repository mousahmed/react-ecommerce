import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyAjX2U1StB1izCYcYVDvymdxB80FxrF25g",
	authDomain: "e-store-72db2.firebaseapp.com",
	databaseURL: "https://e-store-72db2.firebaseio.com",
	projectId: "e-store-72db2",
	storageBucket: "e-store-72db2.appspot.com",
	messagingSenderId: "623454453039",
	appId: "1:623454453039:web:ebc3469dc00885b848b5da",
	measurementId: "G-0BD923ST5V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
