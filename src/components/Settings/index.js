import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import axios from 'axios';

import Field from 'src/containers/Field';


import './settings.scss';

const Settings = ({ isOpen, toggle, submit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  // on utilise la fonction classnames.
  // ici, on indique que l'on voudra ajouter la classe settings--open
  // seulement si isOpen vaut vrai
  // const settingsClass = isOpen ? 'settings settings--open' : 'settings';
  const settingsClass = classnames('settings', { 'settings--open': isOpen });

  return (
    <form className={settingsClass} onSubmit={handleSubmit}>
      <button type="button" className="settings__toggle" onClick={toggle}>+</button>

      <Field className="settings__input" type="email" placeholder="Email" name="email" />

      <Field className="settings__input" type="password" placeholder="Votre mot de passe" name="password" />

      <button className="settings__submit" type="submit">Se connecter</button>
    </form>
  );
};

// Bien qu'il soit un composant de présentation
// Settings a besoin de s'assurer que la donnée qu'il recevra
// dans sa props isOpen est bien booléen puisqu'il va s'en servir comme tel
Settings.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default Settings;
