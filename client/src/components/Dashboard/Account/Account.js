import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Account.css';
import AddAccount from './AddAccount.js';
import AccountList from './AccountList.js';
import classnames from 'classnames';
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    const { show } = this.state;
    return (
      <div className="Account">
        <div className="account-container">
          <div className="account-title">Accounts</div>
          <div
            className="account-add"
            onClick={() => this.setState({ show: !show })}
          >
            <span
              className={classnames(
                'fas',
                { 'fa-plus': !show },
                { 'fa-times': show }
              )}
            />
          </div>
          <AddAccount show={show} />
          <AccountList accounts={this.props.accounts} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  accounts: state.accounts
});
export default connect(mapStateToProps)(Account);
