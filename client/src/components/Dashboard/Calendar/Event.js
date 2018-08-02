import React from 'react';
import NewBill from './NewBill';
import CalendarBill from './CalendarBill';
import moment from 'moment';

const Event = props => {
  const { date, data } = props;
  let container;
  // const existingBill = data.filter(bill => bill.date === date);
  // const existingBill = data.filter(bill =>
  //   bill.map(repeatBill => {
  //     if (repeatBill[date]) {
  //       repeatBill[date]
  //     }
  //   })
  // );
  // console.log(existingBill);
  // existingBill.length <= 0
  //   ? (container = (
  //       <div className="new-container">
  //         <NewBill date={date} />
  //       </div>
  //     ))
  //   : (container = <CalendarBill date={date} data={existingBill} />);
  // return container;
};
export default Event;
