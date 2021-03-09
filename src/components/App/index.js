// == Import npm
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

// == Import
import Header from 'src/containers/Header';
import Landing from 'src/components/Landing';
import News from 'src/components/News';
import './styles.scss';

// == Lazy componsant
const Projects = lazy(() => import('src/components/Projects'));
const Footer = lazy(() => import('src/components/Footer'));
const Contact = lazy(() => import('src/components/Contact'));

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Route exact path="/">
      <Suspense fallback={<div><Loader active size="massive" inline="centered" />Chargement...</div>}>
        <Landing />
      </Suspense>
    </Route>
    <Route exact path="/">
      <Suspense fallback={<div><Loader active size="massive" inline="centered" /></div>}>
        <Projects />
      </Suspense>
    </Route>
    <Route exact path="/">
      <Suspense fallback={<div><Loader active size="massive" inline="centered" /></div>}>
        <Contact />
      </Suspense>
    </Route>
    <Route exact path="/">
      <News />
    </Route>
    <Suspense fallback={<div><Loader active size="massive" inline="centered" /></div>}>
      <Footer />
    </Suspense>
  </div>
);

// == Export
export default App;
