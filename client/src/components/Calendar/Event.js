import React from 'react';

const Event = props => {
  const { date, data } = props;
  let container;
  data[date] === undefined
    ? (container = <div>Undefined</div>)
    : (container = <div>{data[date].description}</div>);
  return container;
};
export default Event;
