import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import netlify from '../../images/netlify2.webp';
import react from '../../images/react.webp';
import node from '../../images/node.webp';
import postegres from '../../images/postegres.webp';
import redux from '../../images/redux.webp';
import vue from '../../images/vue.webp';
import aws from '../../images/aws.webp';
import './style.scss';

const News = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up" className="News">
      <div className="stack">
        <ul className="stack__icons">
          <li className="li_icon"><img className="icon" src={react} alt="react icon" /></li>
          <li className="li_icon"><img className="icon" src={redux} alt="redux icon" /></li>
          <li className="li_icon"><img className="icon" src={node} alt="node icon" /></li>
          <li className="li_icon"><img className="icon" src={postegres} alt="postegres icon" /></li>
          <li className="li_icon"><img className="icon" src={vue} alt="vue icon" /></li>
          <li className="li_icon"><img className="icon" src={netlify} alt="netlify icon" /></li>
          <li className="li_icon"><img className="icon" src={aws} alt="aws icon" /></li>
        </ul>
      </div>
      <h2>Aujourd'hui</h2>
      <p>Après avoir fini ma formation de <strong>développeur web</strong> Full stack Javascript , passé mon diplôme et ma certification <a href="https://www.opquast.com/">opquast </a> pour appréhender au mieux les bonnes pratiques du web, j'apprends <a href="https://nextjs.org/">NextJS</a> . Ce framework permettra à mes futurs applications Web React d'être indexables plus facilement et d'avoir une vitesse d'affichage plus importante grace au rendu côté serveur.</p>
      <p>Mon objectif cette année est de me familiariser aux frameworks <a href="https://vuejs.org/">VueJS</a> et <a href="https://fr.nuxtjs.org/">NuxtJS</a> pour élargir au maximum mes compétences.
        Je me concentre donc aujourd'hui sur une montée en compétence
        côté <strong>Front-end</strong>.
        Néanmoins je reste tout à fait capable de produire un projet complet avec une partie
        Backend en utilisant des outils tel qu' Express avec NodeJS.
      </p>
    </div>
)};

export default News;
