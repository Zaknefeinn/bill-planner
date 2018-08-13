import React from 'react';
import classNames from 'classnames';
import './TabNav.css';

export default props => {
  return (
    <div className="TabNav">
      <div className="tabnav-container">
        <div
          className={classNames('tabnav-btn', {
            activeTab: props.active === 'Overview'
          })}
          id="Overview"
          onClick={props.changeTab}
        >
          Overview
        </div>
        <div
          className={classNames('tabnav-btn', {
            activeTab: props.active === 'List'
          })}
          id="List"
          onClick={props.changeTab}
        >
          List
        </div>
        <div
          className={classNames('tabnav-btn', {
            activeTab: props.active === 'Calendar'
          })}
          id="Calendar"
          onClick={props.changeTab}
        >
          Calendar
        </div>
        <div
          className={classNames('tabnav-btn', {
            activeTab: props.active === 'Accounts'
          })}
          id="Accounts"
          onClick={props.changeTab}
        >
          Accounts
        </div>
      </div>
    </div>
  );
};
