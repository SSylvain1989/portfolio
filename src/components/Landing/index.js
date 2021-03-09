// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-scroll';
import Aos from 'aos';

// == Import

import './styles.scss';

// == Composant
const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 2200 });
  }, []);

  return (
    <div data-aos="fade-left" className="Landing" id="landing">
      <div className="Landing__container">
        <div className="Landing__title" />
        <div className="Landing__text" id="Landing__animation">
          <div className="Landing__h2">
            <h2>Je<br /> suis<br /><strong>développeur</strong><br /><span className="Landing__rotate" /><br /></h2>
          </div>
          <p>Ma spécialité : <strong>React</strong> & <strong>Node</strong>.</p>
        </div>
        <Link
          to="Projects"
          spy
          smooth
          offset={0}
          duration={800}
          className="Landing__scroll"
          alt="scroll vers projets"
        ><span className="sr-only">Scroll vers mes projets</span>
          <p className="Landing__footer">MES PROJETS</p>
          <Icon id="icon" name="angle double down" size="large" />
        </Link>
      </div>
    </div>
  );
};

// == Export
export default Landing;
