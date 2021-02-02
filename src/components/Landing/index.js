// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';


// == Import

import './styles.scss';

// == Composant
const Landing = () => (
  <div className="Landing" id="landing">

    <div className="Landing__container">
      <div className="Landing__title" >
      
      </div>
      <div className="Landing__text" id="Landing__animation">
      <h2>Je<br/> suis<br/><strong >développeur</strong><br/><span className="Landing__rotate"></span><br/></h2>
      <p>Ma spécialité : <strong>React</strong> & <strong>Node</strong>.</p>
      </div>
      <HashLink to="/#Projects" className="Landing__scroll" >
      <p className="Landing__footer">MES PROJETS</p>
        <Icon id="icon" name="angle double down" size="large"/>
      </HashLink>
    </div>
  </div>
);

// == Export
export default Landing;
