// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import {Icon} from 'semantic-ui-react';
import { SiRedux, SiJavascript, SiHtml5 , SiCss3, SiTailwindcss, SiNodeDotJs, SiPostgresql, SiMysql} from 'react-icons/si';
import { HashLink as Link } from 'react-router-hash-link';



// == Import
import Field from '../common/Field';
import hautDroite from '../../images/1.png';
import basDroite from '../../images/2.png';
import hautGauche from '../../images/3.png';
import basGauche from '../../images/4.png';

import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

// == Composant
const Contact = ({
  // email,
  // message,
  // changeField,
  // resetFields,
}) => {
  toast.configure();

// ici je dis que des la première monture du composant je mets le state à "one"
  useEffect(() => {
    setIsShown('one');
  }, []);
// gestion du modification de la photo avec onMouseOver et useState
  const [isShown, setIsShown] = useState('');

// gestion du formulaire de contact
  const onSubmit = (event) => {
    event.preventDefault();// 
    console.log(event.target);
    // let form = {
    //   // les attributs name & message sont identiques aux attributs du template du mail de emailJs
    //   name: email, message,
    // };
    emailjs.sendForm('service_tcg8gkr', 'template_v3fahxb', event.target, 'user_fkzQbVgbBCHNTPo54IgVK')
      .then((result) => {
        console.log('email envoyé', result);
        toast.success('Merci pour votre message je vous reviens rapidement', {className:"toast__success", position: toast.POSITION.TOP_RIGHT });
      },
      (error) => {
        toast.error('Une erreur est apparue, retentez votre envoi s\'il-vous-plait');
        console.log('erreur',error);
      });
      event.target.reset();
  };

  return (
    <div className="container__contact" >
    <div className="about" onMouseEnter={() => setIsShown('one')}
       onMouseLeave={() => setIsShown('one')} >
      {/* <p>Hi , </p>
      <p>My Name is Sylvain , i have 31 yers old , 168cm of good humeur and humour ( maybe a little dark)
        french dude who live in south of France , Toulouse ( Occitanie ).
      </p>
      <p>I have study code in O'clock in 2020 for 6 months</p>
      <p>I'm inlove of React , but i only framework of javascript i know for
        this moment but i want to learn VueJS
      </p>
      <p>Before i became a dev , i was in transport and logistics , with a master 1 , for 8 years</p>
      <p>I speack & write in French , i have and advanced level in English</p>
      <p>Before i learn how to code , i was in logistics</p>
      <p>Looking for a dev or just chat with me ? Just write me down below </p> */}
            <p>Bonjour 🖐️, </p>
      <p>Sylvain 31 ans et 168 cm de bonne humeur 😄. Basé dans le sud de la France à Toulouse la ville Rose.
      </p>
      <p>En 2020 je décide de faire de mes centres d'intérêts mon activité professionnelle.Je sors donc en novembre 2020 d'une formation développeur web - Fullstack Javascript : Spécialité ReactJS ⚛️ (735 heures) </p>

      <p>Avant d'être développeur, je suis resté 8 dans le secteur des transports et logistics avec un master 1 en poche</p>
      <p>Je suis à la recherche aujourd'hui d'un poste ou d'un stage </p>
    </div>
      <div className="Skill__hard" onMouseEnter={() => setIsShown('two')}
        onMouseLeave={() => setIsShown('two')}>
        <h3>Hard skills</h3>
        <li>Javascript   <SiJavascript/></li>
        <li>ReactJS ⚛️ / Redux  <SiRedux/></li>
        <li>Html  <SiHtml5/></li>
        <li>CSS / Sass (SCSS) / Tailwind  <SiCss3/><SiTailwindcss/></li>
        <li>NodeJS   <SiNodeDotJs/></li>
        <li>Express</li>
        <li>SQL/PostgreSQL/Sequelize   <SiPostgresql/>    <SiMysql/></li>
        <li>Typescript</li>
        <li>RESTful APIs design & implementation</li>
        {/* <li>Mocha/Chai/Enzyme</li> */}
      </div>
      <div className="Skill__soft" onMouseEnter={() => setIsShown('three')}
        onMouseLeave={() => setIsShown('three')}>
        <h3>Soft skills</h3>
       <li>Bonne humeur</li>
       <li>Esprit d'initiative</li>
       <li>Forte connaissance en transport et logistics</li>
       <li>Gestion du stress</li>
       <li>Empathie</li>
       <li>Esprit d'équipe</li>
       <li>Remise en question</li>
       <li>Négociation</li>


      </div>
      {isShown==="one" && (
        <img className="Picture"src={basDroite} alt="dog"/>
        )}
      {isShown==='two' && (
        <img className="Picture"src={hautGauche} alt="d"/>
        )}
      {isShown==='three' && (
        <img className="Picture"src={basGauche} alt="c"/>
        )}
      {isShown==='for' && (
      <img className="Picture"src={hautDroite} alt="g"/>
      )}
      <div className="contact" onMouseEnter={() => setIsShown('for')}
        onMouseLeave={() => setIsShown('for')}>
      {/* <div className="contact__wrap"> */}
        <form className="contact__form" onSubmit={onSubmit} >
          <h3 className="contact__title">Contact <Icon name="linkedin" size="large"/><Icon name="github" size="large"/>
          </h3>

          <Field
            name="name"
            placeholder="Votre nom"
            // onChange={(event) => {
            //   setUseremail(event.target.value);
            // }}
            // value={email}
            type="text"
            className="contact__email"
          />
          <Field
            name="email"
            placeholder="exemple@gmail.com"
            // onChange={(event) => {
            //   setUseremail(event.target.value);
            // }}
            // value={email}
            type="email"
            className="contact__email"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            // onChange={(event) => {
            //   setMessage(event.target.value);
            // }}
            // value={message}
            type="text"
            className="contact__message"
          />
          <button className="contact__button" type="submit" >Envoyer</button>
        </form>
      {/* </div> */}
      {/* <div className="contact__social">
          <h2>Mail</h2>
          <p>sylvain.sigonnez@gmail.com</p>
          <h2>Social</h2>

          </div> */}
      </div>
        <ToastContainer />
{/* // ce composant représente en front la bulle pop pup success ou error */}
      </div>
  );
};

Contact.propTypes = ({
  email: PropTypes.string,
  message: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
});

Contact.defaultProps = ({
  email: '',
  message: '',
  response: '',
});

export default Contact;
