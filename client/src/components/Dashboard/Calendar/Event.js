import React from 'react';
import NewBill from './NewBill';
import CalendarBill from './CalendarBill';

const Event = props => {
  const { date, data } = props;
  let container;
  data[date] === undefined
    ? (container = (
        <div className="new-container">
          <NewBill date={date} />
        </div>
      ))
    : (container = <CalendarBill date={date} data={data[date]} />);
  return container;
};
export default Event;
