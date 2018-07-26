import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar/Calendar';
import ListView from './ListView/ListView';
import { logoutUser } from '../../actions/authActions';

class Dashboard extends Component {
  logOut = () => {
    this.props.logoutUser();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <button onClick={this.logOut}>Log Out</button>
        <ListView />
        <Calendar />
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
)(Dashboard);
