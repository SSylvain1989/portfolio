import hero from '../images/hero2.webp';
import tea from '../images/tea.webp';
import vue from '../images/vue.webp';
import sass from '../images/sass.webp';
import converter from '../images/converter.webp';
import github from '../images/github.webp';
import portfolio from '../images/portfolio.webp';
import yarn from '../images/yarn.webp';
import npm from '../images/npm.webp';
import react from '../images/react.webp';
import semantic from '../images/semantic.webp';
import node from '../images/node.webp';
import redux from '../images/redux.webp';
import postegres from '../images/postegres.webp';
import javascript from '../images/javascript.webp';
import css from '../images/css.webp';
import html from '../images/html.webp';
import todo from '../images/todo.webp';

const projects = [
  {
    fullName: 'Hero',
    react,
    redux,
    node,
    postegres,
    html,
    css,
    description: 'vous êtes le héro, chaque décision est décisive(desktop only)',
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
  {
    fullName: 'Tea-Time',
    sass,
    vue,
    html,
    description: 'initiation à vueJs - une interface toute simple',
    github: 'https://github.com/SSylvain1989/vue-projet-market',
    website: 'https://teatimee.netlify.app/#/',
    image: tea,
  },
  {
    fullName: 'Todo - Veille Techno',
    vue,
    html,
    css,
    description: 'Une todo pour apprendre les concepts de VueJS',
    github: 'https://github.com/SSylvain1989/todoVue',
    website: 'https://vuejs3-todo.netlify.app/',
    image: todo,
  },
];

export default projects;
