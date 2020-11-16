// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Counter from 'src/containers/Counter';
import Header from 'src/components/Header';
import Landing from 'src/components/Landing';
import Projects from 'src/components/Projects';
import About from 'src/components/About';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    {/* <Counter /> */}
    <Header />
    <Landing />
    <Projects />
    <About />
    <Footer />
  </div>
);

// == Export
export default App;
