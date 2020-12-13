// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

// == Import

import './styles.scss';

// == Composant
const Footer = () => (
  <div className="Footer">
    <Icon name="github" size="large"/>
    <Icon name="linkedin" size="large"/>
  </div>
);

// == Export
export default Footer;
