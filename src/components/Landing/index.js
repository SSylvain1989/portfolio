// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';


// == Import

import './styles.scss';

// == Composant
const Landing = () => (
  <div className="Landing">

    <div className="Landing__container">
    {/* <Link className="Landing__logo"></Link> */}
      <div className="Landing__title">
      <p>SYLVAIN  SIGONNEZ</p>
      </div>
      <div className="Landing__text">
      <span>Je suis <strong>developpeur FullStack JS</strong><br/>
      Ma spécialité ...  <strong>React</strong> & <strong>Node</strong> ...</span>
      </div>
      <Link to="/#Projects" className="Landing__scroll" >
      <p>MES PROJETS</p>
        <Icon name="angle double down" size="large"/>
      </Link>
    </div>
  </div>
);

// == Export
export default Landing;
