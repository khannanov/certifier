import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { initializeApp } from 'firebase';

// init firebase
initializeApp({
  apiKey: "AIzaSyCdqin-M36nVwRjaX-97ru3CeVv-iV5mI0",
  authDomain: "khann-a70bf.firebaseapp.com",
  databaseURL: "https://khann-a70bf.firebaseio.com",
  storageBucket: "khann-a70bf.appspot.com",
  messagingSenderId: "230749606100"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
