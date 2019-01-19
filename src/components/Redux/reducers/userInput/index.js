import { USER_TYPES } from '../../actions/actionType';

const initialState = 'Hello Redux';

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES:
      return action.payload;
    default:
      return state;
  }
};