import React, { Component } from 'react';
import CalendarModule from 'react-calendar';
import Event from './Event.js';
import { connect } from 'react-redux';
import moment from 'moment';
import Modal from 'react-modal';
import './Calendar.css';
import { getBills } from '../../../actions/billActions';

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

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      date: new Date()
    };
  }
  componentDidMount() {
    this.props.getBills();
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
    this.openModal();
    this.setState({ date });
  };
  calendarSummary = date => {
    const data = this.props.bills.bills;
    if (data.length > 0) {
      const cellDate = moment(date.date).format('MM-DD-YYYY');
      console.log(data);

      // const existingBill = data.filter(bill => bill.startDate === cellDate);
      // if (existingBill.length > 0) {
      //   return (
      //     <div>
      //       {existingBill.map((bill, index) => {
      //         return (
      //           <div key={`${bill.bill}-${index}`} className="summary">
      //             {bill.bill}
      //           </div>
      //         );
      //       })}
      //     </div>
      //   );
      // }
    }
  };

  render() {
    const data = this.props.bills.bills;
    return (
      <div>
        <CalendarModule
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
const mapStateToProps = state => ({
  auth: state.auth,
  bills: state.bills
});

export default connect(
  mapStateToProps,
  { getBills }
)(Calendar);
