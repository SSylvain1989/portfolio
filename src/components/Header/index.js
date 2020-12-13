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

        <Icon id="hamburger__menu__icon" name="list" size="big" onClick={menuClick} />
        {/* changement de la valeur fait en passant par la
        fonction menulClick ligne 20 qui déclenche
      handleMenuClick dans le container qui elle déclenche handleMenuDisplay dans le container
      de Header qui appel dans le HeaderMiddleware le valeur */}
        {showMenuBoolean === true && (
          <Menu vertical id="hamburger__menu">
            <Menu.Item>
              <Icon id="close__modal__icon" name="close" size="big" color="white" onClick={menuClick} />
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
            <Menu.Item>
              <p>Un projet ou un brin de causette ?</p><br/>
            <Link to="/" onClick={menuClick}> Sylvain.sigonnez </Link>
            </Menu.Item>
          </Menu>
        )}
            <Menu>
              <Menu.Item>
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

  );
};

// == Export
export default Header;
