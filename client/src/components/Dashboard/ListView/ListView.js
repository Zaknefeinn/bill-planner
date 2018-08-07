import React from 'react';

import './ListView.css';

export default props => {
  const combinedArray = []
    .concat(...props.data)
    .sort((a, b) => new Date(Object.keys(a)[0]) - new Date(Object.keys(b)[0]));

  return (
    <div className="ListView">
      <div className="list-container">
        <div className="list-card">Test Card</div>
        <div className="list-card">Test Card</div>
        <div className="list-card">Test Card</div>
        <div className="list-card">Test Card</div>
        <div className="list-card">Test Card</div>
        <div className="list-card">Test Card</div>
      </div>
    </div>
  );
};
