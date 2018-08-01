import { ADD_BILL, GET_BILLS } from '../actions/types';

const initialState = {
  bills: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BILLS:
      return {
        ...state,
        bills: action.payload
      };
    default:
      return state;
  }
};
