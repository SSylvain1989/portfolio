// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './styles.scss';

// == Composant
const Header = () => (
  <div className="Header">
    <button type="button" className="Header__buttons">Projects</button>
    <button type="button" className="Header__buttons">About</button>
    <button type="button" className="Header__buttons">Contct</button>
  </div>
);

// == Export
export default Header;
