import React, { Component } from 'react';

import './TabNav.css';
export default class TabNav extends Component {
  render() {
    return (
      <div className="TabNav">
        <div className="tabnav-container">
          <div className="tabnav-btn">Overview</div>
          <div className="tabnav-btn">List</div>
          <div className="tabnav-btn">Calendar</div>
          <div className="tabnav-btn">Accounts</div>
        </div>
      </div>
    );
  }
}
