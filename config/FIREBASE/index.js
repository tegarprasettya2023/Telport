
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage"
import "firebase/compat/firestore";
import "firebase/compat/database";
import 'firebase/functions';

firebase.initializeApp({
    apiKey: "AIzaSyApWQ65Ji2gBsECnbsk7c0EXhOwMip9660",
    authDomain: "telport-44e90.firebaseapp.com",
    databaseURL: "https://telport-44e90-default-rtdb.firebaseio.com",
    projectId: "telport-44e90",
    storageBucket: "telport-44e90.appspot.com",
    messagingSenderId: "1093727402775",
    appId: "1:1093727402775:web:26dfdd2628078dbd401552"
});

const FIREBASE = firebase;

export default FIREBASE;

