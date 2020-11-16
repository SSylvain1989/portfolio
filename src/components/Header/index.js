// == Import npm
import React from 'react';

// == Import

import './styles.scss';

// == Composant
const Header = () => (
  <div className="Header">
    <p>Sylvain Sigonnez web dev</p>
    <button type="button" className="Header__buttons">Projects</button>
    <button type="button" className="Header__buttons">About</button>
    <button type="button" className="Header__buttons">Contct</button>
  </div>
);

// == Export
export default Header;
