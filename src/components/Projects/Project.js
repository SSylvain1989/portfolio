// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './styles.scss';

// == Composant
const Project = ({
  fullName, stack, description, github, image,
}) => (
  // <div className="Project">
  //   <div className="Project__container">
  //     <div>
  //       <img src={image} alt="hero" />
  //       <p className="Project__title">{fullName}</p>
  //       <p className="Project__stack">Build with : <br/>{stack}</p>
  //       <p className="Project__description">Description : <br/>{description}</p>
  //       <p className="Project__git">code source : <a href={github}>github</a></p>
  //       <p className="Project__link"><a href={github}>website</a></p>
  //     </div>
  //   </div>
  // </div>
  <div className="card__recipes">
  <div className="card__recipes__face face1">
  <div className="card__recipes__content">
    <img className="recipes__picture" src={image} alt="hero" />
    <h3 className="recipes__subtitle">{fullName}</h3>
  </div>
</div>
<div className="face face2">
  <div className="content">
    <h3 className="recipes__second__subtitle"> {fullName}</h3>
    <p className="recipes__infos"> Stack : {stack}  <br /> Description : {description}</p>
    <p className="recipes__button" id={github} title={github}><a href={github}>github</a></p>
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
