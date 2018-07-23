import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Event from './Event.js';

import moment from 'moment';
import Modal from 'react-modal';

const customStyles = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    minHeight: '10rem',
    left: '50%',
    display: 'flex',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '60rem'
  },
  overlay: {
    backgroundColor: 'rgba(76, 76, 73,0.75)'
  }
};
Modal.setAppElement('#root');

const data = {
  '07-24-2018': {
    description:
      ' Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test'
  },
  '08-13-2018': {
    description:
      'asdasdkjha asdahskdjhas kjhasdkjashkld jsdkashdljahlskjdhalsjdhal'
  }
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
    const cellDate = moment(date).format('MM-DD-YYYY');
    this.openModal();
    this.setState({ date });
  };
  calendarSummary = date => {
    // const test = Moment('07-24-2018', 'MM-DD-YYYY');
    const cellDate = moment(date.date).format('MM-DD-YYYY');
    if (data[cellDate]) {
      return (
        <div className="summary">{`${data[cellDate].description.substr(
          0,
          20
        )}...`}</div>
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
