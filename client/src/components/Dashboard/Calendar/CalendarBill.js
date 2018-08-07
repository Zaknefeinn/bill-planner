import React, { Component } from 'react';

class CalendarBill extends Component {
  render() {
    const { data, date } = this.props;
    return (
      <div className="CalendarBill">
        <div className="calendar-view-title">
          <h1>Bills for {date}</h1>
        </div>
        <div className="calendar-view-bill-container">
          {data.map(bill => {
            const currentBill = bill[date];
            return (
              <div key={`${date}-${currentBill.bill}`}>
                <h1>{currentBill.bill}</h1>
                <h3>{currentBill.category}</h3>
                <h3>{currentBill.account.accountName}</h3>
                <h3>${currentBill.amount}</h3>
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
