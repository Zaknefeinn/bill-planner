import React, { Component } from 'react';

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
  };

  handleChange = state => {
    this.setState({
      [state.target.name]: state.target.value
    });
  };
  render() {
    return (
      <form className="newBill" onSubmit={this.handleSubmit}>
        <h1>Add Bill</h1>
        <input
          className="reg-input"
          type="text"
          name="bill"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <select
          className="reg-input two-input"
          name="category"
          value={this.state.category}
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
          value={this.state.account}
          onChange={this.handleChange}
        >
          <option value="defaultAccount">-- select an account -- </option>
          <option value="create-account">Create new Account</option>
        </select>
        <input
          className="reg-input"
          name="description"
          type="text"
          placeholder="Description"
          onChange={this.handleChange}
        />
        <div>
          <span>$</span>
          <input
            className="reg-input two-input"
            type="number"
            placeholder="Amount"
            name="amount"
            onChange={this.handleChange}
          />
          <input
            className="reg-input two-input"
            type="text"
            placeholder="date"
            name="date"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewBill;
