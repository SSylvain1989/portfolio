import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import apiKeys from './apikey';
import Field from '../common/Field';

import './styles.scss';

// https://medium.com/@barseetbrown/send-e-mail-directly-from-your-react-website-no-back-end-required-ed0d3106c3d4

const Contact = ({
  email,
  message,
  changeField,
  resetFields,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();// Prevents default refresh by the browser
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
  console.log('je suis là');

  console.log('test');
  return (

    <div className="container__contact">


    <div className="about">
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
      <div className="Skill__hard">
        <h3>Hard skills</h3>
        <p>React</p>
      </div>
      <div className="Skill__soft">
        <h3>Soft skills</h3>
        <p>chieur</p>
      </div>
      {/* image centrale */}
        <img className="Picture"src="https://picsum.photos/id/237/200/300" alt="dog"/>
      <div className="contact">
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
      {/* gros container div */}
      </div>

  );
  // }
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
