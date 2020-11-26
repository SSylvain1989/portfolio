import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import apiKeys from './apikey';
import Field from '../common/Field';
import hautDroite from '../../images/1.jpg';
import basDroite from '../../images/2.jpg';
import hautGauche from '../../images/3.jpg';
import basGauche from '../../images/4.jpg';


import './styles.scss';

// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

const Contact = ({
  email,
  message,
  changeField,
  resetFields,
}) => {
// gestion du modification de la photo avec onMouseOver et useState
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);

  // gestion du formulaire de contact
  const onSubmit = (event) => {
    event.preventDefault();// 
    const form = {
      // les attributs name & message sont identiques aux attributs du template du mail de emailJs
      name: email, message,
    };

    emailjs.send('default_service', apiKeys.TEMPLATE_ID, form, apiKeys.USER_ID)
      .then((result) => {
        alert('Votre message a bien été envoyé, nous vous répondrons sous peu', result.text);
      },
      (error) => {
        alert('Une erreur est apparue, retentez votre envoi s\'il-vous-plait', error.text);
      });
  };

  return (
    <div className="container__contact" >
    <div className="about" onMouseEnter={() => setIsShown1(true)}
       onMouseLeave={() => setIsShown1(false)} >
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
      <div className="Skill__hard" onMouseEnter={() => setIsShown2(true)}
        onMouseLeave={() => setIsShown2(false)}>
        <h3>Hard skills</h3>
        <p>React</p>
      </div>
      <div className="Skill__soft" onMouseEnter={() => setIsShown3(true)}
        onMouseLeave={() => setIsShown3(false)}>
        <h3>Soft skills</h3>
        <p>chieur</p>
      </div>
      {/* image centrale */}
      <img className="Picture"src={hautDroite} alt="dg"/>
      {isShown1 && (
        <img className="Picture"src={basDroite} alt="dog"/>
        )}
      {isShown2 && (
        <img className="Picture"src={hautGauche} alt="d"/>
        )}
      {isShown3 && (
        <img className="Picture"src={basGauche} alt="c"/>
        )}
      {isShown4 && (
      <img className="Picture"src="" alt="g"/>
      )}
      <div className="contact" onMouseEnter={() => setIsShown4(true)}
        onMouseLeave={() => setIsShown4(false)}>
      <div className="contact__wrap">
        <form className="contact__form" onSubmit={onSubmit}>
          <h1 className="contact__title">Write me down below</h1>
          <Field
            name="email"
            placeholder="Your email"
            onChange={changeField}
            value={email}
            type="email"
            className="contact__email"
          />
          <Field
            name="message"
            placeholder="Your message"
            onChange={changeField}
            value={message}
            type="text"
            className="contact__message"
          />
          <button className="contact__button" onClick={resetFields} >Envoyer</button>
        </form>
      </div>
      </div>
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
