// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

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
}) => (
  <div className="card">
    <div className="face1">
      <div className="content">
        <img className="picture" src={image} alt="hero" width="180px" height="120px" />
        <h3 className="face1__subtitle">{fullName}</h3>
      </div>
    </div>
    <div className="face2">
      <div className="content">
        <div className="stack">
          <ul className="stack__icons">
            <li className="li__icon">    <img className="icon" src={react} alt="react_icon" /><br />react</li>
            <li className="li__icon">    <img className="icon" src={html} alt="html_icon" /><br />html5</li>
            <li className="li__icon">    <img className="icon" src={css} alt="css_icon" /><br />css3</li>
            {node && (
            <li className="li__icon"> <img className="icon" src={node} alt={`${node}_icon`} width="40px" height="40px" /><br />NodeJS</li>
            )}
            {semantic && (
            <li className="li__icon"> <img className="icon" src={semantic} alt="semantic_icon" width="40px" height="40px" /><br />Semantic ui</li>
            )}
            {postegres && (
            <li className="li__icon"> <img className="icon" src={postegres} alt="postegres_icon" width="40px" height="40px" /><br />PostgreSQL</li>
            )}
            { redux && (
            <li className="li__icon">    <img className="icon" src={redux} alt="redux_icon" width="40px" height="40px" /><br />Redux</li>
            )}
            { yarn && (
            <li className="li__icon">    <img className="icon" src={yarn} alt="redux_icon" width="40px" height="40px" /><br />Yarn</li>
            )}
            { npm && (
            <li className="li__icon">    <img className="icon" src={npm} alt="redux_icon" width="40px" height="40px" /><br />Npm</li>
            )}
          </ul>
        </div>
        <p>{description}</p>
        <a className="button__github" href={github} label="github" alt={`redirection vers le github du projet ${fullName}`}><span  className="sr-only"> Github</span> <Icon name="github" size="large" /></a>
        <a className="button__website" href={website} label="site_web"  alt={`redirection vers le site internet du projet ${fullName}`}><span  className="sr-only">Website</span> <Icon name="external alternate" size="large" /></a>
      </div>
    </div>
    
  </div>
);

// == propTypes
Project.propTypes = ({
  fullName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
});

// == Export
export default Project;
