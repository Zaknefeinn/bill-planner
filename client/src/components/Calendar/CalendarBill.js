import React, { Component } from 'react';
import moment from 'moment';
class CalendarBill extends Component {
  render() {
    const { data } = this.props;
    const date = moment(this.props.date, 'MM-DD-YYYY')._d;
    return (
      <div className="CalendarBill">
        <div className="calendar-view-title">
          <h1>Bills for {moment(date).format('MMM Do YYYY')}</h1>
        </div>
        <div className="calendar-view-bill-container">
          {data.map(bill => {
            return (
              <div key={`${date}-${bill.name}`}>
                <h1>{bill.name}</h1>
                <h3>{bill.category}</h3>
                <h3>{bill.account.accountName}</h3>
                <h3>${bill.amount}</h3>
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
export default CalendarBill;
