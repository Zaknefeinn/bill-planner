import React from 'react';

export default props => {
  return (
    <table className="account-list">
      <thead>
        <tr>
          <th>Account Name</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {props.accounts.accounts.map(account => {
          return (
            <tr key={account.accountName}>
              <td>{account.accountName}</td>
              <td>{account.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
