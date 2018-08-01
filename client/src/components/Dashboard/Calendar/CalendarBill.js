import React, { Component } from 'react';
import moment from 'moment';
class CalendarBill extends Component {
  render() {
    const { data, date } = this.props;
    // const date = moment(this.props.date, 'MM-DD-YYYY')._d;
    console.log(data);
    return (
      <div className="CalendarBill">
        <div className="calendar-view-title">
          <h1>Bills for {date}</h1>
        </div>
        <div className="calendar-view-bill-container">
          {data.map(bill => {
            return (
              <div key={`${date}-${bill.bill}`}>
                <h1>{bill.bill}</h1>
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
