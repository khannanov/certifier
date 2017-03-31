import firebase from 'firebase';
import FirebaseServer from 'firebase-server';
import detect from 'detect-port';

export async function startFirebaseTestServer() {
  console.log('start server ... ')
  let server;
  const port = await detect(6000);
  if (port === 6000) {
    server = new FirebaseServer(6000, '127.0.0.1', {});
  }
  firebase.initializeApp({ databaseURL: 'ws://127.0.1:6000' });
  const dbRef = firebase.app().database().ref();

  firebase.database().ref().once('value', function(snap) {
    console.log('Got value from testing db server: ', snap.val());
  });

  return { server, dbRef };
}