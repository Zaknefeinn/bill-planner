import React from 'react';
import _ from 'lodash';
import Moment from 'moment';
import './ListView.css';

export default props => {
  // console.log(props);
  // const combinedArray = [].concat(...props.data)._.sortBy(combinedArray, [
  //   function(o) {
  //     return new Date(o.date);
  //   }
  // ]);
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
          return (
            <div className="list-card">
              {bill.bill} - {Moment(bill.date).format('MM/DD/YY')}
            </div>
          );
        })}
      </div>
    </div>
  );
};
