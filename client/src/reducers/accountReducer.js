import { GET_ACCOUNTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return action.payload.map(a => {
        //turn amount into a 2 decimal monetary value
        return { ...a, amount: a.amount.toFixed(2) };
      });

    default:
      return state;
  }
};
