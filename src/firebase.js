import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAD8WHVNp9KnEcW1PTqcZHF21MzIQfqrPA",
    authDomain: "app-eea29.firebaseapp.com",
    projectId: "app-eea29",
    storageBucket: "app-eea29.appspot.com",
    messagingSenderId: "474050921186",
    appId: "1:474050921186:web:dbbfe8fea9518f156e14bb",
    measurementId: "G-YWE1QRFKDV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};