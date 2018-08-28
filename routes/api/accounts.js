const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../../models/User');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findOne({ _id: req.user.id }).then(user => {
      res.json(user);
    });
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { accountName, amount } = req.body;
    User.findOne({ _id: req.user.id })
      .then(user => {
        const newAccount = {
          accountName,
          amount
        };
        const accountExists = user.accounts.filter(
          current => current.accountName === accountName
        );
        if (accountExists.length === 0) {
          user.accounts.unshift(newAccount);
          user.save().then(user => res.json(user));
        } else {
          res.json({ error: 'account already exists' });
        }
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
