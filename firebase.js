import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCmYAegKog-ueTaCsFOkz25-xUXWyaQMro",
    authDomain: "whatsapp-clone-16192.firebaseapp.com",
    projectId: "whatsapp-clone-16192",
    storageBucket: "whatsapp-clone-16192.appspot.com",
    messagingSenderId: "418955043620",
    appId: "1:418955043620:web:f8ec8deda20336357f09b1"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };