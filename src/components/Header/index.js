// == Import npm
import React from 'react';
import { Link } from 'react-scroll';
import {
  Icon,
  Menu,

} from 'semantic-ui-react';
// permet de faire les encres de liens au clic
import PropTypes from 'prop-types';

// == Import
import 'aos/dist/aos.css';
import './styles.scss';
import logo from '../../images/cv.webp';

// == Composant
const Header = ({
  handleMenuClick, // Function gérant le Booléen représentant l'affichage du menu
  showMenuBoolean, // Booléen représentant l'affichage du menu
}) => {
  const menuClick = () => {
    handleMenuClick();
  };

  return (
    <div className="header" id="header">
      <Icon id="hamburger__menu__icon" name="bars" size="big" onClick={menuClick} />
      {/* changement de la valeur fait en passant par la
        fonction menulClick ligne 20 qui déclenche
      handleMenuClick dans le container qui elle déclenche
       handleMenuDisplay dans le container
      de Header qui appel dans le HeaderMiddleware le valeur */}
      {showMenuBoolean === true && (
      <Menu vertical id="hamburger__menu">
        <Menu.Item>
          <Link
            to="Projects"
            spy
            smooth
            offset={0}
            duration={800}
            onClick={menuClick}
          > Projets
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="about"
            spy
            smooth
            offset={0}
            duration={800}
            onClick={menuClick}
          > à propos
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="about"
            spy
            smooth
            offset={0}
            duration={800}
            onClick={menuClick}
          > compétences
          </Link>
        </Menu.Item>
        <Menu.Item>
          <p>Un projet ou un brin de causette ?</p><br />
          <a href="mailto:sylvain.sigonnez@gmail.com" className="hamburger__contact">sylvain.sigonnez@gmail.com<br /></a>
          <a href="tel:+33608887772" className="hamburger__contact">+33 6 08 88 77 72</a>
        </Menu.Item>
      </Menu>
      )}
      <Link
        to="landing"
        spy
        smooth
        offset={0}
        duration={800}
      ><img loading="lazy" className="header__img" src={logo} alt="home__logo" width="80px" height="100px" />
        <h1><strong>Sylvain  SIGONNEZ</strong></h1>
      </Link>
      <Menu id="navbar_menu">
        <Menu.Item>
          <Link
            to="Projects"
            spy
            smooth
            offset={0}
            duration={800}
          > Projets
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="about"
            spy
            smooth
            offset={0}
            duration={800}
          > à propos
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to="about"
            spy
            smooth
            offset={0}
            duration={800}
          > compétences
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

Header.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  showMenuBoolean: PropTypes.bool.isRequired,
};

// == Export
export default Header;
