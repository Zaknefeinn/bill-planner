import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }
  render() {
    return (
      <div className="register">
        <form>
          <input name="name" type="text" placeholder="name" />
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
          <input
            name="password1"
            type="password"
            placeholder="re-enter password"
          />
        </form>
      </div>
    );
  }
}

export default Register;
