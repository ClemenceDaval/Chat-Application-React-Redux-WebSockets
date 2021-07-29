import React from 'react';
import PropTypes from 'prop-types';

const SignIn = ({
  newLogin, newPassword, setNewLogin, setNewPassword,
}) => {
  const handleChangeLogin = (event) => {
    const newValue = event.target.value;
    setNewLogin(newValue);
  };

  const handleChangePassword = (event) => {
    const newValue = event.target.value;
    setNewPassword(newValue);
  };

  return (
    <form className="settings__form">
      <input className="settings__form__input" type="email" placeholder="Email" value={newLogin} onChange={handleChangeLogin} />
      <input className="settings__form__input" type="password" placeholder="Mot de passe" value={newPassword} onChange={handleChangePassword} />
      <button className="settings__form__submitButton" type="submit"> Envoyer </button>
    </form>
  );
};

SignIn.propTypes = {
  newLogin: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  setNewLogin: PropTypes.func.isRequired,
  setNewPassword: PropTypes.func.isRequired,
};

export default SignIn;
