import { FETCH_ITEMS_SUCCESS } from '../../actions/actionTypes';

const initialState = {
  items: [],
  favorites: [],
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};