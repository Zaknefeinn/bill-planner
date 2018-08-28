import axios from 'axios';
import { GET_ACCOUNTS } from './types';

export const getAccounts = () => dispatch => {
  axios
    .get('/api/accounts')
    .then(res => {
      dispatch({
        type: GET_ACCOUNTS,
        payload: res.data.accounts
      });
    })
    .catch(err => console.log(err));
};

export const addAccount = accountData => dispatch => {
  axios
    .post('/api/accounts', accountData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
