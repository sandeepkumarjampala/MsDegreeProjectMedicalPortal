import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAv6XuELgAmtTnl_2Mrxq6Ymnl6hdzc48",
  authDomain: "msdegreeproject-dc606.firebaseapp.com",
  projectId: "msdegreeproject-dc606",
  storageBucket: "msdegreeproject-dc606.appspot.com",
  messagingSenderId: "908360968454",
  appId: "1:908360968454:web:8afbde801b3f2976315687",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
