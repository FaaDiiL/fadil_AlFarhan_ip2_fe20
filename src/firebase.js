import firebase from 'firebase/app'

import 'firebase/database'

var firebaseConfig = {
  apiKey: 'AIzaSyCFT4GAkmZg8C8nB0v6ab40m52i6CwbVU4',
  authDomain: 'mailto-801f5.firebaseapp.com',
  databaseURL: 'https://mailto-801f5-default-rtdb.firebaseio.com',
  projectId: 'mailto-801f5',
  storageBucket: 'mailto-801f5.appspot.com',
  messagingSenderId: '528918221842',
  appId: '1:528918221842:web:b314cb5cfdc7876fbbb4cb',
  measurementId: 'G-3PHXH092CP',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


export default firebase