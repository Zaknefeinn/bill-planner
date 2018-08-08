import React from 'react';
import _ from 'lodash';
import Moment from 'moment';
import './ListView.css';

export default props => {
  const combinedArray = _.concat(...props.data);
  const result = _.sortBy(combinedArray, [
    function(o) {
      return new Date(o.date);
    }
  ]);

  return (
    <div className="ListView">
      <div className="list-container">
        {result.map(bill => {
          const date = Moment(bill.date).format('MM/DD/YY');
          return (
            <div className="list-card" key={`${bill.bill}-${date}-card`}>
              {bill.bill} - {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};
