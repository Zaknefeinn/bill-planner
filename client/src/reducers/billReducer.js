import { GET_BILLS } from '../actions/types';

// const initialState = {
//   bills: {}
// };

export default (state = [], action) => {
  switch (action.type) {
    case GET_BILLS:
      return action.payload.map(a => {
        //turn amount into a 2 decimal monetary value
        return { ...a, amount: a.amount.toFixed(2) };
      });

    default:
      return state;
  }
};
