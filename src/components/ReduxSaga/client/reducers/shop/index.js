import {
  ADD_TO_FAVORITES_SUCCESS,
  FETCH_ITEMS_SUCCESS
} from '../../actions/actionTypes';

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
    case ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: [...state.favorites].concat(action.item)
      };
    default:
      return state;
  }
};