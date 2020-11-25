// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import projects from '../../data/projects';
import Project from './Project';
import './styles.scss';

// == Composant
const Projects = () => (
  <div className="body_projetc">
  <div className="container" id="Projects">
    {/* <p className="Projects__title">My projects ...</p> */}
    {
    projects.map((oneProjet) => (
      <Project
        key={oneProjet.description}
        {...oneProjet}
      />
    ))
}
{/* <p className="Projects__end">More to come ...</p> */}
  </div>
  </div>
);

// == Export
export default Projects;
