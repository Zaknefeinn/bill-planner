import React from 'react';
import NewBill from '../NewBill/NewBill';
import CalendarBill from './CalendarBill';

const Event = props => {
  const { date, data } = props;
  let container;
  let billExists = [];
  data.map(bills => {
    const existingBill = bills.filter(
      bill => bill.date.format() === date.format()
    );
    if (existingBill.length > 0) {
      return billExists.push(existingBill[0]);
    } else {
      return null;
    }
  });
  billExists.length <= 0
    ? (container = (
        <div className="new-container">
          <NewBill date={date} closeModal={props.closeModal} />
        </div>
      ))
    : (container = (
        <CalendarBill
          date={date}
          data={billExists}
          closeModal={props.closeModal}
        />
      ));

  return container;
};
export default Event;
