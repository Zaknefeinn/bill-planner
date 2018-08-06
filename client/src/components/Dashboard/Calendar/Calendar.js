import React, { Component } from 'react';
import CalendarModule from 'react-calendar';
import Event from './Event.js';
import { connect } from 'react-redux';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Modal from 'react-modal';
import './Calendar.css';
import { getBills } from '../../../actions/billActions';

const moment = extendMoment(Moment);

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
  componentWillReceiveProps(nextProps) {
    let billArr = [];
    if (nextProps.bills.bills.length > 0) {
      nextProps.bills.bills.map(bill => {
        const start = moment(bill.startDate, 'MM-DD-YYYY');
        const end = moment(start).add(2, 'years');
        const range = moment.range(start, end);
        let data;
        switch (bill.repeat) {
          case 'Weekly':
            data = Array.from(range.by('weeks')).map(date =>
              date.format('MM-DD-YYYY')
            );
            break;
          case 'Bi-Weekly':
            data = Array.from(range.by('weeks', { step: 2 })).map(date =>
              date.format('MM-DD-YYYY')
            );
            break;
          case 'Monthly':
            data = Array.from(range.by('months')).map(date =>
              date.format('MM-DD-YYYY')
            );
            break;
          default:
            data = [start.format('MM-DD-YYYY')];
            break;
        }
        return billArr.push(
          data.map(billDate => {
            return {
              [billDate]: {
                bill: bill.bill,
                account: bill.account,
                amount: bill.amount,
                category: bill.category,
                description: bill.description
              }
            };
          })
        );
      });
      //If data is fetching
      this.setState({ loading: false });
    }
    this.setState({ data: billArr });
  }
  componentDidMount() {
    this.props.getBills();
  }
  componendDidUpdate() {
    console.log(this.props.bills.bills);
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
    const { data } = this.state;
    const cellDate = Moment(date.date).format('MM-DD-YYYY');
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
    // console.log(this.state.bills);
    const { loading, data } = this.state;
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
            <Event
              date={Moment(this.state.date).format('MM-DD-YYYY')}
              data={data}
            />
          </Modal>
        </div>
      );
    }
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
