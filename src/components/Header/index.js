// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

// == Import

import './styles.scss';

// == Composant
const Header = () => (
  <div className="Header">
    <Button className="Header__buttons">Projects</Button>
    <Button className="Header__buttons">About</Button>
    <Button className="Header__buttons">Contact</Button>
  </div>
);

// == Export
export default Header;
