import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './modules'
import certifications from './modules/certifications'

const { CertificationsContainer } = certifications

/* this ^ picks the environment variable with the Url name if set */
ReactDOM.render(
  <Provider store={store}>
    <CertificationsContainer/>
  </Provider>,
  document.getElementById('root')
);
