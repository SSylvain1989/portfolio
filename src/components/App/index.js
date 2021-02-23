// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import
// import Counter from 'src/containers/Counter';
import Header from 'src/containers/Header';
import Landing from 'src/components/Landing';
import Projects from 'src/components/Projects';
import News from 'src/components/News';
import Footer from 'src/components/Footer';
import Contact from 'src/containers/Contact';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Route exact path="/">
    <Landing />
    </Route>
    <Route exact path="/">
    <Projects />
    </Route>
    <Route exact path="/">
    <Contact />
    </Route>
    <Route exact path="/">
    <News />
    </Route>
    <Footer />
  </div>
);

// == Export
export default App;
