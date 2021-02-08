import hero from '../images/hero2.png';
import github from '../images/github.png';
import portfolio from '../images/portfolio.png';
import yarn from '../images/yarn.png';
import npm from '../images/npm.png';
import react from '../images/react.png';
import semantic from '../images/semantic.png';
import node from '../images/node.png';
import redux from '../images/redux.png';
import postegres from '../images/postegres.png';
import javascript from '../images/javascript.png';
import css from '../images/css.png';
import html from '../images/html.png';






const projects = [
  {
    fullName: 'Hero',
    react: react,
    redux: redux,
    node: node,
    postegres: postegres,
    html: html,
    css: css,
    description: 'Le site dont vous êtes le héro, chaque décision peut être fatale',
    github: 'https://github.com/O-clock-Jason/projet-hero',
    website: 'http://3.89.27.242:3000/',
    image: hero,
  },
  {
    fullName: 'Search Git Repo',
    react: react,
    redux: redux,
    html: html,
    css: css,
    semantic,
    description: 'un annuaire qui permet de chercher des repos sur github',
    github: 'https://github.com/SSylvain1989/portfolioo',
    image: github,
  },
  {
    fullName: 'Portfolio',
    react: react,
    redux: redux,
    html: html,
    css: css,
    description: 'Mon portfolio personel',
    github: 'https://github.com/SSylvain1989/portfolioo',
    website:'https://sylvain-dev.netlify.app/',
    image: portfolio,
  },
  {
    fullName: 'Pokedex',
    react: react,
    redux: redux,
    node: node,
    html: html,
    css: css,
    description: 'Référencement pokemon',
    github: 'https://github.com/SSylvain1989/portfolioo',
    image: hero,
  },
];

export default projects;