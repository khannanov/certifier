import firebase from 'firebase';
import FirebaseServer from 'firebase-server'
import firebaseMock from '../config/firebase.db.mock'

const fbs = new FirebaseServer(6000, 'localhost.firebaseio.test', firebaseMock)

const config = {
  apiKey: 'fake-api-key-for-testing-purposes-only',
  databaseURL: 'ws://localhost.firebaseio.test:6000'
}

// initializeApp({
  // apiKey: 'fake-api-key-for-testing-purposes-only',
  // databaseURL: 'ws://localhost.firebaseio.test:5000'
// }, 'TestingEnvironment')

// const config = {
//   apiKey: "AIzaSyCdqin-M36nVwRjaX-97ru3CeVv-iV5mI0",
//   authDomain: "khann-a70bf.firebaseapp.com",
//   databaseURL: "https://khann-a70bf.firebaseio.com",
//   storageBucket: "khann-a70bf.appspot.com",
//   messagingSenderId: "230749606100"
// }

firebase.initializeApp(config)
const database = firebase.database()

firebase.database().ref().once('value', function(snap) {
  console.log('Got value: ', snap.val());
});

export default database
