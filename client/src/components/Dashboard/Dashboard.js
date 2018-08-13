import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar/Calendar';
import ListView from './ListView/ListView';
import Navbar from './Navbar/Navbar';
import TabNav from './TabNav/TabNav';
import { getBills } from '../../actions/billActions';
import { logoutUser } from '../../actions/authActions';
import { getFullDataArray } from '../../utils/getFullData';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      data: [],
      loading: true,
      activeTab: 'Overview'
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
  changeTab = e => {
    this.setState({ activeTab: e.target.id });
  };
  logOut = () => {
    this.props.logoutUser();
    this.props.history.push('/');
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div>
          <Navbar logOut={this.logOut} />
          Loading...
        </div>
      );
    } else {
      return (
        <div>
          <Navbar logOut={this.logOut} />
          <TabNav
            active={this.state.activeTab}
            changeTab={e => this.changeTab(e)}
          />
          <ListView data={this.state.data} loading={this.state.loading} />
          <Calendar data={this.state.data} loading={this.state.loading} />
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  bills: state.bills
});
export default connect(
  mapStateToProps,
  { getBills, logoutUser }
)(Dashboard);
