import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

class OverviewTransactions extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ov-upcoming ov-sub">
        <h3>Upcoming Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Category</th>
              <th>Account</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            {data.map(bill => {
              const date = Moment(bill.date).format('MM/DD/YY');
              return (
                <tr className="list-card" key={`${bill.bill}-${date}-card`}>
                  <td>
                    <strong>{bill.bill}</strong>
                  </td>
                  <td>{date}</td>
                  <td>{bill.category}</td>
                  <td>{bill.account}</td>
                  <td>${bill.amount}</td>
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
  bills: state.bills
});
export default connect(mapStateToProps)(OverviewTransactions);
