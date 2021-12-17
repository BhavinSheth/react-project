// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAODtQ7qP-VjDisTmsjtZ95oZJUexUCEYQ",
    authDomain: "clone-1988b.firebaseapp.com",
    projectId: "clone-1988b",
    storageBucket: "clone-1988b.appspot.com",
    messagingSenderId: "736885566500",
    appId: "1:736885566500:web:e249d8f2ffa1bd1c493cb1",
    measurementId: "G-4QXEJ31DQ6"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()