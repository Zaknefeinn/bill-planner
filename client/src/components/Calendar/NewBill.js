import React, { Component } from 'react';

class NewBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'defaultCategory',
      account: 'defaultAccount'
    };
  }
  changeState = state => {
    this.setState({
      [state.target.name]: state.target.value
    });
  };
  render() {
    return (
      <form className="newBill">
        <h1>Add Bill</h1>
        <input className="reg-input" type="text" placeholder="Name" />
        <select
          className="reg-input two-input"
          name="category"
          value={this.state.category}
          onChange={this.changeState}
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
          onChange={this.changeState}
        >
          <option value="defaultAccount">-- select an account -- </option>
          <option value="create-account">Create new Account</option>
        </select>
        <input className="reg-input" type="number" placeholder="Description" />
        <div>
          <span>$</span>
          <input
            className="reg-input two-input"
            type="number"
            placeholder="Amount"
          />
          <input
            className="reg-input two-input"
            type="text"
            placeholder="date"
          />
        </div>
      </form>
    );
  }
}

export default NewBill;
