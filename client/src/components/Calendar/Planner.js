import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Event from './Event.js';

import moment from 'moment';
import Modal from 'react-modal';
import './Calendar.css';

const customStyles = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    left: '50%',
    display: 'flex',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '500px',
    height: '600px'
  },
  overlay: {
    backgroundColor: 'rgba(76, 76, 73,0.75)'
  }
};
Modal.setAppElement('#root');

const data = {
  '07-24-2018': [
    {
      name: 'Test Name',
      category: 'Test Category',
      account: { accountName: 'Test Account', accountBalance: 1234 },
      description:
        ' Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test',
      amount: 342
    },
    {
      name: 'Test Name2',
      category: 'Test Category2',
      account: { accountName: 'Test Account2', accountBalance: 1234 },
      description:
        ' 22222Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test',
      amount: 3422
    }
  ],
  '08-13-2018': [
    {
      name: 'Test Name',
      category: 'Test Category',
      account: { accountName: 'Test Account', accountBalance: 5542 },
      description:
        ' Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test',
      amount: 342
    }
  ]
};

export default class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      date: new Date()
    };
  }
  openModal = () => {
    this.setState({
      modalIsOpen: true,
      errors: {}
    });
  };
  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };
  onChange = date => {
    // const cellDate = moment(date).format('MM-DD-YYYY');
    this.openModal();
    this.setState({ date });
  };
  calendarSummary = date => {
    const cellDate = moment(date.date).format('MM-DD-YYYY');
    if (data[cellDate]) {
      return (
        <div>
          {data[cellDate].map((bill, index) => {
            return (
              <div key={`${bill.name}-${index}`} className="summary">
                {bill.name}
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          tileContent={this.calendarSummary}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Event
            date={moment(this.state.date).format('MM-DD-YYYY')}
            data={data}
          />
        </Modal>
      </div>
    );
  }
}
