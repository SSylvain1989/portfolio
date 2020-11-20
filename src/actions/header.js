export const HANDLE_MENU_DISPLAY = 'HANDLE_DISPLAY_MENU';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const handleMenuDisplay = () => ({
  type: HANDLE_MENU_DISPLAY,
});

export const toggleMenu = (showMenuBoolean) => ({
  type: TOGGLE_MENU,
  showMenuBoolean,
});
