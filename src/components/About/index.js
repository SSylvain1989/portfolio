// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import

import './styles.scss';

// == Composant
const About = () => (
  <div className="About">
    <div>
      <h2>ABOUT ME</h2>
      <p>Hi , </p>
      <p>My Name is Sylvain , i have 31 yers old ,
        french dude who live in south of France , Toulouse ( Occitanie ).
      </p>
      <p>I have study code in O'clock in 2020 for 6 months</p>
      <p>I'm inlove of React , but i only framework of javascript i know for
        this moment but i want to learn VueJS
      </p>
      <p>I speack & write in French , i have and advanced level in English</p>
      <p>Before i learn how to code , i was in logistics</p>
      <p>Looking for a dev or just chat with me ? Just write me down below </p>
    </div>
    <div className="About__stack">
      <p>Hard skills</p>
      <p>Soft skills</p>
    </div>
  </div>
);

// == Export
export default About;
