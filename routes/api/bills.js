const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const passport = require('passport');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const User = require('../../models/User');

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const {
      bill,
      category,
      account,
      description,
      amount,
      date,
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
          date,
          repeat
        };
        const billExists = user.bills.filter(
          current => current.bill === bill && current.date === date
        );
        if (billExists.length === 0) {
          user.bills.unshift(newBill);
          user.save().then(user => res.json(user));
        } else {
          res.json({ error: 'bill already exists' });
        }
      })
      .catch(err => console.log(err));
  }
);
module.exports = router;
