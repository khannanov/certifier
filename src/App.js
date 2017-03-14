import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      certifications: {},
    }
  }

  componentDidMount () {
    const rootRef = firebase.database().ref().child('Certifications');

    rootRef.once('value').then(snapshot => {
      this.setState({ certifications: snapshot.val() });
    })
  }

  render() {
    const { certifications } = this.state;

    if (!Object.keys(certifications).length) {
      return <div>loading...</div>;
    }

    const renderedCertifications = Object.keys(certifications).map(key =>
      <div key={key}>{certifications[key]}</div>)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Certifier</h2>
        </div>
        <div className="App-intro">
          {renderedCertifications}
        </div>
      </div>
    );
  }
}

export default App;
