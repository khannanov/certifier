import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { initializeApp } from 'firebase'
import { Provider } from 'react-redux'
import FirebaseServer from 'firebase-server'


const fbs = new FirebaseServer(5000, 'localhost.firebaseio.test', {
  states: {
    CA: 'California',
    AL: 'Alabama',
    KY: 'Kentucky'
  }
});

// init firebase
// initializeApp({
//   apiKey: "AIzaSyCdqin-M36nVwRjaX-97ru3CeVv-iV5mI0",
//   authDomain: "khann-a70bf.firebaseapp.com",
//   databaseURL: "https://khann-a70bf.firebaseio.com",
//   storageBucket: "khann-a70bf.appspot.com",
//   messagingSenderId: "230749606100"
// });

const env = process.env.NODE_ENV;

/* this ^ picks the environment variable with the Url name if set */
if (env == 'test') {
  initializeApp({
    apiKey: 'fake-api-key-for-testing-purposes-only',
    databaseURL: 'ws://localhost.firebaseio.test:5000'
  }, 'TestingEnvironment')
} else {
  initializeApp({
    apiKey: "AIzaSyCdqin-M36nVwRjaX-97ru3CeVv-iV5mI0",
    authDomain: "khann-a70bf.firebaseapp.com",
    databaseURL: "https://khann-a70bf.firebaseio.com",
    storageBucket: "khann-a70bf.appspot.com",
    messagingSenderId: "230749606100"
  });
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
