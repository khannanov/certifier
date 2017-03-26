import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './modules'
import certifications from './modules/certifications'
import Core from './modules/core'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Core.Layout>
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add">New certification</NavLink></li>
          </ul>
          <hr/>
        </div>
        <Switch>
          <Route exact path="/" component={certifications.CertificationsContainer}/>
          <Route exact path="/add" component={certifications.containers.CertificationAdd}/>
          <Route path="/edit/:id" component={certifications.containers.CertificationEdit}/>
          <Route render={({location}) => (
            <div>
              <h3>404. No match for <code>{location.pathname}</code></h3>
            </div>
          )}/>
        </Switch>
      </Core.Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);
