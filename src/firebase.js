import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCdqin-M36nVwRjaX-97ru3CeVv-iV5mI0",
  authDomain: "khann-a70bf.firebaseapp.com",
  databaseURL: "https://khann-a70bf.firebaseio.com",
  storageBucket: "khann-a70bf.appspot.com",
  messagingSenderId: "230749606100"
}

firebase.initializeApp(config)
const dbRef = firebase.database().ref()

dbRef.once('value', function(snap) {
  console.log('Got value: ', snap.val())
});

export default dbRef