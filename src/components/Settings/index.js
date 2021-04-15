/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import SignIn from 'src/containers/SignIn';

import './settings.scss';

const Settings = ({ isOpen, toggleSettings }) => {
  const handleClick = () => {
    toggleSettings();
  };

  return (
    <div className="settings">
      <button className="settings__button" type="button" onClick={handleClick}> + </button>
      {isOpen && <SignIn />}
    </div>
  );
};

Settings.propTypes = {
  toggleSettings: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Settings;
