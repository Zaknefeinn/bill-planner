import { GET_ACCOUNTS } from '../actions/types';

const initialState = {
  accounts: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload
      };
    default:
      return state;
  }
};
