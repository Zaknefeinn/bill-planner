import React from 'react';
import NewBill from './NewBill';
import CalendarBill from './CalendarBill';

const Event = props => {
  const { date, data } = props;
  let container;
  let billExists = [];

  data.map(bills => {
    // return bills.map(bill => {
    // bill[date] === undefined
    //   ? (container = (
    //       <div className="new-container">
    //         <NewBill date={date} />
    //       </div>
    //     ))
    //   : (container = <CalendarBill date={date} data={bill[date]} />);

    // if (bill[date] === undefined) {
    //   return (
    //     <div className="new-container">
    //       <NewBill date={date} />
    //     </div>
    //   );
    // } else {
    //    <CalendarBill date={date} data={bill[date]} />;
    // }
    // });
    // return container;
    const existingBill = bills.filter(bill => bill[date] !== undefined);
    if (existingBill.length > 0) {
      return billExists.push(existingBill[0]);
    } else {
      return null;
    }
  });
  billExists.length <= 0
    ? (container = (
        <div className="new-container">
          <NewBill date={date} />
        </div>
      ))
    : (container = <CalendarBill date={date} data={billExists} />);
  // console.log(test);

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
  return container;
  // console.log(container);
};
export default Event;
