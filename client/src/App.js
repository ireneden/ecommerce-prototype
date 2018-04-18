import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdDetails from './containers/AdDetails'
import AdsList from './containers/AdsList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/ads" component={AdsList} />
          <Route exact path="/ads/:id" component={AdDetails} />
          <Route exact path="/" render={ () => <Redirect to="/ads" /> } />
        </div>
      </Router>
    )
  }
}

export default App;
