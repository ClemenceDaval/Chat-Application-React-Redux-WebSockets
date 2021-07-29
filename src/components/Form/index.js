import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ sendMessage, newMessage, setNewMessage }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    setNewMessage(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="form__message" value={newMessage} onChange={handleChange} />
      <button type="submit" className="form__submit">Send</button>
    </form>
  );
};

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  newMessage: PropTypes.string.isRequired,
  setNewMessage: PropTypes.func.isRequired,
};

export default Form;
