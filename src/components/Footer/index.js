// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { HashLink } from 'react-router-hash-link';

// == Import

import './styles.scss';

// == Composant
const Footer = () => (
  <div>
    <div className="Footer">
      <div className="Footer__infos">
        <h1>Sylvain Sigonnez</h1>
        <a href="mailto:sylvain.sigonnez@gmail.com">sylvain.sigonnez@gmail.com</a>
        <a href="tel:+33608887772">06 08 88 77 72</a>
        <span className="Footer__copyright">Copyright © 2020 Sylvain Sigonnez - Tous droits réservés</span>
      </div>
      <div className="Footer__menu">
        <h2>MENU</h2>
        <ul className="Footer__link">
          <li className="Footer__link-a"><HashLink to="/#landing">Accueil</HashLink></li>
          <li className="Footer__link-a"><HashLink to="/#Projects">Projets</HashLink></li>
          <li className="Footer__link-a"><HashLink to="/#about">À propos</HashLink></li>
          <li className="Footer__link-a"><HashLink to="/#about">Contact</HashLink></li>
        </ul>
      </div>
      <div className="Footer__social">
        <h2>SOCIAL</h2>
        <ul className="Footer__icon">
          <li><a href="https://github.com/SSylvain1989" alt="github"><FaGithub className="Footer__social-icon" /><span className="sr-only">Github</span> </a></li>
          <li><a href="https://www.linkedin.com/in/sylvain-sigonnez/" alt="linkedin"><FaLinkedin color="#0073B1" className="Footer__social-icon" /><span className="sr-only">Linkedin</span></a></li>
          <li><a href="https://twitter.com/_Sylvain_7" alt="twitter"><FaTwitter color="#1DA1F2" className="Footer__social-icon" /><span className="sr-only">Twitter</span></a></li>
          <li><a href="mailto:sylvain.sigonnez@gmail.com" alt="email"><CgMail color="#EA4335" className="Footer__social-icon" /><span className="sr-only">Gmail</span></a></li>
        </ul>
      </div>
    </div>
  </div>
);

// == Export
export default Footer;
