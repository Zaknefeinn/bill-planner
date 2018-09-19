const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const validateBillInput = require('../../validation/bill');
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBillInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const {
      bill,
      category,
      account,
      description,
      amount,
      startDate,
      repeat
    } = req.body;
    User.findOne({ _id: req.user.id })
      .then(user => {
        const newBill = {
          bill,
          category,
          account,
          description,
          amount,
          startDate,
          repeat
        };
        const billExists = user.bills.filter(current => current.bill === bill);
        if (billExists.length === 0) {
          user.bills.unshift(newBill);
          user.save().then(user => res.json(user));
        } else {
          return res.status(400).json({ bill: 'Bill already exists' });
        }
      })
      .catch(err => console.log(err));
  }
);

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOne({ _id: req.user.id }).then(user => {
      res.json(user);
    });
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOne({ _id: req.user.id })
      .then(user => {
        if (
          user.bills.filter(bill => req.params.id === bill._id.toString())
            .length === 0
        ) {
          return res.status(404).json({ error: 'bill does not exist' });
        }
        const removeIndex = user.bills
          .map(bill => bill._id.toString())
          .indexOf(req.params.id);
        user.bills.splice(removeIndex, 1);

        user.save().then(bill => res.json(bill));
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
