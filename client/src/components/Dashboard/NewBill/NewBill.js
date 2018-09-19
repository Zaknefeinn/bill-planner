import React, { Component } from 'react';
import Input from '../../common/Input';
import { connect } from 'react-redux';
import { addBill } from '../../../actions/billActions';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
class NewBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: '',
      category: 'defaultCategory',
      account: 'defaultAccount',
      description: '',
      amount: '',
      date: moment(),
      repeat: 'noRepeat',
      errors: {}
    };
  }
  componentDidMount() {
    const selectedDate = moment(this.props.date, 'MM-DD-YYYY');
    this.setState({
      date: selectedDate
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    const { bill, category, account, description, amount, repeat } = this.state;
    const date = moment(this.state.date);
    const newBill = {
      bill,
      category,
      account,
      description,
      amount,
      repeat,
      startDate: date
    };
    this.props.addBill(newBill).then(() => console.log('hit'));
  };

  handleChange = state => {
    this.setState({
      [state.target.name]: state.target.value
    });
  };
  changeDate = date => {
    this.setState({
      date
    });
  };
  render() {
    const { bill, category, account, description, amount, repeat } = this.state;
    return (
      <form className="newBill" onSubmit={this.handleSubmit}>
        <h1>Add Bill</h1>
        <Input
          placeholder="Name"
          name="bill"
          onChange={this.handleChange}
          value={bill}
          classType="reg-input"
        />
        <select
          className="reg-input two-input"
          name="category"
          value={category}
          onChange={this.handleChange}
        >
          <option value="defaultCategory"> -- select a category -- </option>
          <option value="mortgage">Mortgage</option>
          <option value="utilities">utilities</option>
          <option value="other">other</option>
        </select>
        <select
          className="reg-input two-input"
          name="account"
          value={account}
          onChange={this.handleChange}
        >
          <option value="defaultAccount"> -- select an account -- </option>
          {this.props.accounts.map(account => (
            <option
              key={`${account.accountName}-accountKey`}
              value={account.accountName}
            >
              {account.accountName}
            </option>
          ))}
          <option value="create-account">Create new Account</option>
        </select>

        <Input
          placeholder="Description"
          name="description"
          onChange={this.handleChange}
          value={description}
          classType="reg-input"
        />
        <div>
          <span>$</span>
          <Input
            placeholder="Amount"
            name="amount"
            onChange={this.handleChange}
            value={amount}
            type="number"
            classType="reg-input two-input"
          />
          <div className="reg-input two-input">
            {' '}
            <DatePicker selected={this.state.date} onChange={this.changeDate} />
          </div>
        </div>
        <select
          className="reg-input two-input"
          name="repeat"
          value={repeat}
          onChange={this.handleChange}
        >
          <option value="noRepeat">-- Do Not Repeat --</option>
          <option value="Weekly">Weekly</option>
          <option value="Bi-Weekly">Bi-Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  accounts: state.accounts,
  errors: state.errors,
  bills: state.bills
});

export default connect(
  mapStateToProps,
  { addBill }
)(NewBill);
