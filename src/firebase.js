import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBaPxULZ6Buqeij56FD9ly8alN_SVB9uA4",
    authDomain: "whatsapp-clone-f8185.firebaseapp.com",
    projectId: "whatsapp-clone-f8185",
    storageBucket: "whatsapp-clone-f8185.appspot.com",
    messagingSenderId: "171056026639",
    appId: "1:171056026639:web:8c753fb5657b7d08ac7f7a",
    measurementId: "G-DFBXVSKZ03",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;