import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

if (typeof window !== 'undefined' && firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: "AIzaSyCYe6whYACrdsX-7fH_JtrRuWRkJHzo6j8",
    authDomain: "nextjs-first-a.firebaseapp.com",
    projectId: "nextjs-first-a",
    storageBucket: "nextjs-first-a.appspot.com",
    messagingSenderId: "989923651708",
    appId: "1:989923651708:web:52973455b32afeda1d59f9",
    measurementId: "G-2K0FE1858V"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}