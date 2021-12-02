import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5CWhyrMVpip5bC86GtsCTp09nN_sa7fA",
    authDomain: "teating-67bc0.firebaseapp.com",
    projectId: "teating-67bc0",
    storageBucket: "teating-67bc0.appspot.com",
    messagingSenderId: "737743283866",
    appId: "1:737743283866:web:30b98372d5297e70ace123",
    measurementId: "G-XKYR18C9SG"
  };

 export default firebase.initializeApp(firebaseConfig)