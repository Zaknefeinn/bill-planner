import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar/Calendar';
import ListView from './ListView/ListView';
import { logoutUser } from '../../actions/authActions';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { getBills } from '../../actions/billActions';
import { getFullDataArray } from '../../utils/getFullData';
const moment = extendMoment(Moment);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      data: [],
      loading: true
    };
  }
  componentWillReceiveProps(nextProps) {
    let billArr = [];
    if (nextProps.bills.bills.length > 0) {
      billArr = getFullDataArray(nextProps);
      //If data is fetching
      this.setState({ loading: false });
    }
    this.setState({ data: billArr });
  }
  componentDidMount() {
    this.props.getBills();
  }
  logOut = () => {
    this.props.logoutUser();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <button onClick={this.logOut}>Log Out</button>
        <ListView data={this.state.data} loading={this.state.loading} />
        <Calendar data={this.state.data} loading={this.state.loading} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  bills: state.bills
});
export default connect(
  mapStateToProps,
  { logoutUser, getBills }
)(Dashboard);
