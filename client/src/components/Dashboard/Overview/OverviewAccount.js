import React, { Component } from 'react';
import { connect } from 'react-redux';

class OverviewAccount extends Component {
  render() {
    return (
      <div className="ov-accounts ov-sub">
        <h3>Accounts</h3>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {this.props.accounts.map(account => {
              return (
                <tr key={account.accountName}>
                  <td>{account.accountName}</td>
                  <td>${account.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  accounts: state.accounts
});

export default connect(mapStateToProps)(OverviewAccount);
