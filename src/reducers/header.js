import { TOGGLE_MENU } from '../actions/header';

export const initialState = {
  showMenuBoolean: false,
};

const headerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        showMenuBoolean: action.showMenuBoolean,
      };
    default:
      return state;
  }
};

export default headerReducer;
