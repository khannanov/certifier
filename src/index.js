import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './modules'
import certifications from './modules/certifications'
import questions from './modules/questions'
import Core from './modules/core'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Core.Layout>
          <Switch>
            <Route exact path="/" component={certifications.CertificationsContainer}/>
            <Route exact path="/add" component={certifications.containers.CertificationAdd}/>
            <Route path="/edit/:id" component={certifications.containers.CertificationEdit}/>
            <Route exact path="/certification/:id/question/add" component={questions.containers.QuestionAddContainer}/>
            <Route exact path="/certification/:id/question/:id" component={questions.containers.QuestionEditContainer}/>
            <Route render={({location}) => (
              <div>
                <h3>404. No match for <code>{location.pathname}</code></h3>
              </div>
            )}/>
          </Switch>

        </Core.Layout>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
