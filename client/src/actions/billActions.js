import axios from 'axios';
// import jwt_decode from 'jwt-decode';

export const addBill = billData => dispatch => {
  axios
    .post('/api/bills', billData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
