import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

import './Landing.css';
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'login'
    };
  }
  render() {
    const { display } = this.state;
    let container;
    if (display === 'login') {
      container = <Login />;
    } else {
      container = <Register />;
    }
    return (
      <div className="Landing">
        <div className="landing-container">{container}</div>
      </div>
    );
  }
}

export default Landing;
