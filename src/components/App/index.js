// == Import npm
import React from 'react';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';

// == Import
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
