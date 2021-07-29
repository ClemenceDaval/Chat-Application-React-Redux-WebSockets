import { getHighestId } from 'src/selectors';
import { ADD_MESSAGE, CHANGE_FIELD_VALUE, SET_NEW_MESSAGE, TOGGLE_SETTINGS, SAVE_ALL_RECEIVED_MESSAGES, SAVE_RECEIVED_MESSAGE, SAVE_USER } from 'src/actions';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Super Chat',
      message: 'Chalut Chat va ?',
    },
    {
      id: 2,
      author: 'Super Chat',
      message: 'Chat va Chat va...',
    },
  ],
  newMessage: '',
  // le composant settings est il ouvert ou non ?
  isSettingsOpen: true,
  email: '',
  password: '',
  // nom de l'utilisateur connecté (null par défaut - pas connecté)
  username: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.newMessage,
      };
    case SAVE_ALL_RECEIVED_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case SAVE_RECEIVED_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.message],
        newMessage: action.message.author === state.username ? '' : state.newMessage,
      };
    }
    case TOGGLE_SETTINGS:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        // on indique dynamiquement (au moment de l'exécution)
        // à quelle propriété du state on souhaite accéder
        // grâce à la notation []
        [action.name]: action.newValue,
      };
    case SAVE_USER:
      return {
        ...state,
        // on garde en mémoire le username
        username: action.username,
        // on en profite pour refermer les settings
        isSettingsOpen: false,
      };
    default:
      return state;
  }
};
