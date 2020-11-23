// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'semantic-ui-react';

// == Import

import './styles.scss';

// == Composant
const Landing = () => (
  <div className="Landing">

    <div className="Landing__container">
    <a href="/">SS</a>
      <div className="Landing__title">
      <p>SYLVAIN  SIGONNEZ</p>
      </div>
      <div className="Landing__text">
      <span>Je suis <strong>developpeur FullStack JS</strong><br/>
      Ma spécialité ...  <strong>React</strong> & <strong>Node</strong> ...</span>
      </div>
      <div className="Landing__scroll">
        <p>VOIR </p>
        <Icon name="angle double down" size="large"/>
      </div>
    </div>
  </div>
);

// == Export
export default Landing;
