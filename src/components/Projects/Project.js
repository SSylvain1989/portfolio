// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

// == Import

import './styles.scss';

// == Composant
const Project = ({
  fullName, react,redux,html,css,node,postegres,semantic, description, github, image, website,
}) => (
  <div className="card">
  <div className="face1">
  <div className="content">
    <img className="picture" src={image} alt="hero" />
    <h3 className="face1__subtitle">{fullName}</h3>
  </div>
</div>
<div className="face2">
  <div className="content">
    <div className="stack"> 
    <ul className="stack__icons">
      <li>    <img className="icon" src={react} alt="react_icon"/><br/>react</li>
      <li>    <img className="icon" src={redux} alt="redux_icon" /><br/>redux</li>
      <li>    <img className="icon" src={html} /><br/>html5</li>
      <li>    <img className="icon" src={css} /><br/>css3</li>
      {node && (
              <li> <img className="icon" src={node} /><br/>NodeJS</li>
      )}
      {semantic && (
              <li> <img className="icon" src={semantic} /><br/>semantic ui</li>
      )}
      {postegres && (
              <li> <img className="icon" src={postegres} /><br/>PostgreSQL</li>
      )}

    </ul>
    </div>
    <p>{description}</p>
    <a className="button__one" href={github} label="github"><Icon name="github" size="large" /></a>
    <a className="button__two" href={website} label="site_web"><Icon name="external alternate" size="large" /></a>
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
