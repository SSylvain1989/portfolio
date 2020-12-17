// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';



// == Import

import './styles.scss';

// == Composant
const Footer = () => (
  <div>
  <div className="Footer">
    {/* <Icon name="github" size="large"/>
    <Icon name="linkedin" size="large"/> */}
    <div className="Footer__infos">
      <h1>Sylvain Sigonnez</h1>
      <p>sylvain.sigonnez@gmail.com</p>
      <p>06 08 88 77 72</p>
      <span className="Footer__copyright">Copyright © 2020 Sylvain Sigonnez - Tous droits réservés</span>
    </div>
    <div className="Footer__menu">
      <h2>MENU</h2>
<ul>
  <li>Accueil</li>
  <li>Projets</li>
  <li>À propos</li>
  <li>Contact</li>
</ul>
    </div>
    <div className="Footer__social">
      <h2>FOLLOW</h2>
    <ul className="Footer__icon">
                <li><a href="https://github.com/SSylvain1989" alt="github"><FaGithub className="Footer__social-icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/sylvain-sigonnez/" alt="linkedin"><FaLinkedin color="#0073B1" className="Footer__social-icon" /></a></li>
                <li><a href="https://twitter.com/_Sylvain_7" alt="twitter"><FaTwitter color="#1DA1F2" className="Footer__social-icon" /></a></li>
                <li><a href={`mailto:sylvain.sigonnez@gmail.com`} alt="email"><CgMail color="#EA4335" className="Footer__social-icon" /></a></li>
              </ul>
    </div>

  </div>
  </div>
);

// == Export
export default Footer;
