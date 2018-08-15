import React, { Component } from 'react';
import './Account.css';

class Account extends Component {
  render() {
    return (
      <div className="Account">
        <div className="account-container">
          <div className="account-title">Accounts</div>
          <div className="account-add">
            <span className="fas fa-plus" />
          </div>
          <div className="account-add-container">
            <div className="account-add-sub">
              <span>Account</span>
              <input type="text" />
            </div>
            <div className="account-add-sub">
              <span>Balance</span>
              <input type="text" />
            </div>
          </div>
          <table className="account-list">
            <thead>
              <tr>
                <th>Account Name</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arvest</td>
                <td>$1205</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Account;
