import React from 'react';

import './ListView.css';

export default props => {
  const newArray = [].concat(...props.data).sort();
  console.log(newArray);
  return (
    <div className="ListView">
      <div className="list-container">
        <div className="list-card">Test Card</div>
        <div className="list-card">Test Card</div>
        <div className="list-card">Test Card</div>
      </div>
    </div>
  );
};
