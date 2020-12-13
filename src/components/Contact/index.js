// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import {Icon} from 'semantic-ui-react';

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
      <p>Hi , </p>
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
      <p>Looking for a dev or just chat with me ? Just write me down below </p>
    </div>
      <div className="Skill__hard" onMouseEnter={() => setIsShown('two')}
        onMouseLeave={() => setIsShown('two')}>
        <h3>Hard skills</h3>
        <p>React</p>
      </div>
      <div className="Skill__soft" onMouseEnter={() => setIsShown('three')}
        onMouseLeave={() => setIsShown('three')}>
        <h3>Soft skills</h3>
        <p>chieur</p>
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
      <div className="contact__wrap">
        <form className="contact__form" onSubmit={onSubmit} >
          <h1 className="contact__title">Un brin de causette ?</h1>
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
      </div>
      <div className="contact__social">
          <h2>Mail</h2>
          <p>sylvain.sigonnez@gmail.com</p>
          <h2>Social</h2>
          <Icon name="github" size="large"/>
          <Icon name="linkedin" size="large"/>
          </div>
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
