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
      date: {
        type: String,
        require: true
      },
      description: {
        type: String,
        require: true
      },
      repeat: {
        type: Boolean,
        require: true
      },
      repeatTime: {
        type: Number,
        require: false
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
