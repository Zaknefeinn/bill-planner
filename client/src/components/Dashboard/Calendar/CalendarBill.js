import React, { Component } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { deleteBill } from '../../../actions/billActions';
class CalendarBill extends Component {
  handleDelete = test => {
    const target = this.props.bills.filter(bill => bill.bill === test);
    if (target[0]._id !== undefined) {
      this.props.deleteBill(target[0]._id);
    }
  };
  render() {
    const { data, date } = this.props;
    return (
      <div className="CalendarBill">
        <div className="calendar-view-title">
          <h1>Bills for {Moment(date).format('MM/DD/YY')}</h1>
        </div>
        <div className="calendar-view-bill-container">
          {data.map(bill => {
            return (
              <div key={`${date}-${bill.bill}`}>
                <h1>{bill.bill}</h1>
                <h3>{bill.category}</h3>
                <h3>{bill.account.accountName}</h3>
                <h3>${bill.amount}</h3>
                <button onClick={e => this.handleDelete(bill.bill)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="calendar-view-bill-add">
          <button>Add Bill</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  bills: state.bills
});
export default connect(
  mapStateToProps,
  { deleteBill }
)(CalendarBill);
