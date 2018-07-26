import React, { Component } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
  }
  handleChange = state => {
    this.setState({
      [state.target.name]: state.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;
    const newUser = {
      name,
      email,
      password,
      password2
    };
    this.props.registerUser(newUser);
  };
  render() {
    const { name, email, password, password2 } = this.state;
    return (
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            classType="reg-input"
          />
          <Input
            placeholder="name"
            name="name"
            onChange={this.handleChange}
            value={name}
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
          <Input
            placeholder="verify password"
            type="password"
            name="password2"
            onChange={this.handleChange}
            value={password2}
            classType="reg-input"
          />
          <button type="submit">Sign Up!</button>
          <button type="button" onClick={this.props.toggle}>
            Log In!
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
  { registerUser }
)(Register);
