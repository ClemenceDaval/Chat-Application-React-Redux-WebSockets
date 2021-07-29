import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import './message.scss';

const Message = ({ author, message, isMine }) => {
  const className = classnames(
    'message',
    {
      'message--mine': isMine,
    },
  );

  return (
    <div className={className}>
      <div className="message__author">
        {author}
      </div>
      <div className="message__message">
        {message}
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Message;
