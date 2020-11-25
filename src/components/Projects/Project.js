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
  <div className="card">
  <div className="face face1">
  <div className="content">
    <img className="picture" src={image} alt="hero" />

  </div>
</div>
<div className="face face2">
  <div className="content__face2">

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
