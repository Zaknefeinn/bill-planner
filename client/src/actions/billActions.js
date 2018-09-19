import axios from 'axios';
import { GET_BILLS, GET_ERRORS } from './types';

import { getAuthToken } from '../utils/getAuthToken';
axios.defaults.headers.common['Authorization'] = getAuthToken();

export const addBill = billData => dispatch => {
  axios
    .post('/api/bills', billData)
    .then(res =>
      dispatch({
        type: GET_BILLS,
        payload: res.data.bills
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getBills = () => dispatch => {
  axios
    .get('/api/bills')
    .then(res => {
      dispatch({
        type: GET_BILLS,
        payload: res.data.bills
      });
      // console.log(res.data.bills);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const deleteBill = id => dispatch => {
  axios
    .delete(`/api/bills/${id}`)
    .then(res =>
      dispatch({
        type: GET_BILLS,
        payload: res.data.bills
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
