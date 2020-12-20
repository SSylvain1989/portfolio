// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './styles.scss';

// == Composant
const Project = ({
  fullName, stack, description, github, image,
}) => (
  <div className="card">
  <div className="face1">
  <div className="content">
    <img className="picture" src={image} alt="hero" />
  </div>
</div>
<div className="face2">
  <div className="content">
    <p className="infos"> Stack : {stack}  <br /> Description : {description}</p>
    <a className="button" href={github}>github</a>
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
