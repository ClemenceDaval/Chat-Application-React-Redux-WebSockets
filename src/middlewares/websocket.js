import { CONNECT_WS, ADD_MESSAGE, saveReceivedMessage, saveAllReceivedMessages } from 'src/actions';

let socket;

export default (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WS:
      // on initialise la connexion
      socket = window.io('http://localhost:3001');

      socket.on('send_message', (message) => {
        console.log('nouveau message arrivé :', message);
        store.dispatch(saveReceivedMessage(message));
      });

      socket.on('all_messages', (messages) => {
        store.dispatch(saveAllReceivedMessages(messages));
      });

      // socket.emit('send_message', { author: 'Julien', message: 'Salut' });

      // on décide d'arrêter cette action, pour se faire, on ne next pas.
      // next(action);
      break;
    case ADD_MESSAGE: {
      const { username, newMessage } = store.getState();
      socket.emit('send_message', { author: username, message: newMessage });
      break;
    }
    default:
      console.log('auth');
      next(action);
  }
};
