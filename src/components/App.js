// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import {Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header  />

        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired
};

export default App;
