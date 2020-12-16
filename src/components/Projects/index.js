// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import projects from '../../data/projects';
import Project from './Project';
import './styles.scss';
import { HashLink as Link } from 'react-router-hash-link';


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
{/* <p className="Projects__end">More to come ...</p> */}
  </div>
);

// == Export
export default Projects;
