import firebase from 'firebase'
import FirebaseServer from 'firebase-server'
import detect from 'detect-port'
import firebaseMock from '../config/firebase.db.mock'

const port = 6002
const fbs = new FirebaseServer(port, 'localhost.firebaseio.test', firebaseMock)

let dbRef
let config

if (process.env.NODE_ENV !== 'test') {
  config = {
    apiKey: "AIzaSyCdqin-M36nVwRjaX-97ru3CeVv-iV5mI0",
    authDomain: "khann-a70bf.firebaseapp.com",
    databaseURL: "https://khann-a70bf.firebaseio.com",
    storageBucket: "khann-a70bf.appspot.com",
    messagingSenderId: "230749606100"
  }
} else {
  config = {
    apiKey: 'fake-api-key-for-testing-purposes-only',
    databaseURL: `ws://localhost.firebaseio.test:${port}`
  }
}

firebase.initializeApp(config)
dbRef = firebase.database().ref()

dbRef.once('value', function(snap) {
  console.log('Got value: ', snap.val());
});

export { fbs }

export default dbRef