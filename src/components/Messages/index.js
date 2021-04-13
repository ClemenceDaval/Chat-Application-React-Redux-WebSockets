import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

const Messages = ({ messagesList }) => (
  <div className="messages__list">
    {
      messagesList.map((message) => (
        <Message key={message.id} {...message} />
      ))
    }
    <Message {...messagesList} />
  </div>
);

Messages.propTypes = {
  messagesList: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
};

export default Messages;
