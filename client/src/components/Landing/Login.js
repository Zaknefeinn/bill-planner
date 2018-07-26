import React, { Component } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange = state => {
    this.setState({
      [state.target.name]: state.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const currentUser = {
      email,
      password
    };
    this.props.loginUser(currentUser);
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            classType="reg-input"
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            classType="reg-input"
          />
          <button type="submit">Log In</button>
          <button type="button" onClick={this.props.toggle}>
            Sign Up!
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
