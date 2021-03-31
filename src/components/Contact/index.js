// == Import npm
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import { Icon } from 'semantic-ui-react';
// import {
//   SiRedux, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodeDotJs, SiPostgresql, SiMysql,
// } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos.css';

// == Import
import monCv from '../../assets/cv_sylvain_sigonnez.pdf';
import Field from '../common/Field';
import hautDroite from '../../images/1.webp';
import basDroite from '../../images/2.webp';
import hautGauche from '../../images/3.webp';
import basGauche from '../../images/4.webp';

import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

// == Composant
const Contact = () => {
  toast.configure();
  // gestion du modification de la photo avec onMouseOver et useState , ici j'initialise mon state
  const [isShown, setIsShown] = useState('');

  // ici je dis que des la première monture du composant je mets le state à "one"
  useEffect(() => {
    setIsShown('one');
    Aos.init({
      duration: 1400 });
  }, []);

  // gestion du formulaire de contact
  const onSubmit = (event) => {
    event.preventDefault();//
    console.log(event.target);
    //  let form = {
    //  les attributs name & message sont identiques
    //  aux attributs du template du mail de emailJs
    //  name: email, message,
    // };
    emailjs.sendForm('service_tcg8gkr', 'template_v3fahxb', event.target, 'user_fkzQbVgbBCHNTPo54IgVK')
      .then((result) => {
        toast.success('Merci pour votre message je vous reviens rapidement', { className: 'toast__success', position: toast.POSITION.TOP_RIGHT });
      },
      (error) => {
        toast.error('Une erreur est apparue, retentez votre envoi s\'il-vous-plait');
      });
    event.target.reset();
  };

  return (
    <div>
      <div  className="container__contact" id="about">
        <div
          className="about"
          // ici je change la valeur du state de mon composant
          onMouseEnter={() => setIsShown('one')}
          onMouseLeave={() => setIsShown('one')}
        >
          <p>Bonjour 👋, </p>
          <p>Sylvain 31 ans et 168 cm de bonne humeur 🙂 .
            Basé dans le sud de la France à Toulouse la ville Rose.
          </p>
          <p>En 2020 je décide de faire de mes centres d'intérêts
            mon activité professionnelle.
            Je sors en novembre 2020
            d'une formation développeur web - Fullstack <strong>Javascript</strong> :
            Spécialité ReactJS ⚛️ (735 heures).
          </p>
          <p>Avant d'être <span>développeur</span>,
            je suis resté 8 ans dans le secteur des transports et
            logistiques avec un master 1 en poche.
          </p>
          <p>Je suis à l'écoute du marché, n'hésitez pas à
            me contacter je suis sur que je saurais répondre à vos attentes.
          </p>
        </div>
        <div
          className="Skill__hard"
          onMouseEnter={() => setIsShown('two')}
          onMouseLeave={() => setIsShown('two')}
        >
          <h3>Hard skills</h3>
          <ul>
            <li>Javascript   </li>
            <li><span>ReactJS</span> ⚛️ / Redux  </li>
            <li>VueJS  </li>
            <li>CSS / Sass (SCSS) / Tailwind  </li>
            <li>NodeJS   </li>
            <li>Express</li>
            <li>SQL / PostgreSQL / Sequelize  </li>
            <li>Typescript</li>
            <li>RESTful APIs design & implementation</li>
          </ul>
        </div>
        <div
          className="Skill__soft"
          onMouseEnter={() => setIsShown('three')}
          onMouseLeave={() => setIsShown('three')}
        >
          <h3>Soft skills</h3>
          <ul>
            <li>Bonne humeur</li>
            <li>Esprit d'initiative</li>
            <li>Forte connaissance en transport et logistiques</li>
            <li>Gestion du stress</li>
            <li>Empathie</li>
            <li>Esprit d'équipe</li>
            <li>Remise en question</li>
            <li>Négociation</li>
          </ul>
        </div>
        {isShown === 'one' && (
        <img className="Picture" src={basDroite} alt="sylvain sigonnez qui montre la case contact" width="100px" height="100px" />
        )}
        {isShown === 'two' && (
        <img className="Picture" src={hautGauche} alt="sylvain sigonnez qui montre la case de sa présentation" />
        )}
        {isShown === 'three' && (
        <img className="Picture" src={basGauche} alt="sylvain sigonnez qui montre la case des soft skills" />
        )}
        {isShown === 'for' && (
        <img className="Picture" src={hautDroite} alt="sylvain sigonnez qui montre la case des hard skills" />
        )}
        <div
        data-aos="fade-down"
          className="contact"
          onMouseEnter={() => setIsShown('for')}
          onMouseLeave={() => setIsShown('for')}
        >
          <form className="contact__form" onSubmit={onSubmit}>
            <h3
              className="contact__title"
            ><strong>Contact</strong>
              <a href="https://www.linkedin.com/in/sylvain-sigonnez/" alt="linkedin"><Icon name="linkedin" size="large" /><span className="sr-only">Linkedin</span> </a>
              <a href="https://github.com/SSylvain1989" alt="github"><Icon name="github" size="large" /><span className="sr-only">Github</span> </a>
            </h3>
            <label className="contact__emailLabel"><span className="sr-only">Votre nom</span>
              <Field
                name="name"
                placeholder="Votre nom"
                type="text"
                className="contact__email"
              />
            </label>
            <label className="contact__emailLabel"><span className="sr-only">Votre email</span>
              <Field
                name="email"
                placeholder="exemple@gmail.com"
                type="email"
                className="contact__email"
              />
            </label>
            <label className="contact__messageLabel"><span className="sr-only"> Votre message</span>
              <textarea
                name="message"
                placeholder="Votre message"
                type="text"
                className="contact__message"
              />
            </label>
            <button className="contact__button" type="submit">Envoyer</button>
          </form>
        </div>
        <ToastContainer />
        {/* // ce composant représente en front la bulle pop pup success ou error */}
      </div>
      <a className="cv" href={monCv} download="cv sylvain sigonnez">
        <Icon name="cloud download" size="huge" />
        <p className="cv__text" href="">
          CV
        </p>
      </a>
    </div>
  );
};

Contact.defaultProps = ({
  email: '',
  message: '',
});

export default Contact;
