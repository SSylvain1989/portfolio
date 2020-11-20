/* eslint-disable no-case-declarations */
import {
  HANDLE_MENU_DISPLAY,
  toggleMenu,
} from '../actions/header';

const headerMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case HANDLE_MENU_DISPLAY:
      let { showMenuBoolean } = state.header;
      console.log('je suis là dans le headerMiddleware');
      console.log(showMenuBoolean);
      console.log(state.header);
      showMenuBoolean = !showMenuBoolean;
      store.dispatch(toggleMenu(showMenuBoolean));
      break;
    default:
      next(action);
      break;
  }
};

export default headerMiddleware;
