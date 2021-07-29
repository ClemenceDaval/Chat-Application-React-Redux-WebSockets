import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './app.scss';

/*
plan d'action de mise en place de la communication entre fenêtres :
1 - Ajouter la libbibliothèque socket.io côté client
2 - Se connecter au websocket au démarrage de notre application
3 - Ecouter l'arrivée de nouveaux message
    (on se met en écoute dès l'établissement de la connection):
      - quand un message arrive, on l'ajoute à la liste des messages,
4 - Emmettre un message lorsque l'utilisteur soumet le formulaire.
*/

const App = ({ connectWS }) => {
  // on demande la connection au montage du composant
  useEffect(
    connectWS,
    [],
  );

  return (
    <div className="app">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
};

App.propTypes = {
  connectWS: PropTypes.func.isRequired,
};

export default App;
