/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './settings.scss';

const Settings = ({
  isOpen, toggleSettings, newLogin, newPassword, setNewLogin, setNewPassword,
}) => {
  const handleClick = () => {
    toggleSettings();
  };
  const handleChangeLogin = (event) => {
    const newValue = event.target.value;
    setNewLogin(newValue);
  };

  const handleChangePassword = (event) => {
    const newValue = event.target.value;
    setNewPassword(newValue);
  };

  return (
    <div className="settings">
      <button className={isOpen ? 'settings__button settings__button--open' : 'settings__button'} type="button" onClick={handleClick}> + </button>
      <form className={isOpen ? 'settings__form settings__form--open' : 'settings__form'}>
        <input className="settings__form__input" type="email" placeholder="Email" value={newLogin} onChange={handleChangeLogin} />
        <input className="settings__form__input" type="password" placeholder="Mot de passe" value={newPassword} onChange={handleChangePassword} />
        <button className="settings__form__submitButton" type="submit"> Envoyer </button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  newLogin: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  setNewLogin: PropTypes.func.isRequired,
  setNewPassword: PropTypes.func.isRequired,
};

export default Settings;
