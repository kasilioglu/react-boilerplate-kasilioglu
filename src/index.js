/*eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';

import './styles/styles.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/toastr/build/toastr.min.css';

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('app')
);
