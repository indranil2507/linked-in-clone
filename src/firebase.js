import firebase from  'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD3JOD0FtgH4pW9_0LyoCnSAFPBVppg8yg",
    authDomain: "linked-in-clone-c6c37.firebaseapp.com",
    projectId: "linked-in-clone-c6c37",
    storageBucket: "linked-in-clone-c6c37.appspot.com",
    messagingSenderId: "674888004451",
    appId: "1:674888004451:web:605d6059dc35335fa6d956"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db,auth }

