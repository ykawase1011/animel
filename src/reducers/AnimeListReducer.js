import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isFetching: false,
  items: []
};

const AnimeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIMES_REQUEST:
      return {
        ...state,
        isFetching: true,
        items: [],
      };
    case actionTypes.GET_ANIMES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    case actionTypes.GET_ANIMES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default AnimeListReducer;