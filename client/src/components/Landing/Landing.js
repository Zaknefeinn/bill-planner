import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

import './Landing.css';
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }

  toggleDisplay = () => {
    this.setState({
      login: !this.state.login
    });
  };

  componentDidUpdate() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/manage');
    }
  }
  render() {
    const { login } = this.state;
    let container;
    login
      ? (container = <Login toggle={this.toggleDisplay} />)
      : (container = <Register toggle={this.toggleDisplay} />);
    return (
      <div className="Landing">
        <div className="landing-container">{container}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Landing);
