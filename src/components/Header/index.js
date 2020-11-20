// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icon,
  Menu,

} from 'semantic-ui-react';

// == Import

import './styles.scss';

// == Composant
const Header = ({
  handleMenuClick, // Function gérant le Booléen représentant l'affichage du menu
  showMenuBoolean, // Booléen représentant l'affichage du menu
}) => {
  const menuClick = () => {
    handleMenuClick();
  };
  return (
    <div className="header">
      <div className="header__content">
        <Icon id="hamburger__menu__icon" name="list" size="huge" onClick={menuClick} />
        {/* changement de la valeur fait en passant par la
        fonction menulClick ligne 15 qui déclenche
      handleMenuClick dans le container qui elle déclenche handleMenuDisplay dans le container
      de Header qui appel dans le HeaderMiddleware le valeur */}
        {showMenuBoolean === true && (
        <div className="hamburger__menu__container">
          <Menu inverted vertical id="hamburger__menu">
            <Menu.Item>
              {/* pourquoi menu.item */}
              <Icon id="close__modal__icon" name="close" size="big" color="red" onClick={menuClick} />
            </Menu.Item>
            <Menu.Item>
              <Link to="/" onClick={menuClick}> Projects </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/" onClick={menuClick}> About </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/" onClick={menuClick}> Contact </Link>
            </Menu.Item>
          </Menu>
        </div>
        )}
      </div>
    </div>
  );
};

// == Export
export default Header;
