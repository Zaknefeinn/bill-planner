import React, { Component } from 'react';
import './Account.css';

class Account extends Component {
  render() {
    return (
      <div className="Account">
        <div className="account-container">
          <div className="account-title">Accounts</div>
          <table className="account-list">
            <tr>
              <th>Account Name</th>
              <th>Balance</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Account;
