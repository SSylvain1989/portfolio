import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import emailjs from 'emailjs-com';
import apiKeys from './apikey';
import Field from '../common/Field';

import './styles.scss';
// ** supprimer useEffect si pas utilisé & response** //
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

    // console.log('e', e);
    // console.log('form', form);
    emailjs.send('default_service', apiKeys.TEMPLATE_ID, form, apiKeys.USER_ID)
      .then((result) => {
        alert('Votre message a bien été envoyé, nous vous répondrons sous peu', result.text);
      },
      (error) => {
        alert('Une erreur est apparue, retentez votre envoi s\'il-vous-plait', error.text);
      });
  };
  console.log('je suis là');
  // if (!response) {
  console.log('test');
  return (
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
