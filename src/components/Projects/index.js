// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import projects from '../../data/projects';
import Project from './Project';
import './styles.scss';

// == Composant
const Projects = () => (
  <div className="container" id="Projects">
    {
    projects.map((oneProjet) => (
      <Project
        key={oneProjet.description}
        {...oneProjet}
      />
    ))
}
  </div>
);

// == Export
export default Projects;
