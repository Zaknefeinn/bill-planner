import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form>
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
        </form>
      </div>
    );
  }
}

export default Login;
