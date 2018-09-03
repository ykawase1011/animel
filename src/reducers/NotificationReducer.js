import * as actionTypes from '../utils/actionTypes';

const initialState = {
  isOpen: false,
  variant: 'success',
  message: '',
};

const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTIFICATION:
      return {
        ...state,
        isOpen: true,
        variant: action.variant,
        message: action.message,
      };
    case actionTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default NotificationReducer;