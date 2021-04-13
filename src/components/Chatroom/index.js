// == Import npm
import React from 'react';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';

// == Import
import './styles.css';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Form />
    <Messages />
  </div>
);

// == Export
export default Chatroom;
