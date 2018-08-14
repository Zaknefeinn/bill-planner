const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  accounts: [
    {
      name: {
        type: String,
        require: true
      },
      balance: {
        type: Number,
        require: true
      }
    }
  ],
  bills: [
    {
      bill: {
        type: String,
        require: true
      },
      account: {
        type: String,
        require: true
      },
      amount: {
        type: Number,
        require: true
      },
      category: {
        type: String,
        require: true
      },
      description: {
        type: String,
        require: true
      },
      repeat: {
        type: String,
        require: false
      },
      startDate: {
        type: String,
        require: true
      },
      endDate: {
        type: String,
        require: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
