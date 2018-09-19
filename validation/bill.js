const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBillInput(data) {
  let errors = {};
  data.bill = !isEmpty(data.bill) ? data.bill : '';
  data.amount = !isEmpty(data.amount) ? data.amount : '';
  data.startDate = !isEmpty(data.startDate) ? data.startDate : '';

  if (Validator.isEmpty(data.bill)) {
    errors.bill = 'Please enter a valid name';
  }
  if (Validator.isEmpty(data.amount)) {
    errors.amount = 'Please enter a valid amount';
  }
  if (Validator.isEmpty(data.startDate)) {
    errors.startDate = 'Please enter a valid date';
  }
  if (Validator.equals(data.account, 'defaultAccount')) {
    errors.account = 'Please choose your account';
  }
  if (Validator.equals(data.category, 'defaultCategory')) {
    errors.category = 'Please pick a category';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
