import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/containers/Message';

import './messages.scss';

const Messages = ({ messages }) => {
  // on prépare une ref pour pouvoir marquer l'élément 
  // du DOM que l'on souhaite accéder
  const ref = useRef(null);

  // on utilise un hook d'effet
  // qui sera lancé au montage du composant et
  // à chaque màj de la liste des messages
  // on fera scroller le div .messages tout en bas pour bien
  // visualiser le dernier message.
  useEffect(
    () => {
      // on récupère la hauteur de notre div .messages
      const messagesHeight = ref.current.scrollHeight;
      ref.current.scroll({
        left: 0,
        top: messagesHeight,
        behavior: 'smooth',
      });

      console.log('effet lancé');
    },
  );

  return (
    <div ref={ref} className="messages">
      {
        messages.map((message) => <Message key={message.id} {...message} />)
      }
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;
