import React, { Component } from 'react';
import Input from '../../common/Input';
import { connect } from 'react-redux';
import { addBill } from '../../../actions/billActions';
class NewBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: '',
      category: 'defaultCategory',
      account: 'defaultAccount',
      description: '',
      amount: '',
      date: ''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { bill, category, account, description, amount, date } = this.state;
    const newBill = {
      bill,
      category,
      account,
      description,
      amount,
      date
    };
    this.props.addBill(newBill);
  };

  handleChange = state => {
    this.setState({
      [state.target.name]: state.target.value
    });
  };
  render() {
    const { bill, category, account, description, amount, date } = this.state;
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
          <option value="defaultCategory">-- select a category --</option>
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
          <option value="defaultAccount">-- select an account -- </option>
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
          <Input
            placeholder="date"
            name="date"
            onChange={this.handleChange}
            value={date}
            classType="reg-input two-input"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addBill }
)(NewBill);
