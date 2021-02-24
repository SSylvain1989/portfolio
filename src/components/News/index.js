import React from 'react';

import './style.scss';

const News = () => (
  <div className="News">
    <h2>Aujourd'hui</h2>
    <p>Après avoir fini ma formation , passé ma certification opquast pour appréhender au mieux les bonnes pratiques du web, j'apprends <a href="https://nextjs.org/">NextJS</a> . Ce framework permettra à mes futurs projets <span>React</span> d'être indexables plus facilement et d'avoir une vitesse d'affichage plus importante grace au rendu côté serveur.</p>
    <p>Mon objectif cette année est de me familiariser aux frameworks <a href="https://vuejs.org/">VueJS</a> et <a href="https://fr.nuxtjs.org/">NuxtJS</a> pour élargir au maximum mes compétences.
      Je me concentre donc aujourd'hui sur une montée en compétence côté Frontend.
      Néanmoins je reste tout à fait capable de produire un projet complet avec une partie
      Backend en utilisant des outils tel qu' Express avec NodeJS.
    </p>
  </div>
);

export default News;
