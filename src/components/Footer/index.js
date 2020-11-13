// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

// == Import

import './styles.scss';

// == Composant
const Footer = () => (
  <div className="Footer">
    <Button variant="contained">Footer</Button>
    <p>je suis dans le composant Footer</p>
  </div>
);

// == Export
export default Footer;
