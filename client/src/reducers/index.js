import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import billReducer from './billReducer';
import accountReducer from './accountReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  bills: billReducer,
  accounts: accountReducer
});
