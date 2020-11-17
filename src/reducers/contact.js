import {
  RESET_FIELDS,
  CHANGE_CONTACT_FIELD_VALUE,
} from '../actions/field';

export const initialState = {
  isLoged: false,
  contact: {
    email: '',
    message: '',
  },
};

const field = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_FIELD_VALUE:
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.name]: action.value,
        },
      };
    case RESET_FIELDS:
      return {
        ...state,
        contact: {
          email: '',
          message: '',
        },
      };
    default:
      return state;
  }
};

export default field;
