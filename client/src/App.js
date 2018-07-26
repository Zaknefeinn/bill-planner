import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser, logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import Calendar from './components/Calendar/Planner';
import Landing from './components/Landing/Landing';
import './App.css';

class App extends Component {
  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      this.props.store.dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        this.props.store.dispatch(logoutUser());
      }
    }
  }

  render() {
    let landing;
    this.props.auth.isAuthenticated
      ? (landing = Calendar)
      : (landing = Landing);
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={landing} />
          <Route exact path="/manage" component={Calendar} />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(App);
