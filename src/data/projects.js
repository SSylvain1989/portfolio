import hero from '../images/hero2.png';
import converter from '../images/converter.png';
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
    react,
    redux,
    node,
    postegres,
    html,
    css,
    description: 'le site dont vous êtes le héro, chaque décision est décisive',
    github: 'https://github.com/SSylvain1989/hero',
    website: 'http://3.89.27.242:3000/',
    image: hero,
  },
  {
    fullName: 'Search Git Repo',
    react,
    html,
    css,
    semantic,
    description: 'annuaire qui permet de chercher des repos sur github',
    github: 'https://github.com/SSylvain1989/gitAPI',
    website: 'https://github-search-repos.netlify.app/',
    image: github,
  },
  {
    fullName: 'Portfolio',
    react,
    redux,
    html,
    css,
    semantic,
    description: 'Mon portfolio personel',
    github: 'https://github.com/SSylvain1989/portfolio',
    website: 'https://sylvain-dev.netlify.app/',
    image: portfolio,
  },
  {
    fullName: 'Converter',
    react,
    html,
    css,
    description: 'Convertisseur de devises',
    github: 'https://github.com/SSylvain1989/converter',
    website: 'https://convertisseur-de-devises.netlify.app/',
    image: converter,
  },
];

export default projects;
