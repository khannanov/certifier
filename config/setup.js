import firebase from 'firebase';
import FirebaseServer from 'firebase-server';
import detect from 'detect-port';

export async function startFirebaseTestServer() {
  let server;
  const port = await detect(5555);
  if (port === 5555) {
    server = new FirebaseServer(5555, '127.0.0.1', {});
  } else {
    console.log('port else');
  }
  firebase.initializeApp({ databaseURL: 'ws://127.0.1:5555' });
  const dbRef = firebase.app().database().ref();
  return { server, dbRef };
}
