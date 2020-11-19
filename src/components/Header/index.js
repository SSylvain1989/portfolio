// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import

import './styles.scss';

// == Composant
const Header = () => (
  <div className="Header">
    <p>Sylvain Sigonnez web dev</p>
    <button type="button" className="Header__buttons">Projects</button>
    <button type="button" className="Header__buttons">About</button>
    <Link to="/Contact">  <button type="button" className="Header__buttons">Contact</button></Link>
  
  </div>
);

// == Export
export default Header;
