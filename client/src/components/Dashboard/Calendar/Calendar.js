import React, { Component } from 'react';
import CalendarModule from 'react-calendar';
import Event from './Event.js';
import Moment from 'moment';
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

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      date: new Date(),
      data: [],
      loading: true
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
    this.openModal();
    this.setState({ date });
  };
  calendarSummary = date => {
    const { data } = this.props;
    const cellDate = Moment(date.date);
    return data.map(bill => {
      return bill.map((reOccurance, index) => {
        if (reOccurance[cellDate]) {
          const repeatBill = reOccurance[cellDate];
          return (
            <div key={`${repeatBill.bill}-${index}-parent`}>
              <div key={`${repeatBill.bill}-${index}`} className="summary">
                {repeatBill.bill}
              </div>
            </div>
          );
        } else {
          return null;
        }
      });
    });
  };

  render() {
    const { loading, data } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    } else {
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
            <Event date={Moment(this.state.date)} data={data} />
          </Modal>
        </div>
      );
    }
  }
}
// const mapStateToProps = state => ({
//   auth: state.auth,
//   bills: state.bills
// });

// export default connect(
//   mapStateToProps,
//   { getBills }
// )(Calendar);
export default Calendar;
