// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// == Import

import './styles.scss';

// == Composant
const Project = ({
  fullName,
  react,
  redux,
  html,
  css,
  node,
  postegres,
  semantic,
  description,
  github,
  image,
  website,
  yarn,
  npm,
  vue,
  sass,
  nextjs,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);

  return (
    <div className="card">
      <div className="face1">
        <div className="content">
          <img className="picture" src={image} alt="aperçu du site" width="180px" height="120px" />
          <h3 data-aos="fade-up" className="face1__subtitle">{fullName}
            {react && (
            <img src={react} alt="react icon" width="40px" height="35px" />
            )}
            {vue && (
            <img src={vue} alt="vue icon" width="40px" height="35px" />
            )}
          </h3>
        </div>
      </div>
      <div className="face2">
        <div className="content">
          <div className="stack">
            <ul className="stack__icons">
              {react && (
              <li className="li__icon"> <img className="icon" src={react} alt={`${react}_icon`} width="40px" height="35px" /><br />react</li>
              )}
              <li className="li__icon">    <img className="icon" src={html} alt="html_icon" width="40px" height="35px" /><br />html5</li>
              {css && (
              <li className="li__icon"> <img className="icon" src={css} alt={`${css}_icon`} width="40px" height="35px" /><br />css</li>
              )}
              {node && (
              <li className="li__icon"> <img className="icon" src={node} alt={`${node}_icon`} width="40px" height="35px" /><br />NodeJS</li>
              )}
              {semantic && (
              <li className="li__icon"> <img className="icon" src={semantic} alt="semantic_icon" width="40px" height="35px" /><br />Semantic ui</li>
              )}
              {postegres && (
              <li className="li__icon"> <img className="icon" src={postegres} alt="postegres_icon" width="40px" height="35px" /><br />PostgreSQL</li>
              )}
              { redux && (
              <li className="li__icon">    <img className="icon" src={redux} alt="redux_icon" width="40px" height="35px" /><br />Redux</li>
              )}
              { yarn && (
              <li className="li__icon">    <img className="icon" src={yarn} alt="redux_icon" width="40px" height="35px" /><br />Yarn</li>
              )}
              { npm && (
              <li className="li__icon">    <img className="icon" src={npm} alt="redux_icon" width="40px" height="35px" /><br />Npm</li>
              )}
              { vue && (
              <li className="li__icon">    <img className="icon" src={vue} alt="redux_icon" width="40px" height="35px" /><br />Vue</li>
              )}
              { sass && (
              <li className="li__icon">    <img className="icon" src={sass} alt="redux_icon" width="40px" height="35px" /><br />sass</li>
              )}
              { nextjs && (
              <li className="li__icon">    <img className="icon" src={nextjs} alt="redux_icon" width="40px" height="35px" /><br />nextJs</li>
              )}
            </ul>
          </div>
          <p>{description}</p>
          <a className="button__github" href={github} label="github" alt={`redirection vers le github du projet ${fullName}`}><span className="sr-only"> Github</span> <Icon name="github" size="large" /></a>
          <a className="button__website" href={website} label="site_web" alt={`redirection vers le site internet du projet ${fullName}`}><span className="sr-only">Website</span> <Icon name="external alternate" size="large" /></a>
        </div>
      </div>
    </div>
  );
};

// == propTypes
Project.propTypes = ({
  fullName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
});

// == Export
export default Project;
