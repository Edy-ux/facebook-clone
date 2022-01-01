import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPndIc_UkTx5yCLFlmC6t-jve1iAmrTrI",
  authDomain: "facebook-clone-7e8a5.firebaseapp.com",
  projectId: "facebook-clone-7e8a5",
  storageBucket: "facebook-clone-7e8a5.appspot.com",
  messagingSenderId: "1194  96244523",
  appId: "1:119496244523:web:110cd7009d351e2b16196e",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
