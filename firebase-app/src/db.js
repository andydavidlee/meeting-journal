import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDpfRvZVtKbDRIXyBv3AWVpmwsAvj1Qfjw',
  authDomain: 'vue-firebase-app-72057.firebaseapp.com',
  projectId: 'vue-firebase-app-72057',
  storageBucket: 'vue-firebase-app-72057.appspot.com',
  messagingSenderId: '532531808968',
  appId: '1:532531808968:web:8f7e995000c17e330473fd'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
