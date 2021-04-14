import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ author, message }) => (
  <div className="message">
    <div className="message__author">
      {author}
    </div>
    <div className="message__message">
      {message}
    </div>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
