import firebase from 'firebase';
// import FirebaseServer from 'firebase-server'
// import firebaseMock from '../config/firebase.db.mock'

// const fbs = new FirebaseServer(5000, 'localhost.firebaseio.test', firebaseMock)

const config = {
    apiKey: "AIzaSyCdqin-M36nVwRjaX-97ru3CeVv-iV5mI0",
    authDomain: "khann-a70bf.firebaseapp.com",
    databaseURL: "https://khann-a70bf.firebaseio.com",
    storageBucket: "khann-a70bf.appspot.com",
    messagingSenderId: "230749606100"
}

firebase.initializeApp(config)
const database = firebase.database()

firebase.database().ref().once('value', function(snap) {
  // console.log('Got value: ', snap.val());
});

// export { fbs }

export default database