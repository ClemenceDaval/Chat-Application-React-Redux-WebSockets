import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ newMessage, writeNewMessage }) => {
  const handleWriteNewMessage = (event) => {
    console.log(event.target.value);
    console.log(newMessage);
    writeNewMessage(event.target.value);
  };

  return (
    <form className="form">
      <input className="form__input" type="text" placeholder="Saisissez votre message" value={newMessage} onChange={handleWriteNewMessage} />
    </form>
  );
};

Form.propTypes = {
  newMessage: PropTypes.string.isRequired,
  writeNewMessage: PropTypes.func.isRequired,
};

export default Form;
