import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBp26__Rv5zFb36sqQ8guQCCwiFKpbuhwU",
    authDomain: "slack-clone-3d73e.firebaseapp.com",
    databaseURL: "https://slack-clone-3d73e.firebaseio.com",
    projectId: "slack-clone-3d73e",
    storageBucket: "slack-clone-3d73e.appspot.com",
    messagingSenderId: "716733737059",
    appId: "1:716733737059:web:d89da2631642dbac207056"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export {auth, provider};
export default db;