import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../../../actions/accountActions';
import classnames from 'classnames';
import Input from '../../common/Input';

class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: '',
      amount: 0
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { accountName, amount } = this.state;
    if (accountName.length !== 0) {
      const newAccount = {
        accountName,
        amount
      };
      this.props.addAccount(newAccount);
    } else {
      console.log('please enter an account');
    }
  };

  handleChange = state => {
    this.setState({
      [state.target.name]: state.target.value
    });
  };

  render() {
    const { accountName, amount } = this.state;
    const { show } = this.props;
    return (
      <div
        className={classnames('account-add-container', {
          'account-add-show': show
        })}
      >
        <form onSubmit={this.handleSubmit}>
          <div className="account-add-sub">
            <span>Account</span>
            <Input
              placeholder="Account Name"
              name="accountName"
              onChange={this.handleChange}
              value={accountName}
              classType="reg-input"
            />
          </div>
          <div className="account-add-sub">
            <span>Balance</span>
            <Input
              placeholder="Amount"
              name="amount"
              onChange={this.handleChange}
              value={amount}
              type="number"
              classType="reg-input"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addAccount }
)(AddAccount);
