import hero from '../images/hero2.png';
import github from '../images/github.png';
import portfolio from '../images/portfolio.png';


const projects = [
  {
    fullName: 'Hero',
    stack: 'React / Redux - Node.js / Postgres / Sqitch ',
    description: 'Website wich you are the hero',
    github: 'https://github.com/O-clock-Jason/projet-hero',
    website: 'http://3.89.27.242:3000/',
    image: hero,
  },
  {
    fullName: 'Search Git Repo',
    stack: 'React / Redux',
    description: 'un annuaire qui permette de chercher des repos sur github',
    github: 'https://github.com/SSylvain1989/portfolioo',
    image: github,
  },
  {
    fullName: 'Portfolio',
    stack: 'Html / css ',
    description: 'Site vitrine de Laura developpement personnel',
    github: 'https://github.com/SSylvain1989/portfolioo',
    website:'https://sylvain-dev.netlify.app/',
    image: portfolio,
  },
  {
    fullName: 'Pokedex',
    stack: 'Js , Vue.Js , API ',
    description: 'Référencement pokemon',
    github: 'https://github.com/SSylvain1989/portfolioo',
    image: hero,
  },
];

export default projects;