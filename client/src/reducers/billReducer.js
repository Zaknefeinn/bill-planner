import { ADD_BILL } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      return action.payload;
    default:
      return state;
  }
};
