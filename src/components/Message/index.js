import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ content, author }) => (
  <div className="messages__item">
    <p>{author}</p>
    <p>{content}</p>
  </div>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
